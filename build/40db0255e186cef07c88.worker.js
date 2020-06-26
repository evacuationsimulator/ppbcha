/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./packages/terriajs/lib/ReactViews/Custom/Chart/downloadHrefWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./packages/terriajs/lib/ReactViews/Custom/Chart/downloadHrefWorker.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--12!./packages/terriajs/lib/ReactViews/Custom/Chart/downloadHrefWorker.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defined = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"));

var _sortedIndices = _interopRequireDefault(__webpack_require__(/*! ../../../Core/sortedIndices */ "./packages/terriajs/lib/Core/sortedIndices.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* global onmessage:true */

/**
 * Create combined arrays from arrays of column values, eg. [[values1, values2, values3], [values4, values5]].
 * The first columns of each array must be of the same type (in the above example, values1 and values4).
 * These are combined and sorted into a single column.
 * Then the subsequent columns are added, filling with null where missing. (This could be an option in future.)
 * Eg. if the values of each col are: values1=[1,3]; values2=[10,30]; values3=[100,300]; values4=[1,2]; values5=[-1,-2];
 * then the resulting array of column values are, in order, [1,2,3]; [10,null,30]; [100,null,300]; [-1,-2,null].
 * @param {Array[]} valueArrays See description above.
 * @return {Array[]} The synthesized values which could be passed to a table structure.
 */
function combineValueArrays(valueArrays) {
  if (!(0, _defined["default"])(valueArrays) || valueArrays.length < 1) {
    return;
  }

  var combinedValueArrays = []; // Start by copying the first set of columns into the result.

  var firstArray = valueArrays[0];

  for (var j = 0; j < firstArray.length; j++) {
    var values = firstArray[j];
    combinedValueArrays.push(values.slice());
  } // Then add the subsequent sets of x-columns to the end of the first result column,
  // add nulls to the end of the other existing columns,
  // add nulls to the start of the new columns,
  // and add them to the end of the result.


  for (var i = 1; i < valueArrays.length; i++) {
    var currentValueArray = valueArrays[i];
    var currentFirstArray = currentValueArray[0];
    var preExistingValuesLength = combinedValueArrays[0].length;
    combinedValueArrays[0] = combinedValueArrays[0].concat(currentFirstArray);
    var empty1 = new Array(currentFirstArray.length); // elements are undefined.

    for (var k = 1; k < combinedValueArrays.length; k++) {
      combinedValueArrays[k] = combinedValueArrays[k].concat(empty1);
    }

    var empty2 = new Array(preExistingValuesLength); // elements are undefined.

    for (var _j = 1; _j < currentValueArray.length; _j++) {
      var _values = currentValueArray[_j];
      combinedValueArrays.push(empty2.concat(_values));
    }
  } // Sort by the first column.


  combinedValueArrays = sortByFirst(combinedValueArrays);
  combinedValueArrays = combineRepeated(combinedValueArrays);
  return combinedValueArrays;
}
/**
 * Eg. sortByFirst([['b', 'a', 'c'], [1, 2, 3]]) = [['a', 'b', 'c'], [2, 1, 3]].
 * @param  {Array[]} valueArrays The array of arrays of values to sort.
 * @return {Array[]} The values sorted by the first column.
 */


function sortByFirst(valueArrays) {
  var firstValues = valueArrays[0];
  var indices = (0, _sortedIndices["default"])(firstValues);
  return valueArrays.map(function (values) {
    return indices.map(function (sortedIndex) {
      return values[sortedIndex];
    });
  });
}
/**
 * @param  {Array[]} sortedJulianDateOrValueArrays The array of arrays of values to combine. These must be sortedByFirst. Dates must be JulianDates.
 * @param  {Integer} [firstColumnType] Eg. VarType.TIME.
 * @return {Array[]} The values, with any repeats in the first column combined into one. Dates are converted to ISO8601 string representation.
 *
 * Eg.
 * var x = [['a', 'b', 'b', 'c'], [1, 2, undefined, 3], [4, undefined, 5, undefined]];
 * combineRepeated(x);
 * # x is [['a', 'b', 'c'], [1, 2, 3], [4, 5, undefined]].
 */


function combineRepeated(sortedValueArrays) {
  var result = new Array(sortedValueArrays.length);

  for (var i = 0; i < result.length; i++) {
    result[i] = [sortedValueArrays[i][0]];
  }

  for (var j = 1; j < sortedValueArrays[0].length; j++) {
    if (sortedValueArrays[0][j] === sortedValueArrays[0][j - 1]) {
      var currentIndex = result[0].length - 1;

      for (var _i = 0; _i < result.length; _i++) {
        if (result[_i][currentIndex] === undefined) {
          result[_i][currentIndex] = sortedValueArrays[_i][j];
        }
      }
    } else {
      for (var _i2 = 0; _i2 < result.length; _i2++) {
        result[_i2].push(sortedValueArrays[_i2][j]);
      }
    }
  }

  return result;
}
/**
 * Convert an array of column values, with column names, to an array of row values.
 * @param  {Array[]} columnValueArrays Array of column values, eg. [[1,2,3], [4,5,6]].
 * @param  {String[]} columnNames Array of column names, eg ['x', 'y'].
 * @return {Array[]} Array of rows, starting with the column names, eg. [['x', 'y'], [1, 4], [2, 5], [3, 6]].
 */


function toArrayOfRows(columnValueArrays, columnNames) {
  if (columnValueArrays.length < 1) {
    return;
  }

  var rows = columnValueArrays[0].map(function (value0, rowIndex) {
    return columnValueArrays.map(function (values) {
      return values[rowIndex];
    });
  });
  rows.unshift(columnNames);
  return rows;
}

onmessage = function onmessage(event) {
  var valueArrays = event.data.values.map(function (valuesArray) {
    return valuesArray.map(function (values) {
      return Array.prototype.slice.call(values);
    });
  }); // Convert from typed arrays.

  var nameArrays = event.data.names;
  var combinedValues = combineValueArrays(valueArrays);
  var rows = toArrayOfRows(combinedValues, nameArrays);
  var joinedRows = rows.map(function (row) {
    return row.join(",");
  });
  var csvString = joinedRows.join("\n");
  postMessage(csvString);
};

/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/Core/defined.js":
/*!*************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Core/defined.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    /**
     * @exports defined
     *
     * @param {*} value The object.
     * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
     *
     * @example
     * if (Cesium.defined(positions)) {
     *      doSomething();
     * } else {
     *      doSomethingElse();
     * }
     */
    function defined(value) {
        return value !== undefined && value !== null;
    }

    return defined;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./packages/terriajs/lib/Core/sortedIndices.js":
/*!*****************************************************!*\
  !*** ./packages/terriajs/lib/Core/sortedIndices.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns indices such that array[indices[i]] = sortedArray[i].
 * Eg. sortedIndices(['c', 'a', 'b', 'd']) => [1, 2, 0, 3]. (The sorted array is [a, b, c, d], and "a" was in position 1, "b" in position 2, etc.)
 * @param {Array} array The array to sort.
 * @param {Function} [compareFunction] The usual compare function, eg. function(a, b) { return a - b }.
 * @return {Array} The sorted indices, such that array[sortedIndices[0]] = sortedArray[0].
 */

function sortedIndices(array, compareFunction) {
  var length = array.length;
  var indices = new Array(length);

  for (var i = 0; i < length; i++) {
    indices[i] = i;
  }

  if (!compareFunction) {
    compareFunction = function compareFunction(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  }

  indices.sort(function (a, b) {
    return compareFunction(array[a], array[b]);
  });
  return indices;
} //
// Note: for indices which go in the other direction, just use indexOf like this:
//
// it('inverse indices work', function() {
//     var data = ['c', 'a', 'b', 'd'];
//     var sorted = data.slice().sort();
//     var inverseIndices = data.map(function(datum) { return sorted.indexOf(datum); });
//     expect(inverseIndices).toEqual([2, 0, 1, 3]);
// });


module.exports = sortedIndices;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDBkYjAyNTVlMTg2Y2VmMDdjODgud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3RlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL0N1c3RvbS9DaGFydC9kb3dubG9hZEhyZWZXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3RlcnJpYWpzL2xpYi9Db3JlL3NvcnRlZEluZGljZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJidWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9DdXN0b20vQ2hhcnQvZG93bmxvYWRIcmVmV29ya2VyLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZGVmaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9kZWZpbmVkXCIpKTtcblxudmFyIF9zb3J0ZWRJbmRpY2VzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vQ29yZS9zb3J0ZWRJbmRpY2VzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qIGdsb2JhbCBvbm1lc3NhZ2U6dHJ1ZSAqL1xuXG4vKipcbiAqIENyZWF0ZSBjb21iaW5lZCBhcnJheXMgZnJvbSBhcnJheXMgb2YgY29sdW1uIHZhbHVlcywgZWcuIFtbdmFsdWVzMSwgdmFsdWVzMiwgdmFsdWVzM10sIFt2YWx1ZXM0LCB2YWx1ZXM1XV0uXG4gKiBUaGUgZmlyc3QgY29sdW1ucyBvZiBlYWNoIGFycmF5IG11c3QgYmUgb2YgdGhlIHNhbWUgdHlwZSAoaW4gdGhlIGFib3ZlIGV4YW1wbGUsIHZhbHVlczEgYW5kIHZhbHVlczQpLlxuICogVGhlc2UgYXJlIGNvbWJpbmVkIGFuZCBzb3J0ZWQgaW50byBhIHNpbmdsZSBjb2x1bW4uXG4gKiBUaGVuIHRoZSBzdWJzZXF1ZW50IGNvbHVtbnMgYXJlIGFkZGVkLCBmaWxsaW5nIHdpdGggbnVsbCB3aGVyZSBtaXNzaW5nLiAoVGhpcyBjb3VsZCBiZSBhbiBvcHRpb24gaW4gZnV0dXJlLilcbiAqIEVnLiBpZiB0aGUgdmFsdWVzIG9mIGVhY2ggY29sIGFyZTogdmFsdWVzMT1bMSwzXTsgdmFsdWVzMj1bMTAsMzBdOyB2YWx1ZXMzPVsxMDAsMzAwXTsgdmFsdWVzND1bMSwyXTsgdmFsdWVzNT1bLTEsLTJdO1xuICogdGhlbiB0aGUgcmVzdWx0aW5nIGFycmF5IG9mIGNvbHVtbiB2YWx1ZXMgYXJlLCBpbiBvcmRlciwgWzEsMiwzXTsgWzEwLG51bGwsMzBdOyBbMTAwLG51bGwsMzAwXTsgWy0xLC0yLG51bGxdLlxuICogQHBhcmFtIHtBcnJheVtdfSB2YWx1ZUFycmF5cyBTZWUgZGVzY3JpcHRpb24gYWJvdmUuXG4gKiBAcmV0dXJuIHtBcnJheVtdfSBUaGUgc3ludGhlc2l6ZWQgdmFsdWVzIHdoaWNoIGNvdWxkIGJlIHBhc3NlZCB0byBhIHRhYmxlIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gY29tYmluZVZhbHVlQXJyYXlzKHZhbHVlQXJyYXlzKSB7XG4gIGlmICghKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodmFsdWVBcnJheXMpIHx8IHZhbHVlQXJyYXlzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29tYmluZWRWYWx1ZUFycmF5cyA9IFtdOyAvLyBTdGFydCBieSBjb3B5aW5nIHRoZSBmaXJzdCBzZXQgb2YgY29sdW1ucyBpbnRvIHRoZSByZXN1bHQuXG5cbiAgdmFyIGZpcnN0QXJyYXkgPSB2YWx1ZUFycmF5c1swXTtcblxuICBmb3IgKHZhciBqID0gMDsgaiA8IGZpcnN0QXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICB2YXIgdmFsdWVzID0gZmlyc3RBcnJheVtqXTtcbiAgICBjb21iaW5lZFZhbHVlQXJyYXlzLnB1c2godmFsdWVzLnNsaWNlKCkpO1xuICB9IC8vIFRoZW4gYWRkIHRoZSBzdWJzZXF1ZW50IHNldHMgb2YgeC1jb2x1bW5zIHRvIHRoZSBlbmQgb2YgdGhlIGZpcnN0IHJlc3VsdCBjb2x1bW4sXG4gIC8vIGFkZCBudWxscyB0byB0aGUgZW5kIG9mIHRoZSBvdGhlciBleGlzdGluZyBjb2x1bW5zLFxuICAvLyBhZGQgbnVsbHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBuZXcgY29sdW1ucyxcbiAgLy8gYW5kIGFkZCB0aGVtIHRvIHRoZSBlbmQgb2YgdGhlIHJlc3VsdC5cblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgdmFsdWVBcnJheXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFZhbHVlQXJyYXkgPSB2YWx1ZUFycmF5c1tpXTtcbiAgICB2YXIgY3VycmVudEZpcnN0QXJyYXkgPSBjdXJyZW50VmFsdWVBcnJheVswXTtcbiAgICB2YXIgcHJlRXhpc3RpbmdWYWx1ZXNMZW5ndGggPSBjb21iaW5lZFZhbHVlQXJyYXlzWzBdLmxlbmd0aDtcbiAgICBjb21iaW5lZFZhbHVlQXJyYXlzWzBdID0gY29tYmluZWRWYWx1ZUFycmF5c1swXS5jb25jYXQoY3VycmVudEZpcnN0QXJyYXkpO1xuICAgIHZhciBlbXB0eTEgPSBuZXcgQXJyYXkoY3VycmVudEZpcnN0QXJyYXkubGVuZ3RoKTsgLy8gZWxlbWVudHMgYXJlIHVuZGVmaW5lZC5cblxuICAgIGZvciAodmFyIGsgPSAxOyBrIDwgY29tYmluZWRWYWx1ZUFycmF5cy5sZW5ndGg7IGsrKykge1xuICAgICAgY29tYmluZWRWYWx1ZUFycmF5c1trXSA9IGNvbWJpbmVkVmFsdWVBcnJheXNba10uY29uY2F0KGVtcHR5MSk7XG4gICAgfVxuXG4gICAgdmFyIGVtcHR5MiA9IG5ldyBBcnJheShwcmVFeGlzdGluZ1ZhbHVlc0xlbmd0aCk7IC8vIGVsZW1lbnRzIGFyZSB1bmRlZmluZWQuXG5cbiAgICBmb3IgKHZhciBfaiA9IDE7IF9qIDwgY3VycmVudFZhbHVlQXJyYXkubGVuZ3RoOyBfaisrKSB7XG4gICAgICB2YXIgX3ZhbHVlcyA9IGN1cnJlbnRWYWx1ZUFycmF5W19qXTtcbiAgICAgIGNvbWJpbmVkVmFsdWVBcnJheXMucHVzaChlbXB0eTIuY29uY2F0KF92YWx1ZXMpKTtcbiAgICB9XG4gIH0gLy8gU29ydCBieSB0aGUgZmlyc3QgY29sdW1uLlxuXG5cbiAgY29tYmluZWRWYWx1ZUFycmF5cyA9IHNvcnRCeUZpcnN0KGNvbWJpbmVkVmFsdWVBcnJheXMpO1xuICBjb21iaW5lZFZhbHVlQXJyYXlzID0gY29tYmluZVJlcGVhdGVkKGNvbWJpbmVkVmFsdWVBcnJheXMpO1xuICByZXR1cm4gY29tYmluZWRWYWx1ZUFycmF5cztcbn1cbi8qKlxuICogRWcuIHNvcnRCeUZpcnN0KFtbJ2InLCAnYScsICdjJ10sIFsxLCAyLCAzXV0pID0gW1snYScsICdiJywgJ2MnXSwgWzIsIDEsIDNdXS5cbiAqIEBwYXJhbSAge0FycmF5W119IHZhbHVlQXJyYXlzIFRoZSBhcnJheSBvZiBhcnJheXMgb2YgdmFsdWVzIHRvIHNvcnQuXG4gKiBAcmV0dXJuIHtBcnJheVtdfSBUaGUgdmFsdWVzIHNvcnRlZCBieSB0aGUgZmlyc3QgY29sdW1uLlxuICovXG5cblxuZnVuY3Rpb24gc29ydEJ5Rmlyc3QodmFsdWVBcnJheXMpIHtcbiAgdmFyIGZpcnN0VmFsdWVzID0gdmFsdWVBcnJheXNbMF07XG4gIHZhciBpbmRpY2VzID0gKDAsIF9zb3J0ZWRJbmRpY2VzW1wiZGVmYXVsdFwiXSkoZmlyc3RWYWx1ZXMpO1xuICByZXR1cm4gdmFsdWVBcnJheXMubWFwKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gaW5kaWNlcy5tYXAoZnVuY3Rpb24gKHNvcnRlZEluZGV4KSB7XG4gICAgICByZXR1cm4gdmFsdWVzW3NvcnRlZEluZGV4XTtcbiAgICB9KTtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSAge0FycmF5W119IHNvcnRlZEp1bGlhbkRhdGVPclZhbHVlQXJyYXlzIFRoZSBhcnJheSBvZiBhcnJheXMgb2YgdmFsdWVzIHRvIGNvbWJpbmUuIFRoZXNlIG11c3QgYmUgc29ydGVkQnlGaXJzdC4gRGF0ZXMgbXVzdCBiZSBKdWxpYW5EYXRlcy5cbiAqIEBwYXJhbSAge0ludGVnZXJ9IFtmaXJzdENvbHVtblR5cGVdIEVnLiBWYXJUeXBlLlRJTUUuXG4gKiBAcmV0dXJuIHtBcnJheVtdfSBUaGUgdmFsdWVzLCB3aXRoIGFueSByZXBlYXRzIGluIHRoZSBmaXJzdCBjb2x1bW4gY29tYmluZWQgaW50byBvbmUuIERhdGVzIGFyZSBjb252ZXJ0ZWQgdG8gSVNPODYwMSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKlxuICogRWcuXG4gKiB2YXIgeCA9IFtbJ2EnLCAnYicsICdiJywgJ2MnXSwgWzEsIDIsIHVuZGVmaW5lZCwgM10sIFs0LCB1bmRlZmluZWQsIDUsIHVuZGVmaW5lZF1dO1xuICogY29tYmluZVJlcGVhdGVkKHgpO1xuICogIyB4IGlzIFtbJ2EnLCAnYicsICdjJ10sIFsxLCAyLCAzXSwgWzQsIDUsIHVuZGVmaW5lZF1dLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlcGVhdGVkKHNvcnRlZFZhbHVlQXJyYXlzKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoc29ydGVkVmFsdWVBcnJheXMubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IFtzb3J0ZWRWYWx1ZUFycmF5c1tpXVswXV07XG4gIH1cblxuICBmb3IgKHZhciBqID0gMTsgaiA8IHNvcnRlZFZhbHVlQXJyYXlzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgaWYgKHNvcnRlZFZhbHVlQXJyYXlzWzBdW2pdID09PSBzb3J0ZWRWYWx1ZUFycmF5c1swXVtqIC0gMV0pIHtcbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSByZXN1bHRbMF0ubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHJlc3VsdC5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaWYgKHJlc3VsdFtfaV1bY3VycmVudEluZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0W19pXVtjdXJyZW50SW5kZXhdID0gc29ydGVkVmFsdWVBcnJheXNbX2ldW2pdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHJlc3VsdC5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgIHJlc3VsdFtfaTJdLnB1c2goc29ydGVkVmFsdWVBcnJheXNbX2kyXVtqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBjb2x1bW4gdmFsdWVzLCB3aXRoIGNvbHVtbiBuYW1lcywgdG8gYW4gYXJyYXkgb2Ygcm93IHZhbHVlcy5cbiAqIEBwYXJhbSAge0FycmF5W119IGNvbHVtblZhbHVlQXJyYXlzIEFycmF5IG9mIGNvbHVtbiB2YWx1ZXMsIGVnLiBbWzEsMiwzXSwgWzQsNSw2XV0uXG4gKiBAcGFyYW0gIHtTdHJpbmdbXX0gY29sdW1uTmFtZXMgQXJyYXkgb2YgY29sdW1uIG5hbWVzLCBlZyBbJ3gnLCAneSddLlxuICogQHJldHVybiB7QXJyYXlbXX0gQXJyYXkgb2Ygcm93cywgc3RhcnRpbmcgd2l0aCB0aGUgY29sdW1uIG5hbWVzLCBlZy4gW1sneCcsICd5J10sIFsxLCA0XSwgWzIsIDVdLCBbMywgNl1dLlxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheU9mUm93cyhjb2x1bW5WYWx1ZUFycmF5cywgY29sdW1uTmFtZXMpIHtcbiAgaWYgKGNvbHVtblZhbHVlQXJyYXlzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcm93cyA9IGNvbHVtblZhbHVlQXJyYXlzWzBdLm1hcChmdW5jdGlvbiAodmFsdWUwLCByb3dJbmRleCkge1xuICAgIHJldHVybiBjb2x1bW5WYWx1ZUFycmF5cy5tYXAoZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgcmV0dXJuIHZhbHVlc1tyb3dJbmRleF07XG4gICAgfSk7XG4gIH0pO1xuICByb3dzLnVuc2hpZnQoY29sdW1uTmFtZXMpO1xuICByZXR1cm4gcm93cztcbn1cblxub25tZXNzYWdlID0gZnVuY3Rpb24gb25tZXNzYWdlKGV2ZW50KSB7XG4gIHZhciB2YWx1ZUFycmF5cyA9IGV2ZW50LmRhdGEudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWVzQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWVzQXJyYXkubWFwKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2YWx1ZXMpO1xuICAgIH0pO1xuICB9KTsgLy8gQ29udmVydCBmcm9tIHR5cGVkIGFycmF5cy5cblxuICB2YXIgbmFtZUFycmF5cyA9IGV2ZW50LmRhdGEubmFtZXM7XG4gIHZhciBjb21iaW5lZFZhbHVlcyA9IGNvbWJpbmVWYWx1ZUFycmF5cyh2YWx1ZUFycmF5cyk7XG4gIHZhciByb3dzID0gdG9BcnJheU9mUm93cyhjb21iaW5lZFZhbHVlcywgbmFtZUFycmF5cyk7XG4gIHZhciBqb2luZWRSb3dzID0gcm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgIHJldHVybiByb3cuam9pbihcIixcIik7XG4gIH0pO1xuICB2YXIgY3N2U3RyaW5nID0gam9pbmVkUm93cy5qb2luKFwiXFxuXCIpO1xuICBwb3N0TWVzc2FnZShjc3ZTdHJpbmcpO1xufTsiLCJkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogQGV4cG9ydHMgZGVmaW5lZFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBkZWZpbmVkLCByZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogaWYgKENlc2l1bS5kZWZpbmVkKHBvc2l0aW9ucykpIHtcbiAgICAgKiAgICAgIGRvU29tZXRoaW5nKCk7XG4gICAgICogfSBlbHNlIHtcbiAgICAgKiAgICAgIGRvU29tZXRoaW5nRWxzZSgpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZWZpbmVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogUmV0dXJucyBpbmRpY2VzIHN1Y2ggdGhhdCBhcnJheVtpbmRpY2VzW2ldXSA9IHNvcnRlZEFycmF5W2ldLlxuICogRWcuIHNvcnRlZEluZGljZXMoWydjJywgJ2EnLCAnYicsICdkJ10pID0+IFsxLCAyLCAwLCAzXS4gKFRoZSBzb3J0ZWQgYXJyYXkgaXMgW2EsIGIsIGMsIGRdLCBhbmQgXCJhXCIgd2FzIGluIHBvc2l0aW9uIDEsIFwiYlwiIGluIHBvc2l0aW9uIDIsIGV0Yy4pXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJlRnVuY3Rpb25dIFRoZSB1c3VhbCBjb21wYXJlIGZ1bmN0aW9uLCBlZy4gZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGIgfS5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgc29ydGVkIGluZGljZXMsIHN1Y2ggdGhhdCBhcnJheVtzb3J0ZWRJbmRpY2VzWzBdXSA9IHNvcnRlZEFycmF5WzBdLlxuICovXG5cbmZ1bmN0aW9uIHNvcnRlZEluZGljZXMoYXJyYXksIGNvbXBhcmVGdW5jdGlvbikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB2YXIgaW5kaWNlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpbmRpY2VzW2ldID0gaTtcbiAgfVxuXG4gIGlmICghY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgY29tcGFyZUZ1bmN0aW9uID0gZnVuY3Rpb24gY29tcGFyZUZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICB9O1xuICB9XG5cbiAgaW5kaWNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVGdW5jdGlvbihhcnJheVthXSwgYXJyYXlbYl0pO1xuICB9KTtcbiAgcmV0dXJuIGluZGljZXM7XG59IC8vXG4vLyBOb3RlOiBmb3IgaW5kaWNlcyB3aGljaCBnbyBpbiB0aGUgb3RoZXIgZGlyZWN0aW9uLCBqdXN0IHVzZSBpbmRleE9mIGxpa2UgdGhpczpcbi8vXG4vLyBpdCgnaW52ZXJzZSBpbmRpY2VzIHdvcmsnLCBmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgZGF0YSA9IFsnYycsICdhJywgJ2InLCAnZCddO1xuLy8gICAgIHZhciBzb3J0ZWQgPSBkYXRhLnNsaWNlKCkuc29ydCgpO1xuLy8gICAgIHZhciBpbnZlcnNlSW5kaWNlcyA9IGRhdGEubWFwKGZ1bmN0aW9uKGRhdHVtKSB7IHJldHVybiBzb3J0ZWQuaW5kZXhPZihkYXR1bSk7IH0pO1xuLy8gICAgIGV4cGVjdChpbnZlcnNlSW5kaWNlcykudG9FcXVhbChbMiwgMCwgMSwgM10pO1xuLy8gfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzb3J0ZWRJbmRpY2VzOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9