'use strict'

var PLAINFUSE_LOGGER_LEVEL_NONE = 0
var PLAINFUSE_LOGGER_LEVEL_LOW = 1   // eslint-disable-line no-unused-vars
var PLAINFUSE_LOGGER_LEVEL_MED = 5
var PLAINFUSE_LOGGER_LEVEL_HIGH = 10  // eslint-disable-line no-unused-vars

function PlainFuseLogger(max_level) { // eslint-disable-line no-unused-vars

  this.max_level = (typeof max_level !== 'undefined') ? max_level : PLAINFUSE_LOGGER_LEVEL_NONE

  this.log = function(level, message) {
    if (typeof message === 'undefined') {
      message = level
      level = PLAINFUSE_LOGGER_LEVEL_MED
    }

    if (this.max_level >= level) {
      console.log(message)
    }
  }
  
  this.setLevel = function(level) {
    this.max_level = (typeof level !== 'undefined') ? level : this.max_level
  }
}


'use strict'

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

function bitapScore(pattern, scoreOptions) { // eslint-disable-line no-unused-vars
  var options = (typeof scoreOptions !== 'undefined') ? scoreOptions : {}
  options.errors = (typeof options.errors !== 'undefined') ? options.errors : 0
  options.currentLocation = (typeof options.currentLocation !== 'undefined') ? options.currentLocation : 0
  options.expectedLocation = (typeof options.expectedLocation !== 'undefined') ? options.expectedLocation : 0
  options.distance = (typeof options.distance !== 'undefined') ? options.distance : 100

  var accuracy = options.errors / pattern.length
  var proximity = Math.abs(options.expectedLocation - options.currentLocation)

  if (!options.distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + (proximity / options.distance)
}

'use strict'

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

function bitapMatchedIndices(matchmask, minMatchCharLength) { // eslint-disable-line no-unused-vars

  matchmask = (typeof matchmask !== 'undefined') ? matchmask : []
  minMatchCharLength = (typeof minMatchCharLength !== 'undefined') ? minMatchCharLength : 1
  
  var matchedIndices = []
  var start = -1
  var end = -1
  var i = 0

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i]
    if (match && start === -1) {
      start = i
    } else if (!match && start !== -1) {
      end = i - 1
      if ((end - start) + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end])
      }
      start = -1
    }
  }

  // (i-1 - start) + 1 to i - start
  if (matchmask[i - 1] && (i - start) >= minMatchCharLength) {
    matchedIndices.push([start, i - 1])
  }

  return matchedIndices
}

'use strict'

/* global bitapScore bitapMatchedIndices PLAINFUSE_LOGGER_LEVEL_NONE PLAINFUSE_LOGGER_LEVEL_HIGH PlainFuseLogger */
// Modified by Daniel F. Dickinson

// requires bitap_score
// requires bitap_matched_indices

