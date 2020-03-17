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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
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

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNlYmFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9mdXNlYmFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1c2ViYXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsic3VtbWFyeUluY2x1ZGUiLCJmdXNlT3B0aW9ucyIsImRpc3RhbmNlIiwiZmluZEFsbE1hdGNoZXMiLCJzaG91bGRTb3J0IiwiaW5jbHVkZU1hdGNoZXMiLCJtaW5NYXRjaENoYXJMZW5ndGgiLCJ0aHJlc2hvbGQiLCJ0b2tlbml6ZSIsImtleXMiLCJuYW1lIiwid2VpZ2h0IiwiZG9DbG9zZVNlYXJjaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImlubmVySFRNTCIsImRvU2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hfZm9ybSIsInMiLCJ2YWx1ZSIsInNlYXJjaEZ1c2VPcHRpb25zIiwibGVuZ3RoIiwiZXhlY3V0ZVNlYXJjaCIsInBhcmEiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiaW5kZXh1cmwiLCJvbmxvYWQiLCJzdGF0dXMiLCJqc29ucHJlcCIsInJlc3BvbnNlVGV4dCIsInJlcGxhY2UiLCJwYWdlcyIsIkpTT04iLCJwYXJzZSIsImZ1c2UiLCJGdXNlIiwicmVzdWx0Iiwic2VhcmNoIiwicG9wdWxhdGVSZXN1bHRzIiwiY29uc29sZSIsImxvZyIsIm9uZXJyb3IiLCJzZW5kIiwiY3JlYXRlTWFyayIsIm1hcmtlbCIsInNwYW5lbCIsInNldEF0dHJpYnV0ZSIsIm1hcmtNYXRjaGVzIiwibWF0Y2hlcyIsIm5ld1Jlc3VsdCIsImZvckVhY2giLCJpdGVtcyIsIm51bSIsIm5ld0VsZW1lbnQiLCJwcmV2SW5kZXhFbmQiLCJpbmRpY2VzIiwiaW5kZXhwYWlyIiwiaW5kZXhudW0iLCJrZXkiLCJzdWJzdHJpbmciLCJtYXRjaFN0cmluZyIsIm5ld1N1YlN0cmluZyIsImNyZWF0ZVRleHROb2RlIiwicmVzdWx0cyIsInJlc251bSIsInJlc3VsdEVsZW1lbnQiLCJpZCIsInRvU3RyaW5nIiwiaXRlbSIsImNvbnRlbnQiLCJyZXN1bHRNYXAiLCJyZXN1bHRLZXlzIiwibG93ZXJLZXkiLCJ0b0xvd2VyQ2FzZSIsImtleUVsZW1lbnQiLCJyZXN1bHRUaXRsZUxpbmsiLCJwZXJtYWxpbmsiLCJlbGVtZW50IiwiaW5ubmVySFRNTCIsImtleUVsVmFsIiwiZmlyc3RWYWwiLCJ0Y3ZhbCIsInRja2V5Iiwib3JpZ2luYWxfdmFsdWUiLCJ0aXRsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFF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VW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVzZWJhclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdXNlYmFyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1c2ViYXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIGdsb2JhbCBpbmRleHVybCBtb2R1bGUgRnVzZSAqL1xuXG52YXIgc3VtbWFyeUluY2x1ZGUgPSAxMDAwXG52YXIgZnVzZU9wdGlvbnMgPSB7IC8vIFNlZSBGdXNlLmpzIGZvciBkZXRhaWxzXG4gIGRpc3RhbmNlOiAxMDAwLFxuICBmaW5kQWxsTWF0Y2hlczogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgaW5jbHVkZU1hdGNoZXM6IHRydWUsXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgdGhyZXNob2xkOiAwLjUsICAvLyBkZWZhdWx0IG9mIDAuNiBtYXRjaGVzIHRvbyBtdWNoXG4gIHRva2VuaXplOiBmYWxzZSxcbiAga2V5czogW3tcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHdlaWdodDogMC4zXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY29udGVudCcsXG4gICAgd2VpZ2h0OiAwLjRcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0YWdzJyxcbiAgICB3ZWlnaHQ6IDAuMVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgIHdlaWdodDogMC4xXG4gIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBkb0Nsb3NlU2VhcmNoKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmU7IHZpc2liaWxpdHk6IGhpZGRlbjsnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuaW5uZXJIVE1MID0gJzxoMj5TZWFyY2ggUmVzdWx0czwvaDI+J1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvU2VhcmNoKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnNlYXJjaF9mb3JtLnMudmFsdWVcbiAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcXVlcnknKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuaW5uZXJIVE1MID0gJzxoMj5TZWFyY2ggUmVzdWx0czwvaDI+J1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5zdHlsZSA9ICdkaXNwbGF5OiBibG9jazsgdmlzaWJpbGl0eTogdmlzaWJsZTsnXG4gICAgICB2YXIgc2VhcmNoRnVzZU9wdGlvbnMgPSBmdXNlT3B0aW9uc1xuICAgICAgc2VhcmNoRnVzZU9wdGlvbnMubWluTWF0Y2hDaGFyTGVuZ3RoID0gc2VhcmNoUXVlcnkubGVuZ3RoICogMC44XG4gICAgICBleGVjdXRlU2VhcmNoKHNlYXJjaFF1ZXJ5LCBzZWFyY2hGdXNlT3B0aW9ucylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhLmlubmVyVGV4dCA9ICdQbGVhc2UgZW50ZXIgYSB3b3JkIG9yIHBocmFzZSBhYm92ZSdcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLmFwcGVuZENoaWxkKHBhcmEpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5zdHlsZSA9ICdkaXNwbGF5OiBibG9jazsgdmlzaWJpbGl0eTogdmlzaWJsZTsnXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBleGVjdXRlU2VhcmNoKHNlYXJjaFF1ZXJ5LCBzZWFyY2hGdXNlT3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHJlcXVlc3Qub3BlbignR0VUJywgaW5kZXh1cmwsIHRydWUpXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgIHZhciBqc29ucHJlcCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0LnJlcGxhY2UoLyQvLCAnICcpXG4gICAgICB2YXIgcGFnZXMgPSBKU09OLnBhcnNlKGpzb25wcmVwKVxuICAgICAgdmFyIGZ1c2UgPSBuZXcgRnVzZShwYWdlcywgc2VhcmNoRnVzZU9wdGlvbnMpXG4gICAgICB2YXIgcmVzdWx0ID0gZnVzZS5zZWFyY2goc2VhcmNoUXVlcnkpXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wdWxhdGVSZXN1bHRzKHJlc3VsdCwgc2VhcmNoUXVlcnkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwYXJhLmlubmVySFRNTCA9ICdObyBtYXRjaGVzIGZvdW5kJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5hcHBlbmRDaGlsZChwYXJhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZnVzZWJhciBoYWQgZXJyb3IgJyArIHJlcXVlc3Quc3RhdHVzICsgJyBvbiAnICsgaW5kZXh1cmwpXG4gICAgfVxuICB9XG4gIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZnVzZWJhciBzZWFyY2ggY29ubmVjdGlvbiBlcnJvciAnICsgcmVxdWVzdC5zdGF0dXMpXG4gIH1cbiAgcmVxdWVzdC5zZW5kKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFyayh2YWx1ZSkge1xuICB2YXIgbWFya2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFyaycpXG4gIHZhciBzcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc3BhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFyaycpXG4gIHNwYW5lbC5pbm5lckhUTUwgPSB2YWx1ZVxuICBtYXJrZWwuYXBwZW5kQ2hpbGQoc3BhbmVsKVxuXG4gIHJldHVybiBtYXJrZWxcbn1cblxuZnVuY3Rpb24gbWFya01hdGNoZXMobWF0Y2hlcykge1xuICB2YXIgbmV3UmVzdWx0ID0ge31cbiAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtcywgbnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICB2YXIgcHJldkluZGV4RW5kID0gMFxuXG4gICAgaXRlbXMuaW5kaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleHBhaXIsIGluZGV4bnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGlmIChpdGVtcy5rZXkgPT0gJ2NvbnRlbnQnICYmIGl0ZW1zLnZhbHVlLmxlbmd0aCA+IHN1bW1hcnlJbmNsdWRlKSB7XG4gICAgICAgIGl0ZW1zLnZhbHVlID0gaXRlbXMudmFsdWUuc3Vic3RyaW5nKDAsIHN1bW1hcnlJbmNsdWRlKVxuICAgICAgfVxuXG4gICAgICB2YXIgbWF0Y2hTdHJpbmcgPSBpdGVtcy52YWx1ZS5zdWJzdHJpbmcoaW5kZXhwYWlyWzBdLCBpbmRleHBhaXJbMV0gKyAxKVxuICAgICAgaWYgKGluZGV4cGFpclswXSA+PSBwcmV2SW5kZXhFbmQpIHtcbiAgICAgICAgdmFyIG5ld1N1YlN0cmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBuZXdTdWJTdHJpbmcuaW5uZXJIVE1MID0gaXRlbXMudmFsdWUuc3Vic3RyaW5nKHByZXZJbmRleEVuZCwgaW5kZXhwYWlyWzBdKVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1N1YlN0cmluZylcbiAgICAgIH1cblxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNYXJrKG1hdGNoU3RyaW5nKSlcblxuICAgICAgcHJldkluZGV4RW5kID0gaW5kZXhwYWlyWzFdICsgMVxuICAgIH0pXG5cbiAgICBpZiAoKHByZXZJbmRleEVuZCkgPCBpdGVtcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIGl0ZW1zLnZhbHVlLnN1YnN0cmluZyhwcmV2SW5kZXhFbmQsIGl0ZW1zLnZhbHVlLmxlbmd0aClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIG5ld1Jlc3VsdFtpdGVtcy5rZXldID0ge1xuICAgICAgJ2VsZW1lbnQnOiBuZXdFbGVtZW50LFxuICAgICAgJ29yaWdpbmFsX3ZhbHVlJzogaXRlbXMudmFsdWVcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG5ld1Jlc3VsdFxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVJlc3VsdHMocmVzdWx0cywgc2VhcmNoUXVlcnkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgcmVzbnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzdWx0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdWx0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1yZXN1bHQnKVxuICAgIHJlc3VsdEVsZW1lbnQuaWQgPSAnc2VhcmNoLXJlc3VsdC0nICsgcmVzbnVtLnRvU3RyaW5nKClcbiAgICBpZiAocmVzdWx0Lml0ZW0uY29udGVudCAmJiByZXN1bHQuaXRlbS5jb250ZW50Lmxlbmd0aCA+IHN1bW1hcnlJbmNsdWRlKSB7XG4gICAgICByZXN1bHQuaXRlbS5jb250ZW50ID0gcmVzdWx0Lml0ZW0uY29udGVudC5zdWJzdHJpbmcoMCwgc3VtbWFyeUluY2x1ZGUpXG4gICAgfVxuICAgIHZhciByZXN1bHRNYXAgPSBtYXJrTWF0Y2hlcyhyZXN1bHQubWF0Y2hlcylcbiAgICB2YXIgcmVzdWx0S2V5cyA9IFsnVGl0bGUnLCAnQ29udGVudCcsICdUYWdzJywgJ0NhdGVnb3JpZXMnXVxuICAgIHJlc3VsdEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgIHZhciBsb3dlcktleSA9IGtleS50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICAgIHZhciBrZXlFbGVtZW50XG4gICAgICB2YXIgcmVzdWx0VGl0bGVMaW5rXG5cbiAgICAgIGlmIChsb3dlcktleSA9PSAndGl0bGUnKSB7XG4gICAgICAgIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gICAgICAgIGtleUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtcmVzdWx0LXRpdGxlJylcbiAgICAgICAgcmVzdWx0VGl0bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIHJlc3VsdFRpdGxlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXN1bHQuaXRlbS5wZXJtYWxpbmspXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0TWFwW2xvd2VyS2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKGxvd2VyS2V5ID09ICd0aXRsZScpIHtcbiAgICAgICAgICByZXN1bHRUaXRsZUxpbmsuaW5uZXJIVE1MID0gcmVzdWx0TWFwW2xvd2VyS2V5XS5lbGVtZW50LmlubmVySFRNTFxuICAgICAgICAgIGlmICghcmVzdWx0TWFwW2xvd2VyS2V5XS5lbGVtZW50LmlubmVySFRNTCB8fCByZXN1bHRNYXBbbG93ZXJLZXldLmVsZW1lbnQuaW5uZXJIVE1MID09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHRUaXRsZUxpbmsuaW5ubmVySFRNTCA9ICdVbnRpdGxlZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJLZXkgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAga2V5RWxlbWVudCA9IHJlc3VsdE1hcC5jb250ZW50LmVsZW1lbnRcbiAgICAgICAgICBrZXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdC1jb250ZW50JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIga2V5RWxWYWxcbiAgICAgICAgICBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBrZXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdC0nICsgbG93ZXJLZXkpXG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkgKyAnOiAgJykpXG4gICAgICAgICAgdmFyIGZpcnN0VmFsID0gdHJ1ZVxuICAgICAgICAgIHJlc3VsdC5pdGVtW2xvd2VyS2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh0Y3ZhbCwgdGNrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgaWYgKCFmaXJzdFZhbCkge1xuICAgICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcsICcpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlyc3RWYWwgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRjdmFsID09IHJlc3VsdE1hcFtsb3dlcktleV0ub3JpZ2luYWxfdmFsdWUpIHtcbiAgICAgICAgICAgICAga2V5RWxWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgICAga2V5RWxWYWwuaW5uZXJIVE1MID0gcmVzdWx0TWFwW2xvd2VyS2V5XS5lbGVtZW50LmlubmVySFRNTFxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBrZXlFbFZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgICBrZXlFbFZhbC5pbm5lckhUTUwgPSB0Y3ZhbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsVmFsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsb3dlcktleSA9PSAndGl0bGUnKSB7XG4gICAgICAgICAgcmVzdWx0VGl0bGVMaW5rLmlubmVySFRNTCA9IHJlc3VsdC5pdGVtLnRpdGxlXG4gICAgICAgICAgaWYgKCFyZXN1bHQuaXRlbS50aXRsZSB8fCByZXN1bHQuaXRlbS50aXRsZSA9PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0VGl0bGVMaW5rLmlubmVySFRNTCA9ICdVbnRpdGxlZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJLZXkgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5pdGVtLmNvbnRlbnQgJiYgKHJlc3VsdC5pdGVtLmNvbnRlbnQgIT0gJycpKSB7XG4gICAgICAgICAgICBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGtleUVsZW1lbnQuaW5uZXJIVE1MID0gcmVzdWx0Lml0ZW0uY29udGVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuaXRlbVtsb3dlcktleV0pIHtcbiAgICAgICAgICBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBrZXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdC0nICsgbG93ZXJLZXkpXG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkgKyAnOiAgJykpXG4gICAgICAgICAgZmlyc3RWYWwgPSB0cnVlXG4gICAgICAgICAgcmVzdWx0Lml0ZW1bbG93ZXJLZXldLmZvckVhY2goZnVuY3Rpb24gKHRjdmFsLCB0Y2tleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICBpZiAoIWZpcnN0VmFsKSB7XG4gICAgICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJywgJykpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaXJzdFZhbCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIga2V5RWxWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGtleUVsVmFsLmlubmVySFRNTCA9IHRjdmFsXG4gICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsVmFsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvd2VyS2V5ID09ICd0aXRsZScpIHtcbiAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChyZXN1bHRUaXRsZUxpbmspXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Yga2V5RWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVzdWx0RWxlbWVudC5hcHBlbmRDaGlsZChrZXlFbGVtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5hcHBlbmRDaGlsZChyZXN1bHRFbGVtZW50KVxuICB9KVxuXG4gIHJldHVybiB0cnVlXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb0Nsb3NlU2VhcmNoLFxuICBkb1NlYXJjaCxcbiAgZXhlY3V0ZVNlYXJjaCxcbiAgY3JlYXRlTWFyayxcbiAgbWFya01hdGNoZXMsXG4gIHBvcHVsYXRlUmVzdWx0c1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==