/**
 * fusebar.js v0.2.4 - Private website search for browsers using Fuse.js as backend (https://www.thecshore.com/projects/fusebar)
 *
 * Copyright (c) 2020 Daniel F. Dickinson (https://www.thecshore.com)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.fusebar = {}));
}(this, (function (exports) { 'use strict';

  /* global indexurl Fuse */
  var summaryInclude = 1000;
  var fuseKeyOptions = {
    // See Fuse.js for details
    distance: 1000,
    findAllMatches: true,
    shouldSort: true,
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.3 // default of 0.6 matches too much

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
        executeSearch(searchQuery);
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

  function executeSearch(searchQuery) {
    var fuse;
    var result;
    var request = new XMLHttpRequest();
    request.open('GET', indexurl, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var haveResult = false;
        var jsonprep = request.responseText.replace(/$/, ' ');
        var pages = JSON.parse(jsonprep);
        var searchFuseOptions = fuseKeyOptions;
        searchFuseOptions.keys = [{
          name: 'tags',
          weight: 0.99
        }];
        searchFuseOptions.minMatchCharLength = Math.floor(searchQuery.length * 0.8);
        fuse = new Fuse(pages, searchFuseOptions);
        result = fuse.search(searchQuery);

        if (result.length > 0) {
          populateKeyResults(result, searchQuery, 'Tags');
          haveResult = true;
        }

        searchFuseOptions.keys = [{
          name: 'categories',
          weight: 0.99
        }];
        fuse = new Fuse(pages, searchFuseOptions);
        result = fuse.search(searchQuery);

        if (result.length > 0) {
          populateKeyResults(result, searchQuery, 'Categories');
          haveResult = true;
        }

        searchFuseOptions.keys = [{
          name: 'title',
          weight: 0.6
        }, {
          name: 'content',
          weight: 0.4
        }];
        searchFuseOptions.distance = 10000;
        fuse = new Fuse(pages, searchFuseOptions);
        result = fuse.search(searchQuery);

        if (result.length > 0) {
          populateResults(result, searchQuery, 2);
          haveResult = true;
        }

        if (!haveResult) {
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
    return false;
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

  function populateResults(results, searchQuery, baseResNum) {
    // eslint-disable-line no-unused-vars
    results.forEach(function (result, resnum) {
      // eslint-disable-line no-unused-vars
      var resultElement = document.createElement('div');
      resultElement.setAttribute('class', 'search-result');
      resultElement.id = 'search-result-' + (resnum + baseResNum).toString();

      if (result.item.content && result.item.content.length > summaryInclude) {
        result.item.content = result.item.content.substring(0, summaryInclude);
      }

      var resultMap = markMatches(result.matches);
      var resultKeys = ['Title', 'Content'];
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

  function populateKeyResults(results, searchQuery, key, resnum) {
    // eslint-disable-line no-unused-vars
    var lowerKey = key.toString().toLowerCase();
    var resultElement = document.createElement('div');
    resultElement.setAttribute('class', 'search-result');
    resultElement.id = 'search-result-0';
    var keysElement = document.createElement('div');
    keysElement.setAttribute('class', 'search-result-' + lowerKey);
    keysElement.innerHTML = '<b>' + key + '</b>  (follow links for all matching pages): ';
    var matchedKeys = {};
    var firstVal = true;
    results.forEach(function (result, resnum) {
      // eslint-disable-line no-unused-vars
      if (result.item.content && result.item.content.length > summaryInclude) {
        result.item.content = result.item.content.substring(0, summaryInclude);
      }

      var resultMap = markMatches(result.matches);

      if (typeof resultMap[lowerKey] !== 'undefined') {
        /* marked */
        var keyElVal;
        result.matches.forEach(function (match) {
          // eslint-disable-line no-unused-vars
          var keyElement = null;

          if (match.value == resultMap[lowerKey].original_value) {
            if (!matchedKeys[match.value]) {
              if (!firstVal) {
                keysElement.appendChild(document.createTextNode(', '));
              } else {
                firstVal = false;
              }

              matchedKeys[match.value] = true;
              keyElVal = document.createElement('span');
              keyElVal.innerHTML = resultMap[lowerKey].element.innerHTML;
              keyElement = document.createElement('a');
              keyElement.setAttribute('href', '/' + encodeURIComponent(lowerKey) + '/' + encodeURIComponent(match.value) + '/');
              keyElement.appendChild(keyElVal);
            }
          }

          if (keyElement) {
            keysElement.appendChild(keyElement);
          }
        });
      }
    });
    resultElement.appendChild(keysElement);
    document.getElementById('search-results').appendChild(resultElement);
    return true;
  }

  exports.createMark = createMark;
  exports.doCloseSearch = doCloseSearch;
  exports.doSearch = doSearch;
  exports.executeSearch = executeSearch;
  exports.markMatches = markMatches;
  exports.populateResults = populateResults;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVzZWJhci5kZXYuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgaW5kZXh1cmwgRnVzZSAqL1xuXG52YXIgc3VtbWFyeUluY2x1ZGUgPSAxMDAwXG52YXIgZnVzZUtleU9wdGlvbnMgPSB7IC8vIFNlZSBGdXNlLmpzIGZvciBkZXRhaWxzXG4gIGRpc3RhbmNlOiAxMDAwLFxuICBmaW5kQWxsTWF0Y2hlczogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgaW5jbHVkZU1hdGNoZXM6IHRydWUsXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMixcbiAgdGhyZXNob2xkOiAwLjMsICAvLyBkZWZhdWx0IG9mIDAuNiBtYXRjaGVzIHRvbyBtdWNoXG59XG5cbmZ1bmN0aW9uIGRvQ2xvc2VTZWFyY2goKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuc3R5bGUgPSAnZGlzcGxheTogbm9uZTsgdmlzaWJpbGl0eTogaGlkZGVuOydcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5pbm5lckhUTUwgPSAnPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj4nXG4gIH1cbn1cblxuZnVuY3Rpb24gZG9TZWFyY2goKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIHNlYXJjaFF1ZXJ5ID0gZG9jdW1lbnQuc2VhcmNoX2Zvcm0ucy52YWx1ZVxuICBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1xdWVyeScpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5pbm5lckhUTUwgPSAnPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj4nXG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLnN0eWxlID0gJ2Rpc3BsYXk6IGJsb2NrOyB2aXNpYmlsaXR5OiB2aXNpYmxlOydcbiAgICAgIGV4ZWN1dGVTZWFyY2goc2VhcmNoUXVlcnkpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYS5pbm5lclRleHQgPSAnUGxlYXNlIGVudGVyIGEgd29yZCBvciBwaHJhc2UgYWJvdmUnXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5hcHBlbmRDaGlsZChwYXJhKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuc3R5bGUgPSAnZGlzcGxheTogYmxvY2s7IHZpc2liaWxpdHk6IHZpc2libGU7J1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVNlYXJjaChzZWFyY2hRdWVyeSkge1xuICB2YXIgZnVzZVxuICB2YXIgcmVzdWx0XG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgcmVxdWVzdC5vcGVuKCdHRVQnLCBpbmRleHVybCwgdHJ1ZSlcbiAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xuICAgICAgdmFyIGhhdmVSZXN1bHQgPSBmYWxzZVxuICAgICAgdmFyIGpzb25wcmVwID0gcmVxdWVzdC5yZXNwb25zZVRleHQucmVwbGFjZSgvJC8sICcgJylcbiAgICAgIHZhciBwYWdlcyA9IEpTT04ucGFyc2UoanNvbnByZXApXG4gICAgICB2YXIgc2VhcmNoRnVzZU9wdGlvbnMgPSBmdXNlS2V5T3B0aW9uc1xuICAgICAgc2VhcmNoRnVzZU9wdGlvbnMua2V5cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0YWdzJyxcbiAgICAgICAgICB3ZWlnaHQ6IDAuOTlcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgc2VhcmNoRnVzZU9wdGlvbnMubWluTWF0Y2hDaGFyTGVuZ3RoID0gTWF0aC5mbG9vcihzZWFyY2hRdWVyeS5sZW5ndGggKiAwLjgpXG4gICAgICBmdXNlID0gbmV3IEZ1c2UocGFnZXMsIHNlYXJjaEZ1c2VPcHRpb25zKVxuICAgICAgcmVzdWx0ID0gZnVzZS5zZWFyY2goc2VhcmNoUXVlcnkpXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wdWxhdGVLZXlSZXN1bHRzKHJlc3VsdCwgc2VhcmNoUXVlcnksICdUYWdzJywgMClcbiAgICAgICAgaGF2ZVJlc3VsdCA9IHRydWVcbiAgICAgIH1cbiAgICAgIHNlYXJjaEZ1c2VPcHRpb25zLmtleXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY2F0ZWdvcmllcycsXG4gICAgICAgICAgd2VpZ2h0OiAwLjk5XG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgICAgZnVzZSA9IG5ldyBGdXNlKHBhZ2VzLCBzZWFyY2hGdXNlT3B0aW9ucylcbiAgICAgIHJlc3VsdCA9IGZ1c2Uuc2VhcmNoKHNlYXJjaFF1ZXJ5KVxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBvcHVsYXRlS2V5UmVzdWx0cyhyZXN1bHQsIHNlYXJjaFF1ZXJ5LCAnQ2F0ZWdvcmllcycsIDEpXG4gICAgICAgIGhhdmVSZXN1bHQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHNlYXJjaEZ1c2VPcHRpb25zLmtleXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgICAgIHdlaWdodDogMC42XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY29udGVudCcsXG4gICAgICAgICAgd2VpZ2h0OiAwLjRcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgc2VhcmNoRnVzZU9wdGlvbnMuZGlzdGFuY2UgPSAxMDAwMFxuXG4gICAgICBmdXNlID0gbmV3IEZ1c2UocGFnZXMsIHNlYXJjaEZ1c2VPcHRpb25zKVxuICAgICAgcmVzdWx0ID0gZnVzZS5zZWFyY2goc2VhcmNoUXVlcnkpXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wdWxhdGVSZXN1bHRzKHJlc3VsdCwgc2VhcmNoUXVlcnksIDIpXG4gICAgICAgIGhhdmVSZXN1bHQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICghaGF2ZVJlc3VsdCkge1xuICAgICAgICB2YXIgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwYXJhLmlubmVySFRNTCA9ICdObyBtYXRjaGVzIGZvdW5kJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5hcHBlbmRDaGlsZChwYXJhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZnVzZWJhciBoYWQgZXJyb3IgJyArIHJlcXVlc3Quc3RhdHVzICsgJyBvbiAnICsgaW5kZXh1cmwpXG4gICAgfVxuICB9XG4gIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZnVzZWJhciBzZWFyY2ggY29ubmVjdGlvbiBlcnJvciAnICsgcmVxdWVzdC5zdGF0dXMpXG4gIH1cbiAgcmVxdWVzdC5zZW5kKClcblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFyayh2YWx1ZSkge1xuICB2YXIgbWFya2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFyaycpXG4gIHZhciBzcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc3BhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFyaycpXG4gIHNwYW5lbC5pbm5lckhUTUwgPSB2YWx1ZVxuICBtYXJrZWwuYXBwZW5kQ2hpbGQoc3BhbmVsKVxuXG4gIHJldHVybiBtYXJrZWxcbn1cblxuZnVuY3Rpb24gbWFya01hdGNoZXMobWF0Y2hlcykge1xuICB2YXIgbmV3UmVzdWx0ID0ge31cbiAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtcywgbnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICB2YXIgcHJldkluZGV4RW5kID0gMFxuXG4gICAgaXRlbXMuaW5kaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleHBhaXIsIGluZGV4bnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGlmIChpdGVtcy5rZXkgPT0gJ2NvbnRlbnQnICYmIGl0ZW1zLnZhbHVlLmxlbmd0aCA+IHN1bW1hcnlJbmNsdWRlKSB7XG4gICAgICAgIGl0ZW1zLnZhbHVlID0gaXRlbXMudmFsdWUuc3Vic3RyaW5nKDAsIHN1bW1hcnlJbmNsdWRlKVxuICAgICAgfVxuXG4gICAgICB2YXIgbWF0Y2hTdHJpbmcgPSBpdGVtcy52YWx1ZS5zdWJzdHJpbmcoaW5kZXhwYWlyWzBdLCBpbmRleHBhaXJbMV0gKyAxKVxuICAgICAgaWYgKGluZGV4cGFpclswXSA+PSBwcmV2SW5kZXhFbmQpIHtcbiAgICAgICAgdmFyIG5ld1N1YlN0cmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBuZXdTdWJTdHJpbmcuaW5uZXJIVE1MID0gaXRlbXMudmFsdWUuc3Vic3RyaW5nKHByZXZJbmRleEVuZCwgaW5kZXhwYWlyWzBdKVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1N1YlN0cmluZylcbiAgICAgIH1cblxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNYXJrKG1hdGNoU3RyaW5nKSlcblxuICAgICAgcHJldkluZGV4RW5kID0gaW5kZXhwYWlyWzFdICsgMVxuICAgIH0pXG5cbiAgICBpZiAoKHByZXZJbmRleEVuZCkgPCBpdGVtcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIGl0ZW1zLnZhbHVlLnN1YnN0cmluZyhwcmV2SW5kZXhFbmQsIGl0ZW1zLnZhbHVlLmxlbmd0aClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIG5ld1Jlc3VsdFtpdGVtcy5rZXldID0ge1xuICAgICAgJ2VsZW1lbnQnOiBuZXdFbGVtZW50LFxuICAgICAgJ29yaWdpbmFsX3ZhbHVlJzogaXRlbXMudmFsdWVcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG5ld1Jlc3VsdFxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVJlc3VsdHMocmVzdWx0cywgc2VhcmNoUXVlcnksIGJhc2VSZXNOdW0pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgcmVzbnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzdWx0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdWx0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1yZXN1bHQnKVxuICAgIHJlc3VsdEVsZW1lbnQuaWQgPSAnc2VhcmNoLXJlc3VsdC0nICsgKHJlc251bSArIGJhc2VSZXNOdW0pLnRvU3RyaW5nKClcbiAgICBpZiAocmVzdWx0Lml0ZW0uY29udGVudCAmJiByZXN1bHQuaXRlbS5jb250ZW50Lmxlbmd0aCA+IHN1bW1hcnlJbmNsdWRlKSB7XG4gICAgICByZXN1bHQuaXRlbS5jb250ZW50ID0gcmVzdWx0Lml0ZW0uY29udGVudC5zdWJzdHJpbmcoMCwgc3VtbWFyeUluY2x1ZGUpXG4gICAgfVxuICAgIHZhciByZXN1bHRNYXAgPSBtYXJrTWF0Y2hlcyhyZXN1bHQubWF0Y2hlcylcbiAgICB2YXIgcmVzdWx0S2V5cyA9IFsnVGl0bGUnLCAnQ29udGVudCddXG4gICAgcmVzdWx0S2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblxuICAgICAgdmFyIGxvd2VyS2V5ID0ga2V5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxuICAgICAgdmFyIGtleUVsZW1lbnRcbiAgICAgIHZhciByZXN1bHRUaXRsZUxpbmtcblxuICAgICAgaWYgKGxvd2VyS2V5ID09ICd0aXRsZScpIHtcbiAgICAgICAga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICAgICAga2V5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1yZXN1bHQtdGl0bGUnKVxuICAgICAgICByZXN1bHRUaXRsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgcmVzdWx0VGl0bGVMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3VsdC5pdGVtLnBlcm1hbGluaylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHRNYXBbbG93ZXJLZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobG93ZXJLZXkgPT0gJ3RpdGxlJykge1xuICAgICAgICAgIHJlc3VsdFRpdGxlTGluay5pbm5lckhUTUwgPSByZXN1bHRNYXBbbG93ZXJLZXldLmVsZW1lbnQuaW5uZXJIVE1MXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbbG93ZXJLZXldLmVsZW1lbnQuaW5uZXJIVE1MIHx8IHJlc3VsdE1hcFtsb3dlcktleV0uZWxlbWVudC5pbm5lckhUTUwgPT0gJycpIHtcbiAgICAgICAgICAgIHJlc3VsdFRpdGxlTGluay5pbm5uZXJIVE1MID0gJ1VudGl0bGVkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsb3dlcktleSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICBrZXlFbGVtZW50ID0gcmVzdWx0TWFwLmNvbnRlbnQuZWxlbWVudFxuICAgICAgICAgIGtleUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtcmVzdWx0LWNvbnRlbnQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBrZXlFbFZhbFxuICAgICAgICAgIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGtleUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtcmVzdWx0LScgKyBsb3dlcktleSlcbiAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSArICc6ICAnKSlcbiAgICAgICAgICB2YXIgZmlyc3RWYWwgPSB0cnVlXG4gICAgICAgICAgcmVzdWx0Lml0ZW1bbG93ZXJLZXldLmZvckVhY2goZnVuY3Rpb24gKHRjdmFsLCB0Y2tleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICBpZiAoIWZpcnN0VmFsKSB7XG4gICAgICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJywgJykpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaXJzdFZhbCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGN2YWwgPT0gcmVzdWx0TWFwW2xvd2VyS2V5XS5vcmlnaW5hbF92YWx1ZSkge1xuICAgICAgICAgICAgICBrZXlFbFZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgICBrZXlFbFZhbC5pbm5lckhUTUwgPSByZXN1bHRNYXBbbG93ZXJLZXldLmVsZW1lbnQuaW5uZXJIVE1MXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGtleUVsVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICAgIGtleUVsVmFsLmlubmVySFRNTCA9IHRjdmFsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoa2V5RWxWYWwpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxvd2VyS2V5ID09ICd0aXRsZScpIHtcbiAgICAgICAgICByZXN1bHRUaXRsZUxpbmsuaW5uZXJIVE1MID0gcmVzdWx0Lml0ZW0udGl0bGVcbiAgICAgICAgICBpZiAoIXJlc3VsdC5pdGVtLnRpdGxlIHx8IHJlc3VsdC5pdGVtLnRpdGxlID09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHRUaXRsZUxpbmsuaW5uZXJIVE1MID0gJ1VudGl0bGVkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsb3dlcktleSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICBpZiAocmVzdWx0Lml0ZW0uY29udGVudCAmJiAocmVzdWx0Lml0ZW0uY29udGVudCAhPSAnJykpIHtcbiAgICAgICAgICAgIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAga2V5RWxlbWVudC5pbm5lckhUTUwgPSByZXN1bHQuaXRlbS5jb250ZW50XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5pdGVtW2xvd2VyS2V5XSkge1xuICAgICAgICAgIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgIGtleUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtcmVzdWx0LScgKyBsb3dlcktleSlcbiAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSArICc6ICAnKSlcbiAgICAgICAgICBmaXJzdFZhbCA9IHRydWVcbiAgICAgICAgICByZXN1bHQuaXRlbVtsb3dlcktleV0uZm9yRWFjaChmdW5jdGlvbiAodGN2YWwsIHRja2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgIGlmICghZmlyc3RWYWwpIHtcbiAgICAgICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLCAnKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpcnN0VmFsID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXlFbFZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAga2V5RWxWYWwuaW5uZXJIVE1MID0gdGN2YWxcbiAgICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoa2V5RWxWYWwpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobG93ZXJLZXkgPT0gJ3RpdGxlJykge1xuICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKHJlc3VsdFRpdGxlTGluaylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBrZXlFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHRFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsZW1lbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLmFwcGVuZENoaWxkKHJlc3VsdEVsZW1lbnQpXG4gIH0pXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVLZXlSZXN1bHRzKHJlc3VsdHMsIHNlYXJjaFF1ZXJ5LCBrZXksIHJlc251bSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBsb3dlcktleSA9IGtleS50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgdmFyIHJlc3VsdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByZXN1bHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdCcpXG4gIHJlc3VsdEVsZW1lbnQuaWQgPSAnc2VhcmNoLXJlc3VsdC0wJ1xuICB2YXIga2V5c0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBrZXlzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1yZXN1bHQtJyArIGxvd2VyS2V5KVxuICBrZXlzRWxlbWVudC5pbm5lckhUTUwgPSAnPGI+JyArIGtleSArICc8L2I+ICAoZm9sbG93IGxpbmtzIGZvciBhbGwgbWF0Y2hpbmcgcGFnZXMpOiAnXG4gIHZhciBtYXRjaGVkS2V5cyA9IHt9XG4gIHZhciBmaXJzdFZhbCA9IHRydWVcbiAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQsIHJlc251bSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgaWYgKHJlc3VsdC5pdGVtLmNvbnRlbnQgJiYgcmVzdWx0Lml0ZW0uY29udGVudC5sZW5ndGggPiBzdW1tYXJ5SW5jbHVkZSkge1xuICAgICAgcmVzdWx0Lml0ZW0uY29udGVudCA9IHJlc3VsdC5pdGVtLmNvbnRlbnQuc3Vic3RyaW5nKDAsIHN1bW1hcnlJbmNsdWRlKVxuICAgIH1cbiAgICB2YXIgcmVzdWx0TWFwID0gbWFya01hdGNoZXMocmVzdWx0Lm1hdGNoZXMpXG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdE1hcFtsb3dlcktleV0gIT09ICd1bmRlZmluZWQnKSB7IC8qIG1hcmtlZCAqL1xuICAgICAgdmFyIGtleUVsVmFsXG4gICAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciBrZXlFbGVtZW50ID0gbnVsbFxuICAgICAgICBpZiAobWF0Y2gudmFsdWUgPT0gcmVzdWx0TWFwW2xvd2VyS2V5XS5vcmlnaW5hbF92YWx1ZSkge1xuICAgICAgICAgIGlmICghbWF0Y2hlZEtleXNbbWF0Y2gudmFsdWVdKSB7XG4gICAgICAgICAgICBpZiAoIWZpcnN0VmFsKSB7XG4gICAgICAgICAgICAgIGtleXNFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcsICcpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlyc3RWYWwgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlZEtleXNbbWF0Y2gudmFsdWVdID0gdHJ1ZVxuICAgICAgICAgICAga2V5RWxWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGtleUVsVmFsLmlubmVySFRNTCA9IHJlc3VsdE1hcFtsb3dlcktleV0uZWxlbWVudC5pbm5lckhUTUxcbiAgICAgICAgICAgIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAgIGtleUVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxvd2VyS2V5KSArICcvJyArIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaC52YWx1ZSkgKyAnLycpXG4gICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsVmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5RWxlbWVudCkge1xuICAgICAgICAgIGtleXNFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsZW1lbnQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHJlc3VsdEVsZW1lbnQuYXBwZW5kQ2hpbGQoa2V5c0VsZW1lbnQpXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuYXBwZW5kQ2hpbGQocmVzdWx0RWxlbWVudClcbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IHtcbiAgZG9DbG9zZVNlYXJjaCxcbiAgZG9TZWFyY2gsXG4gIGV4ZWN1dGVTZWFyY2gsXG4gIGNyZWF0ZU1hcmssXG4gIG1hcmtNYXRjaGVzLFxuICBwb3B1bGF0ZVJlc3VsdHNcbn1cbiJdLCJuYW1lcyI6WyJzdW1tYXJ5SW5jbHVkZSIsImZ1c2VLZXlPcHRpb25zIiwiZGlzdGFuY2UiLCJmaW5kQWxsTWF0Y2hlcyIsInNob3VsZFNvcnQiLCJpbmNsdWRlTWF0Y2hlcyIsIm1pbk1hdGNoQ2hhckxlbmd0aCIsInRocmVzaG9sZCIsImRvQ2xvc2VTZWFyY2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJpbm5lckhUTUwiLCJkb1NlYXJjaCIsInNlYXJjaFF1ZXJ5Iiwic2VhcmNoX2Zvcm0iLCJzIiwidmFsdWUiLCJleGVjdXRlU2VhcmNoIiwicGFyYSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImZ1c2UiLCJyZXN1bHQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiaW5kZXh1cmwiLCJvbmxvYWQiLCJzdGF0dXMiLCJoYXZlUmVzdWx0IiwianNvbnByZXAiLCJyZXNwb25zZVRleHQiLCJyZXBsYWNlIiwicGFnZXMiLCJKU09OIiwicGFyc2UiLCJzZWFyY2hGdXNlT3B0aW9ucyIsImtleXMiLCJuYW1lIiwid2VpZ2h0IiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwiRnVzZSIsInNlYXJjaCIsInBvcHVsYXRlS2V5UmVzdWx0cyIsInBvcHVsYXRlUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJvbmVycm9yIiwic2VuZCIsImNyZWF0ZU1hcmsiLCJtYXJrZWwiLCJzcGFuZWwiLCJzZXRBdHRyaWJ1dGUiLCJtYXJrTWF0Y2hlcyIsIm1hdGNoZXMiLCJuZXdSZXN1bHQiLCJmb3JFYWNoIiwiaXRlbXMiLCJudW0iLCJuZXdFbGVtZW50IiwicHJldkluZGV4RW5kIiwiaW5kaWNlcyIsImluZGV4cGFpciIsImluZGV4bnVtIiwia2V5Iiwic3Vic3RyaW5nIiwibWF0Y2hTdHJpbmciLCJuZXdTdWJTdHJpbmciLCJjcmVhdGVUZXh0Tm9kZSIsInJlc3VsdHMiLCJiYXNlUmVzTnVtIiwicmVzbnVtIiwicmVzdWx0RWxlbWVudCIsImlkIiwidG9TdHJpbmciLCJpdGVtIiwiY29udGVudCIsInJlc3VsdE1hcCIsInJlc3VsdEtleXMiLCJsb3dlcktleSIsInRvTG93ZXJDYXNlIiwia2V5RWxlbWVudCIsInJlc3VsdFRpdGxlTGluayIsInBlcm1hbGluayIsImVsZW1lbnQiLCJpbm5uZXJIVE1MIiwia2V5RWxWYWwiLCJmaXJzdFZhbCIsInRjdmFsIiwidGNrZXkiLCJvcmlnaW5hbF92YWx1ZSIsInRpdGxlIiwia2V5c0VsZW1lbnQiLCJtYXRjaGVkS2V5cyIsIm1hdGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFBQTtFQUVBLElBQUlBLGNBQWMsR0FBRyxJQUFyQjtFQUNBLElBQUlDLGNBQWMsR0FBRztFQUFFO0VBQ3JCQyxFQUFBQSxRQUFRLEVBQUUsSUFEUztFQUVuQkMsRUFBQUEsY0FBYyxFQUFFLElBRkc7RUFHbkJDLEVBQUFBLFVBQVUsRUFBRSxJQUhPO0VBSW5CQyxFQUFBQSxjQUFjLEVBQUUsSUFKRztFQUtuQkMsRUFBQUEsa0JBQWtCLEVBQUUsQ0FMRDtFQU1uQkMsRUFBQUEsU0FBUyxFQUFFLEdBTlE7O0VBQUEsQ0FBckI7O0VBU0EsU0FB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
