/* global Fuse jest expect test beforeEach describe it require process */

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

// Requires vendored dist/fuse
// Requires fixtures/index.json

var defaultOptions = {
  location: 0,
  distance: 100,
  threshold: 0.3,
  isCaseSensitive: false,
  findAllMatches: true,
  minMatchCharLength: 1,
  id: null,
  keys: [{
    name: 'title',
    weight: 0.3
  }, {
    name: 'content',
    weight: 0.4
  }, {
    name: 'tags',
    weight: 0.1
  }, {
    name: 'categories',
    weight: 0.2
  }],
  shouldSort: true,
  tokenize: false,
  includeMatches: true,
  includeScore: true
}

function mergeOptions(overwriteOptions) {
  if (typeof overwriteOptions === 'undefined') {
    return defaultOptions
  }
  return {    
    location: ((typeof overwriteOptions.location) !== 'undefined' ? overwriteOptions.location : defaultOptions.location),
    distance: ((typeof overwriteOptions.distance) !== 'undefined' ? overwriteOptions.distance : defaultOptions.distance),
    threshold: ((typeof overwriteOptions.threshold) !== 'undefined' ? overwriteOptions.threshold : defaultOptions.threshold),
    isCaseSensitive: ((typeof overwriteOptions.isCaseSensitive) !== 'undefined' ? overwriteOptions.isCaseSensitive : defaultOptions.isCaseSensitive),
    findAllMatches: ((typeof overwriteOptions.findAllMatches) !== 'undefined' ? overwriteOptions.findAllMatches : defaultOptions.findAllMatches),
    minMatchCharLength: ((typeof overwriteOptions.minMatchCharLength) !== 'undefined' ? overwriteOptions.minMatchCharLength : defaultOptions.minMatchCharLength),
    id: ((typeof overwriteOptions.id) !== 'undefined' ? overwriteOptions.id : defaultOptions.id),
    keys: ((typeof overwriteOptions.keys) !== 'undefined' ? overwriteOptions.keys : defaultOptions.keys),
    shouldSort: ((typeof overwriteOptions.shouldSort) !== 'undefined' ? overwriteOptions.shouldSort : defaultOptions.shouldSort),
    sortFn: ((typeof overwriteOptions.sortFn) !== 'undefined' ? overwriteOptions.sortFn : defaultOptions.sortFn),
    tokenize: ((typeof overwriteOptions.tokenize) !== 'undefined' ? overwriteOptions.tokenize : defaultOptions.tokenize),
    includeMatches: ((typeof overwriteOptions.includeMatches) !== 'undefined' ? overwriteOptions.includeMatches : defaultOptions.includeMatches),
    includeScore: ((typeof overwriteOptions.includeScore) !== 'undefined' ? overwriteOptions.includeScore : defaultOptions.includeScore)
  }
}

function setup(overwriteOptions) {
  var options = mergeOptions(overwriteOptions)
  return options
}

var indexurl = 'http://localhost:9000/index.json'

