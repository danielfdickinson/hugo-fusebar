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