function bitapSearch(text, pattern, patternAlphabet, searchOptions) { // eslint-disable-line no-unused-vars
  var options = {}
  if (typeof searchOptions === 'undefined') {
    searchOptions = {}
  }
  options.location = (typeof searchOptions.location !== 'undefined') ? searchOptions.location : 0
  options.distance = (typeof searchOptions.distance !== 'undefined') ? searchOptions.distance : 100
  options.threshold = (typeof searchOptions.threshold !== 'undefined') ? searchOptions.threshold : 0.6
  options.findAllMatches = (typeof searchOptions.findAllMatches !== 'undefined') ? searchOptions.findAllMatches : false
  options.minMatchCharLength = (typeof searchOptions.minMatchCharLength !== 'undefined') ? searchOptions.minMatchCharLength : 1
  options.verbose = (typeof searchOptions.verbose !== 'undefined') ? searchOptions.verbose : PLAINFUSE_LOGGER_LEVEL_NONE
  
  var logger = new PlainFuseLogger(options.verbose)

  var expectedLocation = options.location
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length
  // Highest score beyond which we give up.
  var currentThreshold = options.threshold
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation)

  var patternLen = pattern.length

  // a mask of the matches
  var matchMask = []
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0
  }

  var score = 0

  if (bestLocation !== -1) {
    score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: options.distance
    })
    currentThreshold = Math.min(score, currentThreshold)

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen)

    if (bestLocation !== -1) {
      score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: options.distance
      })
      currentThreshold = Math.min(score, currentThreshold)
    }
  }

  // Reset the best location
  bestLocation = -1

  var lastBitArr = []
  var finalScore = 1
  var binMax = patternLen + textLen

  var mask = 1 << (patternLen - 1)

  for (i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0
    var binMid = binMax

    while (binMin < binMid) {
      score = bitapScore(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: options.distance
      })

      if (score <= currentThreshold) {
        binMin = binMid
      } else {
        binMax = binMid
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin)
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid

    var start = Math.max(1, expectedLocation - binMid + 1)
    var finish = options.findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen

    // Initialize the bit array
    var bitArr = Array(finish + 2)

    bitArr[finish + 1] = (1 << i) - 1

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1
      var charMatch = patternAlphabet[text.charAt(currentLocation)]

      if (charMatch) {
        matchMask[currentLocation] = 1
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch

      // Subsequent passes: fuzzy match
      if (i !== 0) {
        bitArr[j] |= (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1]
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: options.distance
        })

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore
          bestLocation = currentLocation

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation)
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    score = bitapScore(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: options.distance
    })

    logger.log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'score:' + score.toString() + ', finalScore: ' + finalScore.toString())

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr
  }

  logger.log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'FINAL SCORE: ' + finalScore.toString())

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: bitapMatchedIndices(matchMask, options.minMatchCharLength)
  }
}

'use strict'

/* global PlainFuseLogger PLAINFUSE_LOGGER_LEVEL_NONE PLAINFUSE_LOGGER_LEVEL_HIGH */

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

var BITAP_SPECIAL_CHARS_REGEX = /[-[\]{}()*+?.\\^$|]/g

function bitapRegexSearch(text, pattern, tokenSeparator, verbose) { // eslint-disable-line no-unused-vars
  tokenSeparator = (typeof tokenSeparator !== 'undefined') ? tokenSeparator : '/ +/g'
  verbose = (typeof verbose !== 'undefined') ? verbose : PLAINFUSE_LOGGER_LEVEL_NONE
  
  var logger = new PlainFuseLogger(verbose)
  
  var regex = new RegExp(pattern.replace(BITAP_SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'))
  var matches = text.match(regex)
  var isMatch = !!matches
  var matchedIndices = []
  
  logger.log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Regex: ' + JSON.stringify(regex))
  logger.log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Regex matches: ' + JSON.stringify(matches))

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i]
      matchedIndices.push([text.indexOf(match), match.length - 1])
    }
  }

  // TODO: revisit this score
  var score =  isMatch ? 0.5 : 1
  
  return {
    isMatch: isMatch,
    score: score,
    matchedIndices: matchedIndices
  }
}

'use strict'

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

function bitapPatternAlphabet(pattern) { // eslint-disable-line no-unused-vars
  var mask = {}
  var len = pattern.length

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0
  }

  for (var j = 0; j < len; j += 1) {
    mask[pattern.charAt(j)] |= 1 << (len - j - 1)
  }

  return mask
}

'use strict'

/* global bitapSearch bitapPatternAlphabet bitapRegexSearch PLAINFUSE_LOGGER_LEVEL_NONE PlainFuseLogger */
/* Modified from upstream file src/bitap/index.js in upstream Fuse.js
 * Modification by Daniel F. Dickinson <cshored@thecshore.com>
 */
 
// Requires bitap_search
// Requires bitap_pattern_alphabet
// Requires bitap_regex_search

