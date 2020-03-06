/* global PlainFuse plainFuseDeepValue jest expect test beforeEach describe it require process __dirname PLAINFUSE_LOGGER_LEVEL_NONE books PlainFuseLogger */

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

// Requires ../dist/plainfuse
// Requires fixtures/books.json
// Requires ../work/helpers/deep_value

const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
// you can pass the parameter in the command line. e.g. node static_server.js 3000
const port = process.argv[2] || 9000

// maps file extention to MIME types
// full list can be found here: https://www.freeformatter.com/mime-types-list.html
const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.doc': 'application/msword',
  '.eot': 'application/vnd.ms-fontobject',
  '.ttf': 'application/x-font-ttf',
}

const testServer = http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`)

  // parse URL
  const parsedUrl = url.parse(req.url)

  // extract URL path
  // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
  // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
  // by limiting the path to current directory only
  const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[/\\])+/, '')
  let pathname = path.join(__dirname, sanitizePath)

  fs.exists(pathname, function (exist) {
    if(!exist) {
      // if the file is not found, return 404
      res.statusCode = 404
      res.end(`File ${pathname} not found!`)
      return
    }

    // if is a directory, then look for index.html
    if (fs.statSync(pathname).isDirectory()) {
      pathname += '/index.html'
    }

    // read file from file system
    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500
        res.end(`Error getting the file: ${err}.`)
      } else {
        // based on the URL path, extract the file extention. e.g. .js, .doc, ...
        const ext = path.parse(pathname).ext
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' )
        res.end(data)
      }
    })
  })
}).listen(parseInt(port))

console.log(`Server listening on port ${port}`)


var verbose = PLAINFUSE_LOGGER_LEVEL_NONE

var defaultList = ['Apple', 'Orange', 'Banana']
var defaultOptions = {
  location: 0,
  distance: 100,
  threshold: 0.6,
  maxPatternLength: 32,
  isCaseSensitive: false,
  tokenSeparator: / +/g,
  findAllMatches: false,
  minMatchCharLength: 1,
  id: null,
  keys: [],
  shouldSort: true,
  getFn: plainFuseDeepValue,
  sortFn: function(a, b) { return (a.score - b.score) },
  tokenize: false,
  matchAllTokens: false,
  includeMatches: false,
  includeScore: false,
  verbose: verbose
}

var plainFuseTestLogger = new PlainFuseLogger(verbose)

function mergeOptions(overwriteOptions) {
  if (typeof overwriteOptions === 'undefined') {
    return defaultOptions
  }
  return {    
    location: ((typeof overwriteOptions.location) !== 'undefined' ? overwriteOptions.location : defaultOptions.location),
    distance: ((typeof overwriteOptions.distance) !== 'undefined' ? overwriteOptions.distance : defaultOptions.distance),
    threshold: ((typeof overwriteOptions.threshold) !== 'undefined' ? overwriteOptions.threshold : defaultOptions.threshold),
    maxPatternLength: ((typeof overwriteOptions.maxPatternLength) !== 'undefined' ? overwriteOptions.maxPatternLength : defaultOptions.maxPatternLength),
    isCaseSensitive: ((typeof overwriteOptions.isCaseSensitive) !== 'undefined' ? overwriteOptions.isCaseSensitive : defaultOptions.isCaseSensitive),
    tokenSeparator: ((typeof overwriteOptions.tokenSeparator) !== 'undefined' ? overwriteOptions.tokenSeparator : defaultOptions.tokenSeparator),
    findAllMatches: ((typeof overwriteOptions.findAllMatches) !== 'undefined' ? overwriteOptions.findAllMatches : defaultOptions.findAllMatches),
    minMatchCharLength: ((typeof overwriteOptions.minMatchCharLength) !== 'undefined' ? overwriteOptions.minMatchCharLength : defaultOptions.minMatchCharLength),
    id: ((typeof overwriteOptions.id) !== 'undefined' ? overwriteOptions.id : defaultOptions.id),
    keys: ((typeof overwriteOptions.keys) !== 'undefined' ? overwriteOptions.keys : defaultOptions.keys),
    shouldSort: ((typeof overwriteOptions.shouldSort) !== 'undefined' ? overwriteOptions.shouldSort : defaultOptions.shouldSort),
    getFn: ((typeof overwriteOptions.getFn) !== 'undefined' ? overwriteOptions.getFn : defaultOptions.getFn),
    sortFn: ((typeof overwriteOptions.sortFn) !== 'undefined' ? overwriteOptions.sortFn : defaultOptions.sortFn),
    tokenize: ((typeof overwriteOptions.tokenize) !== 'undefined' ? overwriteOptions.tokenize : defaultOptions.tokenize),
    matchAllTokens: ((typeof overwriteOptions.matchAllTokens) !== 'undefined' ? overwriteOptions.matchAllTokens : defaultOptions.matchAllTokens),
    includeMatches: ((typeof overwriteOptions.includeMatches) !== 'undefined' ? overwriteOptions.includeMatches : defaultOptions.includeMatches),
    includeScore: ((typeof overwriteOptions.includeScore) !== 'undefined' ? overwriteOptions.includeScore : defaultOptions.includeScore),
    verbose: ((typeof overwriteOptions.verbose) !== 'undefined' ? overwriteOptions.verbose : defaultOptions.verbose)
  }
}

function setup(itemList, overwriteOptions) {
  var list = ((typeof itemList !== 'undefined') && (itemList !== null)) ? itemList : defaultList
  var options = mergeOptions(overwriteOptions)
  plainFuseTestLogger.log(JSON.stringify(options))

  return new PlainFuse(list, options)
}

describe('Flat list of strings: ["Apple", "Orange", "Banana"]', function() {
  var fuse
  beforeEach(function() { fuse = setup() })

  it('should have the correct configuration', function() {
    var expected = {list: defaultList, options: defaultOptions}
    expect(fuse).toMatchObject(expected)
  })

  describe('When searching for the term "Apple"', function() {
    var result
    beforeEach(function() { result = fuse.search('Apple') } )

    test('we get a list of exactly 1 item', function() {
      expect(result).toHaveLength(1)
    })

    test('whose value is the index 0, representing ["Apple"]', function() {
      expect(result[0]).toBe(0)
    })
  })

  describe('When performing a fuzzy search for the term "ran"', function() {
    var result
    beforeEach(function() { result = fuse.search('ran')} )

    test('we get a list of containing 2 items', function() {
      expect(result).toHaveLength(2)
    })

    test('whose values represent the indices of ["Orange", "Banana"]', function() {
      expect(result[0]).toBe(1)
      expect(result[1]).toBe(2)
    })
  })

  describe('When performing a fuzzy search for the term "nan"', function() {
    var result
    beforeEach(function() {result = fuse.search('nan') } )

    test('we get a list of containing 2 items', function() {
      expect(result).toHaveLength(2)
    })

    test('whose values represent the indices of ["Banana", "Orange"]', function() {
      expect(result[0]).toBe(2)
      expect(result[1]).toBe(1)
    })
  })

  describe('When performing a fuzzy search for the term "nan" with a limit of 1 result', function() {
    var result
    beforeEach(function() { result = fuse.search('nan', {limit: 1}) })

    test('we get a list of containing 1 item: [2]', function() {
      expect(result).toHaveLength(1)
    })

    test('whose values represent the indices of ["Banana", "Orange"]', function() {
      expect(result[0]).toBe(2)
    })
  })
})

testServer.close()

