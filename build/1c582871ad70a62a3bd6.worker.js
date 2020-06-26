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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/string-replace-webpack-plugin/loader.js?id=6nartoyax2e!./node_modules/string-replace-webpack-plugin/loader.js?id=c0d77xoxf9j!./packages/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/string-replace-webpack-plugin/loader.js?id=6nartoyax2e!./node_modules/string-replace-webpack-plugin/loader.js?id=c0d77xoxf9j!./packages/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-webpack-plugin/loader.js?id=6nartoyax2e!./node_modules/string-replace-webpack-plugin/loader.js?id=c0d77xoxf9j!./packages/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/inflate.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */

(function(obj) {

	// Global
	var MAX_BITS = 15;

	var Z_OK = 0;
	var Z_STREAM_END = 1;
	var Z_NEED_DICT = 2;
	var Z_STREAM_ERROR = -2;
	var Z_DATA_ERROR = -3;
	var Z_MEM_ERROR = -4;
	var Z_BUF_ERROR = -5;

	var inflate_mask = [ 0x00000000, 0x00000001, 0x00000003, 0x00000007, 0x0000000f, 0x0000001f, 0x0000003f, 0x0000007f, 0x000000ff, 0x000001ff, 0x000003ff,
			0x000007ff, 0x00000fff, 0x00001fff, 0x00003fff, 0x00007fff, 0x0000ffff ];

	var MANY = 1440;

	// JZlib version : "1.0.2"
	var Z_NO_FLUSH = 0;
	var Z_FINISH = 4;

	// InfTree
	var fixed_bl = 9;
	var fixed_bd = 5;

	var fixed_tl = [ 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0,
			0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40,
			0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13,
			0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60,
			0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7,
			35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8,
			26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80,
			7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0,
			8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0,
			8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97,
			0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210,
			81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117,
			0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154,
			84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83,
			0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230,
			80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139,
			0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174,
			0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111,
			0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9,
			193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8,
			120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8,
			227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8,
			92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9,
			249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8,
			130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9,
			181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8,
			102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9,
			221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0,
			8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9,
			147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8,
			85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9,
			235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8,
			141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9,
			167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8,
			107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9,
			207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8,
			127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255 ];
	var fixed_td = [ 80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5,
			8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5,
			24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577 ];

	// Tables for deflate from PKZIP's appnote.txt.
	var cplens = [ // Copy lengths for literal codes 257..285
	3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ];

	// see note #13 above about 258
	var cplext = [ // Extra bits for literal codes 257..285
	0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112 // 112==invalid
	];

	var cpdist = [ // Copy offsets for distance codes 0..29
	1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ];

	var cpdext = [ // Extra bits for distance codes
	0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];

	// If BMAX needs to be larger than 16, then h and x[] should be uLong.
	var BMAX = 15; // maximum bit length of any code

	function InfTree() {
		var that = this;

		var hn; // hufts used in space
		var v; // work area for huft_build
		var c; // bit length count table
		var r; // table entry for structure assignment
		var u; // table stack
		var x; // bit offsets, then code stack

		function huft_build(b, // code lengths in bits (all assumed <=
		// BMAX)
		bindex, n, // number of codes (assumed <= 288)
		s, // number of simple-valued codes (0..s-1)
		d, // list of base values for non-simple codes
		e, // list of extra bits for non-simple codes
		t, // result: starting table
		m, // maximum lookup bits, returns actual
		hp,// space for trees
		hn,// hufts used in space
		v // working area: values in order of bit length
		) {
			// Given a list of code lengths and a maximum table size, make a set of
			// tables to decode that set of codes. Return Z_OK on success,
			// Z_BUF_ERROR
			// if the given code set is incomplete (the tables are still built in
			// this
			// case), Z_DATA_ERROR if the input is invalid (an over-subscribed set
			// of
			// lengths), or Z_MEM_ERROR if not enough memory.

			var a; // counter for codes of length k
			var f; // i repeats in table every f entries
			var g; // maximum code length
			var h; // table level
			var i; // counter, current code
			var j; // counter
			var k; // number of bits in current code
			var l; // bits per table (returned in m)
			var mask; // (1 << w) - 1, to avoid cc -O bug on HP
			var p; // pointer into c[], b[], or v[]
			var q; // points to current table
			var w; // bits before this table == (l * h)
			var xp; // pointer into x
			var y; // number of dummy codes added
			var z; // number of entries in current table

			// Generate counts for each bit length

			p = 0;
			i = n;
			do {
				c[b[bindex + p]]++;
				p++;
				i--; // assume all entries <= BMAX
			} while (i !== 0);

			if (c[0] == n) { // null input--all zero length codes
				t[0] = -1;
				m[0] = 0;
				return Z_OK;
			}

			// Find minimum and maximum length, bound *m by those
			l = m[0];
			for (j = 1; j <= BMAX; j++)
				if (c[j] !== 0)
					break;
			k = j; // minimum code length
			if (l < j) {
				l = j;
			}
			for (i = BMAX; i !== 0; i--) {
				if (c[i] !== 0)
					break;
			}
			g = i; // maximum code length
			if (l > i) {
				l = i;
			}
			m[0] = l;

			// Adjust last length count to fill out codes, if needed
			for (y = 1 << j; j < i; j++, y <<= 1) {
				if ((y -= c[j]) < 0) {
					return Z_DATA_ERROR;
				}
			}
			if ((y -= c[i]) < 0) {
				return Z_DATA_ERROR;
			}
			c[i] += y;

			// Generate starting offsets into the value table for each length
			x[1] = j = 0;
			p = 1;
			xp = 2;
			while (--i !== 0) { // note that i == g from above
				x[xp] = (j += c[p]);
				xp++;
				p++;
			}

			// Make a table of values in order of bit lengths
			i = 0;
			p = 0;
			do {
				if ((j = b[bindex + p]) !== 0) {
					v[x[j]++] = i;
				}
				p++;
			} while (++i < n);
			n = x[g]; // set n to length of v

			// Generate the Huffman codes and for each, make the table entries
			x[0] = i = 0; // first Huffman code is zero
			p = 0; // grab values in bit order
			h = -1; // no tables yet--level -1
			w = -l; // bits decoded == (l * h)
			u[0] = 0; // just to keep compilers happy
			q = 0; // ditto
			z = 0; // ditto

			// go through the bit lengths (k already is bits in shortest code)
			for (; k <= g; k++) {
				a = c[k];
				while (a-- !== 0) {
					// here i is the Huffman code of length k bits for value *p
					// make tables up to required level
					while (k > w + l) {
						h++;
						w += l; // previous table always l bits
						// compute minimum size table less than or equal to l bits
						z = g - w;
						z = (z > l) ? l : z; // table size upper limit
						if ((f = 1 << (j = k - w)) > a + 1) { // try a k-w bit table
							// too few codes for
							// k-w bit table
							f -= a + 1; // deduct codes from patterns left
							xp = k;
							if (j < z) {
								while (++j < z) { // try smaller tables up to z bits
									if ((f <<= 1) <= c[++xp])
										break; // enough codes to use up j bits
									f -= c[xp]; // else deduct codes from patterns
								}
							}
						}
						z = 1 << j; // table entries for j-bit table

						// allocate new table
						if (hn[0] + z > MANY) { // (note: doesn't matter for fixed)
							return Z_DATA_ERROR; // overflow of MANY
						}
						u[h] = q = /* hp+ */hn[0]; // DEBUG
						hn[0] += z;

						// connect to last table, if there is one
						if (h !== 0) {
							x[h] = i; // save pattern for backing up
							r[0] = /* (byte) */j; // bits in this table
							r[1] = /* (byte) */l; // bits to dump before this table
							j = i >>> (w - l);
							r[2] = /* (int) */(q - u[h - 1] - j); // offset to this table
							hp.set(r, (u[h - 1] + j) * 3);
							// to
							// last
							// table
						} else {
							t[0] = q; // first table is returned result
						}
					}

					// set up table entry in r
					r[1] = /* (byte) */(k - w);
					if (p >= n) {
						r[0] = 128 + 64; // out of values--invalid code
					} else if (v[p] < s) {
						r[0] = /* (byte) */(v[p] < 256 ? 0 : 32 + 64); // 256 is
						// end-of-block
						r[2] = v[p++]; // simple code is just the value
					} else {
						r[0] = /* (byte) */(e[v[p] - s] + 16 + 64); // non-simple--look
						// up in lists
						r[2] = d[v[p++] - s];
					}

					// fill code-like entries with r
					f = 1 << (k - w);
					for (j = i >>> w; j < z; j += f) {
						hp.set(r, (q + j) * 3);
					}

					// backwards increment the k-bit code i
					for (j = 1 << (k - 1); (i & j) !== 0; j >>>= 1) {
						i ^= j;
					}
					i ^= j;

					// backup over finished tables
					mask = (1 << w) - 1; // needed on HP, cc -O bug
					while ((i & mask) != x[h]) {
						h--; // don't need to update q
						w -= l;
						mask = (1 << w) - 1;
					}
				}
			}
			// Return Z_BUF_ERROR if we were given an incomplete table
			return y !== 0 && g != 1 ? Z_BUF_ERROR : Z_OK;
		}

		function initWorkArea(vsize) {
			var i;
			if (!hn) {
				hn = []; // []; //new Array(1);
				v = []; // new Array(vsize);
				c = new Int32Array(BMAX + 1); // new Array(BMAX + 1);
				r = []; // new Array(3);
				u = new Int32Array(BMAX); // new Array(BMAX);
				x = new Int32Array(BMAX + 1); // new Array(BMAX + 1);
			}
			if (v.length < vsize) {
				v = []; // new Array(vsize);
			}
			for (i = 0; i < vsize; i++) {
				v[i] = 0;
			}
			for (i = 0; i < BMAX + 1; i++) {
				c[i] = 0;
			}
			for (i = 0; i < 3; i++) {
				r[i] = 0;
			}
			// for(int i=0; i<BMAX; i++){u[i]=0;}
			u.set(c.subarray(0, BMAX), 0);
			// for(int i=0; i<BMAX+1; i++){x[i]=0;}
			x.set(c.subarray(0, BMAX + 1), 0);
		}

		that.inflate_trees_bits = function(c, // 19 code lengths
		bb, // bits tree desired/actual depth
		tb, // bits tree result
		hp, // space for trees
		z // for messages
		) {
			var result;
			initWorkArea(19);
			hn[0] = 0;
			result = huft_build(c, 0, 19, 19, null, null, tb, bb, hp, hn, v);

			if (result == Z_DATA_ERROR) {
				z.msg = "oversubscribed dynamic bit lengths tree";
			} else if (result == Z_BUF_ERROR || bb[0] === 0) {
				z.msg = "incomplete dynamic bit lengths tree";
				result = Z_DATA_ERROR;
			}
			return result;
		};

		that.inflate_trees_dynamic = function(nl, // number of literal/length codes
		nd, // number of distance codes
		c, // that many (total) code lengths
		bl, // literal desired/actual bit depth
		bd, // distance desired/actual bit depth
		tl, // literal/length tree result
		td, // distance tree result
		hp, // space for trees
		z // for messages
		) {
			var result;

			// build literal/length tree
			initWorkArea(288);
			hn[0] = 0;
			result = huft_build(c, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
			if (result != Z_OK || bl[0] === 0) {
				if (result == Z_DATA_ERROR) {
					z.msg = "oversubscribed literal/length tree";
				} else if (result != Z_MEM_ERROR) {
					z.msg = "incomplete literal/length tree";
					result = Z_DATA_ERROR;
				}
				return result;
			}

			// build distance tree
			initWorkArea(288);
			result = huft_build(c, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);

			if (result != Z_OK || (bd[0] === 0 && nl > 257)) {
				if (result == Z_DATA_ERROR) {
					z.msg = "oversubscribed distance tree";
				} else if (result == Z_BUF_ERROR) {
					z.msg = "incomplete distance tree";
					result = Z_DATA_ERROR;
				} else if (result != Z_MEM_ERROR) {
					z.msg = "empty distance tree with lengths";
					result = Z_DATA_ERROR;
				}
				return result;
			}

			return Z_OK;
		};

	}

	InfTree.inflate_trees_fixed = function(bl, // literal desired/actual bit depth
	bd, // distance desired/actual bit depth
	tl,// literal/length tree result
	td// distance tree result
	) {
		bl[0] = fixed_bl;
		bd[0] = fixed_bd;
		tl[0] = fixed_tl;
		td[0] = fixed_td;
		return Z_OK;
	};

	// InfCodes

	// waiting for "i:"=input,
	// "o:"=output,
	// "x:"=nothing
	var START = 0; // x: set up for LEN
	var LEN = 1; // i: get length/literal/eob next
	var LENEXT = 2; // i: getting length extra (have base)
	var DIST = 3; // i: get distance next
	var DISTEXT = 4;// i: getting distance extra
	var COPY = 5; // o: copying bytes in window, waiting
	// for space
	var LIT = 6; // o: got literal, waiting for output
	// space
	var WASH = 7; // o: got eob, possibly still output
	// waiting
	var END = 8; // x: got eob and all data flushed
	var BADCODE = 9;// x: got error

	function InfCodes() {
		var that = this;

		var mode; // current inflate_codes mode

		// mode dependent information
		var len = 0;

		var tree; // pointer into tree
		var tree_index = 0;
		var need = 0; // bits needed

		var lit = 0;

		// if EXT or COPY, where and how much
		var get = 0; // bits to get for extra
		var dist = 0; // distance back to copy from

		var lbits = 0; // ltree bits decoded per branch
		var dbits = 0; // dtree bits decoder per branch
		var ltree; // literal/length/eob tree
		var ltree_index = 0; // literal/length/eob tree
		var dtree; // distance tree
		var dtree_index = 0; // distance tree

		// Called with number of bytes left to write in window at least 258
		// (the maximum string length) and number of input bytes available
		// at least ten. The ten bytes are six bytes for the longest length/
		// distance pair plus four bytes for overloading the bit buffer.

		function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
			var t; // temporary pointer
			var tp; // temporary pointer
			var tp_index; // temporary pointer
			var e; // extra bits or operation
			var b; // bit buffer
			var k; // bits in bit buffer
			var p; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer
			var ml; // mask for literal/length tree
			var md; // mask for distance tree
			var c; // bytes to copy
			var d; // distance back to copy from
			var r; // copy source pointer

			var tp_index_t_3; // (tp_index+t)*3

			// load input, output, bit values
			p = z.next_in_index;
			n = z.avail_in;
			b = s.bitb;
			k = s.bitk;
			q = s.write;
			m = q < s.read ? s.read - q - 1 : s.end - q;

			// initialize masks
			ml = inflate_mask[bl];
			md = inflate_mask[bd];

			// do until not enough input or output space for fast loop
			do { // assume called with m >= 258 && n >= 10
				// get literal/length code
				while (k < (20)) { // max bits for literal/length code
					n--;
					b |= (z.read_byte(p++) & 0xff) << k;
					k += 8;
				}

				t = b & ml;
				tp = tl;
				tp_index = tl_index;
				tp_index_t_3 = (tp_index + t) * 3;
				if ((e = tp[tp_index_t_3]) === 0) {
					b >>= (tp[tp_index_t_3 + 1]);
					k -= (tp[tp_index_t_3 + 1]);

					s.window[q++] = /* (byte) */tp[tp_index_t_3 + 2];
					m--;
					continue;
				}
				do {

					b >>= (tp[tp_index_t_3 + 1]);
					k -= (tp[tp_index_t_3 + 1]);

					if ((e & 16) !== 0) {
						e &= 15;
						c = tp[tp_index_t_3 + 2] + (/* (int) */b & inflate_mask[e]);

						b >>= e;
						k -= e;

						// decode distance base of block to copy
						while (k < (15)) { // max bits for distance code
							n--;
							b |= (z.read_byte(p++) & 0xff) << k;
							k += 8;
						}

						t = b & md;
						tp = td;
						tp_index = td_index;
						tp_index_t_3 = (tp_index + t) * 3;
						e = tp[tp_index_t_3];

						do {

							b >>= (tp[tp_index_t_3 + 1]);
							k -= (tp[tp_index_t_3 + 1]);

							if ((e & 16) !== 0) {
								// get extra bits to add to distance base
								e &= 15;
								while (k < (e)) { // get extra bits (up to 13)
									n--;
									b |= (z.read_byte(p++) & 0xff) << k;
									k += 8;
								}

								d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]);

								b >>= (e);
								k -= (e);

								// do the copy
								m -= c;
								if (q >= d) { // offset before dest
									// just copy
									r = q - d;
									if (q - r > 0 && 2 > (q - r)) {
										s.window[q++] = s.window[r++]; // minimum
										// count is
										// three,
										s.window[q++] = s.window[r++]; // so unroll
										// loop a
										// little
										c -= 2;
									} else {
										s.window.set(s.window.subarray(r, r + 2), q);
										q += 2;
										r += 2;
										c -= 2;
									}
								} else { // else offset after destination
									r = q - d;
									do {
										r += s.end; // force pointer in window
									} while (r < 0); // covers invalid distances
									e = s.end - r;
									if (c > e) { // if source crosses,
										c -= e; // wrapped copy
										if (q - r > 0 && e > (q - r)) {
											do {
												s.window[q++] = s.window[r++];
											} while (--e !== 0);
										} else {
											s.window.set(s.window.subarray(r, r + e), q);
											q += e;
											r += e;
											e = 0;
										}
										r = 0; // copy rest from start of window
									}

								}

								// copy all or what's left
								if (q - r > 0 && c > (q - r)) {
									do {
										s.window[q++] = s.window[r++];
									} while (--c !== 0);
								} else {
									s.window.set(s.window.subarray(r, r + c), q);
									q += c;
									r += c;
									c = 0;
								}
								break;
							} else if ((e & 64) === 0) {
								t += tp[tp_index_t_3 + 2];
								t += (b & inflate_mask[e]);
								tp_index_t_3 = (tp_index + t) * 3;
								e = tp[tp_index_t_3];
							} else {
								z.msg = "invalid distance code";

								c = z.avail_in - n;
								c = (k >> 3) < c ? k >> 3 : c;
								n += c;
								p -= c;
								k -= c << 3;

								s.bitb = b;
								s.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								s.write = q;

								return Z_DATA_ERROR;
							}
						} while (true);
						break;
					}

					if ((e & 64) === 0) {
						t += tp[tp_index_t_3 + 2];
						t += (b & inflate_mask[e]);
						tp_index_t_3 = (tp_index + t) * 3;
						if ((e = tp[tp_index_t_3]) === 0) {

							b >>= (tp[tp_index_t_3 + 1]);
							k -= (tp[tp_index_t_3 + 1]);

							s.window[q++] = /* (byte) */tp[tp_index_t_3 + 2];
							m--;
							break;
						}
					} else if ((e & 32) !== 0) {

						c = z.avail_in - n;
						c = (k >> 3) < c ? k >> 3 : c;
						n += c;
						p -= c;
						k -= c << 3;

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;

						return Z_STREAM_END;
					} else {
						z.msg = "invalid literal/length code";

						c = z.avail_in - n;
						c = (k >> 3) < c ? k >> 3 : c;
						n += c;
						p -= c;
						k -= c << 3;

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;

						return Z_DATA_ERROR;
					}
				} while (true);
			} while (m >= 258 && n >= 10);

			// not enough input or output--restore pointers and return
			c = z.avail_in - n;
			c = (k >> 3) < c ? k >> 3 : c;
			n += c;
			p -= c;
			k -= c << 3;

			s.bitb = b;
			s.bitk = k;
			z.avail_in = n;
			z.total_in += p - z.next_in_index;
			z.next_in_index = p;
			s.write = q;

			return Z_OK;
		}

		that.init = function(bl, bd, tl, tl_index, td, td_index) {
			mode = START;
			lbits = /* (byte) */bl;
			dbits = /* (byte) */bd;
			ltree = tl;
			ltree_index = tl_index;
			dtree = td;
			dtree_index = td_index;
			tree = null;
		};

		that.proc = function(s, z, r) {
			var j; // temporary storage
			var tindex; // temporary pointer
			var e; // extra bits or operation
			var b = 0; // bit buffer
			var k = 0; // bits in bit buffer
			var p = 0; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer
			var f; // pointer to copy strings from

			// copy input/output information to locals (UPDATE macro restores)
			p = z.next_in_index;
			n = z.avail_in;
			b = s.bitb;
			k = s.bitk;
			q = s.write;
			m = q < s.read ? s.read - q - 1 : s.end - q;

			// process input and output based on current state
			while (true) {
				switch (mode) {
				// waiting for "i:"=input, "o:"=output, "x:"=nothing
				case START: // x: set up for LEN
					if (m >= 258 && n >= 10) {

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;
						r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);

						p = z.next_in_index;
						n = z.avail_in;
						b = s.bitb;
						k = s.bitk;
						q = s.write;
						m = q < s.read ? s.read - q - 1 : s.end - q;

						if (r != Z_OK) {
							mode = r == Z_STREAM_END ? WASH : BADCODE;
							break;
						}
					}
					need = lbits;
					tree = ltree;
					tree_index = ltree_index;

					mode = LEN;
				case LEN: // i: get length/literal/eob next
					j = need;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					tindex = (tree_index + (b & inflate_mask[j])) * 3;

					b >>>= (tree[tindex + 1]);
					k -= (tree[tindex + 1]);

					e = tree[tindex];

					if (e === 0) { // literal
						lit = tree[tindex + 2];
						mode = LIT;
						break;
					}
					if ((e & 16) !== 0) { // length
						get = e & 15;
						len = tree[tindex + 2];
						mode = LENEXT;
						break;
					}
					if ((e & 64) === 0) { // next table
						need = e;
						tree_index = tindex / 3 + tree[tindex + 2];
						break;
					}
					if ((e & 32) !== 0) { // end of block
						mode = WASH;
						break;
					}
					mode = BADCODE; // invalid code
					z.msg = "invalid literal/length code";
					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case LENEXT: // i: getting length extra (have base)
					j = get;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					len += (b & inflate_mask[j]);

					b >>= j;
					k -= j;

					need = dbits;
					tree = dtree;
					tree_index = dtree_index;
					mode = DIST;
				case DIST: // i: get distance next
					j = need;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					tindex = (tree_index + (b & inflate_mask[j])) * 3;

					b >>= tree[tindex + 1];
					k -= tree[tindex + 1];

					e = (tree[tindex]);
					if ((e & 16) !== 0) { // distance
						get = e & 15;
						dist = tree[tindex + 2];
						mode = DISTEXT;
						break;
					}
					if ((e & 64) === 0) { // next table
						need = e;
						tree_index = tindex / 3 + tree[tindex + 2];
						break;
					}
					mode = BADCODE; // invalid code
					z.msg = "invalid distance code";
					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case DISTEXT: // i: getting distance extra
					j = get;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					dist += (b & inflate_mask[j]);

					b >>= j;
					k -= j;

					mode = COPY;
				case COPY: // o: copying bytes in window, waiting for space
					f = q - dist;
					while (f < 0) { // modulo window size-"while" instead
						f += s.end; // of "if" handles invalid distances
					}
					while (len !== 0) {

						if (m === 0) {
							if (q == s.end && s.read !== 0) {
								q = 0;
								m = q < s.read ? s.read - q - 1 : s.end - q;
							}
							if (m === 0) {
								s.write = q;
								r = s.inflate_flush(z, r);
								q = s.write;
								m = q < s.read ? s.read - q - 1 : s.end - q;

								if (q == s.end && s.read !== 0) {
									q = 0;
									m = q < s.read ? s.read - q - 1 : s.end - q;
								}

								if (m === 0) {
									s.bitb = b;
									s.bitk = k;
									z.avail_in = n;
									z.total_in += p - z.next_in_index;
									z.next_in_index = p;
									s.write = q;
									return s.inflate_flush(z, r);
								}
							}
						}

						s.window[q++] = s.window[f++];
						m--;

						if (f == s.end)
							f = 0;
						len--;
					}
					mode = START;
					break;
				case LIT: // o: got literal, waiting for output space
					if (m === 0) {
						if (q == s.end && s.read !== 0) {
							q = 0;
							m = q < s.read ? s.read - q - 1 : s.end - q;
						}
						if (m === 0) {
							s.write = q;
							r = s.inflate_flush(z, r);
							q = s.write;
							m = q < s.read ? s.read - q - 1 : s.end - q;

							if (q == s.end && s.read !== 0) {
								q = 0;
								m = q < s.read ? s.read - q - 1 : s.end - q;
							}
							if (m === 0) {
								s.bitb = b;
								s.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								s.write = q;
								return s.inflate_flush(z, r);
							}
						}
					}
					r = Z_OK;

					s.window[q++] = /* (byte) */lit;
					m--;

					mode = START;
					break;
				case WASH: // o: got eob, possibly more output
					if (k > 7) { // return unused byte, if any
						k -= 8;
						n++;
						p--; // can always return one
					}

					s.write = q;
					r = s.inflate_flush(z, r);
					q = s.write;
					m = q < s.read ? s.read - q - 1 : s.end - q;

					if (s.read != s.write) {
						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;
						return s.inflate_flush(z, r);
					}
					mode = END;
				case END:
					r = Z_STREAM_END;
					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case BADCODE: // x: got error

					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				default:
					r = Z_STREAM_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);
				}
			}
		};

		that.free = function() {
			// ZFREE(z, c);
		};

	}

	// InfBlocks

	// Table for deflate from PKZIP's appnote.txt.
	var border = [ // Order of the bit length code lengths
	16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

	var TYPE = 0; // get type bits (3, including end bit)
	var LENS = 1; // get lengths for stored
	var STORED = 2;// processing stored block
	var TABLE = 3; // get table lengths
	var BTREE = 4; // get bit lengths tree for a dynamic
	// block
	var DTREE = 5; // get length, distance trees for a
	// dynamic block
	var CODES = 6; // processing fixed or dynamic block
	var DRY = 7; // output remaining window bytes
	var DONELOCKS = 8; // finished last block, done
	var BADBLOCKS = 9; // ot a data error--stuck here

	function InfBlocks(z, w) {
		var that = this;

		var mode = TYPE; // current inflate_block mode

		var left = 0; // if STORED, bytes left to copy

		var table = 0; // table lengths (14 bits)
		var index = 0; // index into blens (or border)
		var blens; // bit lengths of codes
		var bb = [ 0 ]; // bit length tree depth
		var tb = [ 0 ]; // bit length decoding tree

		var codes = new InfCodes(); // if CODES, current state

		var last = 0; // true if this block is the last block

		var hufts = new Int32Array(MANY * 3); // single malloc for tree space
		var check = 0; // check on output
		var inftree = new InfTree();

		that.bitk = 0; // bits in bit buffer
		that.bitb = 0; // bit buffer
		that.window = new Uint8Array(w); // sliding window
		that.end = w; // one byte after sliding window
		that.read = 0; // window read pointer
		that.write = 0; // window write pointer

		that.reset = function(z, c) {
			if (c)
				c[0] = check;
			// if (mode == BTREE || mode == DTREE) {
			// }
			if (mode == CODES) {
				codes.free(z);
			}
			mode = TYPE;
			that.bitk = 0;
			that.bitb = 0;
			that.read = that.write = 0;
		};

		that.reset(z, null);

		// copy as much as possible from the sliding window to the output area
		that.inflate_flush = function(z, r) {
			var n;
			var p;
			var q;

			// local copies of source and destination pointers
			p = z.next_out_index;
			q = that.read;

			// compute number of bytes to copy as far as end of window
			n = /* (int) */((q <= that.write ? that.write : that.end) - q);
			if (n > z.avail_out)
				n = z.avail_out;
			if (n !== 0 && r == Z_BUF_ERROR)
				r = Z_OK;

			// update counters
			z.avail_out -= n;
			z.total_out += n;

			// copy as far as end of window
			z.next_out.set(that.window.subarray(q, q + n), p);
			p += n;
			q += n;

			// see if more to copy at beginning of window
			if (q == that.end) {
				// wrap pointers
				q = 0;
				if (that.write == that.end)
					that.write = 0;

				// compute bytes to copy
				n = that.write - q;
				if (n > z.avail_out)
					n = z.avail_out;
				if (n !== 0 && r == Z_BUF_ERROR)
					r = Z_OK;

				// update counters
				z.avail_out -= n;
				z.total_out += n;

				// copy
				z.next_out.set(that.window.subarray(q, q + n), p);
				p += n;
				q += n;
			}

			// update pointers
			z.next_out_index = p;
			that.read = q;

			// done
			return r;
		};

		that.proc = function(z, r) {
			var t; // temporary storage
			var b; // bit buffer
			var k; // bits in bit buffer
			var p; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer

			var i;

			// copy input/output information to locals (UPDATE macro restores)
			// {
			p = z.next_in_index;
			n = z.avail_in;
			b = that.bitb;
			k = that.bitk;
			// }
			// {
			q = that.write;
			m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
			// }

			// process input based on current state
			// DEBUG dtree
			while (true) {
				switch (mode) {
				case TYPE:

					while (k < (3)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}
					t = /* (int) */(b & 7);
					last = t & 1;

					switch (t >>> 1) {
					case 0: // stored
						// {
						b >>>= (3);
						k -= (3);
						// }
						t = k & 7; // go to byte boundary

						// {
						b >>>= (t);
						k -= (t);
						// }
						mode = LENS; // get length of stored block
						break;
					case 1: // fixed
						// {
						var bl = []; // new Array(1);
						var bd = []; // new Array(1);
						var tl = [ [] ]; // new Array(1);
						var td = [ [] ]; // new Array(1);

						InfTree.inflate_trees_fixed(bl, bd, tl, td);
						codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
						// }

						// {
						b >>>= (3);
						k -= (3);
						// }

						mode = CODES;
						break;
					case 2: // dynamic

						// {
						b >>>= (3);
						k -= (3);
						// }

						mode = TABLE;
						break;
					case 3: // illegal

						// {
						b >>>= (3);
						k -= (3);
						// }
						mode = BADBLOCKS;
						z.msg = "invalid block type";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					break;
				case LENS:

					while (k < (32)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}
						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					if ((((~b) >>> 16) & 0xffff) != (b & 0xffff)) {
						mode = BADBLOCKS;
						z.msg = "invalid stored block lengths";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					left = (b & 0xffff);
					b = k = 0; // dump bits
					mode = left !== 0 ? STORED : (last !== 0 ? DRY : TYPE);
					break;
				case STORED:
					if (n === 0) {
						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}

					if (m === 0) {
						if (q == that.end && that.read !== 0) {
							q = 0;
							m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
						}
						if (m === 0) {
							that.write = q;
							r = that.inflate_flush(z, r);
							q = that.write;
							m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
							if (q == that.end && that.read !== 0) {
								q = 0;
								m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
							}
							if (m === 0) {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
						}
					}
					r = Z_OK;

					t = left;
					if (t > n)
						t = n;
					if (t > m)
						t = m;
					that.window.set(z.read_buf(p, t), q);
					p += t;
					n -= t;
					q += t;
					m -= t;
					if ((left -= t) !== 0)
						break;
					mode = last !== 0 ? DRY : TYPE;
					break;
				case TABLE:

					while (k < (14)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}

						n--;
						b |= (z.read_byte(p++) & 0xff) << k;
						k += 8;
					}

					table = t = (b & 0x3fff);
					if ((t & 0x1f) > 29 || ((t >> 5) & 0x1f) > 29) {
						mode = BADBLOCKS;
						z.msg = "too many length or distance symbols";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					t = 258 + (t & 0x1f) + ((t >> 5) & 0x1f);
					if (!blens || blens.length < t) {
						blens = []; // new Array(t);
					} else {
						for (i = 0; i < t; i++) {
							blens[i] = 0;
						}
					}

					// {
					b >>>= (14);
					k -= (14);
					// }

					index = 0;
					mode = BTREE;
				case BTREE:
					while (index < 4 + (table >>> 10)) {
						while (k < (3)) {
							if (n !== 0) {
								r = Z_OK;
							} else {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
							n--;
							b |= (z.read_byte(p++) & 0xff) << k;
							k += 8;
						}

						blens[border[index++]] = b & 7;

						// {
						b >>>= (3);
						k -= (3);
						// }
					}

					while (index < 19) {
						blens[border[index++]] = 0;
					}

					bb[0] = 7;
					t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z);
					if (t != Z_OK) {
						r = t;
						if (r == Z_DATA_ERROR) {
							blens = null;
							mode = BADBLOCKS;
						}

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}

					index = 0;
					mode = DTREE;
				case DTREE:
					while (true) {
						t = table;
						if (!(index < 258 + (t & 0x1f) + ((t >> 5) & 0x1f))) {
							break;
						}

						var j, c;

						t = bb[0];

						while (k < (t)) {
							if (n !== 0) {
								r = Z_OK;
							} else {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
							n--;
							b |= (z.read_byte(p++) & 0xff) << k;
							k += 8;
						}

						// if (tb[0] == -1) {
						// System.err.println("null...");
						// }

						t = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 1];
						c = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 2];

						if (c < 16) {
							b >>>= (t);
							k -= (t);
							blens[index++] = c;
						} else { // c == 16..18
							i = c == 18 ? 7 : c - 14;
							j = c == 18 ? 11 : 3;

							while (k < (t + i)) {
								if (n !== 0) {
									r = Z_OK;
								} else {
									that.bitb = b;
									that.bitk = k;
									z.avail_in = n;
									z.total_in += p - z.next_in_index;
									z.next_in_index = p;
									that.write = q;
									return that.inflate_flush(z, r);
								}
								n--;
								b |= (z.read_byte(p++) & 0xff) << k;
								k += 8;
							}

							b >>>= (t);
							k -= (t);

							j += (b & inflate_mask[i]);

							b >>>= (i);
							k -= (i);

							i = index;
							t = table;
							if (i + j > 258 + (t & 0x1f) + ((t >> 5) & 0x1f) || (c == 16 && i < 1)) {
								blens = null;
								mode = BADBLOCKS;
								z.msg = "invalid bit length repeat";
								r = Z_DATA_ERROR;

								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}

							c = c == 16 ? blens[i - 1] : 0;
							do {
								blens[i++] = c;
							} while (--j !== 0);
							index = i;
						}
					}

					tb[0] = -1;
					// {
					var bl_ = []; // new Array(1);
					var bd_ = []; // new Array(1);
					var tl_ = []; // new Array(1);
					var td_ = []; // new Array(1);
					bl_[0] = 9; // must be <= 9 for lookahead assumptions
					bd_[0] = 6; // must be <= 9 for lookahead assumptions

					t = table;
					t = inftree.inflate_trees_dynamic(257 + (t & 0x1f), 1 + ((t >> 5) & 0x1f), blens, bl_, bd_, tl_, td_, hufts, z);

					if (t != Z_OK) {
						if (t == Z_DATA_ERROR) {
							blens = null;
							mode = BADBLOCKS;
						}
						r = t;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
					// }
					mode = CODES;
				case CODES:
					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;

					if ((r = codes.proc(that, z, r)) != Z_STREAM_END) {
						return that.inflate_flush(z, r);
					}
					r = Z_OK;
					codes.free(z);

					p = z.next_in_index;
					n = z.avail_in;
					b = that.bitb;
					k = that.bitk;
					q = that.write;
					m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);

					if (last === 0) {
						mode = TYPE;
						break;
					}
					mode = DRY;
				case DRY:
					that.write = q;
					r = that.inflate_flush(z, r);
					q = that.write;
					m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
					if (that.read != that.write) {
						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					mode = DONELOCKS;
				case DONELOCKS:
					r = Z_STREAM_END;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);
				case BADBLOCKS:
					r = Z_DATA_ERROR;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);

				default:
					r = Z_STREAM_ERROR;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);
				}
			}
		};

		that.free = function(z) {
			that.reset(z, null);
			that.window = null;
			hufts = null;
			// ZFREE(z, s);
		};

		that.set_dictionary = function(d, start, n) {
			that.window.set(d.subarray(start, start + n), 0);
			that.read = that.write = n;
		};

		// Returns true if inflate is currently at the end of a block generated
		// by Z_SYNC_FLUSH or Z_FULL_FLUSH.
		that.sync_point = function() {
			return mode == LENS ? 1 : 0;
		};

	}

	// Inflate

	// preset dictionary flag in zlib header
	var PRESET_DICT = 0x20;

	var Z_DEFLATED = 8;

	var METHOD = 0; // waiting for method byte
	var FLAG = 1; // waiting for flag byte
	var DICT4 = 2; // four dictionary check bytes to go
	var DICT3 = 3; // three dictionary check bytes to go
	var DICT2 = 4; // two dictionary check bytes to go
	var DICT1 = 5; // one dictionary check byte to go
	var DICT0 = 6; // waiting for inflateSetDictionary
	var BLOCKS = 7; // decompressing blocks
	var DONE = 12; // finished check, done
	var BAD = 13; // got an error--stay here

	var mark = [ 0, 0, 0xff, 0xff ];

	function Inflate() {
		var that = this;

		that.mode = 0; // current inflate mode

		// mode dependent information
		that.method = 0; // if FLAGS, method byte

		// if CHECK, check values to compare
		that.was = [ 0 ]; // new Array(1); // computed check value
		that.need = 0; // stream check value

		// if BAD, inflateSync's marker bytes count
		that.marker = 0;

		// mode independent information
		that.wbits = 0; // log2(window size) (8..15, defaults to 15)

		// this.blocks; // current inflate_blocks state

		function inflateReset(z) {
			if (!z || !z.istate)
				return Z_STREAM_ERROR;

			z.total_in = z.total_out = 0;
			z.msg = null;
			z.istate.mode = BLOCKS;
			z.istate.blocks.reset(z, null);
			return Z_OK;
		}

		that.inflateEnd = function(z) {
			if (that.blocks)
				that.blocks.free(z);
			that.blocks = null;
			// ZFREE(z, z->state);
			return Z_OK;
		};

		that.inflateInit = function(z, w) {
			z.msg = null;
			that.blocks = null;

			// set window size
			if (w < 8 || w > 15) {
				that.inflateEnd(z);
				return Z_STREAM_ERROR;
			}
			that.wbits = w;

			z.istate.blocks = new InfBlocks(z, 1 << w);

			// reset state
			inflateReset(z);
			return Z_OK;
		};

		that.inflate = function(z, f) {
			var r;
			var b;

			if (!z || !z.istate || !z.next_in)
				return Z_STREAM_ERROR;
			f = f == Z_FINISH ? Z_BUF_ERROR : Z_OK;
			r = Z_BUF_ERROR;
			while (true) {
				// System.out.println("mode: "+z.istate.mode);
				switch (z.istate.mode) {
				case METHOD:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					if (((z.istate.method = z.read_byte(z.next_in_index++)) & 0xf) != Z_DEFLATED) {
						z.istate.mode = BAD;
						z.msg = "unknown compression method";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}
					if ((z.istate.method >> 4) + 8 > z.istate.wbits) {
						z.istate.mode = BAD;
						z.msg = "invalid window size";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}
					z.istate.mode = FLAG;
				case FLAG:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					b = (z.read_byte(z.next_in_index++)) & 0xff;

					if ((((z.istate.method << 8) + b) % 31) !== 0) {
						z.istate.mode = BAD;
						z.msg = "incorrect header check";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}

					if ((b & PRESET_DICT) === 0) {
						z.istate.mode = BLOCKS;
						break;
					}
					z.istate.mode = DICT4;
				case DICT4:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need = ((z.read_byte(z.next_in_index++) & 0xff) << 24) & 0xff000000;
					z.istate.mode = DICT3;
				case DICT3:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += ((z.read_byte(z.next_in_index++) & 0xff) << 16) & 0xff0000;
					z.istate.mode = DICT2;
				case DICT2:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += ((z.read_byte(z.next_in_index++) & 0xff) << 8) & 0xff00;
					z.istate.mode = DICT1;
				case DICT1:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += (z.read_byte(z.next_in_index++) & 0xff);
					z.istate.mode = DICT0;
					return Z_NEED_DICT;
				case DICT0:
					z.istate.mode = BAD;
					z.msg = "need dictionary";
					z.istate.marker = 0; // can try inflateSync
					return Z_STREAM_ERROR;
				case BLOCKS:

					r = z.istate.blocks.proc(z, r);
					if (r == Z_DATA_ERROR) {
						z.istate.mode = BAD;
						z.istate.marker = 0; // can try inflateSync
						break;
					}
					if (r == Z_OK) {
						r = f;
					}
					if (r != Z_STREAM_END) {
						return r;
					}
					r = f;
					z.istate.blocks.reset(z, z.istate.was);
					z.istate.mode = DONE;
				case DONE:
					return Z_STREAM_END;
				case BAD:
					return Z_DATA_ERROR;
				default:
					return Z_STREAM_ERROR;
				}
			}
		};

		that.inflateSetDictionary = function(z, dictionary, dictLength) {
			var index = 0;
			var length = dictLength;
			if (!z || !z.istate || z.istate.mode != DICT0)
				return Z_STREAM_ERROR;

			if (length >= (1 << z.istate.wbits)) {
				length = (1 << z.istate.wbits) - 1;
				index = dictLength - length;
			}
			z.istate.blocks.set_dictionary(dictionary, index, length);
			z.istate.mode = BLOCKS;
			return Z_OK;
		};

		that.inflateSync = function(z) {
			var n; // number of bytes to look at
			var p; // pointer to bytes
			var m; // number of marker bytes found in a row
			var r, w; // temporaries to save total_in and total_out

			// set up
			if (!z || !z.istate)
				return Z_STREAM_ERROR;
			if (z.istate.mode != BAD) {
				z.istate.mode = BAD;
				z.istate.marker = 0;
			}
			if ((n = z.avail_in) === 0)
				return Z_BUF_ERROR;
			p = z.next_in_index;
			m = z.istate.marker;

			// search
			while (n !== 0 && m < 4) {
				if (z.read_byte(p) == mark[m]) {
					m++;
				} else if (z.read_byte(p) !== 0) {
					m = 0;
				} else {
					m = 4 - m;
				}
				p++;
				n--;
			}

			// restore
			z.total_in += p - z.next_in_index;
			z.next_in_index = p;
			z.avail_in = n;
			z.istate.marker = m;

			// return no joy or set up to restart on a new block
			if (m != 4) {
				return Z_DATA_ERROR;
			}
			r = z.total_in;
			w = z.total_out;
			inflateReset(z);
			z.total_in = r;
			z.total_out = w;
			z.istate.mode = BLOCKS;
			return Z_OK;
		};

		// Returns true if inflate is currently at the end of a block generated
		// by Z_SYNC_FLUSH or Z_FULL_FLUSH. This function is used by one PPP
		// implementation to provide an additional safety check. PPP uses
		// Z_SYNC_FLUSH
		// but removes the length bytes of the resulting empty stored block. When
		// decompressing, PPP checks that at the end of input packet, inflate is
		// waiting for these length bytes.
		that.inflateSyncPoint = function(z) {
			if (!z || !z.istate || !z.istate.blocks)
				return Z_STREAM_ERROR;
			return z.istate.blocks.sync_point();
		};
	}

	// ZStream

	function ZStream() {
	}

	ZStream.prototype = {
		inflateInit : function(bits) {
			var that = this;
			that.istate = new Inflate();
			if (!bits)
				bits = MAX_BITS;
			return that.istate.inflateInit(that, bits);
		},

		inflate : function(f) {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflate(that, f);
		},

		inflateEnd : function() {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			var ret = that.istate.inflateEnd(that);
			that.istate = null;
			return ret;
		},

		inflateSync : function() {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflateSync(that);
		},
		inflateSetDictionary : function(dictionary, dictLength) {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflateSetDictionary(that, dictionary, dictLength);
		},
		read_byte : function(start) {
			var that = this;
			return that.next_in.subarray(start, start + 1)[0];
		},
		read_buf : function(start, size) {
			var that = this;
			return that.next_in.subarray(start, start + size);
		}
	};

	// Inflater

	function Inflater() {
		var that = this;
		var z = new ZStream();
		var bufsize = 512;
		var flush = Z_NO_FLUSH;
		var buf = new Uint8Array(bufsize);
		var nomoreinput = false;

		z.inflateInit();
		z.next_out = buf;

		that.append = function(data, onprogress) {
			var err, buffers = [], lastIndex = 0, bufferIndex = 0, bufferSize = 0, array;
			if (data.length === 0)
				return;
			z.next_in_index = 0;
			z.next_in = data;
			z.avail_in = data.length;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				if ((z.avail_in === 0) && (!nomoreinput)) { // if buffer is empty and more input is available, refill it
					z.next_in_index = 0;
					nomoreinput = true;
				}
				err = z.inflate(flush);
				if (nomoreinput && (err == Z_BUF_ERROR))
					return -1;
				if (err != Z_OK && err != Z_STREAM_END)
					throw "inflating: " + z.msg;
				if ((nomoreinput || err == Z_STREAM_END) && (z.avail_in == data.length))
					return -1;
				if (z.next_out_index)
					if (z.next_out_index == bufsize)
						buffers.push(new Uint8Array(buf));
					else
						buffers.push(new Uint8Array(buf.subarray(0, z.next_out_index)));
				bufferSize += z.next_out_index;
				if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
					onprogress(z.next_in_index);
					lastIndex = z.next_in_index;
				}
			} while (z.avail_in > 0 || z.avail_out === 0);
			array = new Uint8Array(bufferSize);
			buffers.forEach(function(chunk) {
				array.set(chunk, bufferIndex);
				bufferIndex += chunk.length;
			});
			return array;
		};
		that.flush = function() {
			z.inflateEnd();
		};
	}

	var inflater;

	if (obj.zip)
		obj.zip.Inflater = Inflater;
	else {
		inflater = new Inflater();
		obj.addEventListener("message", function(event) {
			var message = event.data;

			if (message.append)
				obj.postMessage({
					onappend : true,
					data : inflater.append(message.data, function(current) {
						obj.postMessage({
							progress : true,
							current : current
						});
					})
				});
			if (message.flush) {
				inflater.flush();
				obj.postMessage({
					onflush : true
				});
			}
		}, false);
	}

})(self);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMWM1ODI4NzFhZDcwYTYyYTNiZDYud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL1RoaXJkUGFydHkvV29ya2Vycy9pbmZsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD02bmFydG95YXgyZSEuL25vZGVfbW9kdWxlcy9zdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/aWQ9YzBkNzd4b3hmOWohLi9wYWNrYWdlcy90ZXJyaWFqcy9idWlsZHByb2Nlc3MvcmVtb3ZlQ2VzaXVtRGVidWdQcmFnbWFzLmpzIS4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvVGhpcmRQYXJ0eS9Xb3JrZXJzL2luZmxhdGUuanNcIik7XG4iLCIvKlxuIENvcHlyaWdodCAoYykgMjAxMyBHaWxkYXMgTG9ybWVhdS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4gMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBcbiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gXG4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAzLiBUaGUgbmFtZXMgb2YgdGhlIGF1dGhvcnMgbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG4gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBgYEFTIElTJycgQU5EIEFOWSBFWFBSRVNTRUQgT1IgSU1QTElFRCBXQVJSQU5USUVTLFxuIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgSkNSQUZULFxuIElOQy4gT1IgQU5ZIENPTlRSSUJVVE9SUyBUTyBUSElTIFNPRlRXQVJFIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLFxuIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSxcbiBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qXG4gKiBUaGlzIHByb2dyYW0gaXMgYmFzZWQgb24gSlpsaWIgMS4wLjIgeW1uaywgSkNyYWZ0LEluYy5cbiAqIEpabGliIGlzIGJhc2VkIG9uIHpsaWItMS4xLjMsIHNvIGFsbCBjcmVkaXQgc2hvdWxkIGdvIGF1dGhvcnNcbiAqIEplYW4tbG91cCBHYWlsbHkoamxvdXBAZ3ppcC5vcmcpIGFuZCBNYXJrIEFkbGVyKG1hZGxlckBhbHVtbmkuY2FsdGVjaC5lZHUpXG4gKiBhbmQgY29udHJpYnV0b3JzIG9mIHpsaWIuXG4gKi9cblxuKGZ1bmN0aW9uKG9iaikge1xuXG5cdC8vIEdsb2JhbFxuXHR2YXIgTUFYX0JJVFMgPSAxNTtcblxuXHR2YXIgWl9PSyA9IDA7XG5cdHZhciBaX1NUUkVBTV9FTkQgPSAxO1xuXHR2YXIgWl9ORUVEX0RJQ1QgPSAyO1xuXHR2YXIgWl9TVFJFQU1fRVJST1IgPSAtMjtcblx0dmFyIFpfREFUQV9FUlJPUiA9IC0zO1xuXHR2YXIgWl9NRU1fRVJST1IgPSAtNDtcblx0dmFyIFpfQlVGX0VSUk9SID0gLTU7XG5cblx0dmFyIGluZmxhdGVfbWFzayA9IFsgMHgwMDAwMDAwMCwgMHgwMDAwMDAwMSwgMHgwMDAwMDAwMywgMHgwMDAwMDAwNywgMHgwMDAwMDAwZiwgMHgwMDAwMDAxZiwgMHgwMDAwMDAzZiwgMHgwMDAwMDA3ZiwgMHgwMDAwMDBmZiwgMHgwMDAwMDFmZiwgMHgwMDAwMDNmZixcblx0XHRcdDB4MDAwMDA3ZmYsIDB4MDAwMDBmZmYsIDB4MDAwMDFmZmYsIDB4MDAwMDNmZmYsIDB4MDAwMDdmZmYsIDB4MDAwMGZmZmYgXTtcblxuXHR2YXIgTUFOWSA9IDE0NDA7XG5cblx0Ly8gSlpsaWIgdmVyc2lvbiA6IFwiMS4wLjJcIlxuXHR2YXIgWl9OT19GTFVTSCA9IDA7XG5cdHZhciBaX0ZJTklTSCA9IDQ7XG5cblx0Ly8gSW5mVHJlZVxuXHR2YXIgZml4ZWRfYmwgPSA5O1xuXHR2YXIgZml4ZWRfYmQgPSA1O1xuXG5cdHZhciBmaXhlZF90bCA9IFsgOTYsIDcsIDI1NiwgMCwgOCwgODAsIDAsIDgsIDE2LCA4NCwgOCwgMTE1LCA4MiwgNywgMzEsIDAsIDgsIDExMiwgMCwgOCwgNDgsIDAsIDksIDE5MiwgODAsIDcsIDEwLCAwLCA4LCA5NiwgMCwgOCwgMzIsIDAsIDksIDE2MCwgMCwgOCwgMCxcblx0XHRcdDAsIDgsIDEyOCwgMCwgOCwgNjQsIDAsIDksIDIyNCwgODAsIDcsIDYsIDAsIDgsIDg4LCAwLCA4LCAyNCwgMCwgOSwgMTQ0LCA4MywgNywgNTksIDAsIDgsIDEyMCwgMCwgOCwgNTYsIDAsIDksIDIwOCwgODEsIDcsIDE3LCAwLCA4LCAxMDQsIDAsIDgsIDQwLFxuXHRcdFx0MCwgOSwgMTc2LCAwLCA4LCA4LCAwLCA4LCAxMzYsIDAsIDgsIDcyLCAwLCA5LCAyNDAsIDgwLCA3LCA0LCAwLCA4LCA4NCwgMCwgOCwgMjAsIDg1LCA4LCAyMjcsIDgzLCA3LCA0MywgMCwgOCwgMTE2LCAwLCA4LCA1MiwgMCwgOSwgMjAwLCA4MSwgNywgMTMsXG5cdFx0XHQwLCA4LCAxMDAsIDAsIDgsIDM2LCAwLCA5LCAxNjgsIDAsIDgsIDQsIDAsIDgsIDEzMiwgMCwgOCwgNjgsIDAsIDksIDIzMiwgODAsIDcsIDgsIDAsIDgsIDkyLCAwLCA4LCAyOCwgMCwgOSwgMTUyLCA4NCwgNywgODMsIDAsIDgsIDEyNCwgMCwgOCwgNjAsXG5cdFx0XHQwLCA5LCAyMTYsIDgyLCA3LCAyMywgMCwgOCwgMTA4LCAwLCA4LCA0NCwgMCwgOSwgMTg0LCAwLCA4LCAxMiwgMCwgOCwgMTQwLCAwLCA4LCA3NiwgMCwgOSwgMjQ4LCA4MCwgNywgMywgMCwgOCwgODIsIDAsIDgsIDE4LCA4NSwgOCwgMTYzLCA4MywgNyxcblx0XHRcdDM1LCAwLCA4LCAxMTQsIDAsIDgsIDUwLCAwLCA5LCAxOTYsIDgxLCA3LCAxMSwgMCwgOCwgOTgsIDAsIDgsIDM0LCAwLCA5LCAxNjQsIDAsIDgsIDIsIDAsIDgsIDEzMCwgMCwgOCwgNjYsIDAsIDksIDIyOCwgODAsIDcsIDcsIDAsIDgsIDkwLCAwLCA4LFxuXHRcdFx0MjYsIDAsIDksIDE0OCwgODQsIDcsIDY3LCAwLCA4LCAxMjIsIDAsIDgsIDU4LCAwLCA5LCAyMTIsIDgyLCA3LCAxOSwgMCwgOCwgMTA2LCAwLCA4LCA0MiwgMCwgOSwgMTgwLCAwLCA4LCAxMCwgMCwgOCwgMTM4LCAwLCA4LCA3NCwgMCwgOSwgMjQ0LCA4MCxcblx0XHRcdDcsIDUsIDAsIDgsIDg2LCAwLCA4LCAyMiwgMTkyLCA4LCAwLCA4MywgNywgNTEsIDAsIDgsIDExOCwgMCwgOCwgNTQsIDAsIDksIDIwNCwgODEsIDcsIDE1LCAwLCA4LCAxMDIsIDAsIDgsIDM4LCAwLCA5LCAxNzIsIDAsIDgsIDYsIDAsIDgsIDEzNCwgMCxcblx0XHRcdDgsIDcwLCAwLCA5LCAyMzYsIDgwLCA3LCA5LCAwLCA4LCA5NCwgMCwgOCwgMzAsIDAsIDksIDE1NiwgODQsIDcsIDk5LCAwLCA4LCAxMjYsIDAsIDgsIDYyLCAwLCA5LCAyMjAsIDgyLCA3LCAyNywgMCwgOCwgMTEwLCAwLCA4LCA0NiwgMCwgOSwgMTg4LCAwLFxuXHRcdFx0OCwgMTQsIDAsIDgsIDE0MiwgMCwgOCwgNzgsIDAsIDksIDI1MiwgOTYsIDcsIDI1NiwgMCwgOCwgODEsIDAsIDgsIDE3LCA4NSwgOCwgMTMxLCA4MiwgNywgMzEsIDAsIDgsIDExMywgMCwgOCwgNDksIDAsIDksIDE5NCwgODAsIDcsIDEwLCAwLCA4LCA5Nyxcblx0XHRcdDAsIDgsIDMzLCAwLCA5LCAxNjIsIDAsIDgsIDEsIDAsIDgsIDEyOSwgMCwgOCwgNjUsIDAsIDksIDIyNiwgODAsIDcsIDYsIDAsIDgsIDg5LCAwLCA4LCAyNSwgMCwgOSwgMTQ2LCA4MywgNywgNTksIDAsIDgsIDEyMSwgMCwgOCwgNTcsIDAsIDksIDIxMCxcblx0XHRcdDgxLCA3LCAxNywgMCwgOCwgMTA1LCAwLCA4LCA0MSwgMCwgOSwgMTc4LCAwLCA4LCA5LCAwLCA4LCAxMzcsIDAsIDgsIDczLCAwLCA5LCAyNDIsIDgwLCA3LCA0LCAwLCA4LCA4NSwgMCwgOCwgMjEsIDgwLCA4LCAyNTgsIDgzLCA3LCA0MywgMCwgOCwgMTE3LFxuXHRcdFx0MCwgOCwgNTMsIDAsIDksIDIwMiwgODEsIDcsIDEzLCAwLCA4LCAxMDEsIDAsIDgsIDM3LCAwLCA5LCAxNzAsIDAsIDgsIDUsIDAsIDgsIDEzMywgMCwgOCwgNjksIDAsIDksIDIzNCwgODAsIDcsIDgsIDAsIDgsIDkzLCAwLCA4LCAyOSwgMCwgOSwgMTU0LFxuXHRcdFx0ODQsIDcsIDgzLCAwLCA4LCAxMjUsIDAsIDgsIDYxLCAwLCA5LCAyMTgsIDgyLCA3LCAyMywgMCwgOCwgMTA5LCAwLCA4LCA0NSwgMCwgOSwgMTg2LCAwLCA4LCAxMywgMCwgOCwgMTQxLCAwLCA4LCA3NywgMCwgOSwgMjUwLCA4MCwgNywgMywgMCwgOCwgODMsXG5cdFx0XHQwLCA4LCAxOSwgODUsIDgsIDE5NSwgODMsIDcsIDM1LCAwLCA4LCAxMTUsIDAsIDgsIDUxLCAwLCA5LCAxOTgsIDgxLCA3LCAxMSwgMCwgOCwgOTksIDAsIDgsIDM1LCAwLCA5LCAxNjYsIDAsIDgsIDMsIDAsIDgsIDEzMSwgMCwgOCwgNjcsIDAsIDksIDIzMCxcblx0XHRcdDgwLCA3LCA3LCAwLCA4LCA5MSwgMCwgOCwgMjcsIDAsIDksIDE1MCwgODQsIDcsIDY3LCAwLCA4LCAxMjMsIDAsIDgsIDU5LCAwLCA5LCAyMTQsIDgyLCA3LCAxOSwgMCwgOCwgMTA3LCAwLCA4LCA0MywgMCwgOSwgMTgyLCAwLCA4LCAxMSwgMCwgOCwgMTM5LFxuXHRcdFx0MCwgOCwgNzUsIDAsIDksIDI0NiwgODAsIDcsIDUsIDAsIDgsIDg3LCAwLCA4LCAyMywgMTkyLCA4LCAwLCA4MywgNywgNTEsIDAsIDgsIDExOSwgMCwgOCwgNTUsIDAsIDksIDIwNiwgODEsIDcsIDE1LCAwLCA4LCAxMDMsIDAsIDgsIDM5LCAwLCA5LCAxNzQsXG5cdFx0XHQwLCA4LCA3LCAwLCA4LCAxMzUsIDAsIDgsIDcxLCAwLCA5LCAyMzgsIDgwLCA3LCA5LCAwLCA4LCA5NSwgMCwgOCwgMzEsIDAsIDksIDE1OCwgODQsIDcsIDk5LCAwLCA4LCAxMjcsIDAsIDgsIDYzLCAwLCA5LCAyMjIsIDgyLCA3LCAyNywgMCwgOCwgMTExLFxuXHRcdFx0MCwgOCwgNDcsIDAsIDksIDE5MCwgMCwgOCwgMTUsIDAsIDgsIDE0MywgMCwgOCwgNzksIDAsIDksIDI1NCwgOTYsIDcsIDI1NiwgMCwgOCwgODAsIDAsIDgsIDE2LCA4NCwgOCwgMTE1LCA4MiwgNywgMzEsIDAsIDgsIDExMiwgMCwgOCwgNDgsIDAsIDksXG5cdFx0XHQxOTMsIDgwLCA3LCAxMCwgMCwgOCwgOTYsIDAsIDgsIDMyLCAwLCA5LCAxNjEsIDAsIDgsIDAsIDAsIDgsIDEyOCwgMCwgOCwgNjQsIDAsIDksIDIyNSwgODAsIDcsIDYsIDAsIDgsIDg4LCAwLCA4LCAyNCwgMCwgOSwgMTQ1LCA4MywgNywgNTksIDAsIDgsXG5cdFx0XHQxMjAsIDAsIDgsIDU2LCAwLCA5LCAyMDksIDgxLCA3LCAxNywgMCwgOCwgMTA0LCAwLCA4LCA0MCwgMCwgOSwgMTc3LCAwLCA4LCA4LCAwLCA4LCAxMzYsIDAsIDgsIDcyLCAwLCA5LCAyNDEsIDgwLCA3LCA0LCAwLCA4LCA4NCwgMCwgOCwgMjAsIDg1LCA4LFxuXHRcdFx0MjI3LCA4MywgNywgNDMsIDAsIDgsIDExNiwgMCwgOCwgNTIsIDAsIDksIDIwMSwgODEsIDcsIDEzLCAwLCA4LCAxMDAsIDAsIDgsIDM2LCAwLCA5LCAxNjksIDAsIDgsIDQsIDAsIDgsIDEzMiwgMCwgOCwgNjgsIDAsIDksIDIzMywgODAsIDcsIDgsIDAsIDgsXG5cdFx0XHQ5MiwgMCwgOCwgMjgsIDAsIDksIDE1MywgODQsIDcsIDgzLCAwLCA4LCAxMjQsIDAsIDgsIDYwLCAwLCA5LCAyMTcsIDgyLCA3LCAyMywgMCwgOCwgMTA4LCAwLCA4LCA0NCwgMCwgOSwgMTg1LCAwLCA4LCAxMiwgMCwgOCwgMTQwLCAwLCA4LCA3NiwgMCwgOSxcblx0XHRcdDI0OSwgODAsIDcsIDMsIDAsIDgsIDgyLCAwLCA4LCAxOCwgODUsIDgsIDE2MywgODMsIDcsIDM1LCAwLCA4LCAxMTQsIDAsIDgsIDUwLCAwLCA5LCAxOTcsIDgxLCA3LCAxMSwgMCwgOCwgOTgsIDAsIDgsIDM0LCAwLCA5LCAxNjUsIDAsIDgsIDIsIDAsIDgsXG5cdFx0XHQxMzAsIDAsIDgsIDY2LCAwLCA5LCAyMjksIDgwLCA3LCA3LCAwLCA4LCA5MCwgMCwgOCwgMjYsIDAsIDksIDE0OSwgODQsIDcsIDY3LCAwLCA4LCAxMjIsIDAsIDgsIDU4LCAwLCA5LCAyMTMsIDgyLCA3LCAxOSwgMCwgOCwgMTA2LCAwLCA4LCA0MiwgMCwgOSxcblx0XHRcdDE4MSwgMCwgOCwgMTAsIDAsIDgsIDEzOCwgMCwgOCwgNzQsIDAsIDksIDI0NSwgODAsIDcsIDUsIDAsIDgsIDg2LCAwLCA4LCAyMiwgMTkyLCA4LCAwLCA4MywgNywgNTEsIDAsIDgsIDExOCwgMCwgOCwgNTQsIDAsIDksIDIwNSwgODEsIDcsIDE1LCAwLCA4LFxuXHRcdFx0MTAyLCAwLCA4LCAzOCwgMCwgOSwgMTczLCAwLCA4LCA2LCAwLCA4LCAxMzQsIDAsIDgsIDcwLCAwLCA5LCAyMzcsIDgwLCA3LCA5LCAwLCA4LCA5NCwgMCwgOCwgMzAsIDAsIDksIDE1NywgODQsIDcsIDk5LCAwLCA4LCAxMjYsIDAsIDgsIDYyLCAwLCA5LFxuXHRcdFx0MjIxLCA4MiwgNywgMjcsIDAsIDgsIDExMCwgMCwgOCwgNDYsIDAsIDksIDE4OSwgMCwgOCwgMTQsIDAsIDgsIDE0MiwgMCwgOCwgNzgsIDAsIDksIDI1MywgOTYsIDcsIDI1NiwgMCwgOCwgODEsIDAsIDgsIDE3LCA4NSwgOCwgMTMxLCA4MiwgNywgMzEsIDAsXG5cdFx0XHQ4LCAxMTMsIDAsIDgsIDQ5LCAwLCA5LCAxOTUsIDgwLCA3LCAxMCwgMCwgOCwgOTcsIDAsIDgsIDMzLCAwLCA5LCAxNjMsIDAsIDgsIDEsIDAsIDgsIDEyOSwgMCwgOCwgNjUsIDAsIDksIDIyNywgODAsIDcsIDYsIDAsIDgsIDg5LCAwLCA4LCAyNSwgMCwgOSxcblx0XHRcdDE0NywgODMsIDcsIDU5LCAwLCA4LCAxMjEsIDAsIDgsIDU3LCAwLCA5LCAyMTEsIDgxLCA3LCAxNywgMCwgOCwgMTA1LCAwLCA4LCA0MSwgMCwgOSwgMTc5LCAwLCA4LCA5LCAwLCA4LCAxMzcsIDAsIDgsIDczLCAwLCA5LCAyNDMsIDgwLCA3LCA0LCAwLCA4LFxuXHRcdFx0ODUsIDAsIDgsIDIxLCA4MCwgOCwgMjU4LCA4MywgNywgNDMsIDAsIDgsIDExNywgMCwgOCwgNTMsIDAsIDksIDIwMywgODEsIDcsIDEzLCAwLCA4LCAxMDEsIDAsIDgsIDM3LCAwLCA5LCAxNzEsIDAsIDgsIDUsIDAsIDgsIDEzMywgMCwgOCwgNjksIDAsIDksXG5cdFx0XHQyMzUsIDgwLCA3LCA4LCAwLCA4LCA5MywgMCwgOCwgMjksIDAsIDksIDE1NSwgODQsIDcsIDgzLCAwLCA4LCAxMjUsIDAsIDgsIDYxLCAwLCA5LCAyMTksIDgyLCA3LCAyMywgMCwgOCwgMTA5LCAwLCA4LCA0NSwgMCwgOSwgMTg3LCAwLCA4LCAxMywgMCwgOCxcblx0XHRcdDE0MSwgMCwgOCwgNzcsIDAsIDksIDI1MSwgODAsIDcsIDMsIDAsIDgsIDgzLCAwLCA4LCAxOSwgODUsIDgsIDE5NSwgODMsIDcsIDM1LCAwLCA4LCAxMTUsIDAsIDgsIDUxLCAwLCA5LCAxOTksIDgxLCA3LCAxMSwgMCwgOCwgOTksIDAsIDgsIDM1LCAwLCA5LFxuXHRcdFx0MTY3LCAwLCA4LCAzLCAwLCA4LCAxMzEsIDAsIDgsIDY3LCAwLCA5LCAyMzEsIDgwLCA3LCA3LCAwLCA4LCA5MSwgMCwgOCwgMjcsIDAsIDksIDE1MSwgODQsIDcsIDY3LCAwLCA4LCAxMjMsIDAsIDgsIDU5LCAwLCA5LCAyMTUsIDgyLCA3LCAxOSwgMCwgOCxcblx0XHRcdDEwNywgMCwgOCwgNDMsIDAsIDksIDE4MywgMCwgOCwgMTEsIDAsIDgsIDEzOSwgMCwgOCwgNzUsIDAsIDksIDI0NywgODAsIDcsIDUsIDAsIDgsIDg3LCAwLCA4LCAyMywgMTkyLCA4LCAwLCA4MywgNywgNTEsIDAsIDgsIDExOSwgMCwgOCwgNTUsIDAsIDksXG5cdFx0XHQyMDcsIDgxLCA3LCAxNSwgMCwgOCwgMTAzLCAwLCA4LCAzOSwgMCwgOSwgMTc1LCAwLCA4LCA3LCAwLCA4LCAxMzUsIDAsIDgsIDcxLCAwLCA5LCAyMzksIDgwLCA3LCA5LCAwLCA4LCA5NSwgMCwgOCwgMzEsIDAsIDksIDE1OSwgODQsIDcsIDk5LCAwLCA4LFxuXHRcdFx0MTI3LCAwLCA4LCA2MywgMCwgOSwgMjIzLCA4MiwgNywgMjcsIDAsIDgsIDExMSwgMCwgOCwgNDcsIDAsIDksIDE5MSwgMCwgOCwgMTUsIDAsIDgsIDE0MywgMCwgOCwgNzksIDAsIDksIDI1NSBdO1xuXHR2YXIgZml4ZWRfdGQgPSBbIDgwLCA1LCAxLCA4NywgNSwgMjU3LCA4MywgNSwgMTcsIDkxLCA1LCA0MDk3LCA4MSwgNSwgNSwgODksIDUsIDEwMjUsIDg1LCA1LCA2NSwgOTMsIDUsIDE2Mzg1LCA4MCwgNSwgMywgODgsIDUsIDUxMywgODQsIDUsIDMzLCA5MiwgNSxcblx0XHRcdDgxOTMsIDgyLCA1LCA5LCA5MCwgNSwgMjA0OSwgODYsIDUsIDEyOSwgMTkyLCA1LCAyNDU3NywgODAsIDUsIDIsIDg3LCA1LCAzODUsIDgzLCA1LCAyNSwgOTEsIDUsIDYxNDUsIDgxLCA1LCA3LCA4OSwgNSwgMTUzNywgODUsIDUsIDk3LCA5MywgNSxcblx0XHRcdDI0NTc3LCA4MCwgNSwgNCwgODgsIDUsIDc2OSwgODQsIDUsIDQ5LCA5MiwgNSwgMTIyODksIDgyLCA1LCAxMywgOTAsIDUsIDMwNzMsIDg2LCA1LCAxOTMsIDE5MiwgNSwgMjQ1NzcgXTtcblxuXHQvLyBUYWJsZXMgZm9yIGRlZmxhdGUgZnJvbSBQS1pJUCdzIGFwcG5vdGUudHh0LlxuXHR2YXIgY3BsZW5zID0gWyAvLyBDb3B5IGxlbmd0aHMgZm9yIGxpdGVyYWwgY29kZXMgMjU3Li4yODVcblx0MywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMywgMTUsIDE3LCAxOSwgMjMsIDI3LCAzMSwgMzUsIDQzLCA1MSwgNTksIDY3LCA4MywgOTksIDExNSwgMTMxLCAxNjMsIDE5NSwgMjI3LCAyNTgsIDAsIDAgXTtcblxuXHQvLyBzZWUgbm90ZSAjMTMgYWJvdmUgYWJvdXQgMjU4XG5cdHZhciBjcGxleHQgPSBbIC8vIEV4dHJhIGJpdHMgZm9yIGxpdGVyYWwgY29kZXMgMjU3Li4yODVcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMywgMywgMywgMywgNCwgNCwgNCwgNCwgNSwgNSwgNSwgNSwgMCwgMTEyLCAxMTIgLy8gMTEyPT1pbnZhbGlkXG5cdF07XG5cblx0dmFyIGNwZGlzdCA9IFsgLy8gQ29weSBvZmZzZXRzIGZvciBkaXN0YW5jZSBjb2RlcyAwLi4yOVxuXHQxLCAyLCAzLCA0LCA1LCA3LCA5LCAxMywgMTcsIDI1LCAzMywgNDksIDY1LCA5NywgMTI5LCAxOTMsIDI1NywgMzg1LCA1MTMsIDc2OSwgMTAyNSwgMTUzNywgMjA0OSwgMzA3MywgNDA5NywgNjE0NSwgODE5MywgMTIyODksIDE2Mzg1LCAyNDU3NyBdO1xuXG5cdHZhciBjcGRleHQgPSBbIC8vIEV4dHJhIGJpdHMgZm9yIGRpc3RhbmNlIGNvZGVzXG5cdDAsIDAsIDAsIDAsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDUsIDYsIDYsIDcsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMiwgMTIsIDEzLCAxMyBdO1xuXG5cdC8vIElmIEJNQVggbmVlZHMgdG8gYmUgbGFyZ2VyIHRoYW4gMTYsIHRoZW4gaCBhbmQgeFtdIHNob3VsZCBiZSB1TG9uZy5cblx0dmFyIEJNQVggPSAxNTsgLy8gbWF4aW11bSBiaXQgbGVuZ3RoIG9mIGFueSBjb2RlXG5cblx0ZnVuY3Rpb24gSW5mVHJlZSgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR2YXIgaG47IC8vIGh1ZnRzIHVzZWQgaW4gc3BhY2Vcblx0XHR2YXIgdjsgLy8gd29yayBhcmVhIGZvciBodWZ0X2J1aWxkXG5cdFx0dmFyIGM7IC8vIGJpdCBsZW5ndGggY291bnQgdGFibGVcblx0XHR2YXIgcjsgLy8gdGFibGUgZW50cnkgZm9yIHN0cnVjdHVyZSBhc3NpZ25tZW50XG5cdFx0dmFyIHU7IC8vIHRhYmxlIHN0YWNrXG5cdFx0dmFyIHg7IC8vIGJpdCBvZmZzZXRzLCB0aGVuIGNvZGUgc3RhY2tcblxuXHRcdGZ1bmN0aW9uIGh1ZnRfYnVpbGQoYiwgLy8gY29kZSBsZW5ndGhzIGluIGJpdHMgKGFsbCBhc3N1bWVkIDw9XG5cdFx0Ly8gQk1BWClcblx0XHRiaW5kZXgsIG4sIC8vIG51bWJlciBvZiBjb2RlcyAoYXNzdW1lZCA8PSAyODgpXG5cdFx0cywgLy8gbnVtYmVyIG9mIHNpbXBsZS12YWx1ZWQgY29kZXMgKDAuLnMtMSlcblx0XHRkLCAvLyBsaXN0IG9mIGJhc2UgdmFsdWVzIGZvciBub24tc2ltcGxlIGNvZGVzXG5cdFx0ZSwgLy8gbGlzdCBvZiBleHRyYSBiaXRzIGZvciBub24tc2ltcGxlIGNvZGVzXG5cdFx0dCwgLy8gcmVzdWx0OiBzdGFydGluZyB0YWJsZVxuXHRcdG0sIC8vIG1heGltdW0gbG9va3VwIGJpdHMsIHJldHVybnMgYWN0dWFsXG5cdFx0aHAsLy8gc3BhY2UgZm9yIHRyZWVzXG5cdFx0aG4sLy8gaHVmdHMgdXNlZCBpbiBzcGFjZVxuXHRcdHYgLy8gd29ya2luZyBhcmVhOiB2YWx1ZXMgaW4gb3JkZXIgb2YgYml0IGxlbmd0aFxuXHRcdCkge1xuXHRcdFx0Ly8gR2l2ZW4gYSBsaXN0IG9mIGNvZGUgbGVuZ3RocyBhbmQgYSBtYXhpbXVtIHRhYmxlIHNpemUsIG1ha2UgYSBzZXQgb2Zcblx0XHRcdC8vIHRhYmxlcyB0byBkZWNvZGUgdGhhdCBzZXQgb2YgY29kZXMuIFJldHVybiBaX09LIG9uIHN1Y2Nlc3MsXG5cdFx0XHQvLyBaX0JVRl9FUlJPUlxuXHRcdFx0Ly8gaWYgdGhlIGdpdmVuIGNvZGUgc2V0IGlzIGluY29tcGxldGUgKHRoZSB0YWJsZXMgYXJlIHN0aWxsIGJ1aWx0IGluXG5cdFx0XHQvLyB0aGlzXG5cdFx0XHQvLyBjYXNlKSwgWl9EQVRBX0VSUk9SIGlmIHRoZSBpbnB1dCBpcyBpbnZhbGlkIChhbiBvdmVyLXN1YnNjcmliZWQgc2V0XG5cdFx0XHQvLyBvZlxuXHRcdFx0Ly8gbGVuZ3RocyksIG9yIFpfTUVNX0VSUk9SIGlmIG5vdCBlbm91Z2ggbWVtb3J5LlxuXG5cdFx0XHR2YXIgYTsgLy8gY291bnRlciBmb3IgY29kZXMgb2YgbGVuZ3RoIGtcblx0XHRcdHZhciBmOyAvLyBpIHJlcGVhdHMgaW4gdGFibGUgZXZlcnkgZiBlbnRyaWVzXG5cdFx0XHR2YXIgZzsgLy8gbWF4aW11bSBjb2RlIGxlbmd0aFxuXHRcdFx0dmFyIGg7IC8vIHRhYmxlIGxldmVsXG5cdFx0XHR2YXIgaTsgLy8gY291bnRlciwgY3VycmVudCBjb2RlXG5cdFx0XHR2YXIgajsgLy8gY291bnRlclxuXHRcdFx0dmFyIGs7IC8vIG51bWJlciBvZiBiaXRzIGluIGN1cnJlbnQgY29kZVxuXHRcdFx0dmFyIGw7IC8vIGJpdHMgcGVyIHRhYmxlIChyZXR1cm5lZCBpbiBtKVxuXHRcdFx0dmFyIG1hc2s7IC8vICgxIDw8IHcpIC0gMSwgdG8gYXZvaWQgY2MgLU8gYnVnIG9uIEhQXG5cdFx0XHR2YXIgcDsgLy8gcG9pbnRlciBpbnRvIGNbXSwgYltdLCBvciB2W11cblx0XHRcdHZhciBxOyAvLyBwb2ludHMgdG8gY3VycmVudCB0YWJsZVxuXHRcdFx0dmFyIHc7IC8vIGJpdHMgYmVmb3JlIHRoaXMgdGFibGUgPT0gKGwgKiBoKVxuXHRcdFx0dmFyIHhwOyAvLyBwb2ludGVyIGludG8geFxuXHRcdFx0dmFyIHk7IC8vIG51bWJlciBvZiBkdW1teSBjb2RlcyBhZGRlZFxuXHRcdFx0dmFyIHo7IC8vIG51bWJlciBvZiBlbnRyaWVzIGluIGN1cnJlbnQgdGFibGVcblxuXHRcdFx0Ly8gR2VuZXJhdGUgY291bnRzIGZvciBlYWNoIGJpdCBsZW5ndGhcblxuXHRcdFx0cCA9IDA7XG5cdFx0XHRpID0gbjtcblx0XHRcdGRvIHtcblx0XHRcdFx0Y1tiW2JpbmRleCArIHBdXSsrO1xuXHRcdFx0XHRwKys7XG5cdFx0XHRcdGktLTsgLy8gYXNzdW1lIGFsbCBlbnRyaWVzIDw9IEJNQVhcblx0XHRcdH0gd2hpbGUgKGkgIT09IDApO1xuXG5cdFx0XHRpZiAoY1swXSA9PSBuKSB7IC8vIG51bGwgaW5wdXQtLWFsbCB6ZXJvIGxlbmd0aCBjb2Rlc1xuXHRcdFx0XHR0WzBdID0gLTE7XG5cdFx0XHRcdG1bMF0gPSAwO1xuXHRcdFx0XHRyZXR1cm4gWl9PSztcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmluZCBtaW5pbXVtIGFuZCBtYXhpbXVtIGxlbmd0aCwgYm91bmQgKm0gYnkgdGhvc2Vcblx0XHRcdGwgPSBtWzBdO1xuXHRcdFx0Zm9yIChqID0gMTsgaiA8PSBCTUFYOyBqKyspXG5cdFx0XHRcdGlmIChjW2pdICE9PSAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0ayA9IGo7IC8vIG1pbmltdW0gY29kZSBsZW5ndGhcblx0XHRcdGlmIChsIDwgaikge1xuXHRcdFx0XHRsID0gajtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IEJNQVg7IGkgIT09IDA7IGktLSkge1xuXHRcdFx0XHRpZiAoY1tpXSAhPT0gMClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGcgPSBpOyAvLyBtYXhpbXVtIGNvZGUgbGVuZ3RoXG5cdFx0XHRpZiAobCA+IGkpIHtcblx0XHRcdFx0bCA9IGk7XG5cdFx0XHR9XG5cdFx0XHRtWzBdID0gbDtcblxuXHRcdFx0Ly8gQWRqdXN0IGxhc3QgbGVuZ3RoIGNvdW50IHRvIGZpbGwgb3V0IGNvZGVzLCBpZiBuZWVkZWRcblx0XHRcdGZvciAoeSA9IDEgPDwgajsgaiA8IGk7IGorKywgeSA8PD0gMSkge1xuXHRcdFx0XHRpZiAoKHkgLT0gY1tqXSkgPCAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFpfREFUQV9FUlJPUjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCh5IC09IGNbaV0pIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SO1xuXHRcdFx0fVxuXHRcdFx0Y1tpXSArPSB5O1xuXG5cdFx0XHQvLyBHZW5lcmF0ZSBzdGFydGluZyBvZmZzZXRzIGludG8gdGhlIHZhbHVlIHRhYmxlIGZvciBlYWNoIGxlbmd0aFxuXHRcdFx0eFsxXSA9IGogPSAwO1xuXHRcdFx0cCA9IDE7XG5cdFx0XHR4cCA9IDI7XG5cdFx0XHR3aGlsZSAoLS1pICE9PSAwKSB7IC8vIG5vdGUgdGhhdCBpID09IGcgZnJvbSBhYm92ZVxuXHRcdFx0XHR4W3hwXSA9IChqICs9IGNbcF0pO1xuXHRcdFx0XHR4cCsrO1xuXHRcdFx0XHRwKys7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2UgYSB0YWJsZSBvZiB2YWx1ZXMgaW4gb3JkZXIgb2YgYml0IGxlbmd0aHNcblx0XHRcdGkgPSAwO1xuXHRcdFx0cCA9IDA7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGlmICgoaiA9IGJbYmluZGV4ICsgcF0pICE9PSAwKSB7XG5cdFx0XHRcdFx0dlt4W2pdKytdID0gaTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwKys7XG5cdFx0XHR9IHdoaWxlICgrK2kgPCBuKTtcblx0XHRcdG4gPSB4W2ddOyAvLyBzZXQgbiB0byBsZW5ndGggb2YgdlxuXG5cdFx0XHQvLyBHZW5lcmF0ZSB0aGUgSHVmZm1hbiBjb2RlcyBhbmQgZm9yIGVhY2gsIG1ha2UgdGhlIHRhYmxlIGVudHJpZXNcblx0XHRcdHhbMF0gPSBpID0gMDsgLy8gZmlyc3QgSHVmZm1hbiBjb2RlIGlzIHplcm9cblx0XHRcdHAgPSAwOyAvLyBncmFiIHZhbHVlcyBpbiBiaXQgb3JkZXJcblx0XHRcdGggPSAtMTsgLy8gbm8gdGFibGVzIHlldC0tbGV2ZWwgLTFcblx0XHRcdHcgPSAtbDsgLy8gYml0cyBkZWNvZGVkID09IChsICogaClcblx0XHRcdHVbMF0gPSAwOyAvLyBqdXN0IHRvIGtlZXAgY29tcGlsZXJzIGhhcHB5XG5cdFx0XHRxID0gMDsgLy8gZGl0dG9cblx0XHRcdHogPSAwOyAvLyBkaXR0b1xuXG5cdFx0XHQvLyBnbyB0aHJvdWdoIHRoZSBiaXQgbGVuZ3RocyAoayBhbHJlYWR5IGlzIGJpdHMgaW4gc2hvcnRlc3QgY29kZSlcblx0XHRcdGZvciAoOyBrIDw9IGc7IGsrKykge1xuXHRcdFx0XHRhID0gY1trXTtcblx0XHRcdFx0d2hpbGUgKGEtLSAhPT0gMCkge1xuXHRcdFx0XHRcdC8vIGhlcmUgaSBpcyB0aGUgSHVmZm1hbiBjb2RlIG9mIGxlbmd0aCBrIGJpdHMgZm9yIHZhbHVlICpwXG5cdFx0XHRcdFx0Ly8gbWFrZSB0YWJsZXMgdXAgdG8gcmVxdWlyZWQgbGV2ZWxcblx0XHRcdFx0XHR3aGlsZSAoayA+IHcgKyBsKSB7XG5cdFx0XHRcdFx0XHRoKys7XG5cdFx0XHRcdFx0XHR3ICs9IGw7IC8vIHByZXZpb3VzIHRhYmxlIGFsd2F5cyBsIGJpdHNcblx0XHRcdFx0XHRcdC8vIGNvbXB1dGUgbWluaW11bSBzaXplIHRhYmxlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBsIGJpdHNcblx0XHRcdFx0XHRcdHogPSBnIC0gdztcblx0XHRcdFx0XHRcdHogPSAoeiA+IGwpID8gbCA6IHo7IC8vIHRhYmxlIHNpemUgdXBwZXIgbGltaXRcblx0XHRcdFx0XHRcdGlmICgoZiA9IDEgPDwgKGogPSBrIC0gdykpID4gYSArIDEpIHsgLy8gdHJ5IGEgay13IGJpdCB0YWJsZVxuXHRcdFx0XHRcdFx0XHQvLyB0b28gZmV3IGNvZGVzIGZvclxuXHRcdFx0XHRcdFx0XHQvLyBrLXcgYml0IHRhYmxlXG5cdFx0XHRcdFx0XHRcdGYgLT0gYSArIDE7IC8vIGRlZHVjdCBjb2RlcyBmcm9tIHBhdHRlcm5zIGxlZnRcblx0XHRcdFx0XHRcdFx0eHAgPSBrO1xuXHRcdFx0XHRcdFx0XHRpZiAoaiA8IHopIHtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoKytqIDwgeikgeyAvLyB0cnkgc21hbGxlciB0YWJsZXMgdXAgdG8geiBiaXRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoKGYgPDw9IDEpIDw9IGNbKyt4cF0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrOyAvLyBlbm91Z2ggY29kZXMgdG8gdXNlIHVwIGogYml0c1xuXHRcdFx0XHRcdFx0XHRcdFx0ZiAtPSBjW3hwXTsgLy8gZWxzZSBkZWR1Y3QgY29kZXMgZnJvbSBwYXR0ZXJuc1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0eiA9IDEgPDwgajsgLy8gdGFibGUgZW50cmllcyBmb3Igai1iaXQgdGFibGVcblxuXHRcdFx0XHRcdFx0Ly8gYWxsb2NhdGUgbmV3IHRhYmxlXG5cdFx0XHRcdFx0XHRpZiAoaG5bMF0gKyB6ID4gTUFOWSkgeyAvLyAobm90ZTogZG9lc24ndCBtYXR0ZXIgZm9yIGZpeGVkKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SOyAvLyBvdmVyZmxvdyBvZiBNQU5ZXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR1W2hdID0gcSA9IC8qIGhwKyAqL2huWzBdOyAvLyBERUJVR1xuXHRcdFx0XHRcdFx0aG5bMF0gKz0gejtcblxuXHRcdFx0XHRcdFx0Ly8gY29ubmVjdCB0byBsYXN0IHRhYmxlLCBpZiB0aGVyZSBpcyBvbmVcblx0XHRcdFx0XHRcdGlmIChoICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHhbaF0gPSBpOyAvLyBzYXZlIHBhdHRlcm4gZm9yIGJhY2tpbmcgdXBcblx0XHRcdFx0XHRcdFx0clswXSA9IC8qIChieXRlKSAqL2o7IC8vIGJpdHMgaW4gdGhpcyB0YWJsZVxuXHRcdFx0XHRcdFx0XHRyWzFdID0gLyogKGJ5dGUpICovbDsgLy8gYml0cyB0byBkdW1wIGJlZm9yZSB0aGlzIHRhYmxlXG5cdFx0XHRcdFx0XHRcdGogPSBpID4+PiAodyAtIGwpO1xuXHRcdFx0XHRcdFx0XHRyWzJdID0gLyogKGludCkgKi8ocSAtIHVbaCAtIDFdIC0gaik7IC8vIG9mZnNldCB0byB0aGlzIHRhYmxlXG5cdFx0XHRcdFx0XHRcdGhwLnNldChyLCAodVtoIC0gMV0gKyBqKSAqIDMpO1xuXHRcdFx0XHRcdFx0XHQvLyB0b1xuXHRcdFx0XHRcdFx0XHQvLyBsYXN0XG5cdFx0XHRcdFx0XHRcdC8vIHRhYmxlXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0WzBdID0gcTsgLy8gZmlyc3QgdGFibGUgaXMgcmV0dXJuZWQgcmVzdWx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gc2V0IHVwIHRhYmxlIGVudHJ5IGluIHJcblx0XHRcdFx0XHRyWzFdID0gLyogKGJ5dGUpICovKGsgLSB3KTtcblx0XHRcdFx0XHRpZiAocCA+PSBuKSB7XG5cdFx0XHRcdFx0XHRyWzBdID0gMTI4ICsgNjQ7IC8vIG91dCBvZiB2YWx1ZXMtLWludmFsaWQgY29kZVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodltwXSA8IHMpIHtcblx0XHRcdFx0XHRcdHJbMF0gPSAvKiAoYnl0ZSkgKi8odltwXSA8IDI1NiA/IDAgOiAzMiArIDY0KTsgLy8gMjU2IGlzXG5cdFx0XHRcdFx0XHQvLyBlbmQtb2YtYmxvY2tcblx0XHRcdFx0XHRcdHJbMl0gPSB2W3ArK107IC8vIHNpbXBsZSBjb2RlIGlzIGp1c3QgdGhlIHZhbHVlXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJbMF0gPSAvKiAoYnl0ZSkgKi8oZVt2W3BdIC0gc10gKyAxNiArIDY0KTsgLy8gbm9uLXNpbXBsZS0tbG9va1xuXHRcdFx0XHRcdFx0Ly8gdXAgaW4gbGlzdHNcblx0XHRcdFx0XHRcdHJbMl0gPSBkW3ZbcCsrXSAtIHNdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGZpbGwgY29kZS1saWtlIGVudHJpZXMgd2l0aCByXG5cdFx0XHRcdFx0ZiA9IDEgPDwgKGsgLSB3KTtcblx0XHRcdFx0XHRmb3IgKGogPSBpID4+PiB3OyBqIDwgejsgaiArPSBmKSB7XG5cdFx0XHRcdFx0XHRocC5zZXQociwgKHEgKyBqKSAqIDMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGJhY2t3YXJkcyBpbmNyZW1lbnQgdGhlIGstYml0IGNvZGUgaVxuXHRcdFx0XHRcdGZvciAoaiA9IDEgPDwgKGsgLSAxKTsgKGkgJiBqKSAhPT0gMDsgaiA+Pj49IDEpIHtcblx0XHRcdFx0XHRcdGkgXj0gajtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aSBePSBqO1xuXG5cdFx0XHRcdFx0Ly8gYmFja3VwIG92ZXIgZmluaXNoZWQgdGFibGVzXG5cdFx0XHRcdFx0bWFzayA9ICgxIDw8IHcpIC0gMTsgLy8gbmVlZGVkIG9uIEhQLCBjYyAtTyBidWdcblx0XHRcdFx0XHR3aGlsZSAoKGkgJiBtYXNrKSAhPSB4W2hdKSB7XG5cdFx0XHRcdFx0XHRoLS07IC8vIGRvbid0IG5lZWQgdG8gdXBkYXRlIHFcblx0XHRcdFx0XHRcdHcgLT0gbDtcblx0XHRcdFx0XHRcdG1hc2sgPSAoMSA8PCB3KSAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBSZXR1cm4gWl9CVUZfRVJST1IgaWYgd2Ugd2VyZSBnaXZlbiBhbiBpbmNvbXBsZXRlIHRhYmxlXG5cdFx0XHRyZXR1cm4geSAhPT0gMCAmJiBnICE9IDEgPyBaX0JVRl9FUlJPUiA6IFpfT0s7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW5pdFdvcmtBcmVhKHZzaXplKSB7XG5cdFx0XHR2YXIgaTtcblx0XHRcdGlmICghaG4pIHtcblx0XHRcdFx0aG4gPSBbXTsgLy8gW107IC8vbmV3IEFycmF5KDEpO1xuXHRcdFx0XHR2ID0gW107IC8vIG5ldyBBcnJheSh2c2l6ZSk7XG5cdFx0XHRcdGMgPSBuZXcgSW50MzJBcnJheShCTUFYICsgMSk7IC8vIG5ldyBBcnJheShCTUFYICsgMSk7XG5cdFx0XHRcdHIgPSBbXTsgLy8gbmV3IEFycmF5KDMpO1xuXHRcdFx0XHR1ID0gbmV3IEludDMyQXJyYXkoQk1BWCk7IC8vIG5ldyBBcnJheShCTUFYKTtcblx0XHRcdFx0eCA9IG5ldyBJbnQzMkFycmF5KEJNQVggKyAxKTsgLy8gbmV3IEFycmF5KEJNQVggKyAxKTtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA8IHZzaXplKSB7XG5cdFx0XHRcdHYgPSBbXTsgLy8gbmV3IEFycmF5KHZzaXplKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB2c2l6ZTsgaSsrKSB7XG5cdFx0XHRcdHZbaV0gPSAwO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IEJNQVggKyAxOyBpKyspIHtcblx0XHRcdFx0Y1tpXSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRcdHJbaV0gPSAwO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZm9yKGludCBpPTA7IGk8Qk1BWDsgaSsrKXt1W2ldPTA7fVxuXHRcdFx0dS5zZXQoYy5zdWJhcnJheSgwLCBCTUFYKSwgMCk7XG5cdFx0XHQvLyBmb3IoaW50IGk9MDsgaTxCTUFYKzE7IGkrKyl7eFtpXT0wO31cblx0XHRcdHguc2V0KGMuc3ViYXJyYXkoMCwgQk1BWCArIDEpLCAwKTtcblx0XHR9XG5cblx0XHR0aGF0LmluZmxhdGVfdHJlZXNfYml0cyA9IGZ1bmN0aW9uKGMsIC8vIDE5IGNvZGUgbGVuZ3Roc1xuXHRcdGJiLCAvLyBiaXRzIHRyZWUgZGVzaXJlZC9hY3R1YWwgZGVwdGhcblx0XHR0YiwgLy8gYml0cyB0cmVlIHJlc3VsdFxuXHRcdGhwLCAvLyBzcGFjZSBmb3IgdHJlZXNcblx0XHR6IC8vIGZvciBtZXNzYWdlc1xuXHRcdCkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGluaXRXb3JrQXJlYSgxOSk7XG5cdFx0XHRoblswXSA9IDA7XG5cdFx0XHRyZXN1bHQgPSBodWZ0X2J1aWxkKGMsIDAsIDE5LCAxOSwgbnVsbCwgbnVsbCwgdGIsIGJiLCBocCwgaG4sIHYpO1xuXG5cdFx0XHRpZiAocmVzdWx0ID09IFpfREFUQV9FUlJPUikge1xuXHRcdFx0XHR6Lm1zZyA9IFwib3ZlcnN1YnNjcmliZWQgZHluYW1pYyBiaXQgbGVuZ3RocyB0cmVlXCI7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PSBaX0JVRl9FUlJPUiB8fCBiYlswXSA9PT0gMCkge1xuXHRcdFx0XHR6Lm1zZyA9IFwiaW5jb21wbGV0ZSBkeW5hbWljIGJpdCBsZW5ndGhzIHRyZWVcIjtcblx0XHRcdFx0cmVzdWx0ID0gWl9EQVRBX0VSUk9SO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXG5cdFx0dGhhdC5pbmZsYXRlX3RyZWVzX2R5bmFtaWMgPSBmdW5jdGlvbihubCwgLy8gbnVtYmVyIG9mIGxpdGVyYWwvbGVuZ3RoIGNvZGVzXG5cdFx0bmQsIC8vIG51bWJlciBvZiBkaXN0YW5jZSBjb2Rlc1xuXHRcdGMsIC8vIHRoYXQgbWFueSAodG90YWwpIGNvZGUgbGVuZ3Roc1xuXHRcdGJsLCAvLyBsaXRlcmFsIGRlc2lyZWQvYWN0dWFsIGJpdCBkZXB0aFxuXHRcdGJkLCAvLyBkaXN0YW5jZSBkZXNpcmVkL2FjdHVhbCBiaXQgZGVwdGhcblx0XHR0bCwgLy8gbGl0ZXJhbC9sZW5ndGggdHJlZSByZXN1bHRcblx0XHR0ZCwgLy8gZGlzdGFuY2UgdHJlZSByZXN1bHRcblx0XHRocCwgLy8gc3BhY2UgZm9yIHRyZWVzXG5cdFx0eiAvLyBmb3IgbWVzc2FnZXNcblx0XHQpIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cblx0XHRcdC8vIGJ1aWxkIGxpdGVyYWwvbGVuZ3RoIHRyZWVcblx0XHRcdGluaXRXb3JrQXJlYSgyODgpO1xuXHRcdFx0aG5bMF0gPSAwO1xuXHRcdFx0cmVzdWx0ID0gaHVmdF9idWlsZChjLCAwLCBubCwgMjU3LCBjcGxlbnMsIGNwbGV4dCwgdGwsIGJsLCBocCwgaG4sIHYpO1xuXHRcdFx0aWYgKHJlc3VsdCAhPSBaX09LIHx8IGJsWzBdID09PSAwKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQgPT0gWl9EQVRBX0VSUk9SKSB7XG5cdFx0XHRcdFx0ei5tc2cgPSBcIm92ZXJzdWJzY3JpYmVkIGxpdGVyYWwvbGVuZ3RoIHRyZWVcIjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgIT0gWl9NRU1fRVJST1IpIHtcblx0XHRcdFx0XHR6Lm1zZyA9IFwiaW5jb21wbGV0ZSBsaXRlcmFsL2xlbmd0aCB0cmVlXCI7XG5cdFx0XHRcdFx0cmVzdWx0ID0gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGJ1aWxkIGRpc3RhbmNlIHRyZWVcblx0XHRcdGluaXRXb3JrQXJlYSgyODgpO1xuXHRcdFx0cmVzdWx0ID0gaHVmdF9idWlsZChjLCBubCwgbmQsIDAsIGNwZGlzdCwgY3BkZXh0LCB0ZCwgYmQsIGhwLCBobiwgdik7XG5cblx0XHRcdGlmIChyZXN1bHQgIT0gWl9PSyB8fCAoYmRbMF0gPT09IDAgJiYgbmwgPiAyNTcpKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQgPT0gWl9EQVRBX0VSUk9SKSB7XG5cdFx0XHRcdFx0ei5tc2cgPSBcIm92ZXJzdWJzY3JpYmVkIGRpc3RhbmNlIHRyZWVcIjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgPT0gWl9CVUZfRVJST1IpIHtcblx0XHRcdFx0XHR6Lm1zZyA9IFwiaW5jb21wbGV0ZSBkaXN0YW5jZSB0cmVlXCI7XG5cdFx0XHRcdFx0cmVzdWx0ID0gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCAhPSBaX01FTV9FUlJPUikge1xuXHRcdFx0XHRcdHoubXNnID0gXCJlbXB0eSBkaXN0YW5jZSB0cmVlIHdpdGggbGVuZ3Roc1wiO1xuXHRcdFx0XHRcdHJlc3VsdCA9IFpfREFUQV9FUlJPUjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gWl9PSztcblx0XHR9O1xuXG5cdH1cblxuXHRJbmZUcmVlLmluZmxhdGVfdHJlZXNfZml4ZWQgPSBmdW5jdGlvbihibCwgLy8gbGl0ZXJhbCBkZXNpcmVkL2FjdHVhbCBiaXQgZGVwdGhcblx0YmQsIC8vIGRpc3RhbmNlIGRlc2lyZWQvYWN0dWFsIGJpdCBkZXB0aFxuXHR0bCwvLyBsaXRlcmFsL2xlbmd0aCB0cmVlIHJlc3VsdFxuXHR0ZC8vIGRpc3RhbmNlIHRyZWUgcmVzdWx0XG5cdCkge1xuXHRcdGJsWzBdID0gZml4ZWRfYmw7XG5cdFx0YmRbMF0gPSBmaXhlZF9iZDtcblx0XHR0bFswXSA9IGZpeGVkX3RsO1xuXHRcdHRkWzBdID0gZml4ZWRfdGQ7XG5cdFx0cmV0dXJuIFpfT0s7XG5cdH07XG5cblx0Ly8gSW5mQ29kZXNcblxuXHQvLyB3YWl0aW5nIGZvciBcImk6XCI9aW5wdXQsXG5cdC8vIFwibzpcIj1vdXRwdXQsXG5cdC8vIFwieDpcIj1ub3RoaW5nXG5cdHZhciBTVEFSVCA9IDA7IC8vIHg6IHNldCB1cCBmb3IgTEVOXG5cdHZhciBMRU4gPSAxOyAvLyBpOiBnZXQgbGVuZ3RoL2xpdGVyYWwvZW9iIG5leHRcblx0dmFyIExFTkVYVCA9IDI7IC8vIGk6IGdldHRpbmcgbGVuZ3RoIGV4dHJhIChoYXZlIGJhc2UpXG5cdHZhciBESVNUID0gMzsgLy8gaTogZ2V0IGRpc3RhbmNlIG5leHRcblx0dmFyIERJU1RFWFQgPSA0Oy8vIGk6IGdldHRpbmcgZGlzdGFuY2UgZXh0cmFcblx0dmFyIENPUFkgPSA1OyAvLyBvOiBjb3B5aW5nIGJ5dGVzIGluIHdpbmRvdywgd2FpdGluZ1xuXHQvLyBmb3Igc3BhY2Vcblx0dmFyIExJVCA9IDY7IC8vIG86IGdvdCBsaXRlcmFsLCB3YWl0aW5nIGZvciBvdXRwdXRcblx0Ly8gc3BhY2Vcblx0dmFyIFdBU0ggPSA3OyAvLyBvOiBnb3QgZW9iLCBwb3NzaWJseSBzdGlsbCBvdXRwdXRcblx0Ly8gd2FpdGluZ1xuXHR2YXIgRU5EID0gODsgLy8geDogZ290IGVvYiBhbmQgYWxsIGRhdGEgZmx1c2hlZFxuXHR2YXIgQkFEQ09ERSA9IDk7Ly8geDogZ290IGVycm9yXG5cblx0ZnVuY3Rpb24gSW5mQ29kZXMoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0dmFyIG1vZGU7IC8vIGN1cnJlbnQgaW5mbGF0ZV9jb2RlcyBtb2RlXG5cblx0XHQvLyBtb2RlIGRlcGVuZGVudCBpbmZvcm1hdGlvblxuXHRcdHZhciBsZW4gPSAwO1xuXG5cdFx0dmFyIHRyZWU7IC8vIHBvaW50ZXIgaW50byB0cmVlXG5cdFx0dmFyIHRyZWVfaW5kZXggPSAwO1xuXHRcdHZhciBuZWVkID0gMDsgLy8gYml0cyBuZWVkZWRcblxuXHRcdHZhciBsaXQgPSAwO1xuXG5cdFx0Ly8gaWYgRVhUIG9yIENPUFksIHdoZXJlIGFuZCBob3cgbXVjaFxuXHRcdHZhciBnZXQgPSAwOyAvLyBiaXRzIHRvIGdldCBmb3IgZXh0cmFcblx0XHR2YXIgZGlzdCA9IDA7IC8vIGRpc3RhbmNlIGJhY2sgdG8gY29weSBmcm9tXG5cblx0XHR2YXIgbGJpdHMgPSAwOyAvLyBsdHJlZSBiaXRzIGRlY29kZWQgcGVyIGJyYW5jaFxuXHRcdHZhciBkYml0cyA9IDA7IC8vIGR0cmVlIGJpdHMgZGVjb2RlciBwZXIgYnJhbmNoXG5cdFx0dmFyIGx0cmVlOyAvLyBsaXRlcmFsL2xlbmd0aC9lb2IgdHJlZVxuXHRcdHZhciBsdHJlZV9pbmRleCA9IDA7IC8vIGxpdGVyYWwvbGVuZ3RoL2VvYiB0cmVlXG5cdFx0dmFyIGR0cmVlOyAvLyBkaXN0YW5jZSB0cmVlXG5cdFx0dmFyIGR0cmVlX2luZGV4ID0gMDsgLy8gZGlzdGFuY2UgdHJlZVxuXG5cdFx0Ly8gQ2FsbGVkIHdpdGggbnVtYmVyIG9mIGJ5dGVzIGxlZnQgdG8gd3JpdGUgaW4gd2luZG93IGF0IGxlYXN0IDI1OFxuXHRcdC8vICh0aGUgbWF4aW11bSBzdHJpbmcgbGVuZ3RoKSBhbmQgbnVtYmVyIG9mIGlucHV0IGJ5dGVzIGF2YWlsYWJsZVxuXHRcdC8vIGF0IGxlYXN0IHRlbi4gVGhlIHRlbiBieXRlcyBhcmUgc2l4IGJ5dGVzIGZvciB0aGUgbG9uZ2VzdCBsZW5ndGgvXG5cdFx0Ly8gZGlzdGFuY2UgcGFpciBwbHVzIGZvdXIgYnl0ZXMgZm9yIG92ZXJsb2FkaW5nIHRoZSBiaXQgYnVmZmVyLlxuXG5cdFx0ZnVuY3Rpb24gaW5mbGF0ZV9mYXN0KGJsLCBiZCwgdGwsIHRsX2luZGV4LCB0ZCwgdGRfaW5kZXgsIHMsIHopIHtcblx0XHRcdHZhciB0OyAvLyB0ZW1wb3JhcnkgcG9pbnRlclxuXHRcdFx0dmFyIHRwOyAvLyB0ZW1wb3JhcnkgcG9pbnRlclxuXHRcdFx0dmFyIHRwX2luZGV4OyAvLyB0ZW1wb3JhcnkgcG9pbnRlclxuXHRcdFx0dmFyIGU7IC8vIGV4dHJhIGJpdHMgb3Igb3BlcmF0aW9uXG5cdFx0XHR2YXIgYjsgLy8gYml0IGJ1ZmZlclxuXHRcdFx0dmFyIGs7IC8vIGJpdHMgaW4gYml0IGJ1ZmZlclxuXHRcdFx0dmFyIHA7IC8vIGlucHV0IGRhdGEgcG9pbnRlclxuXHRcdFx0dmFyIG47IC8vIGJ5dGVzIGF2YWlsYWJsZSB0aGVyZVxuXHRcdFx0dmFyIHE7IC8vIG91dHB1dCB3aW5kb3cgd3JpdGUgcG9pbnRlclxuXHRcdFx0dmFyIG07IC8vIGJ5dGVzIHRvIGVuZCBvZiB3aW5kb3cgb3IgcmVhZCBwb2ludGVyXG5cdFx0XHR2YXIgbWw7IC8vIG1hc2sgZm9yIGxpdGVyYWwvbGVuZ3RoIHRyZWVcblx0XHRcdHZhciBtZDsgLy8gbWFzayBmb3IgZGlzdGFuY2UgdHJlZVxuXHRcdFx0dmFyIGM7IC8vIGJ5dGVzIHRvIGNvcHlcblx0XHRcdHZhciBkOyAvLyBkaXN0YW5jZSBiYWNrIHRvIGNvcHkgZnJvbVxuXHRcdFx0dmFyIHI7IC8vIGNvcHkgc291cmNlIHBvaW50ZXJcblxuXHRcdFx0dmFyIHRwX2luZGV4X3RfMzsgLy8gKHRwX2luZGV4K3QpKjNcblxuXHRcdFx0Ly8gbG9hZCBpbnB1dCwgb3V0cHV0LCBiaXQgdmFsdWVzXG5cdFx0XHRwID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0biA9IHouYXZhaWxfaW47XG5cdFx0XHRiID0gcy5iaXRiO1xuXHRcdFx0ayA9IHMuYml0aztcblx0XHRcdHEgPSBzLndyaXRlO1xuXHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblxuXHRcdFx0Ly8gaW5pdGlhbGl6ZSBtYXNrc1xuXHRcdFx0bWwgPSBpbmZsYXRlX21hc2tbYmxdO1xuXHRcdFx0bWQgPSBpbmZsYXRlX21hc2tbYmRdO1xuXG5cdFx0XHQvLyBkbyB1bnRpbCBub3QgZW5vdWdoIGlucHV0IG9yIG91dHB1dCBzcGFjZSBmb3IgZmFzdCBsb29wXG5cdFx0XHRkbyB7IC8vIGFzc3VtZSBjYWxsZWQgd2l0aCBtID49IDI1OCAmJiBuID49IDEwXG5cdFx0XHRcdC8vIGdldCBsaXRlcmFsL2xlbmd0aCBjb2RlXG5cdFx0XHRcdHdoaWxlIChrIDwgKDIwKSkgeyAvLyBtYXggYml0cyBmb3IgbGl0ZXJhbC9sZW5ndGggY29kZVxuXHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0ID0gYiAmIG1sO1xuXHRcdFx0XHR0cCA9IHRsO1xuXHRcdFx0XHR0cF9pbmRleCA9IHRsX2luZGV4O1xuXHRcdFx0XHR0cF9pbmRleF90XzMgPSAodHBfaW5kZXggKyB0KSAqIDM7XG5cdFx0XHRcdGlmICgoZSA9IHRwW3RwX2luZGV4X3RfM10pID09PSAwKSB7XG5cdFx0XHRcdFx0YiA+Pj0gKHRwW3RwX2luZGV4X3RfMyArIDFdKTtcblx0XHRcdFx0XHRrIC09ICh0cFt0cF9pbmRleF90XzMgKyAxXSk7XG5cblx0XHRcdFx0XHRzLndpbmRvd1txKytdID0gLyogKGJ5dGUpICovdHBbdHBfaW5kZXhfdF8zICsgMl07XG5cdFx0XHRcdFx0bS0tO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvIHtcblxuXHRcdFx0XHRcdGIgPj49ICh0cFt0cF9pbmRleF90XzMgKyAxXSk7XG5cdFx0XHRcdFx0ayAtPSAodHBbdHBfaW5kZXhfdF8zICsgMV0pO1xuXG5cdFx0XHRcdFx0aWYgKChlICYgMTYpICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRlICY9IDE1O1xuXHRcdFx0XHRcdFx0YyA9IHRwW3RwX2luZGV4X3RfMyArIDJdICsgKC8qIChpbnQpICovYiAmIGluZmxhdGVfbWFza1tlXSk7XG5cblx0XHRcdFx0XHRcdGIgPj49IGU7XG5cdFx0XHRcdFx0XHRrIC09IGU7XG5cblx0XHRcdFx0XHRcdC8vIGRlY29kZSBkaXN0YW5jZSBiYXNlIG9mIGJsb2NrIHRvIGNvcHlcblx0XHRcdFx0XHRcdHdoaWxlIChrIDwgKDE1KSkgeyAvLyBtYXggYml0cyBmb3IgZGlzdGFuY2UgY29kZVxuXHRcdFx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHQgPSBiICYgbWQ7XG5cdFx0XHRcdFx0XHR0cCA9IHRkO1xuXHRcdFx0XHRcdFx0dHBfaW5kZXggPSB0ZF9pbmRleDtcblx0XHRcdFx0XHRcdHRwX2luZGV4X3RfMyA9ICh0cF9pbmRleCArIHQpICogMztcblx0XHRcdFx0XHRcdGUgPSB0cFt0cF9pbmRleF90XzNdO1xuXG5cdFx0XHRcdFx0XHRkbyB7XG5cblx0XHRcdFx0XHRcdFx0YiA+Pj0gKHRwW3RwX2luZGV4X3RfMyArIDFdKTtcblx0XHRcdFx0XHRcdFx0ayAtPSAodHBbdHBfaW5kZXhfdF8zICsgMV0pO1xuXG5cdFx0XHRcdFx0XHRcdGlmICgoZSAmIDE2KSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGdldCBleHRyYSBiaXRzIHRvIGFkZCB0byBkaXN0YW5jZSBiYXNlXG5cdFx0XHRcdFx0XHRcdFx0ZSAmPSAxNTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoayA8IChlKSkgeyAvLyBnZXQgZXh0cmEgYml0cyAodXAgdG8gMTMpXG5cdFx0XHRcdFx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRkID0gdHBbdHBfaW5kZXhfdF8zICsgMl0gKyAoYiAmIGluZmxhdGVfbWFza1tlXSk7XG5cblx0XHRcdFx0XHRcdFx0XHRiID4+PSAoZSk7XG5cdFx0XHRcdFx0XHRcdFx0ayAtPSAoZSk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBkbyB0aGUgY29weVxuXHRcdFx0XHRcdFx0XHRcdG0gLT0gYztcblx0XHRcdFx0XHRcdFx0XHRpZiAocSA+PSBkKSB7IC8vIG9mZnNldCBiZWZvcmUgZGVzdFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8ganVzdCBjb3B5XG5cdFx0XHRcdFx0XHRcdFx0XHRyID0gcSAtIGQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocSAtIHIgPiAwICYmIDIgPiAocSAtIHIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMud2luZG93W3ErK10gPSBzLndpbmRvd1tyKytdOyAvLyBtaW5pbXVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvdW50IGlzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRocmVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzLndpbmRvd1txKytdID0gcy53aW5kb3dbcisrXTsgLy8gc28gdW5yb2xsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGxvb3AgYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBsaXR0bGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0YyAtPSAyO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cy53aW5kb3cuc2V0KHMud2luZG93LnN1YmFycmF5KHIsIHIgKyAyKSwgcSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHEgKz0gMjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ciArPSAyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjIC09IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHsgLy8gZWxzZSBvZmZzZXQgYWZ0ZXIgZGVzdGluYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdHIgPSBxIC0gZDtcblx0XHRcdFx0XHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ciArPSBzLmVuZDsgLy8gZm9yY2UgcG9pbnRlciBpbiB3aW5kb3dcblx0XHRcdFx0XHRcdFx0XHRcdH0gd2hpbGUgKHIgPCAwKTsgLy8gY292ZXJzIGludmFsaWQgZGlzdGFuY2VzXG5cdFx0XHRcdFx0XHRcdFx0XHRlID0gcy5lbmQgLSByO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGMgPiBlKSB7IC8vIGlmIHNvdXJjZSBjcm9zc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjIC09IGU7IC8vIHdyYXBwZWQgY29weVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocSAtIHIgPiAwICYmIGUgPiAocSAtIHIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy53aW5kb3dbcSsrXSA9IHMud2luZG93W3IrK107XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSB3aGlsZSAoLS1lICE9PSAwKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzLndpbmRvdy5zZXQocy53aW5kb3cuc3ViYXJyYXkociwgciArIGUpLCBxKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRxICs9IGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ciArPSBlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHIgPSAwOyAvLyBjb3B5IHJlc3QgZnJvbSBzdGFydCBvZiB3aW5kb3dcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvcHkgYWxsIG9yIHdoYXQncyBsZWZ0XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHEgLSByID4gMCAmJiBjID4gKHEgLSByKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzLndpbmRvd1txKytdID0gcy53aW5kb3dbcisrXTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gd2hpbGUgKC0tYyAhPT0gMCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHMud2luZG93LnNldChzLndpbmRvdy5zdWJhcnJheShyLCByICsgYyksIHEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cSArPSBjO1xuXHRcdFx0XHRcdFx0XHRcdFx0ciArPSBjO1xuXHRcdFx0XHRcdFx0XHRcdFx0YyA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChlICYgNjQpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0dCArPSB0cFt0cF9pbmRleF90XzMgKyAyXTtcblx0XHRcdFx0XHRcdFx0XHR0ICs9IChiICYgaW5mbGF0ZV9tYXNrW2VdKTtcblx0XHRcdFx0XHRcdFx0XHR0cF9pbmRleF90XzMgPSAodHBfaW5kZXggKyB0KSAqIDM7XG5cdFx0XHRcdFx0XHRcdFx0ZSA9IHRwW3RwX2luZGV4X3RfM107XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgZGlzdGFuY2UgY29kZVwiO1xuXG5cdFx0XHRcdFx0XHRcdFx0YyA9IHouYXZhaWxfaW4gLSBuO1xuXHRcdFx0XHRcdFx0XHRcdGMgPSAoayA+PiAzKSA8IGMgPyBrID4+IDMgOiBjO1xuXHRcdFx0XHRcdFx0XHRcdG4gKz0gYztcblx0XHRcdFx0XHRcdFx0XHRwIC09IGM7XG5cdFx0XHRcdFx0XHRcdFx0ayAtPSBjIDw8IDM7XG5cblx0XHRcdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IHdoaWxlICh0cnVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgoZSAmIDY0KSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0dCArPSB0cFt0cF9pbmRleF90XzMgKyAyXTtcblx0XHRcdFx0XHRcdHQgKz0gKGIgJiBpbmZsYXRlX21hc2tbZV0pO1xuXHRcdFx0XHRcdFx0dHBfaW5kZXhfdF8zID0gKHRwX2luZGV4ICsgdCkgKiAzO1xuXHRcdFx0XHRcdFx0aWYgKChlID0gdHBbdHBfaW5kZXhfdF8zXSkgPT09IDApIHtcblxuXHRcdFx0XHRcdFx0XHRiID4+PSAodHBbdHBfaW5kZXhfdF8zICsgMV0pO1xuXHRcdFx0XHRcdFx0XHRrIC09ICh0cFt0cF9pbmRleF90XzMgKyAxXSk7XG5cblx0XHRcdFx0XHRcdFx0cy53aW5kb3dbcSsrXSA9IC8qIChieXRlKSAqL3RwW3RwX2luZGV4X3RfMyArIDJdO1xuXHRcdFx0XHRcdFx0XHRtLS07XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoKGUgJiAzMikgIT09IDApIHtcblxuXHRcdFx0XHRcdFx0YyA9IHouYXZhaWxfaW4gLSBuO1xuXHRcdFx0XHRcdFx0YyA9IChrID4+IDMpIDwgYyA/IGsgPj4gMyA6IGM7XG5cdFx0XHRcdFx0XHRuICs9IGM7XG5cdFx0XHRcdFx0XHRwIC09IGM7XG5cdFx0XHRcdFx0XHRrIC09IGMgPDwgMztcblxuXHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VORDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiO1xuXG5cdFx0XHRcdFx0XHRjID0gei5hdmFpbF9pbiAtIG47XG5cdFx0XHRcdFx0XHRjID0gKGsgPj4gMykgPCBjID8gayA+PiAzIDogYztcblx0XHRcdFx0XHRcdG4gKz0gYztcblx0XHRcdFx0XHRcdHAgLT0gYztcblx0XHRcdFx0XHRcdGsgLT0gYyA8PCAzO1xuXG5cdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAodHJ1ZSk7XG5cdFx0XHR9IHdoaWxlIChtID49IDI1OCAmJiBuID49IDEwKTtcblxuXHRcdFx0Ly8gbm90IGVub3VnaCBpbnB1dCBvciBvdXRwdXQtLXJlc3RvcmUgcG9pbnRlcnMgYW5kIHJldHVyblxuXHRcdFx0YyA9IHouYXZhaWxfaW4gLSBuO1xuXHRcdFx0YyA9IChrID4+IDMpIDwgYyA/IGsgPj4gMyA6IGM7XG5cdFx0XHRuICs9IGM7XG5cdFx0XHRwIC09IGM7XG5cdFx0XHRrIC09IGMgPDwgMztcblxuXHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRzLndyaXRlID0gcTtcblxuXHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0fVxuXG5cdFx0dGhhdC5pbml0ID0gZnVuY3Rpb24oYmwsIGJkLCB0bCwgdGxfaW5kZXgsIHRkLCB0ZF9pbmRleCkge1xuXHRcdFx0bW9kZSA9IFNUQVJUO1xuXHRcdFx0bGJpdHMgPSAvKiAoYnl0ZSkgKi9ibDtcblx0XHRcdGRiaXRzID0gLyogKGJ5dGUpICovYmQ7XG5cdFx0XHRsdHJlZSA9IHRsO1xuXHRcdFx0bHRyZWVfaW5kZXggPSB0bF9pbmRleDtcblx0XHRcdGR0cmVlID0gdGQ7XG5cdFx0XHRkdHJlZV9pbmRleCA9IHRkX2luZGV4O1xuXHRcdFx0dHJlZSA9IG51bGw7XG5cdFx0fTtcblxuXHRcdHRoYXQucHJvYyA9IGZ1bmN0aW9uKHMsIHosIHIpIHtcblx0XHRcdHZhciBqOyAvLyB0ZW1wb3Jhcnkgc3RvcmFnZVxuXHRcdFx0dmFyIHRpbmRleDsgLy8gdGVtcG9yYXJ5IHBvaW50ZXJcblx0XHRcdHZhciBlOyAvLyBleHRyYSBiaXRzIG9yIG9wZXJhdGlvblxuXHRcdFx0dmFyIGIgPSAwOyAvLyBiaXQgYnVmZmVyXG5cdFx0XHR2YXIgayA9IDA7IC8vIGJpdHMgaW4gYml0IGJ1ZmZlclxuXHRcdFx0dmFyIHAgPSAwOyAvLyBpbnB1dCBkYXRhIHBvaW50ZXJcblx0XHRcdHZhciBuOyAvLyBieXRlcyBhdmFpbGFibGUgdGhlcmVcblx0XHRcdHZhciBxOyAvLyBvdXRwdXQgd2luZG93IHdyaXRlIHBvaW50ZXJcblx0XHRcdHZhciBtOyAvLyBieXRlcyB0byBlbmQgb2Ygd2luZG93IG9yIHJlYWQgcG9pbnRlclxuXHRcdFx0dmFyIGY7IC8vIHBvaW50ZXIgdG8gY29weSBzdHJpbmdzIGZyb21cblxuXHRcdFx0Ly8gY29weSBpbnB1dC9vdXRwdXQgaW5mb3JtYXRpb24gdG8gbG9jYWxzIChVUERBVEUgbWFjcm8gcmVzdG9yZXMpXG5cdFx0XHRwID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0biA9IHouYXZhaWxfaW47XG5cdFx0XHRiID0gcy5iaXRiO1xuXHRcdFx0ayA9IHMuYml0aztcblx0XHRcdHEgPSBzLndyaXRlO1xuXHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblxuXHRcdFx0Ly8gcHJvY2VzcyBpbnB1dCBhbmQgb3V0cHV0IGJhc2VkIG9uIGN1cnJlbnQgc3RhdGVcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHQvLyB3YWl0aW5nIGZvciBcImk6XCI9aW5wdXQsIFwibzpcIj1vdXRwdXQsIFwieDpcIj1ub3RoaW5nXG5cdFx0XHRcdGNhc2UgU1RBUlQ6IC8vIHg6IHNldCB1cCBmb3IgTEVOXG5cdFx0XHRcdFx0aWYgKG0gPj0gMjU4ICYmIG4gPj0gMTApIHtcblxuXHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdHIgPSBpbmZsYXRlX2Zhc3QobGJpdHMsIGRiaXRzLCBsdHJlZSwgbHRyZWVfaW5kZXgsIGR0cmVlLCBkdHJlZV9pbmRleCwgcywgeik7XG5cblx0XHRcdFx0XHRcdHAgPSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRuID0gei5hdmFpbF9pbjtcblx0XHRcdFx0XHRcdGIgPSBzLmJpdGI7XG5cdFx0XHRcdFx0XHRrID0gcy5iaXRrO1xuXHRcdFx0XHRcdFx0cSA9IHMud3JpdGU7XG5cdFx0XHRcdFx0XHRtID0gcSA8IHMucmVhZCA/IHMucmVhZCAtIHEgLSAxIDogcy5lbmQgLSBxO1xuXG5cdFx0XHRcdFx0XHRpZiAociAhPSBaX09LKSB7XG5cdFx0XHRcdFx0XHRcdG1vZGUgPSByID09IFpfU1RSRUFNX0VORCA/IFdBU0ggOiBCQURDT0RFO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmVlZCA9IGxiaXRzO1xuXHRcdFx0XHRcdHRyZWUgPSBsdHJlZTtcblx0XHRcdFx0XHR0cmVlX2luZGV4ID0gbHRyZWVfaW5kZXg7XG5cblx0XHRcdFx0XHRtb2RlID0gTEVOO1xuXHRcdFx0XHRjYXNlIExFTjogLy8gaTogZ2V0IGxlbmd0aC9saXRlcmFsL2VvYiBuZXh0XG5cdFx0XHRcdFx0aiA9IG5lZWQ7XG5cblx0XHRcdFx0XHR3aGlsZSAoayA8IChqKSkge1xuXHRcdFx0XHRcdFx0aWYgKG4gIT09IDApXG5cdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aW5kZXggPSAodHJlZV9pbmRleCArIChiICYgaW5mbGF0ZV9tYXNrW2pdKSkgKiAzO1xuXG5cdFx0XHRcdFx0YiA+Pj49ICh0cmVlW3RpbmRleCArIDFdKTtcblx0XHRcdFx0XHRrIC09ICh0cmVlW3RpbmRleCArIDFdKTtcblxuXHRcdFx0XHRcdGUgPSB0cmVlW3RpbmRleF07XG5cblx0XHRcdFx0XHRpZiAoZSA9PT0gMCkgeyAvLyBsaXRlcmFsXG5cdFx0XHRcdFx0XHRsaXQgPSB0cmVlW3RpbmRleCArIDJdO1xuXHRcdFx0XHRcdFx0bW9kZSA9IExJVDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKGUgJiAxNikgIT09IDApIHsgLy8gbGVuZ3RoXG5cdFx0XHRcdFx0XHRnZXQgPSBlICYgMTU7XG5cdFx0XHRcdFx0XHRsZW4gPSB0cmVlW3RpbmRleCArIDJdO1xuXHRcdFx0XHRcdFx0bW9kZSA9IExFTkVYVDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKGUgJiA2NCkgPT09IDApIHsgLy8gbmV4dCB0YWJsZVxuXHRcdFx0XHRcdFx0bmVlZCA9IGU7XG5cdFx0XHRcdFx0XHR0cmVlX2luZGV4ID0gdGluZGV4IC8gMyArIHRyZWVbdGluZGV4ICsgMl07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChlICYgMzIpICE9PSAwKSB7IC8vIGVuZCBvZiBibG9ja1xuXHRcdFx0XHRcdFx0bW9kZSA9IFdBU0g7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kZSA9IEJBRENPREU7IC8vIGludmFsaWQgY29kZVxuXHRcdFx0XHRcdHoubXNnID0gXCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIjtcblx0XHRcdFx0XHRyID0gWl9EQVRBX0VSUk9SO1xuXG5cdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cblx0XHRcdFx0Y2FzZSBMRU5FWFQ6IC8vIGk6IGdldHRpbmcgbGVuZ3RoIGV4dHJhIChoYXZlIGJhc2UpXG5cdFx0XHRcdFx0aiA9IGdldDtcblxuXHRcdFx0XHRcdHdoaWxlIChrIDwgKGopKSB7XG5cdFx0XHRcdFx0XHRpZiAobiAhPT0gMClcblx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHRlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxlbiArPSAoYiAmIGluZmxhdGVfbWFza1tqXSk7XG5cblx0XHRcdFx0XHRiID4+PSBqO1xuXHRcdFx0XHRcdGsgLT0gajtcblxuXHRcdFx0XHRcdG5lZWQgPSBkYml0cztcblx0XHRcdFx0XHR0cmVlID0gZHRyZWU7XG5cdFx0XHRcdFx0dHJlZV9pbmRleCA9IGR0cmVlX2luZGV4O1xuXHRcdFx0XHRcdG1vZGUgPSBESVNUO1xuXHRcdFx0XHRjYXNlIERJU1Q6IC8vIGk6IGdldCBkaXN0YW5jZSBuZXh0XG5cdFx0XHRcdFx0aiA9IG5lZWQ7XG5cblx0XHRcdFx0XHR3aGlsZSAoayA8IChqKSkge1xuXHRcdFx0XHRcdFx0aWYgKG4gIT09IDApXG5cdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aW5kZXggPSAodHJlZV9pbmRleCArIChiICYgaW5mbGF0ZV9tYXNrW2pdKSkgKiAzO1xuXG5cdFx0XHRcdFx0YiA+Pj0gdHJlZVt0aW5kZXggKyAxXTtcblx0XHRcdFx0XHRrIC09IHRyZWVbdGluZGV4ICsgMV07XG5cblx0XHRcdFx0XHRlID0gKHRyZWVbdGluZGV4XSk7XG5cdFx0XHRcdFx0aWYgKChlICYgMTYpICE9PSAwKSB7IC8vIGRpc3RhbmNlXG5cdFx0XHRcdFx0XHRnZXQgPSBlICYgMTU7XG5cdFx0XHRcdFx0XHRkaXN0ID0gdHJlZVt0aW5kZXggKyAyXTtcblx0XHRcdFx0XHRcdG1vZGUgPSBESVNURVhUO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgoZSAmIDY0KSA9PT0gMCkgeyAvLyBuZXh0IHRhYmxlXG5cdFx0XHRcdFx0XHRuZWVkID0gZTtcblx0XHRcdFx0XHRcdHRyZWVfaW5kZXggPSB0aW5kZXggLyAzICsgdHJlZVt0aW5kZXggKyAyXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RlID0gQkFEQ09ERTsgLy8gaW52YWxpZCBjb2RlXG5cdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgZGlzdGFuY2UgY29kZVwiO1xuXHRcdFx0XHRcdHIgPSBaX0RBVEFfRVJST1I7XG5cblx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblxuXHRcdFx0XHRjYXNlIERJU1RFWFQ6IC8vIGk6IGdldHRpbmcgZGlzdGFuY2UgZXh0cmFcblx0XHRcdFx0XHRqID0gZ2V0O1xuXG5cdFx0XHRcdFx0d2hpbGUgKGsgPCAoaikpIHtcblx0XHRcdFx0XHRcdGlmIChuICE9PSAwKVxuXHRcdFx0XHRcdFx0XHRyID0gWl9PSztcblx0XHRcdFx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZGlzdCArPSAoYiAmIGluZmxhdGVfbWFza1tqXSk7XG5cblx0XHRcdFx0XHRiID4+PSBqO1xuXHRcdFx0XHRcdGsgLT0gajtcblxuXHRcdFx0XHRcdG1vZGUgPSBDT1BZO1xuXHRcdFx0XHRjYXNlIENPUFk6IC8vIG86IGNvcHlpbmcgYnl0ZXMgaW4gd2luZG93LCB3YWl0aW5nIGZvciBzcGFjZVxuXHRcdFx0XHRcdGYgPSBxIC0gZGlzdDtcblx0XHRcdFx0XHR3aGlsZSAoZiA8IDApIHsgLy8gbW9kdWxvIHdpbmRvdyBzaXplLVwid2hpbGVcIiBpbnN0ZWFkXG5cdFx0XHRcdFx0XHRmICs9IHMuZW5kOyAvLyBvZiBcImlmXCIgaGFuZGxlcyBpbnZhbGlkIGRpc3RhbmNlc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3aGlsZSAobGVuICE9PSAwKSB7XG5cblx0XHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChxID09IHMuZW5kICYmIHMucmVhZCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHEgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdG0gPSBxIDwgcy5yZWFkID8gcy5yZWFkIC0gcSAtIDEgOiBzLmVuZCAtIHE7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKG0gPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRyID0gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHRcdHEgPSBzLndyaXRlO1xuXHRcdFx0XHRcdFx0XHRcdG0gPSBxIDwgcy5yZWFkID8gcy5yZWFkIC0gcSAtIDEgOiBzLmVuZCAtIHE7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAocSA9PSBzLmVuZCAmJiBzLnJlYWQgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHEgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHMud2luZG93W3ErK10gPSBzLndpbmRvd1tmKytdO1xuXHRcdFx0XHRcdFx0bS0tO1xuXG5cdFx0XHRcdFx0XHRpZiAoZiA9PSBzLmVuZClcblx0XHRcdFx0XHRcdFx0ZiA9IDA7XG5cdFx0XHRcdFx0XHRsZW4tLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kZSA9IFNUQVJUO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIExJVDogLy8gbzogZ290IGxpdGVyYWwsIHdhaXRpbmcgZm9yIG91dHB1dCBzcGFjZVxuXHRcdFx0XHRcdGlmIChtID09PSAwKSB7XG5cdFx0XHRcdFx0XHRpZiAocSA9PSBzLmVuZCAmJiBzLnJlYWQgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0cSA9IDA7XG5cdFx0XHRcdFx0XHRcdG0gPSBxIDwgcy5yZWFkID8gcy5yZWFkIC0gcSAtIDEgOiBzLmVuZCAtIHE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0ciA9IHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdFx0cSA9IHMud3JpdGU7XG5cdFx0XHRcdFx0XHRcdG0gPSBxIDwgcy5yZWFkID8gcy5yZWFkIC0gcSAtIDEgOiBzLmVuZCAtIHE7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHEgPT0gcy5lbmQgJiYgcy5yZWFkICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0bSA9IHEgPCBzLnJlYWQgPyBzLnJlYWQgLSBxIC0gMSA6IHMuZW5kIC0gcTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHIgPSBaX09LO1xuXG5cdFx0XHRcdFx0cy53aW5kb3dbcSsrXSA9IC8qIChieXRlKSAqL2xpdDtcblx0XHRcdFx0XHRtLS07XG5cblx0XHRcdFx0XHRtb2RlID0gU1RBUlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgV0FTSDogLy8gbzogZ290IGVvYiwgcG9zc2libHkgbW9yZSBvdXRwdXRcblx0XHRcdFx0XHRpZiAoayA+IDcpIHsgLy8gcmV0dXJuIHVudXNlZCBieXRlLCBpZiBhbnlcblx0XHRcdFx0XHRcdGsgLT0gODtcblx0XHRcdFx0XHRcdG4rKztcblx0XHRcdFx0XHRcdHAtLTsgLy8gY2FuIGFsd2F5cyByZXR1cm4gb25lXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0ciA9IHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRxID0gcy53cml0ZTtcblx0XHRcdFx0XHRtID0gcSA8IHMucmVhZCA/IHMucmVhZCAtIHEgLSAxIDogcy5lbmQgLSBxO1xuXG5cdFx0XHRcdFx0aWYgKHMucmVhZCAhPSBzLndyaXRlKSB7XG5cdFx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kZSA9IEVORDtcblx0XHRcdFx0Y2FzZSBFTkQ6XG5cdFx0XHRcdFx0ciA9IFpfU1RSRUFNX0VORDtcblx0XHRcdFx0XHRzLmJpdGIgPSBiO1xuXHRcdFx0XHRcdHMuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0cy53cml0ZSA9IHE7XG5cdFx0XHRcdFx0cmV0dXJuIHMuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblxuXHRcdFx0XHRjYXNlIEJBRENPREU6IC8vIHg6IGdvdCBlcnJvclxuXG5cdFx0XHRcdFx0ciA9IFpfREFUQV9FUlJPUjtcblxuXHRcdFx0XHRcdHMuYml0YiA9IGI7XG5cdFx0XHRcdFx0cy5iaXRrID0gaztcblx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRzLndyaXRlID0gcTtcblx0XHRcdFx0XHRyZXR1cm4gcy5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ciA9IFpfU1RSRUFNX0VSUk9SO1xuXG5cdFx0XHRcdFx0cy5iaXRiID0gYjtcblx0XHRcdFx0XHRzLmJpdGsgPSBrO1xuXHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdHMud3JpdGUgPSBxO1xuXHRcdFx0XHRcdHJldHVybiBzLmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhhdC5mcmVlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBaRlJFRSh6LCBjKTtcblx0XHR9O1xuXG5cdH1cblxuXHQvLyBJbmZCbG9ja3NcblxuXHQvLyBUYWJsZSBmb3IgZGVmbGF0ZSBmcm9tIFBLWklQJ3MgYXBwbm90ZS50eHQuXG5cdHZhciBib3JkZXIgPSBbIC8vIE9yZGVyIG9mIHRoZSBiaXQgbGVuZ3RoIGNvZGUgbGVuZ3Roc1xuXHQxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1IF07XG5cblx0dmFyIFRZUEUgPSAwOyAvLyBnZXQgdHlwZSBiaXRzICgzLCBpbmNsdWRpbmcgZW5kIGJpdClcblx0dmFyIExFTlMgPSAxOyAvLyBnZXQgbGVuZ3RocyBmb3Igc3RvcmVkXG5cdHZhciBTVE9SRUQgPSAyOy8vIHByb2Nlc3Npbmcgc3RvcmVkIGJsb2NrXG5cdHZhciBUQUJMRSA9IDM7IC8vIGdldCB0YWJsZSBsZW5ndGhzXG5cdHZhciBCVFJFRSA9IDQ7IC8vIGdldCBiaXQgbGVuZ3RocyB0cmVlIGZvciBhIGR5bmFtaWNcblx0Ly8gYmxvY2tcblx0dmFyIERUUkVFID0gNTsgLy8gZ2V0IGxlbmd0aCwgZGlzdGFuY2UgdHJlZXMgZm9yIGFcblx0Ly8gZHluYW1pYyBibG9ja1xuXHR2YXIgQ09ERVMgPSA2OyAvLyBwcm9jZXNzaW5nIGZpeGVkIG9yIGR5bmFtaWMgYmxvY2tcblx0dmFyIERSWSA9IDc7IC8vIG91dHB1dCByZW1haW5pbmcgd2luZG93IGJ5dGVzXG5cdHZhciBET05FTE9DS1MgPSA4OyAvLyBmaW5pc2hlZCBsYXN0IGJsb2NrLCBkb25lXG5cdHZhciBCQURCTE9DS1MgPSA5OyAvLyBvdCBhIGRhdGEgZXJyb3ItLXN0dWNrIGhlcmVcblxuXHRmdW5jdGlvbiBJbmZCbG9ja3Moeiwgdykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHZhciBtb2RlID0gVFlQRTsgLy8gY3VycmVudCBpbmZsYXRlX2Jsb2NrIG1vZGVcblxuXHRcdHZhciBsZWZ0ID0gMDsgLy8gaWYgU1RPUkVELCBieXRlcyBsZWZ0IHRvIGNvcHlcblxuXHRcdHZhciB0YWJsZSA9IDA7IC8vIHRhYmxlIGxlbmd0aHMgKDE0IGJpdHMpXG5cdFx0dmFyIGluZGV4ID0gMDsgLy8gaW5kZXggaW50byBibGVucyAob3IgYm9yZGVyKVxuXHRcdHZhciBibGVuczsgLy8gYml0IGxlbmd0aHMgb2YgY29kZXNcblx0XHR2YXIgYmIgPSBbIDAgXTsgLy8gYml0IGxlbmd0aCB0cmVlIGRlcHRoXG5cdFx0dmFyIHRiID0gWyAwIF07IC8vIGJpdCBsZW5ndGggZGVjb2RpbmcgdHJlZVxuXG5cdFx0dmFyIGNvZGVzID0gbmV3IEluZkNvZGVzKCk7IC8vIGlmIENPREVTLCBjdXJyZW50IHN0YXRlXG5cblx0XHR2YXIgbGFzdCA9IDA7IC8vIHRydWUgaWYgdGhpcyBibG9jayBpcyB0aGUgbGFzdCBibG9ja1xuXG5cdFx0dmFyIGh1ZnRzID0gbmV3IEludDMyQXJyYXkoTUFOWSAqIDMpOyAvLyBzaW5nbGUgbWFsbG9jIGZvciB0cmVlIHNwYWNlXG5cdFx0dmFyIGNoZWNrID0gMDsgLy8gY2hlY2sgb24gb3V0cHV0XG5cdFx0dmFyIGluZnRyZWUgPSBuZXcgSW5mVHJlZSgpO1xuXG5cdFx0dGhhdC5iaXRrID0gMDsgLy8gYml0cyBpbiBiaXQgYnVmZmVyXG5cdFx0dGhhdC5iaXRiID0gMDsgLy8gYml0IGJ1ZmZlclxuXHRcdHRoYXQud2luZG93ID0gbmV3IFVpbnQ4QXJyYXkodyk7IC8vIHNsaWRpbmcgd2luZG93XG5cdFx0dGhhdC5lbmQgPSB3OyAvLyBvbmUgYnl0ZSBhZnRlciBzbGlkaW5nIHdpbmRvd1xuXHRcdHRoYXQucmVhZCA9IDA7IC8vIHdpbmRvdyByZWFkIHBvaW50ZXJcblx0XHR0aGF0LndyaXRlID0gMDsgLy8gd2luZG93IHdyaXRlIHBvaW50ZXJcblxuXHRcdHRoYXQucmVzZXQgPSBmdW5jdGlvbih6LCBjKSB7XG5cdFx0XHRpZiAoYylcblx0XHRcdFx0Y1swXSA9IGNoZWNrO1xuXHRcdFx0Ly8gaWYgKG1vZGUgPT0gQlRSRUUgfHwgbW9kZSA9PSBEVFJFRSkge1xuXHRcdFx0Ly8gfVxuXHRcdFx0aWYgKG1vZGUgPT0gQ09ERVMpIHtcblx0XHRcdFx0Y29kZXMuZnJlZSh6KTtcblx0XHRcdH1cblx0XHRcdG1vZGUgPSBUWVBFO1xuXHRcdFx0dGhhdC5iaXRrID0gMDtcblx0XHRcdHRoYXQuYml0YiA9IDA7XG5cdFx0XHR0aGF0LnJlYWQgPSB0aGF0LndyaXRlID0gMDtcblx0XHR9O1xuXG5cdFx0dGhhdC5yZXNldCh6LCBudWxsKTtcblxuXHRcdC8vIGNvcHkgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBzbGlkaW5nIHdpbmRvdyB0byB0aGUgb3V0cHV0IGFyZWFcblx0XHR0aGF0LmluZmxhdGVfZmx1c2ggPSBmdW5jdGlvbih6LCByKSB7XG5cdFx0XHR2YXIgbjtcblx0XHRcdHZhciBwO1xuXHRcdFx0dmFyIHE7XG5cblx0XHRcdC8vIGxvY2FsIGNvcGllcyBvZiBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHBvaW50ZXJzXG5cdFx0XHRwID0gei5uZXh0X291dF9pbmRleDtcblx0XHRcdHEgPSB0aGF0LnJlYWQ7XG5cblx0XHRcdC8vIGNvbXB1dGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGNvcHkgYXMgZmFyIGFzIGVuZCBvZiB3aW5kb3dcblx0XHRcdG4gPSAvKiAoaW50KSAqLygocSA8PSB0aGF0LndyaXRlID8gdGhhdC53cml0ZSA6IHRoYXQuZW5kKSAtIHEpO1xuXHRcdFx0aWYgKG4gPiB6LmF2YWlsX291dClcblx0XHRcdFx0biA9IHouYXZhaWxfb3V0O1xuXHRcdFx0aWYgKG4gIT09IDAgJiYgciA9PSBaX0JVRl9FUlJPUilcblx0XHRcdFx0ciA9IFpfT0s7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb3VudGVyc1xuXHRcdFx0ei5hdmFpbF9vdXQgLT0gbjtcblx0XHRcdHoudG90YWxfb3V0ICs9IG47XG5cblx0XHRcdC8vIGNvcHkgYXMgZmFyIGFzIGVuZCBvZiB3aW5kb3dcblx0XHRcdHoubmV4dF9vdXQuc2V0KHRoYXQud2luZG93LnN1YmFycmF5KHEsIHEgKyBuKSwgcCk7XG5cdFx0XHRwICs9IG47XG5cdFx0XHRxICs9IG47XG5cblx0XHRcdC8vIHNlZSBpZiBtb3JlIHRvIGNvcHkgYXQgYmVnaW5uaW5nIG9mIHdpbmRvd1xuXHRcdFx0aWYgKHEgPT0gdGhhdC5lbmQpIHtcblx0XHRcdFx0Ly8gd3JhcCBwb2ludGVyc1xuXHRcdFx0XHRxID0gMDtcblx0XHRcdFx0aWYgKHRoYXQud3JpdGUgPT0gdGhhdC5lbmQpXG5cdFx0XHRcdFx0dGhhdC53cml0ZSA9IDA7XG5cblx0XHRcdFx0Ly8gY29tcHV0ZSBieXRlcyB0byBjb3B5XG5cdFx0XHRcdG4gPSB0aGF0LndyaXRlIC0gcTtcblx0XHRcdFx0aWYgKG4gPiB6LmF2YWlsX291dClcblx0XHRcdFx0XHRuID0gei5hdmFpbF9vdXQ7XG5cdFx0XHRcdGlmIChuICE9PSAwICYmIHIgPT0gWl9CVUZfRVJST1IpXG5cdFx0XHRcdFx0ciA9IFpfT0s7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGNvdW50ZXJzXG5cdFx0XHRcdHouYXZhaWxfb3V0IC09IG47XG5cdFx0XHRcdHoudG90YWxfb3V0ICs9IG47XG5cblx0XHRcdFx0Ly8gY29weVxuXHRcdFx0XHR6Lm5leHRfb3V0LnNldCh0aGF0LndpbmRvdy5zdWJhcnJheShxLCBxICsgbiksIHApO1xuXHRcdFx0XHRwICs9IG47XG5cdFx0XHRcdHEgKz0gbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gdXBkYXRlIHBvaW50ZXJzXG5cdFx0XHR6Lm5leHRfb3V0X2luZGV4ID0gcDtcblx0XHRcdHRoYXQucmVhZCA9IHE7XG5cblx0XHRcdC8vIGRvbmVcblx0XHRcdHJldHVybiByO1xuXHRcdH07XG5cblx0XHR0aGF0LnByb2MgPSBmdW5jdGlvbih6LCByKSB7XG5cdFx0XHR2YXIgdDsgLy8gdGVtcG9yYXJ5IHN0b3JhZ2Vcblx0XHRcdHZhciBiOyAvLyBiaXQgYnVmZmVyXG5cdFx0XHR2YXIgazsgLy8gYml0cyBpbiBiaXQgYnVmZmVyXG5cdFx0XHR2YXIgcDsgLy8gaW5wdXQgZGF0YSBwb2ludGVyXG5cdFx0XHR2YXIgbjsgLy8gYnl0ZXMgYXZhaWxhYmxlIHRoZXJlXG5cdFx0XHR2YXIgcTsgLy8gb3V0cHV0IHdpbmRvdyB3cml0ZSBwb2ludGVyXG5cdFx0XHR2YXIgbTsgLy8gYnl0ZXMgdG8gZW5kIG9mIHdpbmRvdyBvciByZWFkIHBvaW50ZXJcblxuXHRcdFx0dmFyIGk7XG5cblx0XHRcdC8vIGNvcHkgaW5wdXQvb3V0cHV0IGluZm9ybWF0aW9uIHRvIGxvY2FscyAoVVBEQVRFIG1hY3JvIHJlc3RvcmVzKVxuXHRcdFx0Ly8ge1xuXHRcdFx0cCA9IHoubmV4dF9pbl9pbmRleDtcblx0XHRcdG4gPSB6LmF2YWlsX2luO1xuXHRcdFx0YiA9IHRoYXQuYml0Yjtcblx0XHRcdGsgPSB0aGF0LmJpdGs7XG5cdFx0XHQvLyB9XG5cdFx0XHQvLyB7XG5cdFx0XHRxID0gdGhhdC53cml0ZTtcblx0XHRcdG0gPSAvKiAoaW50KSAqLyhxIDwgdGhhdC5yZWFkID8gdGhhdC5yZWFkIC0gcSAtIDEgOiB0aGF0LmVuZCAtIHEpO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHQvLyBwcm9jZXNzIGlucHV0IGJhc2VkIG9uIGN1cnJlbnQgc3RhdGVcblx0XHRcdC8vIERFQlVHIGR0cmVlXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSBUWVBFOlxuXG5cdFx0XHRcdFx0d2hpbGUgKGsgPCAoMykpIHtcblx0XHRcdFx0XHRcdGlmIChuICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRuLS07XG5cdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dCA9IC8qIChpbnQpICovKGIgJiA3KTtcblx0XHRcdFx0XHRsYXN0ID0gdCAmIDE7XG5cblx0XHRcdFx0XHRzd2l0Y2ggKHQgPj4+IDEpIHtcblx0XHRcdFx0XHRjYXNlIDA6IC8vIHN0b3JlZFxuXHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0YiA+Pj49ICgzKTtcblx0XHRcdFx0XHRcdGsgLT0gKDMpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0dCA9IGsgJiA3OyAvLyBnbyB0byBieXRlIGJvdW5kYXJ5XG5cblx0XHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHRcdGIgPj4+PSAodCk7XG5cdFx0XHRcdFx0XHRrIC09ICh0KTtcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdG1vZGUgPSBMRU5TOyAvLyBnZXQgbGVuZ3RoIG9mIHN0b3JlZCBibG9ja1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxOiAvLyBmaXhlZFxuXHRcdFx0XHRcdFx0Ly8ge1xuXHRcdFx0XHRcdFx0dmFyIGJsID0gW107IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHRcdHZhciBiZCA9IFtdOyAvLyBuZXcgQXJyYXkoMSk7XG5cdFx0XHRcdFx0XHR2YXIgdGwgPSBbIFtdIF07IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHRcdHZhciB0ZCA9IFsgW10gXTsgLy8gbmV3IEFycmF5KDEpO1xuXG5cdFx0XHRcdFx0XHRJbmZUcmVlLmluZmxhdGVfdHJlZXNfZml4ZWQoYmwsIGJkLCB0bCwgdGQpO1xuXHRcdFx0XHRcdFx0Y29kZXMuaW5pdChibFswXSwgYmRbMF0sIHRsWzBdLCAwLCB0ZFswXSwgMCk7XG5cdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHRcdGIgPj4+PSAoMyk7XG5cdFx0XHRcdFx0XHRrIC09ICgzKTtcblx0XHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdFx0bW9kZSA9IENPREVTO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOiAvLyBkeW5hbWljXG5cblx0XHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHRcdGIgPj4+PSAoMyk7XG5cdFx0XHRcdFx0XHRrIC09ICgzKTtcblx0XHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdFx0bW9kZSA9IFRBQkxFO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAzOiAvLyBpbGxlZ2FsXG5cblx0XHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHRcdGIgPj4+PSAoMyk7XG5cdFx0XHRcdFx0XHRrIC09ICgzKTtcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdG1vZGUgPSBCQURCTE9DS1M7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwiaW52YWxpZCBibG9jayB0eXBlXCI7XG5cdFx0XHRcdFx0XHRyID0gWl9EQVRBX0VSUk9SO1xuXG5cdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgTEVOUzpcblxuXHRcdFx0XHRcdHdoaWxlIChrIDwgKDMyKSkge1xuXHRcdFx0XHRcdFx0aWYgKG4gIT09IDApIHtcblx0XHRcdFx0XHRcdFx0ciA9IFpfT0s7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgoKCh+YikgPj4+IDE2KSAmIDB4ZmZmZikgIT0gKGIgJiAweGZmZmYpKSB7XG5cdFx0XHRcdFx0XHRtb2RlID0gQkFEQkxPQ0tTO1xuXHRcdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgc3RvcmVkIGJsb2NrIGxlbmd0aHNcIjtcblx0XHRcdFx0XHRcdHIgPSBaX0RBVEFfRVJST1I7XG5cblx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZWZ0ID0gKGIgJiAweGZmZmYpO1xuXHRcdFx0XHRcdGIgPSBrID0gMDsgLy8gZHVtcCBiaXRzXG5cdFx0XHRcdFx0bW9kZSA9IGxlZnQgIT09IDAgPyBTVE9SRUQgOiAobGFzdCAhPT0gMCA/IERSWSA6IFRZUEUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNUT1JFRDpcblx0XHRcdFx0XHRpZiAobiA9PT0gMCkge1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKG0gPT09IDApIHtcblx0XHRcdFx0XHRcdGlmIChxID09IHRoYXQuZW5kICYmIHRoYXQucmVhZCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRxID0gMDtcblx0XHRcdFx0XHRcdFx0bSA9IC8qIChpbnQpICovKHEgPCB0aGF0LnJlYWQgPyB0aGF0LnJlYWQgLSBxIC0gMSA6IHRoYXQuZW5kIC0gcSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0ciA9IHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHRcdFx0cSA9IHRoYXQud3JpdGU7XG5cdFx0XHRcdFx0XHRcdG0gPSAvKiAoaW50KSAqLyhxIDwgdGhhdC5yZWFkID8gdGhhdC5yZWFkIC0gcSAtIDEgOiB0aGF0LmVuZCAtIHEpO1xuXHRcdFx0XHRcdFx0XHRpZiAocSA9PSB0aGF0LmVuZCAmJiB0aGF0LnJlYWQgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRxID0gMDtcblx0XHRcdFx0XHRcdFx0XHRtID0gLyogKGludCkgKi8ocSA8IHRoYXQucmVhZCA/IHRoYXQucmVhZCAtIHEgLSAxIDogdGhhdC5lbmQgLSBxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHIgPSBaX09LO1xuXG5cdFx0XHRcdFx0dCA9IGxlZnQ7XG5cdFx0XHRcdFx0aWYgKHQgPiBuKVxuXHRcdFx0XHRcdFx0dCA9IG47XG5cdFx0XHRcdFx0aWYgKHQgPiBtKVxuXHRcdFx0XHRcdFx0dCA9IG07XG5cdFx0XHRcdFx0dGhhdC53aW5kb3cuc2V0KHoucmVhZF9idWYocCwgdCksIHEpO1xuXHRcdFx0XHRcdHAgKz0gdDtcblx0XHRcdFx0XHRuIC09IHQ7XG5cdFx0XHRcdFx0cSArPSB0O1xuXHRcdFx0XHRcdG0gLT0gdDtcblx0XHRcdFx0XHRpZiAoKGxlZnQgLT0gdCkgIT09IDApXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRtb2RlID0gbGFzdCAhPT0gMCA/IERSWSA6IFRZUEU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgVEFCTEU6XG5cblx0XHRcdFx0XHR3aGlsZSAoayA8ICgxNCkpIHtcblx0XHRcdFx0XHRcdGlmIChuICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdGIgfD0gKHoucmVhZF9ieXRlKHArKykgJiAweGZmKSA8PCBrO1xuXHRcdFx0XHRcdFx0ayArPSA4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRhYmxlID0gdCA9IChiICYgMHgzZmZmKTtcblx0XHRcdFx0XHRpZiAoKHQgJiAweDFmKSA+IDI5IHx8ICgodCA+PiA1KSAmIDB4MWYpID4gMjkpIHtcblx0XHRcdFx0XHRcdG1vZGUgPSBCQURCTE9DS1M7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwidG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHNcIjtcblx0XHRcdFx0XHRcdHIgPSBaX0RBVEFfRVJST1I7XG5cblx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0ID0gMjU4ICsgKHQgJiAweDFmKSArICgodCA+PiA1KSAmIDB4MWYpO1xuXHRcdFx0XHRcdGlmICghYmxlbnMgfHwgYmxlbnMubGVuZ3RoIDwgdCkge1xuXHRcdFx0XHRcdFx0YmxlbnMgPSBbXTsgLy8gbmV3IEFycmF5KHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGJsZW5zW2ldID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyB7XG5cdFx0XHRcdFx0YiA+Pj49ICgxNCk7XG5cdFx0XHRcdFx0ayAtPSAoMTQpO1xuXHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdFx0XHRtb2RlID0gQlRSRUU7XG5cdFx0XHRcdGNhc2UgQlRSRUU6XG5cdFx0XHRcdFx0d2hpbGUgKGluZGV4IDwgNCArICh0YWJsZSA+Pj4gMTApKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoayA8ICgzKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAobiAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YmxlbnNbYm9yZGVyW2luZGV4KytdXSA9IGIgJiA3O1xuXG5cdFx0XHRcdFx0XHQvLyB7XG5cdFx0XHRcdFx0XHRiID4+Pj0gKDMpO1xuXHRcdFx0XHRcdFx0ayAtPSAoMyk7XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2hpbGUgKGluZGV4IDwgMTkpIHtcblx0XHRcdFx0XHRcdGJsZW5zW2JvcmRlcltpbmRleCsrXV0gPSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJiWzBdID0gNztcblx0XHRcdFx0XHR0ID0gaW5mdHJlZS5pbmZsYXRlX3RyZWVzX2JpdHMoYmxlbnMsIGJiLCB0YiwgaHVmdHMsIHopO1xuXHRcdFx0XHRcdGlmICh0ICE9IFpfT0spIHtcblx0XHRcdFx0XHRcdHIgPSB0O1xuXHRcdFx0XHRcdFx0aWYgKHIgPT0gWl9EQVRBX0VSUk9SKSB7XG5cdFx0XHRcdFx0XHRcdGJsZW5zID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0bW9kZSA9IEJBREJMT0NLUztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aW5kZXggPSAwO1xuXHRcdFx0XHRcdG1vZGUgPSBEVFJFRTtcblx0XHRcdFx0Y2FzZSBEVFJFRTpcblx0XHRcdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRcdFx0dCA9IHRhYmxlO1xuXHRcdFx0XHRcdFx0aWYgKCEoaW5kZXggPCAyNTggKyAodCAmIDB4MWYpICsgKCh0ID4+IDUpICYgMHgxZikpKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgaiwgYztcblxuXHRcdFx0XHRcdFx0dCA9IGJiWzBdO1xuXG5cdFx0XHRcdFx0XHR3aGlsZSAoayA8ICh0KSkge1xuXHRcdFx0XHRcdFx0XHRpZiAobiAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdFx0YiB8PSAoei5yZWFkX2J5dGUocCsrKSAmIDB4ZmYpIDw8IGs7XG5cdFx0XHRcdFx0XHRcdGsgKz0gODtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gaWYgKHRiWzBdID09IC0xKSB7XG5cdFx0XHRcdFx0XHQvLyBTeXN0ZW0uZXJyLnByaW50bG4oXCJudWxsLi4uXCIpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0XHR0ID0gaHVmdHNbKHRiWzBdICsgKGIgJiBpbmZsYXRlX21hc2tbdF0pKSAqIDMgKyAxXTtcblx0XHRcdFx0XHRcdGMgPSBodWZ0c1sodGJbMF0gKyAoYiAmIGluZmxhdGVfbWFza1t0XSkpICogMyArIDJdO1xuXG5cdFx0XHRcdFx0XHRpZiAoYyA8IDE2KSB7XG5cdFx0XHRcdFx0XHRcdGIgPj4+PSAodCk7XG5cdFx0XHRcdFx0XHRcdGsgLT0gKHQpO1xuXHRcdFx0XHRcdFx0XHRibGVuc1tpbmRleCsrXSA9IGM7XG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAvLyBjID09IDE2Li4xOFxuXHRcdFx0XHRcdFx0XHRpID0gYyA9PSAxOCA/IDcgOiBjIC0gMTQ7XG5cdFx0XHRcdFx0XHRcdGogPSBjID09IDE4ID8gMTEgOiAzO1xuXG5cdFx0XHRcdFx0XHRcdHdoaWxlIChrIDwgKHQgKyBpKSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChuICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyID0gWl9PSztcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG4tLTtcblx0XHRcdFx0XHRcdFx0XHRiIHw9ICh6LnJlYWRfYnl0ZShwKyspICYgMHhmZikgPDwgaztcblx0XHRcdFx0XHRcdFx0XHRrICs9IDg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRiID4+Pj0gKHQpO1xuXHRcdFx0XHRcdFx0XHRrIC09ICh0KTtcblxuXHRcdFx0XHRcdFx0XHRqICs9IChiICYgaW5mbGF0ZV9tYXNrW2ldKTtcblxuXHRcdFx0XHRcdFx0XHRiID4+Pj0gKGkpO1xuXHRcdFx0XHRcdFx0XHRrIC09IChpKTtcblxuXHRcdFx0XHRcdFx0XHRpID0gaW5kZXg7XG5cdFx0XHRcdFx0XHRcdHQgPSB0YWJsZTtcblx0XHRcdFx0XHRcdFx0aWYgKGkgKyBqID4gMjU4ICsgKHQgJiAweDFmKSArICgodCA+PiA1KSAmIDB4MWYpIHx8IChjID09IDE2ICYmIGkgPCAxKSkge1xuXHRcdFx0XHRcdFx0XHRcdGJsZW5zID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHRtb2RlID0gQkFEQkxPQ0tTO1xuXHRcdFx0XHRcdFx0XHRcdHoubXNnID0gXCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCI7XG5cdFx0XHRcdFx0XHRcdFx0ciA9IFpfREFUQV9FUlJPUjtcblxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0YyA9IGMgPT0gMTYgPyBibGVuc1tpIC0gMV0gOiAwO1xuXHRcdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdFx0YmxlbnNbaSsrXSA9IGM7XG5cdFx0XHRcdFx0XHRcdH0gd2hpbGUgKC0taiAhPT0gMCk7XG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gaTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0YlswXSA9IC0xO1xuXHRcdFx0XHRcdC8vIHtcblx0XHRcdFx0XHR2YXIgYmxfID0gW107IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHR2YXIgYmRfID0gW107IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHR2YXIgdGxfID0gW107IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHR2YXIgdGRfID0gW107IC8vIG5ldyBBcnJheSgxKTtcblx0XHRcdFx0XHRibF9bMF0gPSA5OyAvLyBtdXN0IGJlIDw9IDkgZm9yIGxvb2thaGVhZCBhc3N1bXB0aW9uc1xuXHRcdFx0XHRcdGJkX1swXSA9IDY7IC8vIG11c3QgYmUgPD0gOSBmb3IgbG9va2FoZWFkIGFzc3VtcHRpb25zXG5cblx0XHRcdFx0XHR0ID0gdGFibGU7XG5cdFx0XHRcdFx0dCA9IGluZnRyZWUuaW5mbGF0ZV90cmVlc19keW5hbWljKDI1NyArICh0ICYgMHgxZiksIDEgKyAoKHQgPj4gNSkgJiAweDFmKSwgYmxlbnMsIGJsXywgYmRfLCB0bF8sIHRkXywgaHVmdHMsIHopO1xuXG5cdFx0XHRcdFx0aWYgKHQgIT0gWl9PSykge1xuXHRcdFx0XHRcdFx0aWYgKHQgPT0gWl9EQVRBX0VSUk9SKSB7XG5cdFx0XHRcdFx0XHRcdGJsZW5zID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0bW9kZSA9IEJBREJMT0NLUztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHIgPSB0O1xuXG5cdFx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29kZXMuaW5pdChibF9bMF0sIGJkX1swXSwgaHVmdHMsIHRsX1swXSwgaHVmdHMsIHRkX1swXSk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdG1vZGUgPSBDT0RFUztcblx0XHRcdFx0Y2FzZSBDT0RFUzpcblx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cblx0XHRcdFx0XHRpZiAoKHIgPSBjb2Rlcy5wcm9jKHRoYXQsIHosIHIpKSAhPSBaX1NUUkVBTV9FTkQpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHIgPSBaX09LO1xuXHRcdFx0XHRcdGNvZGVzLmZyZWUoeik7XG5cblx0XHRcdFx0XHRwID0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdG4gPSB6LmF2YWlsX2luO1xuXHRcdFx0XHRcdGIgPSB0aGF0LmJpdGI7XG5cdFx0XHRcdFx0ayA9IHRoYXQuYml0aztcblx0XHRcdFx0XHRxID0gdGhhdC53cml0ZTtcblx0XHRcdFx0XHRtID0gLyogKGludCkgKi8ocSA8IHRoYXQucmVhZCA/IHRoYXQucmVhZCAtIHEgLSAxIDogdGhhdC5lbmQgLSBxKTtcblxuXHRcdFx0XHRcdGlmIChsYXN0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRtb2RlID0gVFlQRTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RlID0gRFJZO1xuXHRcdFx0XHRjYXNlIERSWTpcblx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRyID0gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXHRcdFx0XHRcdHEgPSB0aGF0LndyaXRlO1xuXHRcdFx0XHRcdG0gPSAvKiAoaW50KSAqLyhxIDwgdGhhdC5yZWFkID8gdGhhdC5yZWFkIC0gcSAtIDEgOiB0aGF0LmVuZCAtIHEpO1xuXHRcdFx0XHRcdGlmICh0aGF0LnJlYWQgIT0gdGhhdC53cml0ZSkge1xuXHRcdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGUgPSBET05FTE9DS1M7XG5cdFx0XHRcdGNhc2UgRE9ORUxPQ0tTOlxuXHRcdFx0XHRcdHIgPSBaX1NUUkVBTV9FTkQ7XG5cblx0XHRcdFx0XHR0aGF0LmJpdGIgPSBiO1xuXHRcdFx0XHRcdHRoYXQuYml0ayA9IGs7XG5cdFx0XHRcdFx0ei5hdmFpbF9pbiA9IG47XG5cdFx0XHRcdFx0ei50b3RhbF9pbiArPSBwIC0gei5uZXh0X2luX2luZGV4O1xuXHRcdFx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHRcdFx0dGhhdC53cml0ZSA9IHE7XG5cdFx0XHRcdFx0cmV0dXJuIHRoYXQuaW5mbGF0ZV9mbHVzaCh6LCByKTtcblx0XHRcdFx0Y2FzZSBCQURCTE9DS1M6XG5cdFx0XHRcdFx0ciA9IFpfREFUQV9FUlJPUjtcblxuXHRcdFx0XHRcdHRoYXQuYml0YiA9IGI7XG5cdFx0XHRcdFx0dGhhdC5iaXRrID0gaztcblx0XHRcdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdFx0XHR6LnRvdGFsX2luICs9IHAgLSB6Lm5leHRfaW5faW5kZXg7XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gcDtcblx0XHRcdFx0XHR0aGF0LndyaXRlID0gcTtcblx0XHRcdFx0XHRyZXR1cm4gdGhhdC5pbmZsYXRlX2ZsdXNoKHosIHIpO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ciA9IFpfU1RSRUFNX0VSUk9SO1xuXG5cdFx0XHRcdFx0dGhhdC5iaXRiID0gYjtcblx0XHRcdFx0XHR0aGF0LmJpdGsgPSBrO1xuXHRcdFx0XHRcdHouYXZhaWxfaW4gPSBuO1xuXHRcdFx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0XHR6Lm5leHRfaW5faW5kZXggPSBwO1xuXHRcdFx0XHRcdHRoYXQud3JpdGUgPSBxO1xuXHRcdFx0XHRcdHJldHVybiB0aGF0LmluZmxhdGVfZmx1c2goeiwgcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhhdC5mcmVlID0gZnVuY3Rpb24oeikge1xuXHRcdFx0dGhhdC5yZXNldCh6LCBudWxsKTtcblx0XHRcdHRoYXQud2luZG93ID0gbnVsbDtcblx0XHRcdGh1ZnRzID0gbnVsbDtcblx0XHRcdC8vIFpGUkVFKHosIHMpO1xuXHRcdH07XG5cblx0XHR0aGF0LnNldF9kaWN0aW9uYXJ5ID0gZnVuY3Rpb24oZCwgc3RhcnQsIG4pIHtcblx0XHRcdHRoYXQud2luZG93LnNldChkLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIG4pLCAwKTtcblx0XHRcdHRoYXQucmVhZCA9IHRoYXQud3JpdGUgPSBuO1xuXHRcdH07XG5cblx0XHQvLyBSZXR1cm5zIHRydWUgaWYgaW5mbGF0ZSBpcyBjdXJyZW50bHkgYXQgdGhlIGVuZCBvZiBhIGJsb2NrIGdlbmVyYXRlZFxuXHRcdC8vIGJ5IFpfU1lOQ19GTFVTSCBvciBaX0ZVTExfRkxVU0guXG5cdFx0dGhhdC5zeW5jX3BvaW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbW9kZSA9PSBMRU5TID8gMSA6IDA7XG5cdFx0fTtcblxuXHR9XG5cblx0Ly8gSW5mbGF0ZVxuXG5cdC8vIHByZXNldCBkaWN0aW9uYXJ5IGZsYWcgaW4gemxpYiBoZWFkZXJcblx0dmFyIFBSRVNFVF9ESUNUID0gMHgyMDtcblxuXHR2YXIgWl9ERUZMQVRFRCA9IDg7XG5cblx0dmFyIE1FVEhPRCA9IDA7IC8vIHdhaXRpbmcgZm9yIG1ldGhvZCBieXRlXG5cdHZhciBGTEFHID0gMTsgLy8gd2FpdGluZyBmb3IgZmxhZyBieXRlXG5cdHZhciBESUNUNCA9IDI7IC8vIGZvdXIgZGljdGlvbmFyeSBjaGVjayBieXRlcyB0byBnb1xuXHR2YXIgRElDVDMgPSAzOyAvLyB0aHJlZSBkaWN0aW9uYXJ5IGNoZWNrIGJ5dGVzIHRvIGdvXG5cdHZhciBESUNUMiA9IDQ7IC8vIHR3byBkaWN0aW9uYXJ5IGNoZWNrIGJ5dGVzIHRvIGdvXG5cdHZhciBESUNUMSA9IDU7IC8vIG9uZSBkaWN0aW9uYXJ5IGNoZWNrIGJ5dGUgdG8gZ29cblx0dmFyIERJQ1QwID0gNjsgLy8gd2FpdGluZyBmb3IgaW5mbGF0ZVNldERpY3Rpb25hcnlcblx0dmFyIEJMT0NLUyA9IDc7IC8vIGRlY29tcHJlc3NpbmcgYmxvY2tzXG5cdHZhciBET05FID0gMTI7IC8vIGZpbmlzaGVkIGNoZWNrLCBkb25lXG5cdHZhciBCQUQgPSAxMzsgLy8gZ290IGFuIGVycm9yLS1zdGF5IGhlcmVcblxuXHR2YXIgbWFyayA9IFsgMCwgMCwgMHhmZiwgMHhmZiBdO1xuXG5cdGZ1bmN0aW9uIEluZmxhdGUoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0dGhhdC5tb2RlID0gMDsgLy8gY3VycmVudCBpbmZsYXRlIG1vZGVcblxuXHRcdC8vIG1vZGUgZGVwZW5kZW50IGluZm9ybWF0aW9uXG5cdFx0dGhhdC5tZXRob2QgPSAwOyAvLyBpZiBGTEFHUywgbWV0aG9kIGJ5dGVcblxuXHRcdC8vIGlmIENIRUNLLCBjaGVjayB2YWx1ZXMgdG8gY29tcGFyZVxuXHRcdHRoYXQud2FzID0gWyAwIF07IC8vIG5ldyBBcnJheSgxKTsgLy8gY29tcHV0ZWQgY2hlY2sgdmFsdWVcblx0XHR0aGF0Lm5lZWQgPSAwOyAvLyBzdHJlYW0gY2hlY2sgdmFsdWVcblxuXHRcdC8vIGlmIEJBRCwgaW5mbGF0ZVN5bmMncyBtYXJrZXIgYnl0ZXMgY291bnRcblx0XHR0aGF0Lm1hcmtlciA9IDA7XG5cblx0XHQvLyBtb2RlIGluZGVwZW5kZW50IGluZm9ybWF0aW9uXG5cdFx0dGhhdC53Yml0cyA9IDA7IC8vIGxvZzIod2luZG93IHNpemUpICg4Li4xNSwgZGVmYXVsdHMgdG8gMTUpXG5cblx0XHQvLyB0aGlzLmJsb2NrczsgLy8gY3VycmVudCBpbmZsYXRlX2Jsb2NrcyBzdGF0ZVxuXG5cdFx0ZnVuY3Rpb24gaW5mbGF0ZVJlc2V0KHopIHtcblx0XHRcdGlmICgheiB8fCAhei5pc3RhdGUpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblxuXHRcdFx0ei50b3RhbF9pbiA9IHoudG90YWxfb3V0ID0gMDtcblx0XHRcdHoubXNnID0gbnVsbDtcblx0XHRcdHouaXN0YXRlLm1vZGUgPSBCTE9DS1M7XG5cdFx0XHR6LmlzdGF0ZS5ibG9ja3MucmVzZXQoeiwgbnVsbCk7XG5cdFx0XHRyZXR1cm4gWl9PSztcblx0XHR9XG5cblx0XHR0aGF0LmluZmxhdGVFbmQgPSBmdW5jdGlvbih6KSB7XG5cdFx0XHRpZiAodGhhdC5ibG9ja3MpXG5cdFx0XHRcdHRoYXQuYmxvY2tzLmZyZWUoeik7XG5cdFx0XHR0aGF0LmJsb2NrcyA9IG51bGw7XG5cdFx0XHQvLyBaRlJFRSh6LCB6LT5zdGF0ZSk7XG5cdFx0XHRyZXR1cm4gWl9PSztcblx0XHR9O1xuXG5cdFx0dGhhdC5pbmZsYXRlSW5pdCA9IGZ1bmN0aW9uKHosIHcpIHtcblx0XHRcdHoubXNnID0gbnVsbDtcblx0XHRcdHRoYXQuYmxvY2tzID0gbnVsbDtcblxuXHRcdFx0Ly8gc2V0IHdpbmRvdyBzaXplXG5cdFx0XHRpZiAodyA8IDggfHwgdyA+IDE1KSB7XG5cdFx0XHRcdHRoYXQuaW5mbGF0ZUVuZCh6KTtcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0fVxuXHRcdFx0dGhhdC53Yml0cyA9IHc7XG5cblx0XHRcdHouaXN0YXRlLmJsb2NrcyA9IG5ldyBJbmZCbG9ja3MoeiwgMSA8PCB3KTtcblxuXHRcdFx0Ly8gcmVzZXQgc3RhdGVcblx0XHRcdGluZmxhdGVSZXNldCh6KTtcblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH07XG5cblx0XHR0aGF0LmluZmxhdGUgPSBmdW5jdGlvbih6LCBmKSB7XG5cdFx0XHR2YXIgcjtcblx0XHRcdHZhciBiO1xuXG5cdFx0XHRpZiAoIXogfHwgIXouaXN0YXRlIHx8ICF6Lm5leHRfaW4pXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdGYgPSBmID09IFpfRklOSVNIID8gWl9CVUZfRVJST1IgOiBaX09LO1xuXHRcdFx0ciA9IFpfQlVGX0VSUk9SO1xuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Ly8gU3lzdGVtLm91dC5wcmludGxuKFwibW9kZTogXCIrei5pc3RhdGUubW9kZSk7XG5cdFx0XHRcdHN3aXRjaCAoei5pc3RhdGUubW9kZSkge1xuXHRcdFx0XHRjYXNlIE1FVEhPRDpcblxuXHRcdFx0XHRcdGlmICh6LmF2YWlsX2luID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0ciA9IGY7XG5cblx0XHRcdFx0XHR6LmF2YWlsX2luLS07XG5cdFx0XHRcdFx0ei50b3RhbF9pbisrO1xuXHRcdFx0XHRcdGlmICgoKHouaXN0YXRlLm1ldGhvZCA9IHoucmVhZF9ieXRlKHoubmV4dF9pbl9pbmRleCsrKSkgJiAweGYpICE9IFpfREVGTEFURUQpIHtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBCQUQ7XG5cdFx0XHRcdFx0XHR6Lm1zZyA9IFwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIjtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1hcmtlciA9IDU7IC8vIGNhbid0IHRyeSBpbmZsYXRlU3luY1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgoei5pc3RhdGUubWV0aG9kID4+IDQpICsgOCA+IHouaXN0YXRlLndiaXRzKSB7XG5cdFx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gQkFEO1xuXHRcdFx0XHRcdFx0ei5tc2cgPSBcImludmFsaWQgd2luZG93IHNpemVcIjtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1hcmtlciA9IDU7IC8vIGNhbid0IHRyeSBpbmZsYXRlU3luY1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBGTEFHO1xuXHRcdFx0XHRjYXNlIEZMQUc6XG5cblx0XHRcdFx0XHRpZiAoei5hdmFpbF9pbiA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiByO1xuXHRcdFx0XHRcdHIgPSBmO1xuXG5cdFx0XHRcdFx0ei5hdmFpbF9pbi0tO1xuXHRcdFx0XHRcdHoudG90YWxfaW4rKztcblx0XHRcdFx0XHRiID0gKHoucmVhZF9ieXRlKHoubmV4dF9pbl9pbmRleCsrKSkgJiAweGZmO1xuXG5cdFx0XHRcdFx0aWYgKCgoKHouaXN0YXRlLm1ldGhvZCA8PCA4KSArIGIpICUgMzEpICE9PSAwKSB7XG5cdFx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gQkFEO1xuXHRcdFx0XHRcdFx0ei5tc2cgPSBcImluY29ycmVjdCBoZWFkZXIgY2hlY2tcIjtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1hcmtlciA9IDU7IC8vIGNhbid0IHRyeSBpbmZsYXRlU3luY1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKChiICYgUFJFU0VUX0RJQ1QpID09PSAwKSB7XG5cdFx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gQkxPQ0tTO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBESUNUNDtcblx0XHRcdFx0Y2FzZSBESUNUNDpcblxuXHRcdFx0XHRcdGlmICh6LmF2YWlsX2luID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0ciA9IGY7XG5cblx0XHRcdFx0XHR6LmF2YWlsX2luLS07XG5cdFx0XHRcdFx0ei50b3RhbF9pbisrO1xuXHRcdFx0XHRcdHouaXN0YXRlLm5lZWQgPSAoKHoucmVhZF9ieXRlKHoubmV4dF9pbl9pbmRleCsrKSAmIDB4ZmYpIDw8IDI0KSAmIDB4ZmYwMDAwMDA7XG5cdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IERJQ1QzO1xuXHRcdFx0XHRjYXNlIERJQ1QzOlxuXG5cdFx0XHRcdFx0aWYgKHouYXZhaWxfaW4gPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRyID0gZjtcblxuXHRcdFx0XHRcdHouYXZhaWxfaW4tLTtcblx0XHRcdFx0XHR6LnRvdGFsX2luKys7XG5cdFx0XHRcdFx0ei5pc3RhdGUubmVlZCArPSAoKHoucmVhZF9ieXRlKHoubmV4dF9pbl9pbmRleCsrKSAmIDB4ZmYpIDw8IDE2KSAmIDB4ZmYwMDAwO1xuXHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBESUNUMjtcblx0XHRcdFx0Y2FzZSBESUNUMjpcblxuXHRcdFx0XHRcdGlmICh6LmF2YWlsX2luID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0ciA9IGY7XG5cblx0XHRcdFx0XHR6LmF2YWlsX2luLS07XG5cdFx0XHRcdFx0ei50b3RhbF9pbisrO1xuXHRcdFx0XHRcdHouaXN0YXRlLm5lZWQgKz0gKCh6LnJlYWRfYnl0ZSh6Lm5leHRfaW5faW5kZXgrKykgJiAweGZmKSA8PCA4KSAmIDB4ZmYwMDtcblx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gRElDVDE7XG5cdFx0XHRcdGNhc2UgRElDVDE6XG5cblx0XHRcdFx0XHRpZiAoei5hdmFpbF9pbiA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiByO1xuXHRcdFx0XHRcdHIgPSBmO1xuXG5cdFx0XHRcdFx0ei5hdmFpbF9pbi0tO1xuXHRcdFx0XHRcdHoudG90YWxfaW4rKztcblx0XHRcdFx0XHR6LmlzdGF0ZS5uZWVkICs9ICh6LnJlYWRfYnl0ZSh6Lm5leHRfaW5faW5kZXgrKykgJiAweGZmKTtcblx0XHRcdFx0XHR6LmlzdGF0ZS5tb2RlID0gRElDVDA7XG5cdFx0XHRcdFx0cmV0dXJuIFpfTkVFRF9ESUNUO1xuXHRcdFx0XHRjYXNlIERJQ1QwOlxuXHRcdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBCQUQ7XG5cdFx0XHRcdFx0ei5tc2cgPSBcIm5lZWQgZGljdGlvbmFyeVwiO1xuXHRcdFx0XHRcdHouaXN0YXRlLm1hcmtlciA9IDA7IC8vIGNhbiB0cnkgaW5mbGF0ZVN5bmNcblx0XHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHRcdGNhc2UgQkxPQ0tTOlxuXG5cdFx0XHRcdFx0ciA9IHouaXN0YXRlLmJsb2Nrcy5wcm9jKHosIHIpO1xuXHRcdFx0XHRcdGlmIChyID09IFpfREFUQV9FUlJPUikge1xuXHRcdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IEJBRDtcblx0XHRcdFx0XHRcdHouaXN0YXRlLm1hcmtlciA9IDA7IC8vIGNhbiB0cnkgaW5mbGF0ZVN5bmNcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAociA9PSBaX09LKSB7XG5cdFx0XHRcdFx0XHRyID0gZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHIgIT0gWl9TVFJFQU1fRU5EKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ciA9IGY7XG5cdFx0XHRcdFx0ei5pc3RhdGUuYmxvY2tzLnJlc2V0KHosIHouaXN0YXRlLndhcyk7XG5cdFx0XHRcdFx0ei5pc3RhdGUubW9kZSA9IERPTkU7XG5cdFx0XHRcdGNhc2UgRE9ORTpcblx0XHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRU5EO1xuXHRcdFx0XHRjYXNlIEJBRDpcblx0XHRcdFx0XHRyZXR1cm4gWl9EQVRBX0VSUk9SO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR0aGF0LmluZmxhdGVTZXREaWN0aW9uYXJ5ID0gZnVuY3Rpb24oeiwgZGljdGlvbmFyeSwgZGljdExlbmd0aCkge1xuXHRcdFx0dmFyIGluZGV4ID0gMDtcblx0XHRcdHZhciBsZW5ndGggPSBkaWN0TGVuZ3RoO1xuXHRcdFx0aWYgKCF6IHx8ICF6LmlzdGF0ZSB8fCB6LmlzdGF0ZS5tb2RlICE9IERJQ1QwKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cblx0XHRcdGlmIChsZW5ndGggPj0gKDEgPDwgei5pc3RhdGUud2JpdHMpKSB7XG5cdFx0XHRcdGxlbmd0aCA9ICgxIDw8IHouaXN0YXRlLndiaXRzKSAtIDE7XG5cdFx0XHRcdGluZGV4ID0gZGljdExlbmd0aCAtIGxlbmd0aDtcblx0XHRcdH1cblx0XHRcdHouaXN0YXRlLmJsb2Nrcy5zZXRfZGljdGlvbmFyeShkaWN0aW9uYXJ5LCBpbmRleCwgbGVuZ3RoKTtcblx0XHRcdHouaXN0YXRlLm1vZGUgPSBCTE9DS1M7XG5cdFx0XHRyZXR1cm4gWl9PSztcblx0XHR9O1xuXG5cdFx0dGhhdC5pbmZsYXRlU3luYyA9IGZ1bmN0aW9uKHopIHtcblx0XHRcdHZhciBuOyAvLyBudW1iZXIgb2YgYnl0ZXMgdG8gbG9vayBhdFxuXHRcdFx0dmFyIHA7IC8vIHBvaW50ZXIgdG8gYnl0ZXNcblx0XHRcdHZhciBtOyAvLyBudW1iZXIgb2YgbWFya2VyIGJ5dGVzIGZvdW5kIGluIGEgcm93XG5cdFx0XHR2YXIgciwgdzsgLy8gdGVtcG9yYXJpZXMgdG8gc2F2ZSB0b3RhbF9pbiBhbmQgdG90YWxfb3V0XG5cblx0XHRcdC8vIHNldCB1cFxuXHRcdFx0aWYgKCF6IHx8ICF6LmlzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0aWYgKHouaXN0YXRlLm1vZGUgIT0gQkFEKSB7XG5cdFx0XHRcdHouaXN0YXRlLm1vZGUgPSBCQUQ7XG5cdFx0XHRcdHouaXN0YXRlLm1hcmtlciA9IDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG4gPSB6LmF2YWlsX2luKSA9PT0gMClcblx0XHRcdFx0cmV0dXJuIFpfQlVGX0VSUk9SO1xuXHRcdFx0cCA9IHoubmV4dF9pbl9pbmRleDtcblx0XHRcdG0gPSB6LmlzdGF0ZS5tYXJrZXI7XG5cblx0XHRcdC8vIHNlYXJjaFxuXHRcdFx0d2hpbGUgKG4gIT09IDAgJiYgbSA8IDQpIHtcblx0XHRcdFx0aWYgKHoucmVhZF9ieXRlKHApID09IG1hcmtbbV0pIHtcblx0XHRcdFx0XHRtKys7XG5cdFx0XHRcdH0gZWxzZSBpZiAoei5yZWFkX2J5dGUocCkgIT09IDApIHtcblx0XHRcdFx0XHRtID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtID0gNCAtIG07XG5cdFx0XHRcdH1cblx0XHRcdFx0cCsrO1xuXHRcdFx0XHRuLS07XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlc3RvcmVcblx0XHRcdHoudG90YWxfaW4gKz0gcCAtIHoubmV4dF9pbl9pbmRleDtcblx0XHRcdHoubmV4dF9pbl9pbmRleCA9IHA7XG5cdFx0XHR6LmF2YWlsX2luID0gbjtcblx0XHRcdHouaXN0YXRlLm1hcmtlciA9IG07XG5cblx0XHRcdC8vIHJldHVybiBubyBqb3kgb3Igc2V0IHVwIHRvIHJlc3RhcnQgb24gYSBuZXcgYmxvY2tcblx0XHRcdGlmIChtICE9IDQpIHtcblx0XHRcdFx0cmV0dXJuIFpfREFUQV9FUlJPUjtcblx0XHRcdH1cblx0XHRcdHIgPSB6LnRvdGFsX2luO1xuXHRcdFx0dyA9IHoudG90YWxfb3V0O1xuXHRcdFx0aW5mbGF0ZVJlc2V0KHopO1xuXHRcdFx0ei50b3RhbF9pbiA9IHI7XG5cdFx0XHR6LnRvdGFsX291dCA9IHc7XG5cdFx0XHR6LmlzdGF0ZS5tb2RlID0gQkxPQ0tTO1xuXHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0fTtcblxuXHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBpbmZsYXRlIGlzIGN1cnJlbnRseSBhdCB0aGUgZW5kIG9mIGEgYmxvY2sgZ2VuZXJhdGVkXG5cdFx0Ly8gYnkgWl9TWU5DX0ZMVVNIIG9yIFpfRlVMTF9GTFVTSC4gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJ5IG9uZSBQUFBcblx0XHQvLyBpbXBsZW1lbnRhdGlvbiB0byBwcm92aWRlIGFuIGFkZGl0aW9uYWwgc2FmZXR5IGNoZWNrLiBQUFAgdXNlc1xuXHRcdC8vIFpfU1lOQ19GTFVTSFxuXHRcdC8vIGJ1dCByZW1vdmVzIHRoZSBsZW5ndGggYnl0ZXMgb2YgdGhlIHJlc3VsdGluZyBlbXB0eSBzdG9yZWQgYmxvY2suIFdoZW5cblx0XHQvLyBkZWNvbXByZXNzaW5nLCBQUFAgY2hlY2tzIHRoYXQgYXQgdGhlIGVuZCBvZiBpbnB1dCBwYWNrZXQsIGluZmxhdGUgaXNcblx0XHQvLyB3YWl0aW5nIGZvciB0aGVzZSBsZW5ndGggYnl0ZXMuXG5cdFx0dGhhdC5pbmZsYXRlU3luY1BvaW50ID0gZnVuY3Rpb24oeikge1xuXHRcdFx0aWYgKCF6IHx8ICF6LmlzdGF0ZSB8fCAhei5pc3RhdGUuYmxvY2tzKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHRyZXR1cm4gei5pc3RhdGUuYmxvY2tzLnN5bmNfcG9pbnQoKTtcblx0XHR9O1xuXHR9XG5cblx0Ly8gWlN0cmVhbVxuXG5cdGZ1bmN0aW9uIFpTdHJlYW0oKSB7XG5cdH1cblxuXHRaU3RyZWFtLnByb3RvdHlwZSA9IHtcblx0XHRpbmZsYXRlSW5pdCA6IGZ1bmN0aW9uKGJpdHMpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdHRoYXQuaXN0YXRlID0gbmV3IEluZmxhdGUoKTtcblx0XHRcdGlmICghYml0cylcblx0XHRcdFx0Yml0cyA9IE1BWF9CSVRTO1xuXHRcdFx0cmV0dXJuIHRoYXQuaXN0YXRlLmluZmxhdGVJbml0KHRoYXQsIGJpdHMpO1xuXHRcdH0sXG5cblx0XHRpbmZsYXRlIDogZnVuY3Rpb24oZikge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmlzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0cmV0dXJuIHRoYXQuaXN0YXRlLmluZmxhdGUodGhhdCwgZik7XG5cdFx0fSxcblxuXHRcdGluZmxhdGVFbmQgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdGlmICghdGhhdC5pc3RhdGUpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdHZhciByZXQgPSB0aGF0LmlzdGF0ZS5pbmZsYXRlRW5kKHRoYXQpO1xuXHRcdFx0dGhhdC5pc3RhdGUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0aW5mbGF0ZVN5bmMgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdGlmICghdGhhdC5pc3RhdGUpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdHJldHVybiB0aGF0LmlzdGF0ZS5pbmZsYXRlU3luYyh0aGF0KTtcblx0XHR9LFxuXHRcdGluZmxhdGVTZXREaWN0aW9uYXJ5IDogZnVuY3Rpb24oZGljdGlvbmFyeSwgZGljdExlbmd0aCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmlzdGF0ZSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0cmV0dXJuIHRoYXQuaXN0YXRlLmluZmxhdGVTZXREaWN0aW9uYXJ5KHRoYXQsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpO1xuXHRcdH0sXG5cdFx0cmVhZF9ieXRlIDogZnVuY3Rpb24oc3RhcnQpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdHJldHVybiB0aGF0Lm5leHRfaW4uc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgMSlbMF07XG5cdFx0fSxcblx0XHRyZWFkX2J1ZiA6IGZ1bmN0aW9uKHN0YXJ0LCBzaXplKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gdGhhdC5uZXh0X2luLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIHNpemUpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBJbmZsYXRlclxuXG5cdGZ1bmN0aW9uIEluZmxhdGVyKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR2YXIgeiA9IG5ldyBaU3RyZWFtKCk7XG5cdFx0dmFyIGJ1ZnNpemUgPSA1MTI7XG5cdFx0dmFyIGZsdXNoID0gWl9OT19GTFVTSDtcblx0XHR2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYnVmc2l6ZSk7XG5cdFx0dmFyIG5vbW9yZWlucHV0ID0gZmFsc2U7XG5cblx0XHR6LmluZmxhdGVJbml0KCk7XG5cdFx0ei5uZXh0X291dCA9IGJ1ZjtcblxuXHRcdHRoYXQuYXBwZW5kID0gZnVuY3Rpb24oZGF0YSwgb25wcm9ncmVzcykge1xuXHRcdFx0dmFyIGVyciwgYnVmZmVycyA9IFtdLCBsYXN0SW5kZXggPSAwLCBidWZmZXJJbmRleCA9IDAsIGJ1ZmZlclNpemUgPSAwLCBhcnJheTtcblx0XHRcdGlmIChkYXRhLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0ei5uZXh0X2luX2luZGV4ID0gMDtcblx0XHRcdHoubmV4dF9pbiA9IGRhdGE7XG5cdFx0XHR6LmF2YWlsX2luID0gZGF0YS5sZW5ndGg7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHoubmV4dF9vdXRfaW5kZXggPSAwO1xuXHRcdFx0XHR6LmF2YWlsX291dCA9IGJ1ZnNpemU7XG5cdFx0XHRcdGlmICgoei5hdmFpbF9pbiA9PT0gMCkgJiYgKCFub21vcmVpbnB1dCkpIHsgLy8gaWYgYnVmZmVyIGlzIGVtcHR5IGFuZCBtb3JlIGlucHV0IGlzIGF2YWlsYWJsZSwgcmVmaWxsIGl0XG5cdFx0XHRcdFx0ei5uZXh0X2luX2luZGV4ID0gMDtcblx0XHRcdFx0XHRub21vcmVpbnB1dCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZXJyID0gei5pbmZsYXRlKGZsdXNoKTtcblx0XHRcdFx0aWYgKG5vbW9yZWlucHV0ICYmIChlcnIgPT0gWl9CVUZfRVJST1IpKVxuXHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0aWYgKGVyciAhPSBaX09LICYmIGVyciAhPSBaX1NUUkVBTV9FTkQpXG5cdFx0XHRcdFx0dGhyb3cgXCJpbmZsYXRpbmc6IFwiICsgei5tc2c7XG5cdFx0XHRcdGlmICgobm9tb3JlaW5wdXQgfHwgZXJyID09IFpfU1RSRUFNX0VORCkgJiYgKHouYXZhaWxfaW4gPT0gZGF0YS5sZW5ndGgpKVxuXHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0aWYgKHoubmV4dF9vdXRfaW5kZXgpXG5cdFx0XHRcdFx0aWYgKHoubmV4dF9vdXRfaW5kZXggPT0gYnVmc2l6ZSlcblx0XHRcdFx0XHRcdGJ1ZmZlcnMucHVzaChuZXcgVWludDhBcnJheShidWYpKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRidWZmZXJzLnB1c2gobmV3IFVpbnQ4QXJyYXkoYnVmLnN1YmFycmF5KDAsIHoubmV4dF9vdXRfaW5kZXgpKSk7XG5cdFx0XHRcdGJ1ZmZlclNpemUgKz0gei5uZXh0X291dF9pbmRleDtcblx0XHRcdFx0aWYgKG9ucHJvZ3Jlc3MgJiYgei5uZXh0X2luX2luZGV4ID4gMCAmJiB6Lm5leHRfaW5faW5kZXggIT0gbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0b25wcm9ncmVzcyh6Lm5leHRfaW5faW5kZXgpO1xuXHRcdFx0XHRcdGxhc3RJbmRleCA9IHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZSAoei5hdmFpbF9pbiA+IDAgfHwgei5hdmFpbF9vdXQgPT09IDApO1xuXHRcdFx0YXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJTaXplKTtcblx0XHRcdGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihjaHVuaykge1xuXHRcdFx0XHRhcnJheS5zZXQoY2h1bmssIGJ1ZmZlckluZGV4KTtcblx0XHRcdFx0YnVmZmVySW5kZXggKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0fTtcblx0XHR0aGF0LmZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR6LmluZmxhdGVFbmQoKTtcblx0XHR9O1xuXHR9XG5cblx0dmFyIGluZmxhdGVyO1xuXG5cdGlmIChvYmouemlwKVxuXHRcdG9iai56aXAuSW5mbGF0ZXIgPSBJbmZsYXRlcjtcblx0ZWxzZSB7XG5cdFx0aW5mbGF0ZXIgPSBuZXcgSW5mbGF0ZXIoKTtcblx0XHRvYmouYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBtZXNzYWdlID0gZXZlbnQuZGF0YTtcblxuXHRcdFx0aWYgKG1lc3NhZ2UuYXBwZW5kKVxuXHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdG9uYXBwZW5kIDogdHJ1ZSxcblx0XHRcdFx0XHRkYXRhIDogaW5mbGF0ZXIuYXBwZW5kKG1lc3NhZ2UuZGF0YSwgZnVuY3Rpb24oY3VycmVudCkge1xuXHRcdFx0XHRcdFx0b2JqLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRcdFx0cHJvZ3Jlc3MgOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50IDogY3VycmVudFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSk7XG5cdFx0XHRpZiAobWVzc2FnZS5mbHVzaCkge1xuXHRcdFx0XHRpbmZsYXRlci5mbHVzaCgpO1xuXHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdG9uZmx1c2ggOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG59KShzZWxmKTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=