// location: Approximately where in the text is the pattern expected to be found?
// distance:
//   Determines how close the match must be to the fuzzy location (specified above).
//   An exact letter match which is 'distance' characters away from the fuzzy location
//   would score as a complete mismatch. A distance of '0' requires the match be at
//   the exact location specified, a threshold of '1000' would require a perfect match
//   to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
// threshold:
//   At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
//   (of both letters and location), a threshold of '1.0' would match anything.
// maxPatternLength
//   Machine word size
// isCaseSensitive: Indicates whether comparisons should be case sensitive.
// tokenSeparator: Regex used to separate words when searching. Only applicable when `tokenize` is `true`.
// findallMatches:
//   When true, the algorithm continues searching to the end of the input even if a perfect
//   match is found before the end of the same input.
// minMatchCharLength:
//   Minimum number of characters that must be matched before a result is considered a match

function Bitap(pattern, options) { // eslint-disable-line no-unused-vars

  this.options = (typeof options !== 'undefined') ? options : {}

  this.options.location = (typeof options.location !== 'undefined') ? options.location : 0
  this.options.distance = (typeof options.distance !== 'undefined') ? options.distance : 100
  this.options.threshold = (typeof options.threshold !== 'undefined') ? options.threshold : 0.6
  this.options.maxPatternLength = (typeof options.maxPatternLength !== 'undefined') ? options.maxPatternLength : 32

  this.options.isCaseSensitive = (typeof options.isCaseSensitive !== 'undefined') ? options.isCaseSensitive : false
  this.options.tokenSeparator = (typeof options.tokenSeparator !== 'undefined') ? options.tokenSeparator : / +/g
  this.options.findAllMatches = (typeof options.findAllMatches !== 'undefined') ? options.findAllMatches : false
  this.options.minMatchCharLength = (typeof options.minMatchCharLength !== 'undefined') ? options.minMatchCharLength : 1
  this.options.verbose = (typeof options.verbose !== 'undefined') ? options.verbose : PLAINFUSE_LOGGER_LEVEL_NONE
  
  this.logger = new PlainFuseLogger(this.options.verbose)

  this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase()

  if (this.pattern.length <= this.options.maxPatternLength) {
    this.patternAlphabet = bitapPatternAlphabet(this.pattern)
  }

  this.search = function(text) {
    if (!this.options.isCaseSensitive) {
      text = text.toLowerCase()
    }

    // Exact match
    if (this.pattern === text) {
      this.logger.log('Exact match')
      return {
        isMatch: true, 
        score: 0, 
        matchedIndices: [[0, text.length - 1]]
      }
    }

    // When pattern length is greater than the machine word length, just do a a regex comparison
    if (this.pattern.length > this.options.maxPatternLength) {
      this.logger.log('Regex search due to pattern length: ' + this.pattern.length.toString())
      return bitapRegexSearch(text, this.pattern, this.options.tokenSeparator, this.options.verbose)
    }

    // Otherwise, use Bitap algorithm
    return bitapSearch(text, this.pattern, this.patternAlphabet, this.options)
  }
}

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

'use strict'

/* global plainFuseIsArray */

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

// Requires is_array

function plainFuseDeepValue(obj, path, list) { // eslint-disable-line no-unused-vars
  list = (typeof list !== 'undefined') ? list : []

  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj)
  } else {
    var dotIndex = path.indexOf('.')
    var firstSegment = path
    var remaining = null

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex)
      remaining = path.slice(dotIndex + 1)
    }

    var value = obj[firstSegment]

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString())
      } else if (plainFuseIsArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          plainFuseDeepValue(value[i], remaining, list)
        }
      } else if (remaining) {
        // An object. Recurse further.
        plainFuseDeepValue(value, remaining, list)
      }
    }
  }

  return list
}


'use strict'

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

function plainFuseIsArray(obj){ // eslint-disable-line no-unused-vars
  return (!Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj))
}

'use strict'

/* global plainFuseDeepValue Bitap plainFuseIsArray PLAINFUSE_LOGGER_LEVEL_NONE PLAINFUSE_LOGGER_LEVEL_LOW PLAINFUSE_LOGGER_LEVEL_MED PLAINFUSE_LOGGER_LEVEL_HIGH PlainFuseLogger */

