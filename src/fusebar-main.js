'use strict'

/* global indexurl, PlainFuse */

var summaryInclude = 1000
var fuseOptions = { // See plainfuse.js for details
  shouldSort: true,
  includeMatches: true,
  findAllMatches: true,
  minMatchCharLength: 3,
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
      document.getElementById('search-results').innerHTML = '<h2>Search Results</h2>'

      document.getElementById('search-results').style = 'display: block; visibility: visible;'
      executeSearch(searchQuery)
    }
  } else {
    var para = document.createElement('p')
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
      var jsonprep = request.responseText.replace(/\n/mg, ' ')
      var pages = JSON.parse(jsonprep)
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

function createMark(value) {
  var markel = document.createElement('mark')
  var spanel = document.createElement('span')
  spanel.setAttribute('class', 'mark')
  spanel.innerHTML = value
  markel.appendChild(spanel)

  return markel
}

function markMatches(matches) {
  var newResult = {}
  matches.forEach(function (items, num) { // eslint-disable-line no-unused-vars
    var newElement = document.createElement('div')

    var prevIndexEnd = 0

    items.indices.forEach(function (indexpair, indexnum) { // eslint-disable-line no-unused-vars
      if (items.key == 'content' && items.value.length > summaryInclude) {
        items.value = items.value.substring(0, summaryInclude)
      }

      var matchString = items.value.substring(indexpair[0], indexpair[1] + 1)
      if (indexpair[0] >= prevIndexEnd) {
        var newSubString = document.createElement('span')
        newSubString.innerHTML = items.value.substring(prevIndexEnd, indexpair[0])
        newElement.appendChild(newSubString)
      }

      newElement.appendChild(createMark(matchString))

      prevIndexEnd = indexpair[1] + 1
    })

    if ((prevIndexEnd) < items.value.length) {
      newElement.appendChild(
        document.createTextNode(
          items.value.substring(prevIndexEnd, items.value.length)
        )
      )
    }

    newResult[items.key] = {
      'element': newElement,
      'original_value': items.value
    }
  })

  return newResult
}

function populateResults(results, searchQuery) {
  results.forEach(function (result, resnum) { // eslint-disable-line no-unused-vars
    var resultElement = document.createElement('div')
    resultElement.setAttribute('class', 'search-result')
    resultElement.id = 'search-result-' + resnum.toString()
    if (result.item.content && result.item.content.length > summaryInclude) {
      result.item.content = result.item.content.substring(0, summaryInclude)
    }
    var resultMap = markMatches(result.matches)
    var resultKeys = ['Title', 'Content', 'Tags', 'Categories']
    resultKeys.forEach(function (key) {

      var lowerKey = key.toString().toLowerCase()
      var keyElement
      var resultTitleLink

      if (lowerKey == 'title') {
        keyElement = document.createElement('h4')
        keyElement.setAttribute('class', 'search-result-title')
        var resultTitleLink = document.createElement('a')
        resultTitleLink.setAttribute('href', result.item.permalink)
      }

      if (typeof resultMap[lowerKey] !== 'undefined') {
        if (lowerKey == 'title') {
          resultTitleLink.innerHTML = resultMap[lowerKey].element.innerHTML
          if (!resultMap[lowerKey].element.innerHTML || resultMap[lowerKey].element.innerHTML == '') {
            resultTitleLink.innnerHTML = 'Untitled'
          }
        } else if (lowerKey == 'content') {
          keyElement = resultMap.content.element
          keyElement.setAttribute('class', 'search-result-content')
        } else {
          var keyElVal
          keyElement = document.createElement('div')
          keyElement.setAttribute('class', 'search-result-' + lowerKey)
          keyElement.appendChild(document.createTextNode(key + ":  "))
          var firstVal = true
          result.item[lowerKey].forEach(function (tcval, tckey) {
            if (!firstVal) {
              keyElement.appendChild(document.createTextNode(', '))
            } else {
              firstVal = false
            }
            if (tcval == resultMap[lowerKey].original_value) {
              keyElVal = document.createElement('span')
              keyElVal.innerHTML = resultMap[lowerKey].element.innerHTML

            } else {
              keyElVal = document.createElement('span')
              keyElVal.innerHTML = tcval
            }

            keyElement.appendChild(keyElVal)
          })
        }
      } else {
        if (lowerKey == 'title') {
          resultTitleLink.innerHTML = result.item.title
          if (!result.item.title || result.item.title == '') {
            resultTitleLink.innerHTML = 'Untitled'
          }
        } else if (lowerKey == 'content') {
          if (result.item.content && (result.item.content != '')) {
            keyElement = document.createElement('div')
            keyElement.innerHTML = result.item.content
          }
        } else if (result.item[lowerKey]) {
          keyElement = document.createElement('div')
          keyElement.setAttribute('class', 'search-result-' + lowerKey)
          keyElement.appendChild(document.createTextNode(key + ":  "))
          var firstVal = true
          result.item[lowerKey].forEach(function (tcval, tckey) {
            if (!firstVal) {
              keyElement.appendChild(document.createTextNode(', '))
            } else {
              firstVal = false
            }
            var keyElVal = document.createElement('span')
            keyElVal.innerHTML = tcval
            keyElement.appendChild(keyElVal)
          })
        }
      }

      if (lowerKey == 'title') {
        keyElement.appendChild(resultTitleLink)
      }

      if (typeof keyElement !== 'undefined') {
        resultElement.appendChild(keyElement)
      }
    })

    document.getElementById('search-results').appendChild(resultElement)
  })

  return true
}

