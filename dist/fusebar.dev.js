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

/***/ "./_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.js":
/*!*****************************************************************!*\
  !*** ./_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
 * Fuse.js v5.0.2-beta - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2020 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var _require = __webpack_require__(1),
          BitapSearch = _require.BitapSearch,
          ExtendedSearch = _require.ExtendedSearch,
          NGramSearch = _require.NGramSearch;

      var _require2 = __webpack_require__(22),
          isArray = _require2.isArray,
          isDefined = _require2.isDefined,
          isString = _require2.isString,
          isNumber = _require2.isNumber,
          isObject = _require2.isObject;

      var get = __webpack_require__(23);

      var _require3 = __webpack_require__(24),
          createIndex = _require3.createIndex,
          KeyStore = _require3.KeyStore;

      var _require4 = __webpack_require__(27),
          transformMatches = _require4.transformMatches,
          transformScore = _require4.transformScore;

      var _require5 = __webpack_require__(7),
          MAX_BITS = _require5.MAX_BITS; // // Will print to the console. Useful for debugging.
      // function debug() {
      //   if (Fuse.verbose) {
      //     console.log(...arguments)
      //     // const util = require('util')
      //     // console.log(util.inspect(...arguments, false, null, true /* enable colors */))
      //   }
      // }
      // function debugTime(value) {
      //   if (Fuse.verboseTime) {
      //     console.time(value)
      //   }
      // }
      // function debugTimeEnd(value) {
      //   if (Fuse.verboseTime) {
      //     console.timeEnd(value)
      //   }
      // }


      var FuseOptions = {
        // When true, the algorithm continues searching to the end of the input even if a perfect
        // match is found before the end of the same input.
        isCaseSensitive: false,
        // Determines how close the match must be to the fuzzy location (specified above).
        // An exact letter match which is 'distance' characters away from the fuzzy location
        // would score as a complete mismatch. A distance of '0' requires the match be at
        // the exact location specified, a threshold of '1000' would require a perfect match
        // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
        distance: 100,
        // Minimum number of characters that must be matched before a result is considered a match
        findAllMatches: false,
        // The get function to use when fetching an object's properties.
        // The default will search nested paths *ie foo.bar.baz*
        getFn: get,
        includeMatches: false,
        includeScore: false,
        // List of properties that will be searched. This also supports nested properties.
        keys: [],
        // Approximately where in the text is the pattern expected to be found?
        location: 0,
        // Minimum number of characters that must be matched before a result is considered a match
        minMatchCharLength: 1,
        // Whether to sort the result list, by score
        shouldSort: true,
        // Default sort function
        sortFn: function sortFn(a, b) {
          return a.score - b.score;
        },
        // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
        // (of both letters and location), a threshold of '1.0' would match anything.
        threshold: 0.6,
        // Enabled extended-searching
        useExtendedSearch: false
      };

      var Fuse = /*#__PURE__*/function () {
        function Fuse(list) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FuseOptions;
          var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, Fuse);

          this.options = _objectSpread({}, FuseOptions, {}, options); // `caseSensitive` is deprecated, use `isCaseSensitive` instead

          this.options.isCaseSensitive = options.caseSensitive;
          delete this.options.caseSensitive; // debugTime('Constructing')

          this._processKeys(this.options.keys);

          this.setCollection(list, index); // debugTimeEnd('Constructing')
        }

        _createClass(Fuse, [{
          key: "setCollection",
          value: function setCollection(list) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            this.list = list;
            this.listIsStringArray = isString(list[0]);

            if (index) {
              this.setIndex(index);
            } else {
              // debugTime('Process index')
              this.setIndex(this._createIndex()); // debugTimeEnd('Process index')
            }
          }
        }, {
          key: "setIndex",
          value: function setIndex(listIndex) {
            this._indexedList = listIndex; // debug(listIndex)
          }
        }, {
          key: "_processKeys",
          value: function _processKeys(keys) {
            this._keyStore = new KeyStore(keys); // debug('Process Keys')

            if (Fuse.verbose) {// debug(this._keyStore.toJSON())
            }
          }
        }, {
          key: "_createIndex",
          value: function _createIndex() {
            return createIndex(this._keyStore.keys(), this.list, {
              getFn: this.options.getFn
            });
          }
        }, {
          key: "search",
          value: function search(pattern) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              limit: false
            }; // debug(`--------- Search pattern: "${pattern}"`)

            var _this$options = this.options,
                useExtendedSearch = _this$options.useExtendedSearch,
                shouldSort = _this$options.shouldSort;
            var searcher = null;

            if (useExtendedSearch) {
              searcher = new ExtendedSearch(pattern, this.options);
            } else if (pattern.length > MAX_BITS) {
              searcher = new NGramSearch(pattern, this.options);
            } else {
              searcher = new BitapSearch(pattern, this.options);
            } // debugTime('Search time');


            var results = this._searchUsing(searcher); // debugTimeEnd('Search time');
            // debugTime('Compute score time');


            this._computeScore(results); // debugTimeEnd('Compute score time');


            if (shouldSort) {
              this._sort(results);
            }

            if (opts.limit && isNumber(opts.limit)) {
              results = results.slice(0, opts.limit);
            }

            return this._format(results);
          }
        }, {
          key: "_searchUsing",
          value: function _searchUsing(searcher) {
            var list = this._indexedList;
            var results = [];
            var includeMatches = this.options.includeMatches; // List is Array<String>

            if (this.listIsStringArray) {
              // Iterate over every string in the list
              for (var i = 0, len = list.length; i < len; i += 1) {
                var value = list[i];
                var text = value.$,
                    idx = value.idx;

                if (!isDefined(text)) {
                  continue;
                }

                var searchResult = searcher.searchIn(value);
                var isMatch = searchResult.isMatch,
                    score = searchResult.score;

                if (!isMatch) {
                  continue;
                }

                var match = {
                  score: score,
                  value: text
                };

                if (includeMatches) {
                  match.indices = searchResult.matchedIndices;
                }

                results.push({
                  item: text,
                  idx: idx,
                  matches: [match]
                });
              }
            } else {
              // List is Array<Object>
              var keyNames = this._keyStore.keys();

              var keysLen = this._keyStore.count();

              for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
                var _list$_i = list[_i],
                    item = _list$_i.$,
                    _idx = _list$_i.idx;

                if (!isDefined(item)) {
                  continue;
                }

                var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

                for (var j = 0; j < keysLen; j += 1) {
                  var key = keyNames[j];
                  var _value = item[key]; // debug(` Key: ${key === '' ? '--' : key}`)

                  if (!isDefined(_value)) {
                    continue;
                  }

                  if (isArray(_value)) {
                    for (var k = 0, _len2 = _value.length; k < _len2; k += 1) {
                      var arrItem = _value[k];
                      var _text = arrItem.$;
                      var _idx2 = arrItem.idx;

                      if (!isDefined(_text)) {
                        continue;
                      }

                      var _searchResult = searcher.searchIn(arrItem);

                      var _isMatch = _searchResult.isMatch,
                          _score = _searchResult.score; // debug(`Full text: "${text}", score: ${score}`)

                      if (!_isMatch) {
                        continue;
                      }

                      var _match = {
                        score: _score,
                        key: key,
                        value: _text,
                        idx: _idx2
                      };

                      if (includeMatches) {
                        _match.indices = _searchResult.matchedIndices;
                      }

                      matches.push(_match);
                    }
                  } else {
                    var _text2 = _value.$;

                    var _searchResult2 = searcher.searchIn(_value);

                    var _isMatch2 = _searchResult2.isMatch,
                        _score2 = _searchResult2.score; // debug(`Full text: "${text}", score: ${score}`)

                    if (!_isMatch2) {
                      continue;
                    }

                    var _match2 = {
                      score: _score2,
                      key: key,
                      value: _text2
                    };

                    if (includeMatches) {
                      _match2.indices = _searchResult2.matchedIndices;
                    }

                    matches.push(_match2);
                  }
                }

                if (matches.length) {
                  results.push({
                    idx: _idx,
                    item: item,
                    matches: matches
                  });
                }
              }
            } // debug("--------- RESULTS -----------")
            // debug(results)
            // debug("-----------------------------")


            return results;
          }
        }, {
          key: "_computeScore",
          value: function _computeScore(results) {
            // debug('Computing score: ')
            for (var i = 0, len = results.length; i < len; i += 1) {
              var result = results[i];
              var matches = result.matches;
              var scoreLen = matches.length;
              var totalWeightedScore = 1; // let bestScore = -1

              for (var j = 0; j < scoreLen; j += 1) {
                var item = matches[j];
                var key = item.key;

                var keyWeight = this._keyStore.get(key, 'weight');

                var weight = keyWeight || 1;
                var score = item.score === 0 && keyWeight && keyWeight > 0 ? Number.EPSILON : item.score;
                totalWeightedScore *= Math.pow(score, weight); // Keep track of the best score.. just in case
                // Actually, we're not really using it.. but need to think of a way to incorporate this
                // bestScore = bestScore == -1 ? item.score : Math.min(bestScore, item.score)
              }

              result.score = totalWeightedScore; // result.$score = bestScore
              // debug(result)
            }
          }
        }, {
          key: "_sort",
          value: function _sort(results) {
            // debug('Sorting....')
            results.sort(this.options.sortFn);
          }
        }, {
          key: "_format",
          value: function _format(results) {
            var finalOutput = [];
            var _this$options2 = this.options,
                includeMatches = _this$options2.includeMatches,
                includeScore = _this$options2.includeScore; // if (Fuse.verbose) {
            //   let cache = []
            //   debug('Output:', JSON.stringify(results, (key, value) => {
            //     if (isObject(value) && isDefined(value)) {
            //       if (cache.indexOf(value) !== -1) {
            //         // Circular reference found, discard key
            //         return
            //       }
            //       // Store value in our collection
            //       cache.push(value)
            //     }
            //     return value
            //   }, 2))
            //   cache = null
            // }

            var transformers = [];
            if (includeMatches) transformers.push(transformMatches);
            if (includeScore) transformers.push(transformScore); // debug("===== RESULTS ======")
            // debug(results)
            // debug("====================")

            for (var i = 0, len = results.length; i < len; i += 1) {
              var result = results[i]; // debug('result', result)

              var idx = result.idx;
              var data = {
                item: this.list[idx],
                refIndex: idx
              };

              if (transformers.length) {
                for (var j = 0, _len3 = transformers.length; j < _len3; j += 1) {
                  transformers[j](result, data);
                }
              }

              finalOutput.push(data);
            }

            return finalOutput;
          }
        }]);

        return Fuse;
      }();

      Fuse.createIndex = createIndex;
      module.exports = Fuse;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        BitapSearch: __webpack_require__(2),
        ExtendedSearch: __webpack_require__(8),
        NGramSearch: __webpack_require__(15)
      };
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var bitapSearch = __webpack_require__(3);

      var patternAlphabet = __webpack_require__(6);

      var _require = __webpack_require__(7),
          MAX_BITS = _require.MAX_BITS;

      var BitapSearch = /*#__PURE__*/function () {
        function BitapSearch(pattern, _ref) {
          var _ref$location = _ref.location,
              location = _ref$location === void 0 ? 0 : _ref$location,
              _ref$distance = _ref.distance,
              distance = _ref$distance === void 0 ? 100 : _ref$distance,
              _ref$threshold = _ref.threshold,
              threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
              _ref$isCaseSensitive = _ref.isCaseSensitive,
              isCaseSensitive = _ref$isCaseSensitive === void 0 ? false : _ref$isCaseSensitive,
              _ref$findAllMatches = _ref.findAllMatches,
              findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
              _ref$minMatchCharLeng = _ref.minMatchCharLength,
              minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng,
              _ref$includeMatches = _ref.includeMatches,
              includeMatches = _ref$includeMatches === void 0 ? false : _ref$includeMatches;

          _classCallCheck(this, BitapSearch);

          this.options = {
            location: location,
            distance: distance,
            threshold: threshold,
            isCaseSensitive: isCaseSensitive,
            findAllMatches: findAllMatches,
            includeMatches: includeMatches,
            minMatchCharLength: minMatchCharLength
          };

          if (pattern.length > MAX_BITS) {
            throw new Error("Pattern length exceeds max of ".concat(MAX_BITS, "."));
          }

          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.patternAlphabet = patternAlphabet(this.pattern);
        }

        _createClass(BitapSearch, [{
          key: "searchIn",
          value: function searchIn(value) {
            var text = value.$;
            var _this$options = this.options,
                isCaseSensitive = _this$options.isCaseSensitive,
                includeMatches = _this$options.includeMatches;

            if (!isCaseSensitive) {
              text = text.toLowerCase();
            } // Exact match


            if (this.pattern === text) {
              var result = {
                isMatch: true,
                score: 0
              };

              if (includeMatches) {
                result.matchedIndices = [[0, text.length - 1]];
              }

              return result;
            } // Otherwise, use Bitap algorithm


            var _this$options2 = this.options,
                location = _this$options2.location,
                distance = _this$options2.distance,
                threshold = _this$options2.threshold,
                findAllMatches = _this$options2.findAllMatches,
                minMatchCharLength = _this$options2.minMatchCharLength;
            return bitapSearch(text, this.pattern, this.patternAlphabet, {
              location: location,
              distance: distance,
              threshold: threshold,
              findAllMatches: findAllMatches,
              minMatchCharLength: minMatchCharLength,
              includeMatches: includeMatches
            });
          }
        }]);

        return BitapSearch;
      }();

      module.exports = BitapSearch;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      var bitapScore = __webpack_require__(4);

      var matchedIndices = __webpack_require__(5);

      module.exports = function (text, pattern, patternAlphabet, _ref) {
        var _ref$location = _ref.location,
            location = _ref$location === void 0 ? 0 : _ref$location,
            _ref$distance = _ref.distance,
            distance = _ref$distance === void 0 ? 100 : _ref$distance,
            _ref$threshold = _ref.threshold,
            threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
            _ref$findAllMatches = _ref.findAllMatches,
            findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
            _ref$minMatchCharLeng = _ref.minMatchCharLength,
            minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng,
            _ref$includeMatches = _ref.includeMatches,
            includeMatches = _ref$includeMatches === void 0 ? false : _ref$includeMatches;
        var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

        var textLen = text.length; // Handle the case when location > text.length

        var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

        var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

        var bestLocation = text.indexOf(pattern, expectedLocation); // a mask of the matches

        var matchMask = [];

        for (var i = 0; i < textLen; i += 1) {
          matchMask[i] = 0;
        }

        if (bestLocation !== -1) {
          var score = bitapScore(pattern, {
            errors: 0,
            currentLocation: bestLocation,
            expectedLocation: expectedLocation,
            distance: distance
          });
          currentThreshold = Math.min(score, currentThreshold); // What about in the other direction? (speed up)

          bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

          if (bestLocation !== -1) {
            var _score = bitapScore(pattern, {
              errors: 0,
              currentLocation: bestLocation,
              expectedLocation: expectedLocation,
              distance: distance
            });

            currentThreshold = Math.min(_score, currentThreshold);
          }
        } // Reset the best location


        bestLocation = -1;
        var lastBitArr = [];
        var finalScore = 1;
        var binMax = patternLen + textLen;
        var mask = 1 << (patternLen <= 31 ? patternLen - 1 : 30);

        for (var _i = 0; _i < patternLen; _i += 1) {
          // Scan for the best match; each iteration allows for one more error.
          // Run a binary search to determine how far from the match location we can stray
          // at this error level.
          var binMin = 0;
          var binMid = binMax;

          while (binMin < binMid) {
            var _score3 = bitapScore(pattern, {
              errors: _i,
              currentLocation: expectedLocation + binMid,
              expectedLocation: expectedLocation,
              distance: distance
            });

            if (_score3 <= currentThreshold) {
              binMin = binMid;
            } else {
              binMax = binMid;
            }

            binMid = Math.floor((binMax - binMin) / 2 + binMin);
          } // Use the result from this iteration as the maximum for the next.


          binMax = binMid;
          var start = Math.max(1, expectedLocation - binMid + 1);
          var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

          var bitArr = Array(finish + 2);
          bitArr[finish + 1] = (1 << _i) - 1;

          for (var j = finish; j >= start; j -= 1) {
            var currentLocation = j - 1;
            var charMatch = patternAlphabet[text.charAt(currentLocation)];

            if (charMatch) {
              matchMask[currentLocation] = 1;
            } // First pass: exact match


            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

            if (_i !== 0) {
              bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            }

            if (bitArr[j] & mask) {
              finalScore = bitapScore(pattern, {
                errors: _i,
                currentLocation: currentLocation,
                expectedLocation: expectedLocation,
                distance: distance
              }); // This match will almost certainly be better than any existing match.
              // But check anyway.

              if (finalScore <= currentThreshold) {
                // Indeed it is
                currentThreshold = finalScore;
                bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

                if (bestLocation <= expectedLocation) {
                  break;
                } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


                start = Math.max(1, 2 * expectedLocation - bestLocation);
              }
            }
          } // No hope for a (better) match at greater error levels.


          var _score2 = bitapScore(pattern, {
            errors: _i + 1,
            currentLocation: expectedLocation,
            expectedLocation: expectedLocation,
            distance: distance
          });

          if (_score2 > currentThreshold) {
            break;
          }

          lastBitArr = bitArr;
        }

        var result = {
          isMatch: bestLocation >= 0,
          // Count exact matches (those with a score of 0) to be "almost" exact
          score: !finalScore ? 0.001 : finalScore
        };

        if (includeMatches) {
          result.matchedIndices = matchedIndices(matchMask, minMatchCharLength);
        }

        return result;
      };
      /***/

    },
    /* 4 */

    /***/
    function (module, exports) {
      module.exports = function (pattern, _ref) {
        var _ref$errors = _ref.errors,
            errors = _ref$errors === void 0 ? 0 : _ref$errors,
            _ref$currentLocation = _ref.currentLocation,
            currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
            _ref$expectedLocation = _ref.expectedLocation,
            expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
            _ref$distance = _ref.distance,
            distance = _ref$distance === void 0 ? 100 : _ref$distance;
        var accuracy = errors / pattern.length;
        var proximity = Math.abs(expectedLocation - currentLocation);

        if (!distance) {
          // Dodge divide by zero error.
          return proximity ? 1.0 : accuracy;
        }

        return accuracy + proximity / distance;
      };
      /***/

    },
    /* 5 */

    /***/
    function (module, exports) {
      module.exports = function () {
        var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var matchedIndices = [];
        var start = -1;
        var end = -1;
        var i = 0;

        for (var len = matchmask.length; i < len; i += 1) {
          var match = matchmask[i];

          if (match && start === -1) {
            start = i;
          } else if (!match && start !== -1) {
            end = i - 1;

            if (end - start + 1 >= minMatchCharLength) {
              matchedIndices.push([start, end]);
            }

            start = -1;
          }
        } // (i-1 - start) + 1 => i - start


        if (matchmask[i - 1] && i - start >= minMatchCharLength) {
          matchedIndices.push([start, i - 1]);
        }

        return matchedIndices;
      };
      /***/

    },
    /* 6 */

    /***/
    function (module, exports) {
      module.exports = function (pattern) {
        var mask = {};
        var len = pattern.length;

        for (var i = 0; i < len; i += 1) {
          mask[pattern.charAt(i)] = 0;
        }

        for (var _i = 0; _i < len; _i += 1) {
          mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
        }

        return mask;
      };
      /***/

    },
    /* 7 */

    /***/
    function (module, exports) {
      // Machine word size
      module.exports.MAX_BITS = 32;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var exactMatch = __webpack_require__(9);

      var inverseExactMatch = __webpack_require__(10);

      var prefixExactMatch = __webpack_require__(11);

      var inversePrefixExactMatch = __webpack_require__(12);

      var suffixExactMatch = __webpack_require__(13);

      var inverseSuffixExactMatch = __webpack_require__(14);

      var BitapSearch = __webpack_require__(2); // Return a 2D array representation of the query, for simpler parsing.
      // Example:
      // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]


      var queryfy = function queryfy(pattern) {
        return pattern.split('|').map(function (item) {
          return item.trim().split(/ +/g);
        });
      };
      /**
       * Command-like searching
       * ======================
       *
       * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
       * search in a given text.
       *
       * Search syntax:
       *
       * | Token       | Match type                 | Description                            |
       * | ----------- | -------------------------- | -------------------------------------- |
       * | `jscript`   | fuzzy-match                | Items that match `jscript`             |
       * | `'python`   | exact-match                | Items that include `python`            |
       * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
       * | `^java`     | prefix-exact-match         | Items that start with `java`           |
       * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
       * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
       * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
       *
       * A single pipe character acts as an OR operator. For example, the following
       * query matches entries that start with `core` and end with either`go`, `rb`,
       * or`py`.
       *
       * ```
       * ^core go$ | rb$ | py$
       * ```
       */


      var ExtendedSearch = /*#__PURE__*/function () {
        function ExtendedSearch(pattern, options) {
          _classCallCheck(this, ExtendedSearch);

          var isCaseSensitive = options.isCaseSensitive;
          this.options = options;
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.query = queryfy(this.pattern); // A <pattern>:<BitapSearch> key-value pair for optimizing searching

          this._fuzzyCache = {};
        }

        _createClass(ExtendedSearch, [{
          key: "searchIn",
          value: function searchIn(value) {
            var text = value.$;
            var query = this.query;
            text = this.options.isCaseSensitive ? text : text.toLowerCase();
            var matchFound = false;

            for (var i = 0, qLen = query.length; i < qLen; i += 1) {
              var parts = query[i];
              var result = null;
              matchFound = true;

              for (var j = 0, pLen = parts.length; j < pLen; j += 1) {
                var token = parts[j];
                result = this._search(token, text);

                if (!result.isMatch) {
                  // AND condition, short-circuit and move on to next part
                  matchFound = false;
                  break;
                }
              } // OR condition, so if TRUE, return


              if (matchFound) {
                return result;
              }
            } // Nothing was matched


            return {
              isMatch: false,
              score: 1
            };
          }
        }, {
          key: "_search",
          value: function _search(pattern, text) {
            if (exactMatch.isForPattern(pattern)) {
              return exactMatch.match(pattern, text);
            } else if (prefixExactMatch.isForPattern(pattern)) {
              return prefixExactMatch.match(pattern, text);
            } else if (inversePrefixExactMatch.isForPattern(pattern)) {
              return inversePrefixExactMatch.match(pattern, text);
            } else if (inverseSuffixExactMatch.isForPattern(pattern)) {
              return inverseSuffixExactMatch.match(pattern, text);
            } else if (suffixExactMatch.isForPattern(pattern)) {
              return suffixExactMatch.match(pattern, text);
            } else if (inverseExactMatch.isForPattern(pattern)) {
              return inverseExactMatch.match(pattern, text);
            } else {
              var searcher = this._fuzzyCache[pattern];

              if (!searcher) {
                searcher = new BitapSearch(pattern, this.options);
                this._fuzzyCache[pattern] = searcher;
              }

              return searcher.search(text);
            }
          }
        }]);

        return ExtendedSearch;
      }();

      module.exports = ExtendedSearch;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports) {
      // Token: 'file
      // Match type: exact-match
      // Description: Items that include `file`
      var isForPattern = function isForPattern(pattern) {
        return pattern.charAt(0) == "'";
      };

      var sanitize = function sanitize(pattern) {
        return pattern.substr(1);
      };

      var match = function match(pattern, text) {
        var sanitizedPattern = sanitize(pattern);
        var index = text.indexOf(sanitizedPattern);
        var isMatch = index > -1;
        return {
          isMatch: isMatch,
          score: 0
        };
      };

      module.exports = {
        isForPattern: isForPattern,
        sanitize: sanitize,
        match: match
      };
      /***/
    },
    /* 10 */

    /***/
    function (module, exports) {
      // Token: !fire
      // Match type: inverse-exact-match
      // Description: Items that do not include `fire`
      var isForPattern = function isForPattern(pattern) {
        return pattern.charAt(0) == '!';
      };

      var sanitize = function sanitize(pattern) {
        return pattern.substr(1);
      };

      var match = function match(pattern, text) {
        var sanitizedPattern = sanitize(pattern);
        var isMatch = text.indexOf(sanitizedPattern) === -1;
        return {
          isMatch: isMatch,
          score: 0
        };
      };

      module.exports = {
        isForPattern: isForPattern,
        sanitize: sanitize,
        match: match
      };
      /***/
    },
    /* 11 */

    /***/
    function (module, exports) {
      // Token: ^file
      // Match type: prefix-exact-match
      // Description: Items that start with `file`
      var isForPattern = function isForPattern(pattern) {
        return pattern.charAt(0) == '^';
      };

      var sanitize = function sanitize(pattern) {
        return pattern.substr(1);
      };

      var match = function match(pattern, text) {
        var sanitizedPattern = sanitize(pattern);
        var isMatch = text.startsWith(sanitizedPattern);
        return {
          isMatch: isMatch,
          score: 0
        };
      };

      module.exports = {
        isForPattern: isForPattern,
        sanitize: sanitize,
        match: match
      };
      /***/
    },
    /* 12 */

    /***/
    function (module, exports) {
      // Token: !^fire
      // Match type: inverse-prefix-exact-match
      // Description: Items that do not start with `fire`
      var isForPattern = function isForPattern(pattern) {
        return pattern.charAt(0) == '!' && pattern.charAt(1) == '^';
      };

      var sanitize = function sanitize(pattern) {
        return pattern.substr(2);
      };

      var match = function match(pattern, text) {
        var sanitizedPattern = sanitize(pattern);
        var isMatch = !text.startsWith(sanitizedPattern);
        return {
          isMatch: isMatch,
          score: 0
        };
      };

      module.exports = {
        isForPattern: isForPattern,
        sanitize: sanitize,
        match: match
      };
      /***/
    },
    /* 13 */

    /***/
    function (module, exports) {
      // Token: .file$
      // Match type: suffix-exact-match
      // Description: Items that end with `.file`
      var isForPattern = function isForPattern(pattern) {
        return pattern.charAt(pattern.length - 1) == '$';
      };

      var sanitize = function sanitize(pattern) {
        return pattern.substr(0, pattern.length - 1);
      };

      var match = function match(pattern, text) {
        var sanitizedPattern = sanitize(pattern);
        var isMatch = text.endsWith(sanitizedPattern);
        return {
          isMatch: isMatch,
          score: 0
        };
      };

      module.exports = {
        isForPattern: isForPattern,
        sanitize: sanitize,
        match: match
      };
      /***/
    },
    /* 14 */

    /***/
    function (module, exports) {
      // Token: !.file$
      // Match type: inverse-suffix-exact-match
      // Description: Items that do not end with `.file`
      var isForPattern = function isForPattern(pattern) {
        return pattern.charAt(0) == '!' && pattern.charAt(pattern.length - 1) == '$';
      };

      var sanitize = function sanitize(pattern) {
        return pattern.substring(1, pattern.length - 1);
      };

      var match = function match(pattern, text) {
        var sanitizedPattern = sanitize(pattern);
        var isMatch = !text.endsWith(sanitizedPattern);
        return {
          isMatch: isMatch,
          score: 0
        };
      };

      module.exports = {
        isForPattern: isForPattern,
        sanitize: sanitize,
        match: match
      };
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var ngram = __webpack_require__(16);

      var _require = __webpack_require__(17),
          jaccardDistance = _require.jaccardDistance;

      var NGramSearch = /*#__PURE__*/function () {
        function NGramSearch(pattern) {
          _classCallCheck(this, NGramSearch); // Create the ngram, and sort it


          this.patternNgram = ngram(pattern, {
            sort: true
          });
        }

        _createClass(NGramSearch, [{
          key: "searchIn",
          value: function searchIn(value) {
            var textNgram = value.ng;

            if (!textNgram) {
              textNgram = ngram(value.$, {
                sort: true
              });
              value.ng = textNgram;
            }

            var jacardResult = jaccardDistance(this.patternNgram, textNgram);
            return {
              score: jacardResult,
              isMatch: jacardResult < 1
            };
          }
        }]);

        return NGramSearch;
      }();

      module.exports = NGramSearch;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports) {
      var NGRAM_LEN = 3;

      module.exports = function (text, _ref) {
        var _ref$n = _ref.n,
            n = _ref$n === void 0 ? NGRAM_LEN : _ref$n,
            _ref$pad = _ref.pad,
            pad = _ref$pad === void 0 ? true : _ref$pad,
            _ref$sort = _ref.sort,
            sort = _ref$sort === void 0 ? false : _ref$sort;
        var nGrams = [];

        if (text === null || text === undefined) {
          return nGrams;
        }

        text = text.toLowerCase();

        if (pad) {
          text = " ".concat(text, " ");
        }

        var index = text.length - n + 1;

        if (index < 1) {
          return nGrams;
        }

        while (index--) {
          nGrams[index] = text.substr(index, n);
        }

        if (sort) {
          nGrams.sort(function (a, b) {
            return a == b ? 0 : a < b ? -1 : 1;
          });
        }

        return nGrams;
      };
      /***/

    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        jaccardDistance: __webpack_require__(18)
      };
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      var _require = __webpack_require__(19),
          union = _require.union,
          intersection = _require.intersection;

      module.exports = function (nGram1, nGram2) {
        var nGramUnion = union(nGram1, nGram2);
        var nGramIntersection = intersection(nGram1, nGram2);
        return 1 - nGramIntersection.length / nGramUnion.length;
      };
      /***/

    },
    /* 19 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        union: __webpack_require__(20),
        intersection: __webpack_require__(21)
      };
      /***/
    },
    /* 20 */

    /***/
    function (module, exports) {
      // Assumes arrays are sorted
      module.exports = function (arr1, arr2) {
        var result = [];
        var i = 0;
        var j = 0;

        while (i < arr1.length && j < arr2.length) {
          var item1 = arr1[i];
          var item2 = arr2[j];

          if (item1 < item2) {
            result.push(item1);
            i += 1;
          } else if (item2 < item1) {
            result.push(item2);
            j += 1;
          } else {
            result.push(item2);
            i += 1;
            j += 1;
          }
        }

        while (i < arr1.length) {
          result.push(arr1[i]);
          i += 1;
        }

        while (j < arr2.length) {
          result.push(arr2[j]);
          j += 1;
        }

        return result;
      };
      /***/

    },
    /* 21 */

    /***/
    function (module, exports) {
      // Assumes arrays are sorted
      module.exports = function (arr1, arr2) {
        var result = [];
        var i = 0;
        var j = 0;

        while (i < arr1.length && j < arr2.length) {
          var item1 = arr1[i];
          var item2 = arr2[j];

          if (item1 == item2) {
            result.push(item1);
            i += 1;
            j += 1;
          } else if (item1 < item2) {
            i += 1;
          } else if (item1 > item2) {
            j += 1;
          } else {
            i += 1;
            j += 1;
          }
        }

        return result;
      };
      /***/

    },
    /* 22 */

    /***/
    function (module, exports) {
      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      var INFINITY = 1 / 0;

      var isArray = function isArray(value) {
        return !Array.isArray ? Object.prototype.toString.call(value) === '[object Array]' : Array.isArray(value);
      }; // Adapted from:
      // https://github.com/lodash/lodash/blob/f4ca396a796435422bd4fd41fadbd225edddf175/.internal/baseToString.js


      var baseToString = function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
          return value;
        }

        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
      };

      var toString = function toString(value) {
        return value == null ? '' : baseToString(value);
      };

      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return typeof value === 'number';
      };

      var isObject = function isObject(value) {
        return _typeof(value) === 'object';
      };

      var isDefined = function isDefined(value) {
        return value !== undefined && value !== null;
      };

      module.exports = {
        isDefined: isDefined,
        isArray: isArray,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        toString: toString
      };
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      var _require = __webpack_require__(22),
          isDefined = _require.isDefined,
          isString = _require.isString,
          isNumber = _require.isNumber,
          isArray = _require.isArray,
          toString = _require.toString;

      module.exports = function (obj, path) {
        var list = [];
        var arr = false;

        var _get = function _get(obj, path) {
          if (!path) {
            // If there's no path left, we've gotten to the object we care about.
            list.push(obj);
          } else {
            var dotIndex = path.indexOf('.');
            var key = path;
            var remaining = null;

            if (dotIndex !== -1) {
              key = path.slice(0, dotIndex);
              remaining = path.slice(dotIndex + 1);
            }

            var value = obj[key];

            if (isDefined(value)) {
              if (!remaining && (isString(value) || isNumber(value))) {
                list.push(toString(value));
              } else if (isArray(value)) {
                arr = true; // Search each item in the array.

                for (var i = 0, len = value.length; i < len; i += 1) {
                  _get(value[i], remaining);
                }
              } else if (remaining) {
                // An object. Recurse further.
                _get(value, remaining);
              }
            }
          }
        };

        _get(obj, path);

        if (arr) {
          return list;
        }

        return list[0];
      };
      /***/

    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        createIndex: __webpack_require__(25),
        KeyStore: __webpack_require__(26)
      };
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      var _require = __webpack_require__(22),
          isArray = _require.isArray,
          isDefined = _require.isDefined,
          isString = _require.isString;

      var get = __webpack_require__(23);

      var ngram = __webpack_require__(16);

      module.exports = function (keys, list) {
        var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref$getFn = _ref.getFn,
            getFn = _ref$getFn === void 0 ? get : _ref$getFn,
            _ref$ngrams = _ref.ngrams,
            ngrams = _ref$ngrams === void 0 ? false : _ref$ngrams;

        var indexedList = []; // List is Array<String>

        if (isString(list[0])) {
          // Iterate over every string in the list
          for (var i = 0, len = list.length; i < len; i += 1) {
            var value = list[i];

            if (isDefined(value)) {
              // if (!isCaseSensitive) {
              //   value = value.toLowerCase()
              // }
              var record = {
                $: value,
                idx: i
              };

              if (ngrams) {
                record.ng = ngram(value, {
                  sort: true
                });
              }

              indexedList.push(record);
            }
          }
        } else {
          // List is Array<Object>
          var keysLen = keys.length;

          for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
            var item = list[_i];
            var _record = {
              idx: _i,
              $: {}
            }; // Iterate over every key (i.e, path), and fetch the value at that key

            for (var j = 0; j < keysLen; j += 1) {
              var key = keys[j];

              var _value = getFn(item, key);

              if (!isDefined(_value)) {
                continue;
              }

              if (isArray(_value)) {
                var subRecords = [];
                var stack = [{
                  arrayIndex: -1,
                  value: _value
                }];

                while (stack.length) {
                  var _stack$pop = stack.pop(),
                      arrayIndex = _stack$pop.arrayIndex,
                      _value2 = _stack$pop.value;

                  if (!isDefined(_value2)) {
                    continue;
                  }

                  if (isString(_value2)) {
                    // if (!isCaseSensitive) {
                    //   v = v.toLowerCase()
                    // }
                    var subRecord = {
                      $: _value2,
                      idx: arrayIndex
                    };

                    if (ngrams) {
                      subRecord.ng = ngram(_value2, {
                        sort: true
                      });
                    }

                    subRecords.push(subRecord);
                  } else if (isArray(_value2)) {
                    for (var k = 0, arrLen = _value2.length; k < arrLen; k += 1) {
                      stack.push({
                        arrayIndex: k,
                        value: _value2[k]
                      });
                    }
                  }
                }

                _record.$[key] = subRecords;
              } else {
                // if (!isCaseSensitive) {
                //   value = value.toLowerCase()
                // }
                var _subRecord = {
                  $: _value
                };

                if (ngrams) {
                  _subRecord.ng = ngram(_value, {
                    sort: true
                  });
                }

                _record.$[key] = _subRecord;
              }
            }

            indexedList.push(_record);
          }
        }

        return indexedList;
      };
      /***/

    },
    /* 26 */

    /***/
    function (module, exports, __webpack_require__) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var _require = __webpack_require__(22),
          isString = _require.isString;

      var KeyStore = /*#__PURE__*/function () {
        function KeyStore(keys) {
          _classCallCheck(this, KeyStore);

          this._keys = {};
          this._keyNames = [];
          this._length = keys.length;
          this._hasWeights = false; // Iterate over every key

          if (keys.length && isString(keys[0])) {
            for (var i = 0; i < this._length; i += 1) {
              var key = keys[i];
              this._keys[key] = {
                weight: 1
              };

              this._keyNames.push(key);
            }
          } else {
            var keyWeightsTotal = 0;

            for (var _i = 0; _i < this._length; _i += 1) {
              var _key = keys[_i];

              if (!_key.hasOwnProperty('name')) {
                throw new Error('Missing "name" property in key object');
              }

              var keyName = _key.name;

              this._keyNames.push(keyName);

              if (!_key.hasOwnProperty('weight')) {
                throw new Error('Missing "weight" property in key object');
              }

              var keyWeight = _key.weight;

              if (keyWeight <= 0 || keyWeight >= 1) {
                throw new Error('"weight" property in key must bein the range of (0, 1)');
              }

              this._keys[keyName] = {
                weight: keyWeight
              };
              keyWeightsTotal += keyWeight;
              this._hasWeights = true;
            }

            if (keyWeightsTotal > 1) {
              throw new Error('Total of keyWeights cannot exceed 1');
            }
          }
        }

        _createClass(KeyStore, [{
          key: "get",
          value: function get(key, name) {
            return this._keys[key] ? this._keys[key][name] : null;
          }
        }, {
          key: "keys",
          value: function keys() {
            return this._keyNames;
          }
        }, {
          key: "count",
          value: function count() {
            return this._length;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return JSON.stringify(this._keys);
          }
        }]);

        return KeyStore;
      }();

      module.exports = KeyStore;
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        transformMatches: __webpack_require__(28),
        transformScore: __webpack_require__(29)
      };
      /***/
    },
    /* 28 */

    /***/
    function (module, exports) {
      module.exports = function (result, data) {
        var matches = result.matches;
        data.matches = [];

        for (var i = 0, len = matches.length; i < len; i += 1) {
          var match = matches[i];

          if (match.indices.length === 0) {
            continue;
          }

          var obj = {
            indices: match.indices,
            value: match.value
          };

          if (match.key) {
            obj.key = match.key;
          }

          if (match.idx > -1) {
            obj.refIndex = match.idx;
          }

          data.matches.push(obj);
        }
      };
      /***/

    },
    /* 29 */

    /***/
    function (module, exports) {
      module.exports = function (result, data) {
        data.score = result.score;
      };
      /***/

    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global indexurl module require */
var Fuse = __webpack_require__(/*! ../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.js */ "./_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNlYmFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9mdXNlYmFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1c2ViYXIvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9mdXNlYmFyLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL2JpdGFwLXNlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL2JpdGFwLXNlYXJjaC9iaXRhcC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3NlYXJjaC9iaXRhcC1zZWFyY2gvYml0YXAtc2NvcmUuanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3NlYXJjaC9iaXRhcC1zZWFyY2gvYml0YXAtbWF0Y2hlZC1pbmRpY2VzLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvYml0YXAtc2VhcmNoL2JpdGFwLXBhdHRlcm4tYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3NlYXJjaC9iaXRhcC1zZWFyY2gvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvZXh0ZW5kZWQtc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvZXh0ZW5kZWQtc2VhcmNoL2V4YWN0LW1hdGNoLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvZXh0ZW5kZWQtc2VhcmNoL2ludmVyc2UtZXhhY3QtbWF0Y2guanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3NlYXJjaC9leHRlbmRlZC1zZWFyY2gvcHJlZml4LWV4YWN0LW1hdGNoLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvZXh0ZW5kZWQtc2VhcmNoL2ludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvZXh0ZW5kZWQtc2VhcmNoL3N1ZmZpeC1leGFjdC1tYXRjaC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL2V4dGVuZGVkLXNlYXJjaC9pbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL25ncmFtLXNlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL25ncmFtLXNlYXJjaC9uZ3JhbS5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL25ncmFtLXNlYXJjaC9kaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvc2VhcmNoL25ncmFtLXNlYXJjaC9kaXN0YW5jZS9qYWNjYXJkLWRpc3RhbmNlLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvbmdyYW0tc2VhcmNoL2FycmF5LXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvbmdyYW0tc2VhcmNoL2FycmF5LXV0aWxzL3VuaW9uLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9zZWFyY2gvbmdyYW0tc2VhcmNoL2FycmF5LXV0aWxzL2ludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvaGVscGVycy90eXBlLWNoZWNrZXJzLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvdG9vbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3Rvb2xzL2NyZWF0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvdG9vbHMva2V5LXN0b3JlLmpzIiwid2VicGFjazovL2Z1c2ViYXIvL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnVzZWJhci8vc3JjL3RyYW5zZm9ybS90cmFuc2Zvcm0tbWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy9zcmMvdHJhbnNmb3JtL3RyYW5zZm9ybS1zY29yZS5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9mdXNlYmFyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJCaXRhcFNlYXJjaCIsIkV4dGVuZGVkU2VhcmNoIiwiTkdyYW1TZWFyY2giLCJpc0FycmF5IiwiaXNEZWZpbmVkIiwiaXNTdHJpbmciLCJpc051bWJlciIsImlzT2JqZWN0IiwiZ2V0IiwiY3JlYXRlSW5kZXgiLCJLZXlTdG9yZSIsInRyYW5zZm9ybU1hdGNoZXMiLCJ0cmFuc2Zvcm1TY29yZSIsIk1BWF9CSVRTIiwiRnVzZU9wdGlvbnMiLCJpc0Nhc2VTZW5zaXRpdmUiLCJkaXN0YW5jZSIsImZpbmRBbGxNYXRjaGVzIiwiZ2V0Rm4iLCJpbmNsdWRlTWF0Y2hlcyIsImluY2x1ZGVTY29yZSIsImtleXMiLCJsb2NhdGlvbiIsIm1pbk1hdGNoQ2hhckxlbmd0aCIsInNob3VsZFNvcnQiLCJzb3J0Rm4iLCJhIiwiYiIsInRocmVzaG9sZCIsInVzZUV4dGVuZGVkU2VhcmNoIiwiRnVzZSIsIm9wdGlvbnMiLCJpbmRleCIsImxpc3QiLCJsaXN0SW5kZXgiLCJwYXR0ZXJuIiwib3B0cyIsImxpbWl0Iiwic2VhcmNoZXIiLCJyZXN1bHRzIiwiaSIsImxlbiIsInZhbHVlIiwidGV4dCIsImlkeCIsInNlYXJjaFJlc3VsdCIsImlzTWF0Y2giLCJzY29yZSIsIm1hdGNoIiwiaXRlbSIsIm1hdGNoZXMiLCJrZXlOYW1lcyIsImtleXNMZW4iLCJqIiwia2V5IiwiayIsImFyckl0ZW0iLCJyZXN1bHQiLCJzY29yZUxlbiIsInRvdGFsV2VpZ2h0ZWRTY29yZSIsImtleVdlaWdodCIsIndlaWdodCIsIk51bWJlciIsIk1hdGgiLCJmaW5hbE91dHB1dCIsInRyYW5zZm9ybWVycyIsImRhdGEiLCJyZWZJbmRleCIsIm1vZHVsZSIsImJpdGFwU2VhcmNoIiwicGF0dGVybkFscGhhYmV0IiwiYml0YXBTY29yZSIsIm1hdGNoZWRJbmRpY2VzIiwicGF0dGVybkxlbiIsInRleHRMZW4iLCJleHBlY3RlZExvY2F0aW9uIiwiY3VycmVudFRocmVzaG9sZCIsImJlc3RMb2NhdGlvbiIsIm1hdGNoTWFzayIsImVycm9ycyIsImN1cnJlbnRMb2NhdGlvbiIsImxhc3RCaXRBcnIiLCJmaW5hbFNjb3JlIiwiYmluTWF4IiwibWFzayIsImJpbk1pbiIsImJpbk1pZCIsInN0YXJ0IiwiZmluaXNoIiwiYml0QXJyIiwiQXJyYXkiLCJjaGFyTWF0Y2giLCJhY2N1cmFjeSIsInByb3hpbWl0eSIsIm1hdGNobWFzayIsImVuZCIsImV4YWN0TWF0Y2giLCJpbnZlcnNlRXhhY3RNYXRjaCIsInByZWZpeEV4YWN0TWF0Y2giLCJpbnZlcnNlUHJlZml4RXhhY3RNYXRjaCIsInN1ZmZpeEV4YWN0TWF0Y2giLCJpbnZlcnNlU3VmZml4RXhhY3RNYXRjaCIsInF1ZXJ5ZnkiLCJxdWVyeSIsIm1hdGNoRm91bmQiLCJxTGVuIiwicGFydHMiLCJwTGVuIiwidG9rZW4iLCJpc0ZvclBhdHRlcm4iLCJzYW5pdGl6ZSIsInNhbml0aXplZFBhdHRlcm4iLCJuZ3JhbSIsImphY2NhcmREaXN0YW5jZSIsInNvcnQiLCJ0ZXh0TmdyYW0iLCJqYWNhcmRSZXN1bHQiLCJOR1JBTV9MRU4iLCJuIiwicGFkIiwibkdyYW1zIiwidW5pb24iLCJpbnRlcnNlY3Rpb24iLCJuR3JhbVVuaW9uIiwibkdyYW1JbnRlcnNlY3Rpb24iLCJhcnIxIiwiYXJyMiIsIml0ZW0xIiwiaXRlbTIiLCJJTkZJTklUWSIsIk9iamVjdCIsImJhc2VUb1N0cmluZyIsInRvU3RyaW5nIiwiYXJyIiwiX2dldCIsImRvdEluZGV4IiwicGF0aCIsInJlbWFpbmluZyIsIm9iaiIsIm5ncmFtcyIsImluZGV4ZWRMaXN0IiwicmVjb3JkIiwiJCIsInN1YlJlY29yZHMiLCJzdGFjayIsImFycmF5SW5kZXgiLCJzdWJSZWNvcmQiLCJhcnJMZW4iLCJrZXlXZWlnaHRzVG90YWwiLCJrZXlOYW1lIiwibmFtZSIsIkpTT04iLCJpbmRpY2VzIiwic3VtbWFyeUluY2x1ZGUiLCJmdXNlT3B0aW9ucyIsInRva2VuaXplIiwiZG9DbG9zZVNlYXJjaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImlubmVySFRNTCIsImRvU2VhcmNoIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hfZm9ybSIsInMiLCJzZWFyY2hGdXNlT3B0aW9ucyIsImxlbmd0aCIsImV4ZWN1dGVTZWFyY2giLCJwYXJhIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsImluZGV4dXJsIiwib25sb2FkIiwic3RhdHVzIiwianNvbnByZXAiLCJyZXNwb25zZVRleHQiLCJyZXBsYWNlIiwicGFnZXMiLCJwYXJzZSIsImZ1c2UiLCJzZWFyY2giLCJwb3B1bGF0ZVJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwib25lcnJvciIsInNlbmQiLCJjcmVhdGVNYXJrIiwibWFya2VsIiwic3BhbmVsIiwic2V0QXR0cmlidXRlIiwibWFya01hdGNoZXMiLCJuZXdSZXN1bHQiLCJmb3JFYWNoIiwiaXRlbXMiLCJudW0iLCJuZXdFbGVtZW50IiwicHJldkluZGV4RW5kIiwiaW5kZXhwYWlyIiwiaW5kZXhudW0iLCJzdWJzdHJpbmciLCJtYXRjaFN0cmluZyIsIm5ld1N1YlN0cmluZyIsImNyZWF0ZVRleHROb2RlIiwicmVzbnVtIiwicmVzdWx0RWxlbWVudCIsImlkIiwiY29udGVudCIsInJlc3VsdE1hcCIsInJlc3VsdEtleXMiLCJsb3dlcktleSIsInRvTG93ZXJDYXNlIiwia2V5RWxlbWVudCIsInJlc3VsdFRpdGxlTGluayIsInBlcm1hbGluayIsImVsZW1lbnQiLCJpbm5uZXJIVE1MIiwia2V5RWxWYWwiLCJmaXJzdFZhbCIsInRjdmFsIiwidGNrZXkiLCJvcmlnaW5hbF92YWx1ZSIsInRpdGxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxxSEFDQSwyQkFEQSxLQUVBLFVBQ0E7QUFBQTtBQUFBO0FBQUEscUdBREEsS0FFQSxFQUdBO0FBQ0MsQ0FURCxFQVNDLElBVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFD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QXVCNkMsZUFBdkI7QUFDRDs7QUFFRCxVQUFJLE9BQU9ELFVBQVAsS0FBc0IsV0FBMUIsRUFBdUM7QUFDckNQLHFCQUFhLENBQUNyQyxXQUFkLENBQTBCNEMsVUFBMUI7QUFDRDtBQUNGLEtBbEZEO0FBb0ZBMUQsWUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ2EsV0FBMUMsQ0FBc0RxQyxhQUF0RDtBQUNELEdBOUZEO0FBZ0dBLFNBQU8sSUFBUDtBQUNEOztBQUVENUksTUFBTSxDQUFDOEosT0FBUCxHQUFpQjtBQUNmdEUsZUFBYSxFQUFiQSxhQURlO0FBRWZLLFVBQVEsRUFBUkEsUUFGZTtBQUdmTSxlQUFhLEVBQWJBLGFBSGU7QUFJZnVCLFlBQVUsRUFBVkEsVUFKZTtBQUtmSSxhQUFXLEVBQVhBLFdBTGU7QUFNZlQsaUJBQWUsRUFBZkE7QUFOZSxDQUFqQixDIiwiZmlsZSI6ImZ1c2ViYXIuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdXNlYmFyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1c2ViYXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVzZWJhclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJGdXNlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZ1c2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRnVzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuY29uc3QgeyBCaXRhcFNlYXJjaCwgRXh0ZW5kZWRTZWFyY2gsIE5HcmFtU2VhcmNoIH0gPSByZXF1aXJlKCcuL3NlYXJjaCcpXG5jb25zdCB7IGlzQXJyYXksIGlzRGVmaW5lZCwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc09iamVjdCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzL3R5cGUtY2hlY2tlcnMnKVxuY29uc3QgZ2V0ID0gcmVxdWlyZSgnLi9oZWxwZXJzL2dldCcpXG5jb25zdCB7IGNyZWF0ZUluZGV4LCBLZXlTdG9yZSB9ID0gcmVxdWlyZSgnLi90b29scycpXG5jb25zdCB7IHRyYW5zZm9ybU1hdGNoZXMsIHRyYW5zZm9ybVNjb3JlIH0gPSByZXF1aXJlKCcuL3RyYW5zZm9ybScpXG5jb25zdCB7IE1BWF9CSVRTIH0gPSByZXF1aXJlKCcuL3NlYXJjaC9iaXRhcC1zZWFyY2gvY29uc3RhbnRzJylcblxuLy8gLy8gV2lsbCBwcmludCB0byB0aGUgY29uc29sZS4gVXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4vLyBmdW5jdGlvbiBkZWJ1ZygpIHtcbi8vICAgaWYgKEZ1c2UudmVyYm9zZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKC4uLmFyZ3VtZW50cylcbi8vICAgICAvLyBjb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG4vLyAgICAgLy8gY29uc29sZS5sb2codXRpbC5pbnNwZWN0KC4uLmFyZ3VtZW50cywgZmFsc2UsIG51bGwsIHRydWUgLyogZW5hYmxlIGNvbG9ycyAqLykpXG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZGVidWdUaW1lKHZhbHVlKSB7XG4vLyAgIGlmIChGdXNlLnZlcmJvc2VUaW1lKSB7XG4vLyAgICAgY29uc29sZS50aW1lKHZhbHVlKVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGRlYnVnVGltZUVuZCh2YWx1ZSkge1xuLy8gICBpZiAoRnVzZS52ZXJib3NlVGltZSkge1xuLy8gICAgIGNvbnNvbGUudGltZUVuZCh2YWx1ZSlcbi8vICAgfVxuLy8gfVxuXG5sZXQgRnVzZU9wdGlvbnMgPSB7XG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICBkaXN0YW5jZTogMTAwLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXQsXG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXG4gIC8vIFdoZXRoZXIgdG8gc29ydCB0aGUgcmVzdWx0IGxpc3QsIGJ5IHNjb3JlXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvblxuICBzb3J0Rm46IChhLCBiKSA9PiAoYS5zY29yZSAtIGIuc2NvcmUpLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIEVuYWJsZWQgZXh0ZW5kZWQtc2VhcmNoaW5nXG4gIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZVxufVxuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IobGlzdCwgb3B0aW9ucyA9IEZ1c2VPcHRpb25zLCBpbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLkZ1c2VPcHRpb25zLCAuLi5vcHRpb25zIH1cbiAgICAvLyBgY2FzZVNlbnNpdGl2ZWAgaXMgZGVwcmVjYXRlZCwgdXNlIGBpc0Nhc2VTZW5zaXRpdmVgIGluc3RlYWRcbiAgICB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID0gb3B0aW9ucy5jYXNlU2Vuc2l0aXZlXG4gICAgZGVsZXRlIHRoaXMub3B0aW9ucy5jYXNlU2Vuc2l0aXZlXG5cbiAgICAvLyBkZWJ1Z1RpbWUoJ0NvbnN0cnVjdGluZycpXG4gICAgdGhpcy5fcHJvY2Vzc0tleXModGhpcy5vcHRpb25zLmtleXMpXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGxpc3QsIGluZGV4KVxuICAgIC8vIGRlYnVnVGltZUVuZCgnQ29uc3RydWN0aW5nJylcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24obGlzdCwgaW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5saXN0ID0gbGlzdFxuICAgIHRoaXMubGlzdElzU3RyaW5nQXJyYXkgPSBpc1N0cmluZyhsaXN0WzBdKVxuXG4gICAgaWYgKGluZGV4KSB7XG4gICAgICB0aGlzLnNldEluZGV4KGluZGV4KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWJ1Z1RpbWUoJ1Byb2Nlc3MgaW5kZXgnKVxuICAgICAgdGhpcy5zZXRJbmRleCh0aGlzLl9jcmVhdGVJbmRleCgpKVxuICAgICAgLy8gZGVidWdUaW1lRW5kKCdQcm9jZXNzIGluZGV4JylcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleChsaXN0SW5kZXgpIHtcbiAgICB0aGlzLl9pbmRleGVkTGlzdCA9IGxpc3RJbmRleFxuICAgIC8vIGRlYnVnKGxpc3RJbmRleClcbiAgfVxuXG4gIF9wcm9jZXNzS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUoa2V5cylcblxuICAgIC8vIGRlYnVnKCdQcm9jZXNzIEtleXMnKVxuICAgIGlmIChGdXNlLnZlcmJvc2UpIHtcbiAgICAgIC8vIGRlYnVnKHRoaXMuX2tleVN0b3JlLnRvSlNPTigpKVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVJbmRleCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5kZXgodGhpcy5fa2V5U3RvcmUua2V5cygpLCB0aGlzLmxpc3QsIHtcbiAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm5cbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoKHBhdHRlcm4sIG9wdHMgPSB7IGxpbWl0OiBmYWxzZSB9KSB7XG4gICAgLy8gZGVidWcoYC0tLS0tLS0tLSBTZWFyY2ggcGF0dGVybjogXCIke3BhdHRlcm59XCJgKVxuICAgIGNvbnN0IHsgdXNlRXh0ZW5kZWRTZWFyY2gsIHNob3VsZFNvcnQgfSA9IHRoaXMub3B0aW9uc1xuXG4gICAgbGV0IHNlYXJjaGVyID0gbnVsbFxuXG4gICAgaWYgKHVzZUV4dGVuZGVkU2VhcmNoKSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBFeHRlbmRlZFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBOR3JhbVNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1RpbWUoJ1NlYXJjaCB0aW1lJyk7XG4gICAgbGV0IHJlc3VsdHMgPSB0aGlzLl9zZWFyY2hVc2luZyhzZWFyY2hlcilcbiAgICAvLyBkZWJ1Z1RpbWVFbmQoJ1NlYXJjaCB0aW1lJyk7XG5cbiAgICAvLyBkZWJ1Z1RpbWUoJ0NvbXB1dGUgc2NvcmUgdGltZScpO1xuICAgIHRoaXMuX2NvbXB1dGVTY29yZShyZXN1bHRzKVxuICAgIC8vIGRlYnVnVGltZUVuZCgnQ29tcHV0ZSBzY29yZSB0aW1lJyk7XG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgdGhpcy5fc29ydChyZXN1bHRzKVxuICAgIH1cblxuICAgIGlmIChvcHRzLmxpbWl0ICYmIGlzTnVtYmVyKG9wdHMubGltaXQpKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBvcHRzLmxpbWl0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mb3JtYXQocmVzdWx0cylcbiAgfVxuXG4gIF9zZWFyY2hVc2luZyhzZWFyY2hlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLl9pbmRleGVkTGlzdFxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9uc1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKHRoaXMubGlzdElzU3RyaW5nQXJyYXkpIHtcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGxpc3RcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3RbaV1cbiAgICAgICAgbGV0IHsgJDogdGV4dCwgaWR4IH0gPSB2YWx1ZVxuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih2YWx1ZSlcblxuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHRcblxuICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwgdmFsdWU6IHRleHQgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW21hdGNoXVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgY29uc3Qga2V5TmFtZXMgPSB0aGlzLl9rZXlTdG9yZS5rZXlzKClcbiAgICAgIGNvbnN0IGtleXNMZW4gPSB0aGlzLl9rZXlTdG9yZS5jb3VudCgpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB7ICQ6IGl0ZW0sIGlkeCB9ID0gbGlzdFtpXVxuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaGVzID0gW11cblxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGtleU5hbWVzW2pdXG4gICAgICAgICAgbGV0IHZhbHVlID0gaXRlbVtrZXldXG5cbiAgICAgICAgICAvLyBkZWJ1ZyhgIEtleTogJHtrZXkgPT09ICcnID8gJy0tJyA6IGtleX1gKVxuXG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICAgIGxldCBhcnJJdGVtID0gdmFsdWVba11cbiAgICAgICAgICAgICAgbGV0IHRleHQgPSBhcnJJdGVtLiRcbiAgICAgICAgICAgICAgbGV0IGlkeCA9IGFyckl0ZW0uaWR4XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKGFyckl0ZW0pXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0XG5cbiAgICAgICAgICAgICAgLy8gZGVidWcoYEZ1bGwgdGV4dDogXCIke3RleHR9XCIsIHNjb3JlOiAke3Njb3JlfWApXG5cbiAgICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIGlkeCB9XG5cbiAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlc1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHZhbHVlLiRcbiAgICAgICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih2YWx1ZSlcblxuICAgICAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0XG5cbiAgICAgICAgICAgIC8vIGRlYnVnKGBGdWxsIHRleHQ6IFwiJHt0ZXh0fVwiLCBzY29yZTogJHtzY29yZX1gKVxuXG4gICAgICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwga2V5LCB2YWx1ZTogdGV4dCB9XG5cbiAgICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVidWcoXCItLS0tLS0tLS0gUkVTVUxUUyAtLS0tLS0tLS0tLVwiKVxuICAgIC8vIGRlYnVnKHJlc3VsdHMpXG4gICAgLy8gZGVidWcoXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9jb21wdXRlU2NvcmUocmVzdWx0cykge1xuICAgIC8vIGRlYnVnKCdDb21wdXRpbmcgc2NvcmU6ICcpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXVxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzXG4gICAgICBjb25zdCBzY29yZUxlbiA9IG1hdGNoZXMubGVuZ3RoXG5cbiAgICAgIGxldCB0b3RhbFdlaWdodGVkU2NvcmUgPSAxXG4gICAgICAvLyBsZXQgYmVzdFNjb3JlID0gLTFcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY29yZUxlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBtYXRjaGVzW2pdXG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0ua2V5XG4gICAgICAgIGNvbnN0IGtleVdlaWdodCA9IHRoaXMuX2tleVN0b3JlLmdldChrZXksICd3ZWlnaHQnKVxuICAgICAgICBjb25zdCB3ZWlnaHQgPSBrZXlXZWlnaHQgfHwgMVxuICAgICAgICBjb25zdCBzY29yZSA9IGl0ZW0uc2NvcmUgPT09IDAgJiYga2V5V2VpZ2h0ICYmIGtleVdlaWdodCA+IDBcbiAgICAgICAgICA/IE51bWJlci5FUFNJTE9OXG4gICAgICAgICAgOiBpdGVtLnNjb3JlXG5cbiAgICAgICAgdG90YWxXZWlnaHRlZFNjb3JlICo9IE1hdGgucG93KHNjb3JlLCB3ZWlnaHQpXG5cbiAgICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgYmVzdCBzY29yZS4uIGp1c3QgaW4gY2FzZVxuICAgICAgICAvLyBBY3R1YWxseSwgd2UncmUgbm90IHJlYWxseSB1c2luZyBpdC4uIGJ1dCBuZWVkIHRvIHRoaW5rIG9mIGEgd2F5IHRvIGluY29ycG9yYXRlIHRoaXNcbiAgICAgICAgLy8gYmVzdFNjb3JlID0gYmVzdFNjb3JlID09IC0xID8gaXRlbS5zY29yZSA6IE1hdGgubWluKGJlc3RTY29yZSwgaXRlbS5zY29yZSlcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnNjb3JlID0gdG90YWxXZWlnaHRlZFNjb3JlXG4gICAgICAvLyByZXN1bHQuJHNjb3JlID0gYmVzdFNjb3JlXG5cbiAgICAgIC8vIGRlYnVnKHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBfc29ydChyZXN1bHRzKSB7XG4gICAgLy8gZGVidWcoJ1NvcnRpbmcuLi4uJylcbiAgICByZXN1bHRzLnNvcnQodGhpcy5vcHRpb25zLnNvcnRGbilcbiAgfVxuXG4gIF9mb3JtYXQocmVzdWx0cykge1xuICAgIGNvbnN0IGZpbmFsT3V0cHV0ID0gW11cblxuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMsIGluY2x1ZGVTY29yZSwgfSA9IHRoaXMub3B0aW9uc1xuXG4gICAgLy8gaWYgKEZ1c2UudmVyYm9zZSkge1xuICAgIC8vICAgbGV0IGNhY2hlID0gW11cbiAgICAvLyAgIGRlYnVnKCdPdXRwdXQ6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAvLyAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgLy8gICAgICAgaWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgIC8vICAgICAgICAgLy8gQ2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxuICAgIC8vICAgICAgICAgcmV0dXJuXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIC8vIFN0b3JlIHZhbHVlIGluIG91ciBjb2xsZWN0aW9uXG4gICAgLy8gICAgICAgY2FjaGUucHVzaCh2YWx1ZSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdmFsdWVcbiAgICAvLyAgIH0sIDIpKVxuICAgIC8vICAgY2FjaGUgPSBudWxsXG4gICAgLy8gfVxuXG4gICAgbGV0IHRyYW5zZm9ybWVycyA9IFtdXG5cbiAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybU1hdGNoZXMpXG4gICAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpXG5cbiAgICAvLyBkZWJ1ZyhcIj09PT09IFJFU1VMVFMgPT09PT09XCIpXG4gICAgLy8gZGVidWcocmVzdWx0cylcbiAgICAvLyBkZWJ1ZyhcIj09PT09PT09PT09PT09PT09PT09XCIpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXVxuXG4gICAgICAvLyBkZWJ1ZygncmVzdWx0JywgcmVzdWx0KVxuXG4gICAgICBjb25zdCB7IGlkeCB9ID0gcmVzdWx0XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGl0ZW06IHRoaXMubGlzdFtpZHhdLFxuICAgICAgICByZWZJbmRleDogaWR4XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0cmFuc2Zvcm1lcnMubGVuZ3RoOyBqIDwgbGVuOyBqICs9IDEpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lcnNbal0ocmVzdWx0LCBkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZmluYWxPdXRwdXQucHVzaChkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbE91dHB1dFxuICB9XG59XG5cbkZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleFxuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1c2VcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBCaXRhcFNlYXJjaDogcmVxdWlyZSgnLi9iaXRhcC1zZWFyY2gnKSxcbiAgRXh0ZW5kZWRTZWFyY2g6IHJlcXVpcmUoJy4vZXh0ZW5kZWQtc2VhcmNoJyksXG4gIE5HcmFtU2VhcmNoOiByZXF1aXJlKCcuL25ncmFtLXNlYXJjaCcpXG59IiwiY29uc3QgYml0YXBTZWFyY2ggPSByZXF1aXJlKCcuL2JpdGFwLXNlYXJjaCcpXG5jb25zdCBwYXR0ZXJuQWxwaGFiZXQgPSByZXF1aXJlKCcuL2JpdGFwLXBhdHRlcm4tYWxwaGFiZXQnKVxuY29uc3QgeyBNQVhfQklUUyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4sIHtcbiAgICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICAgIGxvY2F0aW9uID0gMCxcbiAgICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gICAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gICAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gICAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gICAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gICAgZGlzdGFuY2UgPSAxMDAsXG4gICAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gICAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgICB0aHJlc2hvbGQgPSAwLjYsXG4gICAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgY29tcGFyaXNvbnMgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gICAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gICAgZmluZEFsbE1hdGNoZXMgPSBmYWxzZSxcbiAgICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSAxLFxuXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBmYWxzZVxuICB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICB9XG5cbiAgICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXR0ZXJuIGxlbmd0aCBleGNlZWRzIG1heCBvZiAke01BWF9CSVRTfS5gKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpXG4gICAgdGhpcy5wYXR0ZXJuQWxwaGFiZXQgPSBwYXR0ZXJuQWxwaGFiZXQodGhpcy5wYXR0ZXJuKVxuICB9XG5cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dCA9IHZhbHVlLiRcblxuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlLCBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zXG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlc3VsdC5tYXRjaGVkSW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgdXNlIEJpdGFwIGFsZ29yaXRobVxuICAgIGNvbnN0IHsgbG9jYXRpb24sIGRpc3RhbmNlLCB0aHJlc2hvbGQsIGZpbmRBbGxNYXRjaGVzLCBtaW5NYXRjaENoYXJMZW5ndGggfSA9IHRoaXMub3B0aW9uc1xuICAgIHJldHVybiBiaXRhcFNlYXJjaCh0ZXh0LCB0aGlzLnBhdHRlcm4sIHRoaXMucGF0dGVybkFscGhhYmV0LCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpbmNsdWRlTWF0Y2hlc1xuICAgIH0pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRhcFNlYXJjaFxuIiwiY29uc3QgYml0YXBTY29yZSA9IHJlcXVpcmUoJy4vYml0YXAtc2NvcmUnKVxuY29uc3QgbWF0Y2hlZEluZGljZXMgPSByZXF1aXJlKCcuL2JpdGFwLW1hdGNoZWQtaW5kaWNlcycpXG5cbm1vZHVsZS5leHBvcnRzID0gKHRleHQsIHBhdHRlcm4sIHBhdHRlcm5BbHBoYWJldCwgeyBsb2NhdGlvbiA9IDAsIGRpc3RhbmNlID0gMTAwLCB0aHJlc2hvbGQgPSAwLjYsIGZpbmRBbGxNYXRjaGVzID0gZmFsc2UsIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEsIGluY2x1ZGVNYXRjaGVzID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGhcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoXG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSlcbiAgLy8gSGlnaGVzdCBzY29yZSBiZXlvbmQgd2hpY2ggd2UgZ2l2ZSB1cC5cbiAgbGV0IGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGRcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24pXG5cbiAgLy8gYSBtYXNrIG9mIHRoZSBtYXRjaGVzXG4gIGNvbnN0IG1hdGNoTWFzayA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dExlbjsgaSArPSAxKSB7XG4gICAgbWF0Y2hNYXNrW2ldID0gMFxuICB9XG5cbiAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICBsZXQgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogMCxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlXG4gICAgfSlcbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpXG5cbiAgICAvLyBXaGF0IGFib3V0IGluIHRoZSBvdGhlciBkaXJlY3Rpb24/IChzcGVlZCB1cClcbiAgICBiZXN0TG9jYXRpb24gPSB0ZXh0Lmxhc3RJbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24gKyBwYXR0ZXJuTGVuKVxuXG4gICAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICAgIGxldCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IDAsXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgfSlcbiAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZClcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMVxuXG4gIGxldCBsYXN0Qml0QXJyID0gW11cbiAgbGV0IGZpbmFsU2NvcmUgPSAxXG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlblxuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIDw9IDMxID8gcGF0dGVybkxlbiAtIDEgOiAzMClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5MZW47IGkgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICBsZXQgYmluTWluID0gMFxuICAgIGxldCBiaW5NaWQgPSBiaW5NYXhcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgfSlcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWRcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pXG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkXG5cbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSlcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXMgPyB0ZXh0TGVuIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuXG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBsZXQgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMilcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMVxuXG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBsZXQgY3VycmVudExvY2F0aW9uID0gaiAtIDFcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV1cblxuICAgICAgaWYgKGNoYXJNYXRjaCkge1xuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9IDFcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgcGFzczogZXhhY3QgbWF0Y2hcbiAgICAgIGJpdEFycltqXSA9ICgoYml0QXJyW2ogKyAxXSA8PCAxKSB8IDEpICYgY2hhck1hdGNoXG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgYml0QXJyW2pdIHw9ICgoKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSkgfCAxKSB8IGxhc3RCaXRBcnJbaiArIDFdXG4gICAgICB9XG5cbiAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgIGZpbmFsU2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZVxuICAgICAgICAgIGJlc3RMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvblxuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2VcbiAgICB9KVxuXG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyXG4gIH1cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6ICFmaW5hbFNjb3JlID8gMC4wMDEgOiBmaW5hbFNjb3JlLFxuICB9XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgcmVzdWx0Lm1hdGNoZWRJbmRpY2VzID0gbWF0Y2hlZEluZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChwYXR0ZXJuLCB7IGVycm9ycyA9IDAsIGN1cnJlbnRMb2NhdGlvbiA9IDAsIGV4cGVjdGVkTG9jYXRpb24gPSAwLCBkaXN0YW5jZSA9IDEwMCB9KSA9PiB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGhcbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbilcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyAocHJveGltaXR5IC8gZGlzdGFuY2UpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChtYXRjaG1hc2sgPSBbXSwgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSkgPT4ge1xuICBsZXQgbWF0Y2hlZEluZGljZXMgPSBbXVxuICBsZXQgc3RhcnQgPSAtMVxuICBsZXQgZW5kID0gLTFcbiAgbGV0IGkgPSAwXG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldXG4gICAgaWYgKG1hdGNoICYmIHN0YXJ0ID09PSAtMSkge1xuICAgICAgc3RhcnQgPSBpXG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMVxuICAgICAgaWYgKChlbmQgLSBzdGFydCkgKyAxID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgICAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSlcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gLTFcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgKGkgLSBzdGFydCkgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgbWF0Y2hlZEluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZEluZGljZXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcGF0dGVybiA9PiB7XG4gIGxldCBtYXNrID0ge31cbiAgbGV0IGxlbiA9IHBhdHRlcm4ubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoaSldID0gMFxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoaSldIHw9IDEgPDwgKGxlbiAtIGkgLSAxKVxuICB9XG5cbiAgcmV0dXJuIG1hc2tcbn0iLCIvLyBNYWNoaW5lIHdvcmQgc2l6ZVxubW9kdWxlLmV4cG9ydHMuTUFYX0JJVFMgPSAzMiIsImNvbnN0IGV4YWN0TWF0Y2ggPSByZXF1aXJlKCcuL2V4YWN0LW1hdGNoJylcbmNvbnN0IGludmVyc2VFeGFjdE1hdGNoID0gcmVxdWlyZSgnLi9pbnZlcnNlLWV4YWN0LW1hdGNoJylcbmNvbnN0IHByZWZpeEV4YWN0TWF0Y2ggPSByZXF1aXJlKCcuL3ByZWZpeC1leGFjdC1tYXRjaCcpXG5jb25zdCBpbnZlcnNlUHJlZml4RXhhY3RNYXRjaCA9IHJlcXVpcmUoJy4vaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2gnKVxuY29uc3Qgc3VmZml4RXhhY3RNYXRjaCA9IHJlcXVpcmUoJy4vc3VmZml4LWV4YWN0LW1hdGNoJylcbmNvbnN0IGludmVyc2VTdWZmaXhFeGFjdE1hdGNoID0gcmVxdWlyZSgnLi9pbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCcpXG5jb25zdCBCaXRhcFNlYXJjaCA9IHJlcXVpcmUoJy4uL2JpdGFwLXNlYXJjaCcpXG5cbi8vIFJldHVybiBhIDJEIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBxdWVyeSwgZm9yIHNpbXBsZXIgcGFyc2luZy5cbi8vIEV4YW1wbGU6XG4vLyBcIl5jb3JlIGdvJCB8IHJiJCB8IHB5JCB4eSRcIiA9PiBbW1wiXmNvcmVcIiwgXCJnbyRcIl0sIFtcInJiJFwiXSwgW1wicHkkXCIsIFwieHkkXCJdXVxuY29uc3QgcXVlcnlmeSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnNwbGl0KCd8JykubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkuc3BsaXQoLyArL2cpKVxuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IG1hdGNoIGBqc2NyaXB0YCAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUgfSA9IG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeWZ5KHRoaXMucGF0dGVybilcbiAgICAvLyBBIDxwYXR0ZXJuPjo8Qml0YXBTZWFyY2g+IGtleS12YWx1ZSBwYWlyIGZvciBvcHRpbWl6aW5nIHNlYXJjaGluZ1xuICAgIHRoaXMuX2Z1enp5Q2FjaGUgPSB7fVxuICB9XG5cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dCA9IHZhbHVlLiRcblxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5xdWVyeVxuICAgIHRleHQgPSB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKVxuXG4gICAgbGV0IG1hdGNoRm91bmQgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcblxuICAgICAgY29uc3QgcGFydHMgPSBxdWVyeVtpXVxuICAgICAgbGV0IHJlc3VsdCA9IG51bGxcbiAgICAgIG1hdGNoRm91bmQgPSB0cnVlXG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gcGFydHMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHBhcnRzW2pdXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX3NlYXJjaCh0b2tlbiwgdGV4dClcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNNYXRjaCkge1xuICAgICAgICAgIC8vIEFORCBjb25kaXRpb24sIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb24gdG8gbmV4dCBwYXJ0XG4gICAgICAgICAgbWF0Y2hGb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG1hdGNoRm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxuXG4gIF9zZWFyY2gocGF0dGVybiwgdGV4dCkge1xuICAgIGlmIChleGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKHByZWZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gcHJlZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VTdWZmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VTdWZmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChzdWZmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIHN1ZmZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWFyY2hlciA9IHRoaXMuX2Z1enp5Q2FjaGVbcGF0dGVybl1cbiAgICAgIGlmICghc2VhcmNoZXIpIHtcbiAgICAgICAgc2VhcmNoZXIgPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKVxuICAgICAgICB0aGlzLl9mdXp6eUNhY2hlW3BhdHRlcm5dID0gc2VhcmNoZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWFyY2hlci5zZWFyY2godGV4dClcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRlZFNlYXJjaCIsIi8vIFRva2VuOiAnZmlsZVxuLy8gTWF0Y2ggdHlwZTogZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGluY2x1ZGUgYGZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiA9IHBhdHRlcm4gPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gXCInXCJcblxuY29uc3Qgc2FuaXRpemUgPSBwYXR0ZXJuID0+IHBhdHRlcm4uc3Vic3RyKDEpXG5cbmNvbnN0IG1hdGNoID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplKHBhdHRlcm4pXG4gIGNvbnN0IGluZGV4ID0gdGV4dC5pbmRleE9mKHNhbml0aXplZFBhdHRlcm4pXG4gIGNvbnN0IGlzTWF0Y2ggPSBpbmRleCA+IC0xXG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwLFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0ZvclBhdHRlcm4sXG4gIHNhbml0aXplLFxuICBtYXRjaFxufSIsIi8vIFRva2VuOiAhZmlyZVxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYGZpcmVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiA9IHBhdHRlcm4gPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnXG5cbmNvbnN0IHNhbml0aXplID0gcGF0dGVybiA9PiBwYXR0ZXJuLnN1YnN0cigxKVxuXG5jb25zdCBtYXRjaCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZShwYXR0ZXJuKVxuICBjb25zdCBpc01hdGNoID0gdGV4dC5pbmRleE9mKHNhbml0aXplZFBhdHRlcm4pID09PSAtMVxuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0ZvclBhdHRlcm4sXG4gIHNhbml0aXplLFxuICBtYXRjaFxufSIsIi8vIFRva2VuOiBeZmlsZVxuLy8gTWF0Y2ggdHlwZTogcHJlZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBmaWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4gPSBwYXR0ZXJuID0+IHBhdHRlcm4uY2hhckF0KDApID09ICdeJ1xuXG5jb25zdCBzYW5pdGl6ZSA9IHBhdHRlcm4gPT4gcGF0dGVybi5zdWJzdHIoMSlcblxuY29uc3QgbWF0Y2ggPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUocGF0dGVybilcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKVxuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0ZvclBhdHRlcm4sXG4gIHNhbml0aXplLFxuICBtYXRjaFxufSIsIi8vIFRva2VuOiAhXmZpcmVcbi8vIE1hdGNoIHR5cGU6IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZmlyZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuID0gcGF0dGVybiA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnIScgJiYgcGF0dGVybi5jaGFyQXQoMSkgPT0gJ14nXG5cbmNvbnN0IHNhbml0aXplID0gcGF0dGVybiA9PiBwYXR0ZXJuLnN1YnN0cigyKVxuXG5jb25zdCBtYXRjaCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZShwYXR0ZXJuKVxuICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKVxuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0ZvclBhdHRlcm4sXG4gIHNhbml0aXplLFxuICBtYXRjaFxufSIsIi8vIFRva2VuOiAuZmlsZSRcbi8vIE1hdGNoIHR5cGU6IHN1ZmZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5maWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4gPSBwYXR0ZXJuID0+IHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgPT0gJyQnXG5cbmNvbnN0IHNhbml0aXplID0gcGF0dGVybiA9PiBwYXR0ZXJuLnN1YnN0cigwLCBwYXR0ZXJuLmxlbmd0aCAtIDEpXG5cbmNvbnN0IG1hdGNoID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplKHBhdHRlcm4pXG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHNhbml0aXplZFBhdHRlcm4pXG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzRm9yUGF0dGVybixcbiAgc2FuaXRpemUsXG4gIG1hdGNoXG59IiwiLy8gVG9rZW46ICEuZmlsZSRcbi8vIE1hdGNoIHR5cGU6IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5maWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4gPSBwYXR0ZXJuID0+IHBhdHRlcm4uY2hhckF0KDApID09ICchJyAmJiBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuLmxlbmd0aCAtIDEpID09ICckJ1xuXG5jb25zdCBzYW5pdGl6ZSA9IHBhdHRlcm4gPT4gcGF0dGVybi5zdWJzdHJpbmcoMSwgcGF0dGVybi5sZW5ndGggLSAxKVxuXG5jb25zdCBtYXRjaCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZShwYXR0ZXJuKVxuICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgoc2FuaXRpemVkUGF0dGVybilcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNGb3JQYXR0ZXJuLFxuICBzYW5pdGl6ZSxcbiAgbWF0Y2hcbn0iLCJjb25zdCBuZ3JhbSA9IHJlcXVpcmUoJy4vbmdyYW0nKVxuY29uc3QgeyBqYWNjYXJkRGlzdGFuY2UgfSA9IHJlcXVpcmUoJy4vZGlzdGFuY2UnKVxuXG5jbGFzcyBOR3JhbVNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICAvLyBDcmVhdGUgdGhlIG5ncmFtLCBhbmQgc29ydCBpdFxuICAgIHRoaXMucGF0dGVybk5ncmFtID0gbmdyYW0ocGF0dGVybiwgeyBzb3J0OiB0cnVlIH0pXG4gIH1cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dE5ncmFtID0gdmFsdWUubmdcbiAgICBpZiAoIXRleHROZ3JhbSkge1xuICAgICAgdGV4dE5ncmFtID0gbmdyYW0odmFsdWUuJCwgeyBzb3J0OiB0cnVlIH0pXG4gICAgICB2YWx1ZS5uZyA9IHRleHROZ3JhbVxuICAgIH1cblxuICAgIGxldCBqYWNhcmRSZXN1bHQgPSBqYWNjYXJkRGlzdGFuY2UodGhpcy5wYXR0ZXJuTmdyYW0sIHRleHROZ3JhbSlcblxuICAgIHJldHVybiB7XG4gICAgICBzY29yZTogamFjYXJkUmVzdWx0LFxuICAgICAgaXNNYXRjaDogamFjYXJkUmVzdWx0IDwgMVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5HcmFtU2VhcmNoIiwiY29uc3QgTkdSQU1fTEVOID0gM1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh0ZXh0LCB7IG4gPSBOR1JBTV9MRU4sIHBhZCA9IHRydWUsIHNvcnQgPSBmYWxzZSB9KSA9PiB7XG4gIGxldCBuR3JhbXMgPSBbXVxuXG4gIGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuR3JhbXNcbiAgfVxuXG4gIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKClcbiAgaWYgKHBhZCkge1xuICAgIHRleHQgPSBgICR7dGV4dH0gYFxuICB9XG5cbiAgbGV0IGluZGV4ID0gdGV4dC5sZW5ndGggLSBuICsgMVxuICBpZiAoaW5kZXggPCAxKSB7XG4gICAgcmV0dXJuIG5HcmFtc1xuICB9XG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBuR3JhbXNbaW5kZXhdID0gdGV4dC5zdWJzdHIoaW5kZXgsIG4pXG4gIH1cblxuICBpZiAoc29ydCkge1xuICAgIG5HcmFtcy5zb3J0KChhLCBiKSA9PiBhID09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDEpXG4gIH1cblxuICByZXR1cm4gbkdyYW1zXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGphY2NhcmREaXN0YW5jZTogcmVxdWlyZSgnLi9qYWNjYXJkLWRpc3RhbmNlJylcbn0iLCJjb25zdCB7IHVuaW9uLCBpbnRlcnNlY3Rpb24gfSA9IHJlcXVpcmUoJy4uL2FycmF5LXV0aWxzJylcblxubW9kdWxlLmV4cG9ydHMgPSAobkdyYW0xLCBuR3JhbTIpID0+IHtcbiAgbGV0IG5HcmFtVW5pb24gPSB1bmlvbihuR3JhbTEsIG5HcmFtMilcbiAgbGV0IG5HcmFtSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uKG5HcmFtMSwgbkdyYW0yKVxuXG4gIHJldHVybiAxIC0gbkdyYW1JbnRlcnNlY3Rpb24ubGVuZ3RoIC8gbkdyYW1Vbmlvbi5sZW5ndGhcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgdW5pb246IHJlcXVpcmUoJy4vdW5pb24nKSxcbiAgaW50ZXJzZWN0aW9uOiByZXF1aXJlKCcuL2ludGVyc2VjdGlvbicpXG59IiwiLy8gQXNzdW1lcyBhcnJheXMgYXJlIHNvcnRlZFxubW9kdWxlLmV4cG9ydHMgPSAoYXJyMSwgYXJyMikgPT4ge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgbGV0IGkgPSAwXG4gIGxldCBqID0gMFxuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGl0ZW0xID0gYXJyMVtpXVxuICAgIGxldCBpdGVtMiA9IGFycjJbal1cblxuICAgIGlmIChpdGVtMSA8IGl0ZW0yKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMSlcbiAgICAgIGkgKz0gMVxuICAgIH0gZWxzZSBpZiAoaXRlbTIgPCBpdGVtMSkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTIpXG4gICAgICBqICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTIpXG4gICAgICBpICs9IDFcbiAgICAgIGogKz0gMVxuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChhcnIxW2ldKVxuICAgIGkgKz0gMVxuICB9XG5cbiAgd2hpbGUgKGogPCBhcnIyLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKGFycjJbal0pXG4gICAgaiArPSAxXG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gQXNzdW1lcyBhcnJheXMgYXJlIHNvcnRlZFxubW9kdWxlLmV4cG9ydHMgPSAoYXJyMSwgYXJyMikgPT4ge1xuICBsZXQgcmVzdWx0ID0gW11cbiAgbGV0IGkgPSAwXG4gIGxldCBqID0gMFxuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGl0ZW0xID0gYXJyMVtpXVxuICAgIGxldCBpdGVtMiA9IGFycjJbal1cblxuICAgIGlmIChpdGVtMSA9PSBpdGVtMikge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTEpXG4gICAgICBpICs9IDFcbiAgICAgIGogKz0gMVxuICAgIH0gZWxzZSBpZiAoaXRlbTEgPCBpdGVtMikge1xuICAgICAgaSArPSAxXG4gICAgfSBlbHNlIGlmIChpdGVtMSA+IGl0ZW0yKSB7XG4gICAgICBqICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgaSArPSAxXG4gICAgICBqICs9IDFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImNvbnN0IElORklOSVRZID0gMSAvIDBcblxuY29uc3QgaXNBcnJheSA9IHZhbHVlID0+ICFBcnJheS5pc0FycmF5XG4gID8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICA6IEFycmF5LmlzQXJyYXkodmFsdWUpXG5cbi8vIEFkYXB0ZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvZjRjYTM5NmE3OTY0MzU0MjJiZDRmZDQxZmFkYmQyMjVlZGRkZjE3NS8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5jb25zdCBiYXNlVG9TdHJpbmcgPSB2YWx1ZSA9PiB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgbGV0IHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5jb25zdCB0b1N0cmluZyA9IHZhbHVlID0+IHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG5cbmNvbnN0IGlzU3RyaW5nID0gdmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuXG5jb25zdCBpc051bWJlciA9IHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcblxuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cbmNvbnN0IGlzRGVmaW5lZCA9IHZhbHVlID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGxcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzRGVmaW5lZCxcbiAgaXNBcnJheSxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgdG9TdHJpbmdcbn1cbiIsImNvbnN0IHtcbiAgaXNEZWZpbmVkLFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQXJyYXksXG4gIHRvU3RyaW5nXG59ID0gcmVxdWlyZSgnLi90eXBlLWNoZWNrZXJzJylcblxubW9kdWxlLmV4cG9ydHMgPSAob2JqLCBwYXRoKSA9PiB7XG4gIGxldCBsaXN0ID0gW11cbiAgbGV0IGFyciA9IGZhbHNlXG5cbiAgY29uc3QgX2dldCA9IChvYmosIHBhdGgpID0+IHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBnb3R0ZW4gdG8gdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKG9iailcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKVxuXG4gICAgICBsZXQga2V5ID0gcGF0aFxuICAgICAgbGV0IHJlbWFpbmluZyA9IG51bGxcblxuICAgICAgaWYgKGRvdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBrZXkgPSBwYXRoLnNsaWNlKDAsIGRvdEluZGV4KVxuICAgICAgICByZW1haW5pbmcgPSBwYXRoLnNsaWNlKGRvdEluZGV4ICsgMSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XVxuXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICBpZiAoIXJlbWFpbmluZyAmJiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKVxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgYXJyID0gdHJ1ZVxuICAgICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgX2dldCh2YWx1ZVtpXSwgcmVtYWluaW5nKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1haW5pbmcpIHtcbiAgICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgICBfZ2V0KHZhbHVlLCByZW1haW5pbmcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0KG9iaiwgcGF0aClcblxuICBpZiAoYXJyKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIHJldHVybiBsaXN0WzBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUluZGV4OiByZXF1aXJlKCcuL2NyZWF0ZS1pbmRleCcpLFxuICBLZXlTdG9yZTogcmVxdWlyZSgnLi9rZXktc3RvcmUnKVxufSIsImNvbnN0IHsgaXNBcnJheSwgaXNEZWZpbmVkLCBpc1N0cmluZyB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy90eXBlLWNoZWNrZXJzJylcbmNvbnN0IGdldCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvZ2V0JylcbmNvbnN0IG5ncmFtID0gcmVxdWlyZSgnLi4vc2VhcmNoL25ncmFtLXNlYXJjaC9uZ3JhbScpXG5cbm1vZHVsZS5leHBvcnRzID0gKGtleXMsIGxpc3QsIHsgZ2V0Rm4gPSBnZXQsIG5ncmFtcyA9IGZhbHNlIH0gPSB7fSkgPT4ge1xuICBsZXQgaW5kZXhlZExpc3QgPSBbXVxuXG4gIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICBpZiAoaXNTdHJpbmcobGlzdFswXSkpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBsaXN0XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGlzdFtpXVxuXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAvLyAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJlY29yZCA9IHtcbiAgICAgICAgICAkOiB2YWx1ZSxcbiAgICAgICAgICBpZHg6IGlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICByZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleGVkTGlzdC5wdXNoKHJlY29yZClcbiAgICAgIH1cbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICBjb25zdCBrZXlzTGVuID0ga2V5cy5sZW5ndGhcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBsZXQgaXRlbSA9IGxpc3RbaV1cblxuICAgICAgbGV0IHJlY29yZCA9IHsgaWR4OiBpLCAkOiB7fSB9XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2pdXG4gICAgICAgIGxldCB2YWx1ZSA9IGdldEZuKGl0ZW0sIGtleSlcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXVxuICAgICAgICAgIGNvbnN0IHN0YWNrID0gW3sgYXJyYXlJbmRleDogLTEsIHZhbHVlIH1dXG5cbiAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFycmF5SW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKVxuXG4gICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuXG4gICAgICAgICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgICAgIC8vICAgdiA9IHYudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHsgJDogdmFsdWUsIGlkeDogYXJyYXlJbmRleCB9XG5cbiAgICAgICAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgICAgICAgIHN1YlJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGFyckxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGFyckxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgICBhcnJheUluZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlW2tdLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjb3JkLiRba2V5XSA9IHN1YlJlY29yZHNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAgIC8vICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHsgJDogdmFsdWUgfVxuXG4gICAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgICAgc3ViUmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlY29yZC4kW2tleV0gPSBzdWJSZWNvcmRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleGVkTGlzdC5wdXNoKHJlY29yZClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXhlZExpc3Rcbn0iLCJjb25zdCB7IGlzU3RyaW5nIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3R5cGUtY2hlY2tlcnMnKVxuXG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0ge31cbiAgICB0aGlzLl9rZXlOYW1lcyA9IFtdXG4gICAgdGhpcy5fbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICB0aGlzLl9oYXNXZWlnaHRzID0gZmFsc2VcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXlcbiAgICBpZiAoa2V5cy5sZW5ndGggJiYgaXNTdHJpbmcoa2V5c1swXSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgICB0aGlzLl9rZXlzW2tleV0gPSB7XG4gICAgICAgICAgd2VpZ2h0OiAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fa2V5TmFtZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrZXlXZWlnaHRzVG90YWwgPSAwXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuXG4gICAgICAgIGlmICgha2V5Lmhhc093blByb3BlcnR5KCduYW1lJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXCJuYW1lXCIgcHJvcGVydHkgaW4ga2V5IG9iamVjdCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlOYW1lID0ga2V5Lm5hbWVcbiAgICAgICAgdGhpcy5fa2V5TmFtZXMucHVzaChrZXlOYW1lKVxuXG4gICAgICAgIGlmICgha2V5Lmhhc093blByb3BlcnR5KCd3ZWlnaHQnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcIndlaWdodFwiIHByb3BlcnR5IGluIGtleSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5V2VpZ2h0ID0ga2V5LndlaWdodFxuXG4gICAgICAgIGlmIChrZXlXZWlnaHQgPD0gMCB8fCBrZXlXZWlnaHQgPj0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJ3ZWlnaHRcIiBwcm9wZXJ0eSBpbiBrZXkgbXVzdCBiZWluIHRoZSByYW5nZSBvZiAoMCwgMSknKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fa2V5c1trZXlOYW1lXSA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IGtleVdlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAga2V5V2VpZ2h0c1RvdGFsICs9IGtleVdlaWdodFxuXG4gICAgICAgIHRoaXMuX2hhc1dlaWdodHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlXZWlnaHRzVG90YWwgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVG90YWwgb2Yga2V5V2VpZ2h0cyBjYW5ub3QgZXhjZWVkIDEnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQoa2V5LCBuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XSA/IHRoaXMuX2tleXNba2V5XVtuYW1lXSA6IG51bGxcbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlOYW1lc1xuICB9XG4gIGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGhcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2tleXMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlTdG9yZSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB0cmFuc2Zvcm1NYXRjaGVzOiByZXF1aXJlKCcuL3RyYW5zZm9ybS1tYXRjaGVzJyksXG4gIHRyYW5zZm9ybVNjb3JlOiByZXF1aXJlKCcuL3RyYW5zZm9ybS1zY29yZScpXG59IiwibW9kdWxlLmV4cG9ydHMgPSAocmVzdWx0LCBkYXRhKSA9PiB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlc1xuICBkYXRhLm1hdGNoZXMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtYXRjaGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlc1tpXVxuXG4gICAgaWYgKG1hdGNoLmluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzOiBtYXRjaC5pbmRpY2VzLFxuICAgICAgdmFsdWU6IG1hdGNoLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleVxuICAgIH1cblxuICAgIGlmIChtYXRjaC5pZHggPiAtMSkge1xuICAgICAgb2JqLnJlZkluZGV4ID0gbWF0Y2guaWR4XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKVxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSAocmVzdWx0LCBkYXRhKSA9PiB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmVcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKiBnbG9iYWwgaW5kZXh1cmwgbW9kdWxlIHJlcXVpcmUgKi9cblxuY29uc3QgRnVzZSA9IHJlcXVpcmUoJy4uL192ZW5kb3IvZ2l0aHViLmNvbS9jc2hvcmVkYW5pZWwva3Jpc2stRnVzZS9kaXN0L2Z1c2UuanMnKVxuXG52YXIgc3VtbWFyeUluY2x1ZGUgPSAxMDAwXG52YXIgZnVzZU9wdGlvbnMgPSB7IC8vIFNlZSBGdXNlLmpzIGZvciBkZXRhaWxzXG4gIGRpc3RhbmNlOiAxMDAwLFxuICBmaW5kQWxsTWF0Y2hlczogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgaW5jbHVkZU1hdGNoZXM6IHRydWUsXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgdGhyZXNob2xkOiAwLjUsICAvLyBkZWZhdWx0IG9mIDAuNiBtYXRjaGVzIHRvbyBtdWNoXG4gIHRva2VuaXplOiBmYWxzZSxcbiAga2V5czogW3tcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHdlaWdodDogMC4zXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY29udGVudCcsXG4gICAgd2VpZ2h0OiAwLjRcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0YWdzJyxcbiAgICB3ZWlnaHQ6IDAuMVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgIHdlaWdodDogMC4xXG4gIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBkb0Nsb3NlU2VhcmNoKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmU7IHZpc2liaWxpdHk6IGhpZGRlbjsnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuaW5uZXJIVE1MID0gJzxoMj5TZWFyY2ggUmVzdWx0czwvaDI+J1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvU2VhcmNoKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnNlYXJjaF9mb3JtLnMudmFsdWVcbiAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcXVlcnknKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykuaW5uZXJIVE1MID0gJzxoMj5TZWFyY2ggUmVzdWx0czwvaDI+J1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5zdHlsZSA9ICdkaXNwbGF5OiBibG9jazsgdmlzaWJpbGl0eTogdmlzaWJsZTsnXG4gICAgICB2YXIgc2VhcmNoRnVzZU9wdGlvbnMgPSBmdXNlT3B0aW9uc1xuICAgICAgc2VhcmNoRnVzZU9wdGlvbnMubWluTWF0Y2hDaGFyTGVuZ3RoID0gc2VhcmNoUXVlcnkubGVuZ3RoICogMC44XG4gICAgICBleGVjdXRlU2VhcmNoKHNlYXJjaFF1ZXJ5LCBzZWFyY2hGdXNlT3B0aW9ucylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhLmlubmVyVGV4dCA9ICdQbGVhc2UgZW50ZXIgYSB3b3JkIG9yIHBocmFzZSBhYm92ZSdcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXN1bHRzJykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcmVzdWx0cycpLmFwcGVuZENoaWxkKHBhcmEpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5zdHlsZSA9ICdkaXNwbGF5OiBibG9jazsgdmlzaWJpbGl0eTogdmlzaWJsZTsnXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBleGVjdXRlU2VhcmNoKHNlYXJjaFF1ZXJ5LCBzZWFyY2hGdXNlT3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHJlcXVlc3Qub3BlbignR0VUJywgaW5kZXh1cmwsIHRydWUpXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgIHZhciBqc29ucHJlcCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0LnJlcGxhY2UoLyQvLCAnICcpXG4gICAgICB2YXIgcGFnZXMgPSBKU09OLnBhcnNlKGpzb25wcmVwKVxuICAgICAgdmFyIGZ1c2UgPSBuZXcgRnVzZShwYWdlcywgc2VhcmNoRnVzZU9wdGlvbnMpXG4gICAgICB2YXIgcmVzdWx0ID0gZnVzZS5zZWFyY2goc2VhcmNoUXVlcnkpXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9wdWxhdGVSZXN1bHRzKHJlc3VsdCwgc2VhcmNoUXVlcnkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwYXJhLmlubmVySFRNTCA9ICdObyBtYXRjaGVzIGZvdW5kJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5hcHBlbmRDaGlsZChwYXJhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZnVzZWJhciBoYWQgZXJyb3IgJyArIHJlcXVlc3Quc3RhdHVzICsgJyBvbiAnICsgaW5kZXh1cmwpXG4gICAgfVxuICB9XG4gIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZnVzZWJhciBzZWFyY2ggY29ubmVjdGlvbiBlcnJvciAnICsgcmVxdWVzdC5zdGF0dXMpXG4gIH1cbiAgcmVxdWVzdC5zZW5kKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFyayh2YWx1ZSkge1xuICB2YXIgbWFya2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFyaycpXG4gIHZhciBzcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc3BhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFyaycpXG4gIHNwYW5lbC5pbm5lckhUTUwgPSB2YWx1ZVxuICBtYXJrZWwuYXBwZW5kQ2hpbGQoc3BhbmVsKVxuXG4gIHJldHVybiBtYXJrZWxcbn1cblxuZnVuY3Rpb24gbWFya01hdGNoZXMobWF0Y2hlcykge1xuICB2YXIgbmV3UmVzdWx0ID0ge31cbiAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtcywgbnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICB2YXIgcHJldkluZGV4RW5kID0gMFxuXG4gICAgaXRlbXMuaW5kaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleHBhaXIsIGluZGV4bnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGlmIChpdGVtcy5rZXkgPT0gJ2NvbnRlbnQnICYmIGl0ZW1zLnZhbHVlLmxlbmd0aCA+IHN1bW1hcnlJbmNsdWRlKSB7XG4gICAgICAgIGl0ZW1zLnZhbHVlID0gaXRlbXMudmFsdWUuc3Vic3RyaW5nKDAsIHN1bW1hcnlJbmNsdWRlKVxuICAgICAgfVxuXG4gICAgICB2YXIgbWF0Y2hTdHJpbmcgPSBpdGVtcy52YWx1ZS5zdWJzdHJpbmcoaW5kZXhwYWlyWzBdLCBpbmRleHBhaXJbMV0gKyAxKVxuICAgICAgaWYgKGluZGV4cGFpclswXSA+PSBwcmV2SW5kZXhFbmQpIHtcbiAgICAgICAgdmFyIG5ld1N1YlN0cmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBuZXdTdWJTdHJpbmcuaW5uZXJIVE1MID0gaXRlbXMudmFsdWUuc3Vic3RyaW5nKHByZXZJbmRleEVuZCwgaW5kZXhwYWlyWzBdKVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1N1YlN0cmluZylcbiAgICAgIH1cblxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNYXJrKG1hdGNoU3RyaW5nKSlcblxuICAgICAgcHJldkluZGV4RW5kID0gaW5kZXhwYWlyWzFdICsgMVxuICAgIH0pXG5cbiAgICBpZiAoKHByZXZJbmRleEVuZCkgPCBpdGVtcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIGl0ZW1zLnZhbHVlLnN1YnN0cmluZyhwcmV2SW5kZXhFbmQsIGl0ZW1zLnZhbHVlLmxlbmd0aClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIG5ld1Jlc3VsdFtpdGVtcy5rZXldID0ge1xuICAgICAgJ2VsZW1lbnQnOiBuZXdFbGVtZW50LFxuICAgICAgJ29yaWdpbmFsX3ZhbHVlJzogaXRlbXMudmFsdWVcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG5ld1Jlc3VsdFxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVJlc3VsdHMocmVzdWx0cywgc2VhcmNoUXVlcnkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgcmVzbnVtKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzdWx0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdWx0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NlYXJjaC1yZXN1bHQnKVxuICAgIHJlc3VsdEVsZW1lbnQuaWQgPSAnc2VhcmNoLXJlc3VsdC0nICsgcmVzbnVtLnRvU3RyaW5nKClcbiAgICBpZiAocmVzdWx0Lml0ZW0uY29udGVudCAmJiByZXN1bHQuaXRlbS5jb250ZW50Lmxlbmd0aCA+IHN1bW1hcnlJbmNsdWRlKSB7XG4gICAgICByZXN1bHQuaXRlbS5jb250ZW50ID0gcmVzdWx0Lml0ZW0uY29udGVudC5zdWJzdHJpbmcoMCwgc3VtbWFyeUluY2x1ZGUpXG4gICAgfVxuICAgIHZhciByZXN1bHRNYXAgPSBtYXJrTWF0Y2hlcyhyZXN1bHQubWF0Y2hlcylcbiAgICB2YXIgcmVzdWx0S2V5cyA9IFsnVGl0bGUnLCAnQ29udGVudCcsICdUYWdzJywgJ0NhdGVnb3JpZXMnXVxuICAgIHJlc3VsdEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgIHZhciBsb3dlcktleSA9IGtleS50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICAgIHZhciBrZXlFbGVtZW50XG4gICAgICB2YXIgcmVzdWx0VGl0bGVMaW5rXG5cbiAgICAgIGlmIChsb3dlcktleSA9PSAndGl0bGUnKSB7XG4gICAgICAgIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gICAgICAgIGtleUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtcmVzdWx0LXRpdGxlJylcbiAgICAgICAgcmVzdWx0VGl0bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIHJlc3VsdFRpdGxlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCByZXN1bHQuaXRlbS5wZXJtYWxpbmspXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0TWFwW2xvd2VyS2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKGxvd2VyS2V5ID09ICd0aXRsZScpIHtcbiAgICAgICAgICByZXN1bHRUaXRsZUxpbmsuaW5uZXJIVE1MID0gcmVzdWx0TWFwW2xvd2VyS2V5XS5lbGVtZW50LmlubmVySFRNTFxuICAgICAgICAgIGlmICghcmVzdWx0TWFwW2xvd2VyS2V5XS5lbGVtZW50LmlubmVySFRNTCB8fCByZXN1bHRNYXBbbG93ZXJLZXldLmVsZW1lbnQuaW5uZXJIVE1MID09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHRUaXRsZUxpbmsuaW5ubmVySFRNTCA9ICdVbnRpdGxlZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJLZXkgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAga2V5RWxlbWVudCA9IHJlc3VsdE1hcC5jb250ZW50LmVsZW1lbnRcbiAgICAgICAgICBrZXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdC1jb250ZW50JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIga2V5RWxWYWxcbiAgICAgICAgICBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBrZXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdC0nICsgbG93ZXJLZXkpXG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkgKyAnOiAgJykpXG4gICAgICAgICAgdmFyIGZpcnN0VmFsID0gdHJ1ZVxuICAgICAgICAgIHJlc3VsdC5pdGVtW2xvd2VyS2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh0Y3ZhbCwgdGNrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgaWYgKCFmaXJzdFZhbCkge1xuICAgICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcsICcpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmlyc3RWYWwgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRjdmFsID09IHJlc3VsdE1hcFtsb3dlcktleV0ub3JpZ2luYWxfdmFsdWUpIHtcbiAgICAgICAgICAgICAga2V5RWxWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgICAga2V5RWxWYWwuaW5uZXJIVE1MID0gcmVzdWx0TWFwW2xvd2VyS2V5XS5lbGVtZW50LmlubmVySFRNTFxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBrZXlFbFZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgICBrZXlFbFZhbC5pbm5lckhUTUwgPSB0Y3ZhbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsVmFsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsb3dlcktleSA9PSAndGl0bGUnKSB7XG4gICAgICAgICAgcmVzdWx0VGl0bGVMaW5rLmlubmVySFRNTCA9IHJlc3VsdC5pdGVtLnRpdGxlXG4gICAgICAgICAgaWYgKCFyZXN1bHQuaXRlbS50aXRsZSB8fCByZXN1bHQuaXRlbS50aXRsZSA9PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0VGl0bGVMaW5rLmlubmVySFRNTCA9ICdVbnRpdGxlZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJLZXkgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5pdGVtLmNvbnRlbnQgJiYgKHJlc3VsdC5pdGVtLmNvbnRlbnQgIT0gJycpKSB7XG4gICAgICAgICAgICBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGtleUVsZW1lbnQuaW5uZXJIVE1MID0gcmVzdWx0Lml0ZW0uY29udGVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuaXRlbVtsb3dlcktleV0pIHtcbiAgICAgICAgICBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICBrZXlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2VhcmNoLXJlc3VsdC0nICsgbG93ZXJLZXkpXG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkgKyAnOiAgJykpXG4gICAgICAgICAgZmlyc3RWYWwgPSB0cnVlXG4gICAgICAgICAgcmVzdWx0Lml0ZW1bbG93ZXJLZXldLmZvckVhY2goZnVuY3Rpb24gKHRjdmFsLCB0Y2tleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICBpZiAoIWZpcnN0VmFsKSB7XG4gICAgICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJywgJykpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaXJzdFZhbCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIga2V5RWxWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIGtleUVsVmFsLmlubmVySFRNTCA9IHRjdmFsXG4gICAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGtleUVsVmFsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvd2VyS2V5ID09ICd0aXRsZScpIHtcbiAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChyZXN1bHRUaXRsZUxpbmspXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Yga2V5RWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVzdWx0RWxlbWVudC5hcHBlbmRDaGlsZChrZXlFbGVtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXJlc3VsdHMnKS5hcHBlbmRDaGlsZChyZXN1bHRFbGVtZW50KVxuICB9KVxuXG4gIHJldHVybiB0cnVlXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb0Nsb3NlU2VhcmNoLFxuICBkb1NlYXJjaCxcbiAgZXhlY3V0ZVNlYXJjaCxcbiAgY3JlYXRlTWFyayxcbiAgbWFya01hdGNoZXMsXG4gIHBvcHVsYXRlUmVzdWx0c1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==