// Modified by Daniel F. Dickinson
// from index.js in Fuse.js upstream

// location: Approximately where in the text is the pattern expected to be found?
// distance:
//   Determines how close the match must be to the fuzzy location (specified above).
//   An exact letter match which is 'distance' characters away from the fuzzy location
//   would score as a complete mismatch. A distance of '0' requires the match be at
//   the exact location specified, a threshold of '1000' would require a perfect match
//   to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
// threshold:
//   At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
//   (of both letters and location), a threshold of '1.0' would match anything.
// maxPatternLength
//   Machine word size
// isCaseSense: Indicates whether comparisons should be case sensitive.
// tokenSeparator: Regex used to separate words when searching. Only applicable when `tokenize` is `true`.
// findallMatches:
//   When true, the algorithm continues searching to the end of the input even if a perfect
//   match is found before the end of the same input.
// minMatchCharLength:
//   Minimum number of characters that must be matched before a result is considered a match
// id:
//   Indicates whether comparisons should be case sensitive.
//   of the items' dentifiers, otherwise it will be a list of the items.
// keys: List of properties that will be searched. This also supports nested properties.
// shouldSort: Whether to sort the result list, by score
// getFn:
//   The get function to use when fetching an object's properties.
//   The default will search nested paths *ie foo.bar.baz*
// sortFn: Default sort function
// tokenize:
//   When true, the search algorithm will search individual words **and** the full string,
//   computing the final score as a function of both. Note that when `tokenize` is `true`,
//   the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
// matchAllTokens:
//   When true, the result set will only include records that match all tokens. Will only work
//   if `tokenize` is also true.
// verbose: Will print to the console. Useful for debugging.
//         (A number between 0 (none) and 10 (maximum))
//         (PLAINFUSE_LOGGER_LEVEL_XXX constants are available)
function PlainFuse(list, options) { // eslint-disable-line no-unused-vars
  this.options = (typeof options !== 'undefined') ? options : {}

  this.options.location = (typeof options.location !== 'undefined') ? options.location : 0
  this.options.distance = (typeof options.distance !== 'undefined') ? options.distance : 100
  this.options.threshold = (typeof options.threshold !== 'undefined') ? options.threshold : 0.6
  this.options.maxPatternLength = (typeof options.maxPatternLength !== 'undefined') ? options.maxPatternLength : 32

  this.options.isCaseSensitive = (typeof options.isCaseSensitive !== 'undefined') ? options.isCaseSensitive : false
  this.options.tokenSeparator = (typeof options.tokenSeparator !== 'undefined') ? options.tokenSeparator : / +/g
  this.options.findAllMatches = (typeof options.findAllMatches !== 'undefined') ? options.findAllMatches : false
  this.options.minMatchCharLength = (typeof options.minMatchCharLength !== 'undefined') ? options.minMatchCharLength : 1
  this.options.id = (typeof options.id !== 'undefined') ? options.id : null
  this.options.keys = (typeof options.keys !== 'undefined') ? options.keys : []
  this.options.shouldSort = (typeof options.shouldSort !== 'undefined') ? options.shouldSort : true
  this.options.getFn = (typeof options.getFn !== 'undefined') ? options.getFn : plainFuseDeepValue
  this.options.sortFn = (typeof options.sortFn !== 'undefined') ? options.sortFn : function(a, b) { return (a.score - b.score) }
  this.options.tokenize = (typeof options.tokenize !== 'undefined') ? options.tokenize : false
  this.options.matchAllTokens = (typeof options.matchAllTokens !== 'undefined') ? options.matchAllTokens : false
  this.options.includeMatches = (typeof options.includeMatches !== 'undefined') ? options.includeMatches : false
  this.options.includeScore = (typeof options.includeScore !== 'undefined') ? options.includeScore : false
  this.options.verbose = (typeof options.verbose !== 'undefined') ? options.verbose : PLAINFUSE_LOGGER_LEVEL_NONE

  this.logger = new PlainFuseLogger(this.options.verbose)

  this.setCollection = function(list) {
    this.list = list
    return list
  }

  this.setCollection(list)

  this._log = function(level, message) {
    this.logger.log(level, message)
  }

  this._prepare_searchers = function(pattern) {
    pattern = (typeof pattern !== 'undefined') ? pattern: ''
  
    var tokenSearchers = []
    var len = 0
    var i = 0

    if (this.options.tokenize) {
      // Tokenize on the separator
      var tokens = pattern.split(this.options.tokenSeparator)
      this.logger.log('tokens: ' + JSON.stringify(tokens))
      for (i = 0, len = tokens.length; i < len; i += 1) {
        tokenSearchers.push(new Bitap(tokens[i], this.options))
      }
    }

    var fullSearcher = new Bitap(pattern, this.options)

    return {
      tokenSearchers: tokenSearchers,
      fullSearcher: fullSearcher
    }
  }

  this._analyze = function(what, how) {
    var key = what.key
    var arrayIndex = typeof(what.arrayIndex) !== 'undefined' ? what.arrayIndex : -1
    var value = what.value
    var record = what.record
    var index = what.index

    var tokenSearchers = (typeof how.tokenSearchers !== 'undefined') ? how.tokenSearchers : []
    var fullSearcher = how.fullSearcher
    var resultMap = (typeof how.resultMap !== 'undefined') ? how.resultMap : {}
    var results = (typeof how.results !== 'undefined') ? how.results : []
  
    // Check if the texvalue can be searched
    if (value === 'undefined' || value === null) {
      return
    }

    var exists = false
    var averageScore = -1
    var numTextMatches = 0

    if (typeof value === 'string') {
      if (key) {
        this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Key: ' + key )
      }

      var mainSearchResult = fullSearcher.search(value)
      this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Full text: "' + value + '", score: ' + mainSearchResult.score.toString())

      if (this.options.tokenize) {
        var words = value.split(this.options.tokenSeparator)
        var scores = []

        for (var i = 0; i < tokenSearchers.length; i += 1) {
          var tokenSearcher = tokenSearchers[i]

          this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Pattern: ' + tokenSearcher.pattern)

          // let tokenScores = []
          var hasMatchInText = false

          for (var j = 0; j < words.length; j += 1) {
            var word = words[j]
            var tokenSearchResult = tokenSearcher.search(word)
            var obj = {}
            if (tokenSearchResult.isMatch) {
              obj[word] = tokenSearchResult.score
              exists = true
              hasMatchInText = true
              scores.push(tokenSearchResult.score)
            } else {
              obj[word] = 1
              if (!this.options.matchAllTokens) {
                scores.push(1)
              }
            }
            this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Token: "' + word + '", score: ' + obj[word].toString() )
            // tokenScores.push(obj)
          }

          if (hasMatchInText) {
            numTextMatches += 1
          }
        }

        averageScore = scores[0]
        var scoresLen = scores.length
        for (i = 1; i < scoresLen; i += 1) {
          averageScore += scores[i]
        }
        averageScore = averageScore / scoresLen

        this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Token score average:' + averageScore.toString())
      }

      var finalScore = mainSearchResult.score
      if (averageScore > -1) {
        finalScore = (finalScore + averageScore) / 2
      }

      this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Score average:' + finalScore.toString())

      var checkTextMatches = (this.options.tokenize && this.options.matchAllTokens) ? numTextMatches >= tokenSearchers.length : true

      this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Check Matches: ' + checkTextMatches.toString())

      // If a match is found, add the item to <rawResults>, including its score
      if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
        // Check if the item already exists in our results
        var existingResult = resultMap[index]
        if (existingResult) {
          // Use the lowest score
          // existingResult.score, bitapResult.score
          existingResult.output.push({
            key: key,
            arrayIndex: arrayIndex,
            value: value,
            score: finalScore,
            matchedIndices: mainSearchResult.matchedIndices
          })
        } else {
          // Add it to the raw result list
          resultMap[index] = {
            item: record,
            output: [{
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            }]
          }

          results.push(resultMap[index])
        }
      }
    } else if (plainFuseIsArray(value)) {
      this.logger.log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Analyzing array: ' + JSON.stringify(value))
      var len = 0
      for (i = 0, len = value.length; i < len; i += 1) {
        var analyzeResults = this._analyze({
          key: key,
          arrayIndex: i,
          value: value[i],
          record: record,
          index: index
        }, {
          resultMap: resultMap,
          results: results,
          tokenSearchers: tokenSearchers,
          fullSearcher: fullSearcher
        })
        
        resultMap = analyzeResults.resultMap
        results = analyzeResults.results
      }
    } else {
      this.logger.log('Unknown value type for ' + JSON.stringify(value))
    }
    
    return {
      resultMap: resultMap,
      results: results
    }
  }

  this._computeScore = function(weights, results) {
    this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, 'Computing score:')

    for (var i = 0, len = results.length; i < len; i += 1) {
      var output = results[i].output
      var scoreLen = output.length

      var currScore = 1
      var bestScore = 1

      for (var j = 0; j < scoreLen; j += 1) {
        var weight = weights ? weights[output[j].key].weight : 1
        var score = weight === 1 ? output[j].score : (output[j].score || 0.001)
        var nScore = score * weight

        if (weight !== 1) {
          bestScore = Math.min(bestScore, nScore)
        } else {
          output[j].nScore = nScore
          currScore *= nScore
        }
      }

      results[i].score = bestScore === 1 ? currScore : bestScore

      this._log(PLAINFUSE_LOGGER_LEVEL_HIGH, i.toString() + ': "' + JSON.stringify(results[i]) + '"')
    }
  }

  this._sort = function(results) {
    this._log('Sorting....')
    results.sort(this.options.sortFn)
  }

  this._format = function(results) {
    results = (typeof results !== 'undefined') ? results : {}

    var finalOutput = []
    var transformers = []
    var i, j, len, jtlen

    if (typeof results.length !== 'undefined') {
      this._log('Formatting ' + results.length.toString() + ' results.')
    }

    if (this.options.verbose >= PLAINFUSE_LOGGER_LEVEL_MED) {
      var cache = []
      this._log('formatting this: ' + JSON.stringify(results, function (key, value) {
        if (typeof value === 'object' && value !== null) {
          if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return
          }
          // Store value in our collection
          cache.push(value)
        }
        return value
      }))
      cache = null
    }

    if (this.options.includeMatches) {
      transformers.push(function(result, data) {
        var l, tlen

        var output = result.output
        data.matches = []

        for (l = 0, tlen = output.length; l < tlen; l += 1) {
          var item = output[l]

          if (item.matchedIndices.length === 0) {
            continue
          }

          var obj = {
            indices: item.matchedIndices,
            value: item.value
          }
          if (item.key) {
            obj.key = item.key
          }
          if ((typeof item.arrayIndex !== 'undefined') && item.arrayIndex > -1) {
            obj.arrayIndex = item.arrayIndex
          }
          data.matches.push(obj)
        }
        
        return data
      })
    }

    if (this.options.includeScore) {
      transformers.push(function(result, data) {
        data.score = result.score
        return data
      })
    }

    for (i = 0, len = results.length; i < len; i += 1) {
      var result = results[i]

      if (this.options.id) {
        result.item = this.options.getFn(result.item, this.options.id)[0]
      }

      if (!transformers.length) {
        finalOutput.push(result.item)
        continue
      }

      var data = {
        item: result.item
      }

      for (j = 0, jtlen = transformers.length; j < jtlen; j += 1) {
        data = transformers[j](result, data)
      }

      finalOutput.push(data)
    }

    return finalOutput
  }

  this._search = function(searchers) {
    searchers = (typeof searchers !== 'undefined') ? searchers : {}
    var list = this.list
    var resultMap = {}
    var results = []
    var analyzeResults = {}

    // Check the first item in the list, if it's a string, then we assume
    // that every item in the list is also a string, and thus it's a flattened array.
    if (typeof list[0] === 'string') {
      // Iterate over every item
      for (var i = 0, len = list.length; i < len; i += 1) {
        analyzeResults = this._analyze({
          key: '',
          value: list[i],
          record: i,
          index: i
        }, {
          resultMap: resultMap,
          results: results,
          tokenSearchers: searchers.tokenSearchers,
          fullSearcher: searchers.fullSearcher
        })
        
        resultMap = analyzeResults.resultMap
        results = analyzeResults.results
      }

      return {
        weights: null,
        results: results
      }
    }

    // Otherwise, the first item is an Object (hopefully), and thus the searching
    // is done on the values of the keys of each item.
    var weights = {}
    for (i = 0, len = list.length; i < len; i += 1) {
      var item = list[i]
      // Iterate over every key
      for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
        var key = this.options.keys[j]
        if (typeof key !== 'string') {
          weights[key.name] = {
            weight: (1 - key.weight) || 1
          }
          if (key.weight <= 0 || key.weight > 1) {
            throw new Error('Key weight has to be > 0 and <= 1')
          }
          key = key.name
        } else {
          weights[key] = {
            weight: 1
          }
        }

        analyzeResults = this._analyze({
          key: key,
          value: this.options.getFn(item, key),
          record: item,
          index: i
        }, {
          resultMap: resultMap,
          results: results,
          tokenSearchers: searchers.tokenSearchers,
          fullSearcher: searchers.fullSearcher
        })
        
        resultMap = analyzeResults.resultMap
        results = analyzeResults.results
      }
    }

    return {
      weights: weights,
      results: results
    }
  }

  this.search = function(pattern, opts) {
    this.opts = {}

    if (typeof opts === 'undefined') {
      this.opts.limit = false
      this.opts.logOverride = null
    } else {
      this.opts.limit = (typeof opts.limit !== 'undefined') ? opts.limit : false
      this.opts.logOverride = (typeof opts.logOverride !== 'undefined') ? opts.logOverride : null
    }

    this.oldLogLevel = this.options.verbose
    if (typeof this.opts.logOverride === 'number') {
      this.logger.setLevel(this.opts.logOverride)
    }

    this._log(PLAINFUSE_LOGGER_LEVEL_LOW, 'Search pattern: "' + pattern.toString() + '"')

    var searchResults = this._search(this._prepare_searchers(pattern))

    this._computeScore(searchResults.weights, searchResults.results)

    if (this.options.shouldSort) {
      this._sort(searchResults.results)
    }

    if (this.opts.limit && typeof this.opts.limit === 'number') {
      searchResults.results = searchResults.results.slice(0, this.opts.limit)
    }

    if (typeof this.opts.logOverride === 'number') {
      this.logger.setLevel(this.oldLogLevel)
    }

    return this._format(searchResults.results)
  }

}

