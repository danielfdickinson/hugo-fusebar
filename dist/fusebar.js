(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fusebar", [], factory);
	else if(typeof exports === 'object')
		exports["fusebar"] = factory();
	else
		root["fusebar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* global indexurl module Fuse */
var summaryInclude = 1000;
var fuseOptions = {
  // See Fuse.js for details
  distance: 1000,
  findAllMatches: true,
  shouldSort: true,
  includeMatches: true,
  minMatchCharLength: 1,
  threshold: 0.5,
  // default of 0.6 matches too much
  tokenize: false,
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
    weight: 0.1
  }]
};

function doCloseSearch() {
  // eslint-disable-line no-unused-vars
  if (document.getElementById('search-results')) {
    document.getElementById('search-results').style = 'display: none; visibility: hidden;';
    document.getElementById('search-results').innerHTML = '<h2>Search Results</h2>';
  }
}

function doSearch() {
  // eslint-disable-line no-unused-vars
  var searchQuery = document.search_form.s.value;

  if (searchQuery) {
    if (document.getElementById('search-query')) {
      document.getElementById('search-results').innerHTML = '<h2>Search Results</h2>';
      document.getElementById('search-results').style = 'display: block; visibility: visible;';
      var searchFuseOptions = fuseOptions;
      searchFuseOptions.minMatchCharLength = searchQuery.length * 0.8;
      executeSearch(searchQuery, searchFuseOptions);
    }
  } else {
    var para = document.createElement('p');
    para.innerText = 'Please enter a word or phrase above';

    if (document.getElementById('search-results')) {
      document.getElementById('search-results').appendChild(para);
      document.getElementById('search-results').style = 'display: block; visibility: visible;';
    }
  }

  return false;
}

function executeSearch(searchQuery, searchFuseOptions) {
  var request = new XMLHttpRequest();
  request.open('GET', indexurl, true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var jsonprep = request.responseText.replace(/$/, ' ');
      var pages = JSON.parse(jsonprep);
      var fuse = new Fuse(pages, searchFuseOptions);
      var result = fuse.search(searchQuery);

      if (result.length > 0) {
        populateResults(result, searchQuery);
      } else {
        var para = document.createElement('p');
        para.innerHTML = 'No matches found';
        document.getElementById('search-results').appendChild(para);
      }
    } else {
      console.log('fusebar had error ' + request.status + ' on ' + indexurl);
    }
  };

  request.onerror = function () {
    console.log('fusebar search connection error ' + request.status);
  };

  request.send();
}

function createMark(value) {
  var markel = document.createElement('mark');
  var spanel = document.createElement('span');
  spanel.setAttribute('class', 'mark');
  spanel.innerHTML = value;
  markel.appendChild(spanel);
  return markel;
}

function markMatches(matches) {
  var newResult = {};
  matches.forEach(function (items, num) {
    // eslint-disable-line no-unused-vars
    var newElement = document.createElement('div');
    var prevIndexEnd = 0;
    items.indices.forEach(function (indexpair, indexnum) {
      // eslint-disable-line no-unused-vars
      if (items.key == 'content' && items.value.length > summaryInclude) {
        items.value = items.value.substring(0, summaryInclude);
      }

      var matchString = items.value.substring(indexpair[0], indexpair[1] + 1);

      if (indexpair[0] >= prevIndexEnd) {
        var newSubString = document.createElement('span');
        newSubString.innerHTML = items.value.substring(prevIndexEnd, indexpair[0]);
        newElement.appendChild(newSubString);
      }

      newElement.appendChild(createMark(matchString));
      prevIndexEnd = indexpair[1] + 1;
    });

    if (prevIndexEnd < items.value.length) {
      newElement.appendChild(document.createTextNode(items.value.substring(prevIndexEnd, items.value.length)));
    }

    newResult[items.key] = {
      'element': newElement,
      'original_value': items.value
    };
  });
  return newResult;
}