describe('When searching pregenerated index.json for the term "lorem ipsum dolor sit amet"', function() {
  var searchOptions = {}
  var testSearchOptions
  searchOptions.minMatchCharLength = 0.8 * ('lorem ipsum dolor sit amet'.length)

  beforeEach(function() { testSearchOptions = setup(searchOptions) })

  it('Options should have the correct configuration', function() {
    var expected = mergeOptions({'minMatchCharLength': (0.8 * ('lorem ipsum dolor sit amet'.length))})
    expect(testSearchOptions).toMatchObject(expected)
  })

  describe('When executing search', function() {
    var result
    beforeEach(function(done) { executeSearch('lorem ipsum dolor sit amet', testSearchOptions,
      function(res, query) {
        result = res
        done()
      })
    })

    test('we get a list of exactly 4 items', function() {
      expect(result).toHaveLength(4)
    })

    test('whose values are objects that match expected', function() {
      expect(result[0]).toHaveProperty('item')
      expect(result[0]).toHaveProperty('item.title', 'Ipsum Dolor')
      expect(result[0]).toHaveProperty('item.categories',
         ["demo", "placeholder"]
      )
      expect(result[0]).toHaveProperty('item.tags', [
        "demo", "lorem ipsum", "dummy", "placeholder"
      ])
      expect(result[0]).toHaveProperty('item.content')
      expect(result[0]).toHaveProperty('matches')
      expect(result[0]).toHaveProperty('matches.0.indices')
      expect(result[0]).toHaveProperty('matches.0.value')
      expect(result[0]).toHaveProperty('matches.0.key')
      expect(result[0]).toHaveProperty('matches.0.arrayIndex')
      expect(result[0]).toHaveProperty('score')
      expect(result[0].matches).toHaveLength(1)
      expect(result[0].matches[0].indices).toHaveLength(4)
      expect(result[0].matches[0].indices[0]).toHaveLength(2)
      expect(result[0].matches[0].indices[1]).toHaveLength(2)
      expect(result[0].matches[0].indices[2]).toHaveLength(2)
      expect(result[0].matches[0].indices[3]).toHaveLength(2)
      expect(result[1]).toHaveProperty('item')
      expect(result[1]).toHaveProperty('item.title', 'Ornare Massa')
      expect(result[1]).toHaveProperty('item.categories',
         ["demo", "placeholder"]
      )
      expect(result[1]).toHaveProperty('item.tags', [
        "demo", "lorem ipsum", "dummy", "placeholder"
      ])
      expect(result[1]).toHaveProperty('item.content')
      expect(result[1]).toHaveProperty('matches')
      expect(result[1]).toHaveProperty('matches.0.indices')
      expect(result[1]).toHaveProperty('matches.0.value')
      expect(result[1]).toHaveProperty('matches.0.key')
      expect(result[1]).toHaveProperty('matches.0.arrayIndex')
      expect(result[1]).toHaveProperty('score')
      expect(result[1].matches).toHaveLength(1)
      expect(result[1].matches[0].indices).toHaveLength(3)
      expect(result[1].matches[0].indices[0]).toHaveLength(2)
      expect(result[1].matches[0].indices[1]).toHaveLength(2)
      expect(result[1].matches[0].indices[2]).toHaveLength(2)
      expect(result[2]).toHaveProperty('item')
      expect(result[2]).toHaveProperty('item.title', 'Viverra Justo Nec')
      expect(result[2]).toHaveProperty('item.categories',
         ["demo", "placeholder"]
      )
      expect(result[2]).toHaveProperty('item.tags', [
        "demo", "lorem ipsum", "dummy", "placeholder"
      ])
      expect(result[2]).toHaveProperty('item.content')
      expect(result[2]).toHaveProperty('matches')
      expect(result[2]).toHaveProperty('matches.0.indices')
      expect(result[2]).toHaveProperty('matches.0.value')
      expect(result[2]).toHaveProperty('matches.0.key')
      expect(result[2]).toHaveProperty('matches.0.arrayIndex')
      expect(result[2]).toHaveProperty('score')
      expect(result[2].matches).toHaveLength(1)
      expect(result[2].matches[0].indices).toHaveLength(3)
      expect(result[2].matches[0].indices[0]).toHaveLength(2)
      expect(result[2].matches[0].indices[1]).toHaveLength(2)
      expect(result[2].matches[0].indices[2]).toHaveLength(2)
      expect(result[3]).toHaveProperty('item')
      expect(result[3]).toHaveProperty('item.title', 'Neque Convallis')
      expect(result[3]).toHaveProperty('item.categories',
         ["demo", "placeholder"]
      )
      expect(result[3]).toHaveProperty('item.tags', [
        "demo", "lorem ipsum", "dummy", "placeholder"
      ])
      expect(result[3]).toHaveProperty('item.content')
      expect(result[3]).toHaveProperty('matches')
      expect(result[3]).toHaveProperty('matches.0.indices')
      expect(result[3]).toHaveProperty('matches.0.value')
      expect(result[3]).toHaveProperty('matches.0.key')
      expect(result[3]).toHaveProperty('matches.0.arrayIndex')
      expect(result[3]).toHaveProperty('score')
      expect(result[3].matches).toHaveLength(1)
      expect(result[3].matches[0].indices).toHaveLength(3)
      expect(result[3].matches[0].indices[0]).toHaveLength(2)
      expect(result[3].matches[0].indices[1]).toHaveLength(2)
      expect(result[3].matches[0].indices[2]).toHaveLength(2)
    })
  })
})