/* global indexurl, Mark, PlainFuse */

// Based on code from https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae#gistcomment-2989041
// Modified by Daniel F. Dickinson

var summaryInclude = 300
var fuseOptions = { // See plainfuse.js for details
  shouldSort: true,
  includeMatches: true,
  includeAllMatches: true,
  threshold: 0.3,  // default of 0.6 matches too much
  tokenize: true,
  keys: [{
    name: 'title',
    weight: 0.5
  },
  {
    name: 'content',
    weight: 0.8
  },
  {
    name: 'tags',
    weight: 0.4
  },
  {
    name: 'categories',
    weight: 0.4
  }
  ]
}

function doCloseSearch() { // eslint-disable-line no-unused-vars
  if (document.getElementById('search-results')) {
    document.getElementById('search-results').style = 'display: none; visibility: hidden;'
    document.getElementById('search-results').innerHTML = '<h2>Search Results</h2>'
  }
}

function doSearch() { // eslint-disable-line no-unused-vars
  var searchQuery = document.search_form.s.value
  if (searchQuery) {
    if (document.getElementById('search-query')) {
      document.getElementById('search-results').style = 'display: block; visibility: visible;'
      executeSearch(searchQuery)
    }
  } else {
    var para = document.createElement('P')
    para.innerText = 'Please enter a word or phrase above'
    if (document.getElementById('search-results')) {
      document.getElementById('search-results').appendChild(para)
      document.getElementById('search-results').style = 'display: block; visibility: visible;'
    }
  }
  return false
}