function populateResults(results, searchQuery) {
  // eslint-disable-line no-unused-vars
  results.forEach(function (result, resnum) {
    // eslint-disable-line no-unused-vars
    var resultElement = document.createElement('div');
    resultElement.setAttribute('class', 'search-result');
    resultElement.id = 'search-result-' + resnum.toString();

    if (result.item.content && result.item.content.length > summaryInclude) {
      result.item.content = result.item.content.substring(0, summaryInclude);
    }

    var resultMap = markMatches(result.matches);
    var resultKeys = ['Title', 'Content', 'Tags', 'Categories'];
    resultKeys.forEach(function (key) {
      var lowerKey = key.toString().toLowerCase();
      var keyElement;
      var resultTitleLink;

      if (lowerKey == 'title') {
        keyElement = document.createElement('h4');
        keyElement.setAttribute('class', 'search-result-title');
        resultTitleLink = document.createElement('a');
        resultTitleLink.setAttribute('href', result.item.permalink);
      }

      if (typeof resultMap[lowerKey] !== 'undefined') {
        if (lowerKey == 'title') {
          resultTitleLink.innerHTML = resultMap[lowerKey].element.innerHTML;

          if (!resultMap[lowerKey].element.innerHTML || resultMap[lowerKey].element.innerHTML == '') {
            resultTitleLink.innnerHTML = 'Untitled';
          }
        } else if (lowerKey == 'content') {
          keyElement = resultMap.content.element;
          keyElement.setAttribute('class', 'search-result-content');
        } else {
          var keyElVal;
          keyElement = document.createElement('div');
          keyElement.setAttribute('class', 'search-result-' + lowerKey);
          keyElement.appendChild(document.createTextNode(key + ':  '));
          var firstVal = true;
          result.item[lowerKey].forEach(function (tcval, tckey) {
            // eslint-disable-line no-unused-vars
            if (!firstVal) {
              keyElement.appendChild(document.createTextNode(', '));
            } else {
              firstVal = false;
            }

            if (tcval == resultMap[lowerKey].original_value) {
              keyElVal = document.createElement('span');
              keyElVal.innerHTML = resultMap[lowerKey].element.innerHTML;
            } else {
              keyElVal = document.createElement('span');
              keyElVal.innerHTML = tcval;
            }

            keyElement.appendChild(keyElVal);
          });
        }
      } else {
        if (lowerKey == 'title') {
          resultTitleLink.innerHTML = result.item.title;

          if (!result.item.title || result.item.title == '') {
            resultTitleLink.innerHTML = 'Untitled';
          }
        } else if (lowerKey == 'content') {
          if (result.item.content && result.item.content != '') {
            keyElement = document.createElement('div');
            keyElement.innerHTML = result.item.content;
          }
        } else if (result.item[lowerKey]) {
          keyElement = document.createElement('div');
          keyElement.setAttribute('class', 'search-result-' + lowerKey);
          keyElement.appendChild(document.createTextNode(key + ':  '));
          firstVal = true;
          result.item[lowerKey].forEach(function (tcval, tckey) {
            // eslint-disable-line no-unused-vars
            if (!firstVal) {
              keyElement.appendChild(document.createTextNode(', '));
            } else {
              firstVal = false;
            }

            var keyElVal = document.createElement('span');
            keyElVal.innerHTML = tcval;
            keyElement.appendChild(keyElVal);
          });
        }
      }

      if (lowerKey == 'title') {
        keyElement.appendChild(resultTitleLink);
      }

      if (typeof keyElement !== 'undefined') {
        resultElement.appendChild(keyElement);
      }
    });
    document.getElementById('search-results').appendChild(resultElement);
  });
  return true;
}

module.exports = {
  doCloseSearch: doCloseSearch,
  doSearch: doSearch,
  executeSearch: executeSearch,
  createMark: createMark,
  markMatches: markMatches,
  populateResults: populateResults
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=fusebar.js.map