function executeSearch(searchQuery) {
  var request = new XMLHttpRequest()
  request.open('GET', indexurl, true)
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var pages = JSON.parse(request.responseText)
      var fuse = new PlainFuse(pages, fuseOptions)
      var result = fuse.search(searchQuery)
      if (result.length > 0) {
        populateResults(result, searchQuery)
      } else {
        var para = document.createElement('p')
        para.innerText = 'No matches found'
        document.getElementById('search-results').appendChild(para)
      }
    } else {
      console.log('OldNewMashup had error ' + request.status + ' on ' + indexurl)
    }
  }
  request.onerror = function () {
    console.log('OldNewMashup search connection error ' + request.status)
  }
  request.send()
}

function populateResults(result, searchQuery) {
  result.forEach(function (value, key) {
    var content = value.item.content
    var snippet = ''
    var snippetHighlights = []
    if (fuseOptions.tokenize) {
      snippetHighlights.push(searchQuery)
    } else {
      value.matches.forEach(function (mvalue, matchKey) { // eslint-disable-line no-unused-vars
        if (mvalue.key == 'tags' || mvalue.key == 'categories') {
          snippetHighlights.push(mvalue.value)
        } else if (mvalue.key == 'content') {
          var start = mvalue.indices[0][0] - summaryInclude > 0 ? mvalue.indices[0][0] - summaryInclude : 0
          var end = mvalue.indices[0][1] + summaryInclude < content.length ? mvalue.indices[0][1] + summaryInclude : content.length
          snippet += content.substring(start, end)
          snippetHighlights.push(mvalue.value.substring(mvalue.indices[0][0], mvalue.indices[0][1] - mvalue.indices[0][0] + 1))
        }
      })
    }

    if (snippet.length < 1) {
      snippet += content.substring(0, summaryInclude * 2)
    }
    var templateDefinition = '<div id=\'summary-${key}\'><h4><a href=\'${link}\'>${title}</a></h4><p>${snippet}</p>${ isset tags }<p>Tags: ${tags}</p>${ end }\n${ isset categories }<p>Categories: ${categories}</p>${ end }</div>'
    //replace values
    var output = render(templateDefinition, {
      key: key,
      title: value.item.title,
      link: value.item.permalink,
      tags: value.item.tags ? value.item.tags.join(', ') : '',
      categories: value.item.categories ? value.item.categories.join(', ') : '',
      snippet: snippet
    })
    document.getElementById('search-results').appendChild(htmlToElement(output))

    snippetHighlights.forEach(function (snipvalue, snipkey) {  // eslint-disable-line no-unused-vars
      new Mark(document.getElementById('summary-' + key)).mark(snipvalue)
    })
  })
}

function render(templateString, data) {
  var conditionalMatches, conditionalPattern, copy
  conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g
  //since loop below depends on re.lastIndex, we use a copy to capture any manipulations whilst inside the loop
  copy = templateString
  while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
    if (data[conditionalMatches[1]]) {
      //valid key, remove conditionals, leave content.
      copy = copy.replace(conditionalMatches[0], conditionalMatches[2])
    } else {
      //not valid, remove entire section
      copy = copy.replace(conditionalMatches[0], '')
    }
  }
  templateString = copy
  //now any conditionals removed we can do simple substitution
  var key, find, re
  for (key in data) {
    find = '\\$\\{\\s*' + key + '\\s*\\}'
    re = new RegExp(find, 'g')
    templateString = templateString.replace(re, data[key])
  }
  return templateString
}

/**
 * By Mark Amery: https://stackoverflow.com/a/35385518
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
  var template = document.createElement('template')
  html = html.trim() // Never return a text node of whitespace as the result
  template.innerHTML = html
  return template.content.firstChild
}
