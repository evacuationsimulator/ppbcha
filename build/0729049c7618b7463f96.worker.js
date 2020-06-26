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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/string-replace-webpack-plugin/loader.js?id=mcfw8gdywea!./node_modules/string-replace-webpack-plugin/loader.js?id=xpab26swzhg!./packages/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/string-replace-webpack-plugin/loader.js?id=mcfw8gdywea!./node_modules/string-replace-webpack-plugin/loader.js?id=xpab26swzhg!./packages/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-webpack-plugin/loader.js?id=mcfw8gdywea!./node_modules/string-replace-webpack-plugin/loader.js?id=xpab26swzhg!./packages/terriajs/buildprocess/removeCesiumDebugPragmas.js!./node_modules/terriajs-cesium/Source/ThirdParty/Workers/deflate.js ***!
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
	var D_CODES = 30;
	var BL_CODES = 19;

	var LENGTH_CODES = 29;
	var LITERALS = 256;
	var L_CODES = (LITERALS + 1 + LENGTH_CODES);
	var HEAP_SIZE = (2 * L_CODES + 1);

	var END_BLOCK = 256;

	// Bit length codes must not exceed MAX_BL_BITS bits
	var MAX_BL_BITS = 7;

	// repeat previous bit length 3-6 times (2 bits of repeat count)
	var REP_3_6 = 16;

	// repeat a zero length 3-10 times (3 bits of repeat count)
	var REPZ_3_10 = 17;

	// repeat a zero length 11-138 times (7 bits of repeat count)
	var REPZ_11_138 = 18;

	// The lengths of the bit length codes are sent in order of decreasing
	// probability, to avoid transmitting the lengths for unused bit
	// length codes.

	var Buf_size = 8 * 2;

	// JZlib version : "1.0.2"
	var Z_DEFAULT_COMPRESSION = -1;

	// compression strategy
	var Z_FILTERED = 1;
	var Z_HUFFMAN_ONLY = 2;
	var Z_DEFAULT_STRATEGY = 0;

	var Z_NO_FLUSH = 0;
	var Z_PARTIAL_FLUSH = 1;
	var Z_FULL_FLUSH = 3;
	var Z_FINISH = 4;

	var Z_OK = 0;
	var Z_STREAM_END = 1;
	var Z_NEED_DICT = 2;
	var Z_STREAM_ERROR = -2;
	var Z_DATA_ERROR = -3;
	var Z_BUF_ERROR = -5;

	// Tree

	// see definition of array dist_code below
	var _dist_code = [ 0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
			12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
			13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
			14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
			14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
			15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19,
			20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
			26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27,
			27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
			28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29,
			29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,
			29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29 ];

	function Tree() {
		var that = this;

		// dyn_tree; // the dynamic tree
		// max_code; // largest code with non zero frequency
		// stat_desc; // the corresponding static tree

		// Compute the optimal bit lengths for a tree and update the total bit
		// length
		// for the current block.
		// IN assertion: the fields freq and dad are set, heap[heap_max] and
		// above are the tree nodes sorted by increasing frequency.
		// OUT assertions: the field len is set to the optimal bit length, the
		// array bl_count contains the frequencies for each bit length.
		// The length opt_len is updated; static_len is also updated if stree is
		// not null.
		function gen_bitlen(s) {
			var tree = that.dyn_tree;
			var stree = that.stat_desc.static_tree;
			var extra = that.stat_desc.extra_bits;
			var base = that.stat_desc.extra_base;
			var max_length = that.stat_desc.max_length;
			var h; // heap index
			var n, m; // iterate over the tree elements
			var bits; // bit length
			var xbits; // extra bits
			var f; // frequency
			var overflow = 0; // number of elements with bit length too large

			for (bits = 0; bits <= MAX_BITS; bits++)
				s.bl_count[bits] = 0;

			// In a first pass, compute the optimal bit lengths (which may
			// overflow in the case of the bit length tree).
			tree[s.heap[s.heap_max] * 2 + 1] = 0; // root of the heap

			for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
				n = s.heap[h];
				bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
				if (bits > max_length) {
					bits = max_length;
					overflow++;
				}
				tree[n * 2 + 1] = bits;
				// We overwrite tree[n*2+1] which is no longer needed

				if (n > that.max_code)
					continue; // not a leaf node

				s.bl_count[bits]++;
				xbits = 0;
				if (n >= base)
					xbits = extra[n - base];
				f = tree[n * 2];
				s.opt_len += f * (bits + xbits);
				if (stree)
					s.static_len += f * (stree[n * 2 + 1] + xbits);
			}
			if (overflow === 0)
				return;

			// This happens for example on obj2 and pic of the Calgary corpus
			// Find the first bit length which could increase:
			do {
				bits = max_length - 1;
				while (s.bl_count[bits] === 0)
					bits--;
				s.bl_count[bits]--; // move one leaf down the tree
				s.bl_count[bits + 1] += 2; // move one overflow item as its brother
				s.bl_count[max_length]--;
				// The brother of the overflow item also moves one step up,
				// but this does not affect bl_count[max_length]
				overflow -= 2;
			} while (overflow > 0);

			for (bits = max_length; bits !== 0; bits--) {
				n = s.bl_count[bits];
				while (n !== 0) {
					m = s.heap[--h];
					if (m > that.max_code)
						continue;
					if (tree[m * 2 + 1] != bits) {
						s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
						tree[m * 2 + 1] = bits;
					}
					n--;
				}
			}
		}

		// Reverse the first len bits of a code, using straightforward code (a
		// faster
		// method would use a table)
		// IN assertion: 1 <= len <= 15
		function bi_reverse(code, // the value to invert
		len // its bit length
		) {
			var res = 0;
			do {
				res |= code & 1;
				code >>>= 1;
				res <<= 1;
			} while (--len > 0);
			return res >>> 1;
		}

		// Generate the codes for a given tree and bit counts (which need not be
		// optimal).
		// IN assertion: the array bl_count contains the bit length statistics for
		// the given tree and the field len is set for all tree elements.
		// OUT assertion: the field code is set for all tree elements of non
		// zero code length.
		function gen_codes(tree, // the tree to decorate
		max_code, // largest code with non zero frequency
		bl_count // number of codes at each bit length
		) {
			var next_code = []; // next code value for each
			// bit length
			var code = 0; // running code value
			var bits; // bit index
			var n; // code index
			var len;

			// The distribution counts are first used to generate the code values
			// without bit reversal.
			for (bits = 1; bits <= MAX_BITS; bits++) {
				next_code[bits] = code = ((code + bl_count[bits - 1]) << 1);
			}

			// Check that the bit counts in bl_count are consistent. The last code
			// must be all ones.
			// Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
			// "inconsistent bit counts");
			// Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

			for (n = 0; n <= max_code; n++) {
				len = tree[n * 2 + 1];
				if (len === 0)
					continue;
				// Now reverse the bits
				tree[n * 2] = bi_reverse(next_code[len]++, len);
			}
		}

		// Construct one Huffman tree and assigns the code bit strings and lengths.
		// Update the total bit length for the current block.
		// IN assertion: the field freq is set for all tree elements.
		// OUT assertions: the fields len and code are set to the optimal bit length
		// and corresponding code. The length opt_len is updated; static_len is
		// also updated if stree is not null. The field max_code is set.
		that.build_tree = function(s) {
			var tree = that.dyn_tree;
			var stree = that.stat_desc.static_tree;
			var elems = that.stat_desc.elems;
			var n, m; // iterate over heap elements
			var max_code = -1; // largest code with non zero frequency
			var node; // new node being created

			// Construct the initial heap, with least frequent element in
			// heap[1]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
			// heap[0] is not used.
			s.heap_len = 0;
			s.heap_max = HEAP_SIZE;

			for (n = 0; n < elems; n++) {
				if (tree[n * 2] !== 0) {
					s.heap[++s.heap_len] = max_code = n;
					s.depth[n] = 0;
				} else {
					tree[n * 2 + 1] = 0;
				}
			}

			// The pkzip format requires that at least one distance code exists,
			// and that at least one bit should be sent even if there is only one
			// possible code. So to avoid special checks later on we force at least
			// two codes of non zero frequency.
			while (s.heap_len < 2) {
				node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
				tree[node * 2] = 1;
				s.depth[node] = 0;
				s.opt_len--;
				if (stree)
					s.static_len -= stree[node * 2 + 1];
				// node is 0 or 1 so it does not have extra bits
			}
			that.max_code = max_code;

			// The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
			// establish sub-heaps of increasing lengths:

			for (n = Math.floor(s.heap_len / 2); n >= 1; n--)
				s.pqdownheap(tree, n);

			// Construct the Huffman tree by repeatedly combining the least two
			// frequent nodes.

			node = elems; // next internal node of the tree
			do {
				// n = node of least frequency
				n = s.heap[1];
				s.heap[1] = s.heap[s.heap_len--];
				s.pqdownheap(tree, 1);
				m = s.heap[1]; // m = node of next least frequency

				s.heap[--s.heap_max] = n; // keep the nodes sorted by frequency
				s.heap[--s.heap_max] = m;

				// Create a new node father of n and m
				tree[node * 2] = (tree[n * 2] + tree[m * 2]);
				s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
				tree[n * 2 + 1] = tree[m * 2 + 1] = node;

				// and insert the new node in the heap
				s.heap[1] = node++;
				s.pqdownheap(tree, 1);
			} while (s.heap_len >= 2);

			s.heap[--s.heap_max] = s.heap[1];

			// At this point, the fields freq and dad are set. We can now
			// generate the bit lengths.

			gen_bitlen(s);

			// The field len is now set, we can generate the bit codes
			gen_codes(tree, that.max_code, s.bl_count);
		};

	}

	Tree._length_code = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16,
			16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20,
			20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
			22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
			25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26,
			26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28 ];

	Tree.base_length = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0 ];

	Tree.base_dist = [ 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384,
			24576 ];

	// Mapping from a distance to a distance code. dist is the distance - 1 and
	// must not have side effects. _dist_code[256] and _dist_code[257] are never
	// used.
	Tree.d_code = function(dist) {
		return ((dist) < 256 ? _dist_code[dist] : _dist_code[256 + ((dist) >>> 7)]);
	};

	// extra bits for each length code
	Tree.extra_lbits = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0 ];

	// extra bits for each distance code
	Tree.extra_dbits = [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];

	// extra bits for each bit length code
	Tree.extra_blbits = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7 ];

	Tree.bl_order = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

	// StaticTree

	function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
		var that = this;
		that.static_tree = static_tree;
		that.extra_bits = extra_bits;
		that.extra_base = extra_base;
		that.elems = elems;
		that.max_length = max_length;
	}

	StaticTree.static_ltree = [ 12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8,
			130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42,
			8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8,
			22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8,
			222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113,
			8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8,
			69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8,
			173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9,
			51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9,
			427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379,
			9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23,
			9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9,
			399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9,
			223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7,
			40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8,
			99, 8, 227, 8 ];

	StaticTree.static_dtree = [ 0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5,
			25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5 ];

	StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);

	StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);

	StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);

	// Deflate

	var MAX_MEM_LEVEL = 9;
	var DEF_MEM_LEVEL = 8;

	function Config(good_length, max_lazy, nice_length, max_chain, func) {
		var that = this;
		that.good_length = good_length;
		that.max_lazy = max_lazy;
		that.nice_length = nice_length;
		that.max_chain = max_chain;
		that.func = func;
	}

	var STORED = 0;
	var FAST = 1;
	var SLOW = 2;
	var config_table = [ new Config(0, 0, 0, 0, STORED), new Config(4, 4, 8, 4, FAST), new Config(4, 5, 16, 8, FAST), new Config(4, 6, 32, 32, FAST),
			new Config(4, 4, 16, 16, SLOW), new Config(8, 16, 32, 32, SLOW), new Config(8, 16, 128, 128, SLOW), new Config(8, 32, 128, 256, SLOW),
			new Config(32, 128, 258, 1024, SLOW), new Config(32, 258, 258, 4096, SLOW) ];

	var z_errmsg = [ "need dictionary", // Z_NEED_DICT
	// 2
	"stream end", // Z_STREAM_END 1
	"", // Z_OK 0
	"", // Z_ERRNO (-1)
	"stream error", // Z_STREAM_ERROR (-2)
	"data error", // Z_DATA_ERROR (-3)
	"", // Z_MEM_ERROR (-4)
	"buffer error", // Z_BUF_ERROR (-5)
	"",// Z_VERSION_ERROR (-6)
	"" ];

	// block not completed, need more input or more output
	var NeedMore = 0;

	// block flush performed
	var BlockDone = 1;

	// finish started, need only more output at next deflate
	var FinishStarted = 2;

	// finish done, accept no more input or output
	var FinishDone = 3;

	// preset dictionary flag in zlib header
	var PRESET_DICT = 0x20;

	var INIT_STATE = 42;
	var BUSY_STATE = 113;
	var FINISH_STATE = 666;

	// The deflate compression method
	var Z_DEFLATED = 8;

	var STORED_BLOCK = 0;
	var STATIC_TREES = 1;
	var DYN_TREES = 2;

	var MIN_MATCH = 3;
	var MAX_MATCH = 258;
	var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

	function smaller(tree, n, m, depth) {
		var tn2 = tree[n * 2];
		var tm2 = tree[m * 2];
		return (tn2 < tm2 || (tn2 == tm2 && depth[n] <= depth[m]));
	}

	function Deflate() {

		var that = this;
		var strm; // pointer back to this zlib stream
		var status; // as the name implies
		// pending_buf; // output still pending
		var pending_buf_size; // size of pending_buf
		// pending_out; // next pending byte to output to the stream
		// pending; // nb of bytes in the pending buffer
		var method; // STORED (for zip only) or DEFLATED
		var last_flush; // value of flush param for previous deflate call

		var w_size; // LZ77 window size (32K by default)
		var w_bits; // log2(w_size) (8..16)
		var w_mask; // w_size - 1

		var window;
		// Sliding window. Input bytes are read into the second half of the window,
		// and move to the first half later to keep a dictionary of at least wSize
		// bytes. With this organization, matches are limited to a distance of
		// wSize-MAX_MATCH bytes, but this ensures that IO is always
		// performed with a length multiple of the block size. Also, it limits
		// the window size to 64K, which is quite useful on MSDOS.
		// To do: use the user input buffer as sliding window.

		var window_size;
		// Actual size of window: 2*wSize, except when the user input buffer
		// is directly used as sliding window.

		var prev;
		// Link to older string with same hash index. To limit the size of this
		// array to 64K, this link is maintained only for the last 32K strings.
		// An index in this array is thus a window index modulo 32K.

		var head; // Heads of the hash chains or NIL.

		var ins_h; // hash index of string to be inserted
		var hash_size; // number of elements in hash table
		var hash_bits; // log2(hash_size)
		var hash_mask; // hash_size-1

		// Number of bits by which ins_h must be shifted at each input
		// step. It must be such that after MIN_MATCH steps, the oldest
		// byte no longer takes part in the hash key, that is:
		// hash_shift * MIN_MATCH >= hash_bits
		var hash_shift;

		// Window position at the beginning of the current output block. Gets
		// negative when the window is moved backwards.

		var block_start;

		var match_length; // length of best match
		var prev_match; // previous match
		var match_available; // set if previous match exists
		var strstart; // start of string to insert
		var match_start; // start of matching string
		var lookahead; // number of valid bytes ahead in window

		// Length of the best match at previous step. Matches not greater than this
		// are discarded. This is used in the lazy match evaluation.
		var prev_length;

		// To speed up deflation, hash chains are never searched beyond this
		// length. A higher limit improves compression ratio but degrades the speed.
		var max_chain_length;

		// Attempt to find a better match only when the current match is strictly
		// smaller than this value. This mechanism is used only for compression
		// levels >= 4.
		var max_lazy_match;

		// Insert new strings in the hash table only if the match length is not
		// greater than this length. This saves time but degrades compression.
		// max_insert_length is used only for compression levels <= 3.

		var level; // compression level (1..9)
		var strategy; // favor or force Huffman coding

		// Use a faster search when the previous match is longer than this
		var good_match;

		// Stop searching when current match exceeds this
		var nice_match;

		var dyn_ltree; // literal and length tree
		var dyn_dtree; // distance tree
		var bl_tree; // Huffman tree for bit lengths

		var l_desc = new Tree(); // desc for literal tree
		var d_desc = new Tree(); // desc for distance tree
		var bl_desc = new Tree(); // desc for bit length tree

		// that.heap_len; // number of elements in the heap
		// that.heap_max; // element of largest frequency
		// The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
		// The same heap array is used to build all trees.

		// Depth of each subtree used as tie breaker for trees of equal frequency
		that.depth = [];

		var l_buf; // index for literals or lengths */

		// Size of match buffer for literals/lengths. There are 4 reasons for
		// limiting lit_bufsize to 64K:
		// - frequencies can be kept in 16 bit counters
		// - if compression is not successful for the first block, all input
		// data is still in the window so we can still emit a stored block even
		// when input comes from standard input. (This can also be done for
		// all blocks if lit_bufsize is not greater than 32K.)
		// - if compression is not successful for a file smaller than 64K, we can
		// even emit a stored file instead of a stored block (saving 5 bytes).
		// This is applicable only for zip (not gzip or zlib).
		// - creating new Huffman trees less frequently may not provide fast
		// adaptation to changes in the input data statistics. (Take for
		// example a binary file with poorly compressible code followed by
		// a highly compressible string table.) Smaller buffer sizes give
		// fast adaptation but have of course the overhead of transmitting
		// trees more frequently.
		// - I can't count above 4
		var lit_bufsize;

		var last_lit; // running index in l_buf

		// Buffer for distances. To simplify the code, d_buf and l_buf have
		// the same number of elements. To use different lengths, an extra flag
		// array would be necessary.

		var d_buf; // index of pendig_buf

		// that.opt_len; // bit length of current block with optimal trees
		// that.static_len; // bit length of current block with static trees
		var matches; // number of string matches in current block
		var last_eob_len; // bit length of EOB code for last block

		// Output buffer. bits are inserted starting at the bottom (least
		// significant bits).
		var bi_buf;

		// Number of valid bits in bi_buf. All bits above the last valid bit
		// are always zero.
		var bi_valid;

		// number of codes at each bit length for an optimal tree
		that.bl_count = [];

		// heap used to build the Huffman trees
		that.heap = [];

		dyn_ltree = [];
		dyn_dtree = [];
		bl_tree = [];

		function lm_init() {
			var i;
			window_size = 2 * w_size;

			head[hash_size - 1] = 0;
			for (i = 0; i < hash_size - 1; i++) {
				head[i] = 0;
			}

			// Set the default configuration parameters:
			max_lazy_match = config_table[level].max_lazy;
			good_match = config_table[level].good_length;
			nice_match = config_table[level].nice_length;
			max_chain_length = config_table[level].max_chain;

			strstart = 0;
			block_start = 0;
			lookahead = 0;
			match_length = prev_length = MIN_MATCH - 1;
			match_available = 0;
			ins_h = 0;
		}

		function init_block() {
			var i;
			// Initialize the trees.
			for (i = 0; i < L_CODES; i++)
				dyn_ltree[i * 2] = 0;
			for (i = 0; i < D_CODES; i++)
				dyn_dtree[i * 2] = 0;
			for (i = 0; i < BL_CODES; i++)
				bl_tree[i * 2] = 0;

			dyn_ltree[END_BLOCK * 2] = 1;
			that.opt_len = that.static_len = 0;
			last_lit = matches = 0;
		}

		// Initialize the tree data structures for a new zlib stream.
		function tr_init() {

			l_desc.dyn_tree = dyn_ltree;
			l_desc.stat_desc = StaticTree.static_l_desc;

			d_desc.dyn_tree = dyn_dtree;
			d_desc.stat_desc = StaticTree.static_d_desc;

			bl_desc.dyn_tree = bl_tree;
			bl_desc.stat_desc = StaticTree.static_bl_desc;

			bi_buf = 0;
			bi_valid = 0;
			last_eob_len = 8; // enough lookahead for inflate

			// Initialize the first block of the first file:
			init_block();
		}

		// Restore the heap property by moving down the tree starting at node k,
		// exchanging a node with the smallest of its two sons if necessary,
		// stopping
		// when the heap property is re-established (each father smaller than its
		// two sons).
		that.pqdownheap = function(tree, // the tree to restore
		k // node to move down
		) {
			var heap = that.heap;
			var v = heap[k];
			var j = k << 1; // left son of k
			while (j <= that.heap_len) {
				// Set j to the smallest of the two sons:
				if (j < that.heap_len && smaller(tree, heap[j + 1], heap[j], that.depth)) {
					j++;
				}
				// Exit if v is smaller than both sons
				if (smaller(tree, v, heap[j], that.depth))
					break;

				// Exchange v with the smallest son
				heap[k] = heap[j];
				k = j;
				// And continue down the tree, setting j to the left son of k
				j <<= 1;
			}
			heap[k] = v;
		};

		// Scan a literal or distance tree to determine the frequencies of the codes
		// in the bit length tree.
		function scan_tree(tree,// the tree to be scanned
		max_code // and its largest code of non zero frequency
		) {
			var n; // iterates over all tree elements
			var prevlen = -1; // last emitted length
			var curlen; // length of current code
			var nextlen = tree[0 * 2 + 1]; // length of next code
			var count = 0; // repeat count of the current code
			var max_count = 7; // max repeat count
			var min_count = 4; // min repeat count

			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			}
			tree[(max_code + 1) * 2 + 1] = 0xffff; // guard

			for (n = 0; n <= max_code; n++) {
				curlen = nextlen;
				nextlen = tree[(n + 1) * 2 + 1];
				if (++count < max_count && curlen == nextlen) {
					continue;
				} else if (count < min_count) {
					bl_tree[curlen * 2] += count;
				} else if (curlen !== 0) {
					if (curlen != prevlen)
						bl_tree[curlen * 2]++;
					bl_tree[REP_3_6 * 2]++;
				} else if (count <= 10) {
					bl_tree[REPZ_3_10 * 2]++;
				} else {
					bl_tree[REPZ_11_138 * 2]++;
				}
				count = 0;
				prevlen = curlen;
				if (nextlen === 0) {
					max_count = 138;
					min_count = 3;
				} else if (curlen == nextlen) {
					max_count = 6;
					min_count = 3;
				} else {
					max_count = 7;
					min_count = 4;
				}
			}
		}

		// Construct the Huffman tree for the bit lengths and return the index in
		// bl_order of the last bit length code to send.
		function build_bl_tree() {
			var max_blindex; // index of last bit length code of non zero freq

			// Determine the bit length frequencies for literal and distance trees
			scan_tree(dyn_ltree, l_desc.max_code);
			scan_tree(dyn_dtree, d_desc.max_code);

			// Build the bit length tree:
			bl_desc.build_tree(that);
			// opt_len now includes the length of the tree representations, except
			// the lengths of the bit lengths codes and the 5+5+4 bits for the
			// counts.

			// Determine the number of bit length codes to send. The pkzip format
			// requires that at least 4 bit length codes be sent. (appnote.txt says
			// 3 but the actual value used is 4.)
			for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
				if (bl_tree[Tree.bl_order[max_blindex] * 2 + 1] !== 0)
					break;
			}
			// Update opt_len to include the bit length tree and counts
			that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;

			return max_blindex;
		}

		// Output a byte on the stream.
		// IN assertion: there is enough room in pending_buf.
		function put_byte(p) {
			that.pending_buf[that.pending++] = p;
		}

		function put_short(w) {
			put_byte(w & 0xff);
			put_byte((w >>> 8) & 0xff);
		}

		function putShortMSB(b) {
			put_byte((b >> 8) & 0xff);
			put_byte((b & 0xff) & 0xff);
		}

		function send_bits(value, length) {
			var val, len = length;
			if (bi_valid > Buf_size - len) {
				val = value;
				// bi_buf |= (val << bi_valid);
				bi_buf |= ((val << bi_valid) & 0xffff);
				put_short(bi_buf);
				bi_buf = val >>> (Buf_size - bi_valid);
				bi_valid += len - Buf_size;
			} else {
				// bi_buf |= (value) << bi_valid;
				bi_buf |= (((value) << bi_valid) & 0xffff);
				bi_valid += len;
			}
		}

		function send_code(c, tree) {
			var c2 = c * 2;
			send_bits(tree[c2] & 0xffff, tree[c2 + 1] & 0xffff);
		}

		// Send a literal or distance tree in compressed form, using the codes in
		// bl_tree.
		function send_tree(tree,// the tree to be sent
		max_code // and its largest code of non zero frequency
		) {
			var n; // iterates over all tree elements
			var prevlen = -1; // last emitted length
			var curlen; // length of current code
			var nextlen = tree[0 * 2 + 1]; // length of next code
			var count = 0; // repeat count of the current code
			var max_count = 7; // max repeat count
			var min_count = 4; // min repeat count

			if (nextlen === 0) {
				max_count = 138;
				min_count = 3;
			}

			for (n = 0; n <= max_code; n++) {
				curlen = nextlen;
				nextlen = tree[(n + 1) * 2 + 1];
				if (++count < max_count && curlen == nextlen) {
					continue;
				} else if (count < min_count) {
					do {
						send_code(curlen, bl_tree);
					} while (--count !== 0);
				} else if (curlen !== 0) {
					if (curlen != prevlen) {
						send_code(curlen, bl_tree);
						count--;
					}
					send_code(REP_3_6, bl_tree);
					send_bits(count - 3, 2);
				} else if (count <= 10) {
					send_code(REPZ_3_10, bl_tree);
					send_bits(count - 3, 3);
				} else {
					send_code(REPZ_11_138, bl_tree);
					send_bits(count - 11, 7);
				}
				count = 0;
				prevlen = curlen;
				if (nextlen === 0) {
					max_count = 138;
					min_count = 3;
				} else if (curlen == nextlen) {
					max_count = 6;
					min_count = 3;
				} else {
					max_count = 7;
					min_count = 4;
				}
			}
		}

		// Send the header for a block using dynamic Huffman trees: the counts, the
		// lengths of the bit length codes, the literal tree and the distance tree.
		// IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
		function send_all_trees(lcodes, dcodes, blcodes) {
			var rank; // index in bl_order

			send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
			send_bits(dcodes - 1, 5);
			send_bits(blcodes - 4, 4); // not -3 as stated in appnote.txt
			for (rank = 0; rank < blcodes; rank++) {
				send_bits(bl_tree[Tree.bl_order[rank] * 2 + 1], 3);
			}
			send_tree(dyn_ltree, lcodes - 1); // literal tree
			send_tree(dyn_dtree, dcodes - 1); // distance tree
		}

		// Flush the bit buffer, keeping at most 7 bits in it.
		function bi_flush() {
			if (bi_valid == 16) {
				put_short(bi_buf);
				bi_buf = 0;
				bi_valid = 0;
			} else if (bi_valid >= 8) {
				put_byte(bi_buf & 0xff);
				bi_buf >>>= 8;
				bi_valid -= 8;
			}
		}

		// Send one empty static block to give enough lookahead for inflate.
		// This takes 10 bits, of which 7 may remain in the bit buffer.
		// The current inflate code requires 9 bits of lookahead. If the
		// last two codes for the previous block (real code plus EOB) were coded
		// on 5 bits or less, inflate may have only 5+3 bits of lookahead to decode
		// the last real code. In this case we send two empty static blocks instead
		// of one. (There are no problems if the previous block is stored or fixed.)
		// To simplify the code, we assume the worst case of last real code encoded
		// on one bit only.
		function _tr_align() {
			send_bits(STATIC_TREES << 1, 3);
			send_code(END_BLOCK, StaticTree.static_ltree);

			bi_flush();

			// Of the 10 bits for the empty block, we have already sent
			// (10 - bi_valid) bits. The lookahead for the last real code (before
			// the EOB of the previous block) was thus at least one plus the length
			// of the EOB plus what we have just sent of the empty static block.
			if (1 + last_eob_len + 10 - bi_valid < 9) {
				send_bits(STATIC_TREES << 1, 3);
				send_code(END_BLOCK, StaticTree.static_ltree);
				bi_flush();
			}
			last_eob_len = 7;
		}

		// Save the match info and tally the frequency counts. Return true if
		// the current block must be flushed.
		function _tr_tally(dist, // distance of matched string
		lc // match length-MIN_MATCH or unmatched char (if dist==0)
		) {
			var out_length, in_length, dcode;
			that.pending_buf[d_buf + last_lit * 2] = (dist >>> 8) & 0xff;
			that.pending_buf[d_buf + last_lit * 2 + 1] = dist & 0xff;

			that.pending_buf[l_buf + last_lit] = lc & 0xff;
			last_lit++;

			if (dist === 0) {
				// lc is the unmatched char
				dyn_ltree[lc * 2]++;
			} else {
				matches++;
				// Here, lc is the match length - MIN_MATCH
				dist--; // dist = match distance - 1
				dyn_ltree[(Tree._length_code[lc] + LITERALS + 1) * 2]++;
				dyn_dtree[Tree.d_code(dist) * 2]++;
			}

			if ((last_lit & 0x1fff) === 0 && level > 2) {
				// Compute an upper bound for the compressed length
				out_length = last_lit * 8;
				in_length = strstart - block_start;
				for (dcode = 0; dcode < D_CODES; dcode++) {
					out_length += dyn_dtree[dcode * 2] * (5 + Tree.extra_dbits[dcode]);
				}
				out_length >>>= 3;
				if ((matches < Math.floor(last_lit / 2)) && out_length < Math.floor(in_length / 2))
					return true;
			}

			return (last_lit == lit_bufsize - 1);
			// We avoid equality with lit_bufsize because of wraparound at 64K
			// on 16 bit machines and because stored blocks are restricted to
			// 64K-1 bytes.
		}

		// Send the block data compressed using the given Huffman trees
		function compress_block(ltree, dtree) {
			var dist; // distance of matched string
			var lc; // match length or unmatched char (if dist === 0)
			var lx = 0; // running index in l_buf
			var code; // the code to send
			var extra; // number of extra bits to send

			if (last_lit !== 0) {
				do {
					dist = ((that.pending_buf[d_buf + lx * 2] << 8) & 0xff00) | (that.pending_buf[d_buf + lx * 2 + 1] & 0xff);
					lc = (that.pending_buf[l_buf + lx]) & 0xff;
					lx++;

					if (dist === 0) {
						send_code(lc, ltree); // send a literal byte
					} else {
						// Here, lc is the match length - MIN_MATCH
						code = Tree._length_code[lc];

						send_code(code + LITERALS + 1, ltree); // send the length
						// code
						extra = Tree.extra_lbits[code];
						if (extra !== 0) {
							lc -= Tree.base_length[code];
							send_bits(lc, extra); // send the extra length bits
						}
						dist--; // dist is now the match distance - 1
						code = Tree.d_code(dist);

						send_code(code, dtree); // send the distance code
						extra = Tree.extra_dbits[code];
						if (extra !== 0) {
							dist -= Tree.base_dist[code];
							send_bits(dist, extra); // send the extra distance bits
						}
					} // literal or match pair ?

					// Check that the overlay between pending_buf and d_buf+l_buf is
					// ok:
				} while (lx < last_lit);
			}

			send_code(END_BLOCK, ltree);
			last_eob_len = ltree[END_BLOCK * 2 + 1];
		}

		// Flush the bit buffer and align the output on a byte boundary
		function bi_windup() {
			if (bi_valid > 8) {
				put_short(bi_buf);
			} else if (bi_valid > 0) {
				put_byte(bi_buf & 0xff);
			}
			bi_buf = 0;
			bi_valid = 0;
		}

		// Copy a stored block, storing first the length and its
		// one's complement if requested.
		function copy_block(buf, // the input data
		len, // its length
		header // true if block header must be written
		) {
			bi_windup(); // align on byte boundary
			last_eob_len = 8; // enough lookahead for inflate

			if (header) {
				put_short(len);
				put_short(~len);
			}

			that.pending_buf.set(window.subarray(buf, buf + len), that.pending);
			that.pending += len;
		}

		// Send a stored block
		function _tr_stored_block(buf, // input block
		stored_len, // length of input block
		eof // true if this is the last block for a file
		) {
			send_bits((STORED_BLOCK << 1) + (eof ? 1 : 0), 3); // send block type
			copy_block(buf, stored_len, true); // with header
		}

		// Determine the best encoding for the current block: dynamic trees, static
		// trees or store, and output the encoded block to the zip file.
		function _tr_flush_block(buf, // input block, or NULL if too old
		stored_len, // length of input block
		eof // true if this is the last block for a file
		) {
			var opt_lenb, static_lenb;// opt_len and static_len in bytes
			var max_blindex = 0; // index of last bit length code of non zero freq

			// Build the Huffman trees unless a stored block is forced
			if (level > 0) {
				// Construct the literal and distance trees
				l_desc.build_tree(that);

				d_desc.build_tree(that);

				// At this point, opt_len and static_len are the total bit lengths
				// of
				// the compressed block data, excluding the tree representations.

				// Build the bit length tree for the above two trees, and get the
				// index
				// in bl_order of the last bit length code to send.
				max_blindex = build_bl_tree();

				// Determine the best encoding. Compute first the block length in
				// bytes
				opt_lenb = (that.opt_len + 3 + 7) >>> 3;
				static_lenb = (that.static_len + 3 + 7) >>> 3;

				if (static_lenb <= opt_lenb)
					opt_lenb = static_lenb;
			} else {
				opt_lenb = static_lenb = stored_len + 5; // force a stored block
			}

			if ((stored_len + 4 <= opt_lenb) && buf != -1) {
				// 4: two words for the lengths
				// The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
				// Otherwise we can't have processed more than WSIZE input bytes
				// since
				// the last block flush, because compression would have been
				// successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
				// transform a block into a stored block.
				_tr_stored_block(buf, stored_len, eof);
			} else if (static_lenb == opt_lenb) {
				send_bits((STATIC_TREES << 1) + (eof ? 1 : 0), 3);
				compress_block(StaticTree.static_ltree, StaticTree.static_dtree);
			} else {
				send_bits((DYN_TREES << 1) + (eof ? 1 : 0), 3);
				send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
				compress_block(dyn_ltree, dyn_dtree);
			}

			// The above check is made mod 2^32, for files larger than 512 MB
			// and uLong implemented on 32 bits.

			init_block();

			if (eof) {
				bi_windup();
			}
		}

		function flush_block_only(eof) {
			_tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
			block_start = strstart;
			strm.flush_pending();
		}

		// Fill the window when the lookahead becomes insufficient.
		// Updates strstart and lookahead.
		//
		// IN assertion: lookahead < MIN_LOOKAHEAD
		// OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
		// At least one byte has been read, or avail_in === 0; reads are
		// performed for at least two bytes (required for the zip translate_eol
		// option -- not supported here).
		function fill_window() {
			var n, m;
			var p;
			var more; // Amount of free space at the end of the window.

			do {
				more = (window_size - lookahead - strstart);

				// Deal with !@#$% 64K limit:
				if (more === 0 && strstart === 0 && lookahead === 0) {
					more = w_size;
				} else if (more == -1) {
					// Very unlikely, but possible on 16 bit machine if strstart ==
					// 0
					// and lookahead == 1 (input done one byte at time)
					more--;

					// If the window is almost full and there is insufficient
					// lookahead,
					// move the upper half to the lower one to make room in the
					// upper half.
				} else if (strstart >= w_size + w_size - MIN_LOOKAHEAD) {
					window.set(window.subarray(w_size, w_size + w_size), 0);

					match_start -= w_size;
					strstart -= w_size; // we now have strstart >= MAX_DIST
					block_start -= w_size;

					// Slide the hash table (could be avoided with 32 bit values
					// at the expense of memory usage). We slide even when level ==
					// 0
					// to keep the hash table consistent if we switch back to level
					// > 0
					// later. (Using level 0 permanently is not an optimal usage of
					// zlib, so we don't care about this pathological case.)

					n = hash_size;
					p = n;
					do {
						m = (head[--p] & 0xffff);
						head[p] = (m >= w_size ? m - w_size : 0);
					} while (--n !== 0);

					n = w_size;
					p = n;
					do {
						m = (prev[--p] & 0xffff);
						prev[p] = (m >= w_size ? m - w_size : 0);
						// If n is not on any hash chain, prev[n] is garbage but
						// its value will never be used.
					} while (--n !== 0);
					more += w_size;
				}

				if (strm.avail_in === 0)
					return;

				// If there was no sliding:
				// strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
				// more == window_size - lookahead - strstart
				// => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
				// => more >= window_size - 2*WSIZE + 2
				// In the BIG_MEM or MMAP case (not yet supported),
				// window_size == input_size + MIN_LOOKAHEAD &&
				// strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
				// Otherwise, window_size == 2*WSIZE so more >= 2.
				// If there was sliding, more >= WSIZE. So in all cases, more >= 2.

				n = strm.read_buf(window, strstart + lookahead, more);
				lookahead += n;

				// Initialize the hash value now that we have some input:
				if (lookahead >= MIN_MATCH) {
					ins_h = window[strstart] & 0xff;
					ins_h = (((ins_h) << hash_shift) ^ (window[strstart + 1] & 0xff)) & hash_mask;
				}
				// If the whole input has less than MIN_MATCH bytes, ins_h is
				// garbage,
				// but this is not important since only literal bytes will be
				// emitted.
			} while (lookahead < MIN_LOOKAHEAD && strm.avail_in !== 0);
		}

		// Copy without compression as much as possible from the input stream,
		// return
		// the current block state.
		// This function does not insert new strings in the dictionary since
		// uncompressible data is probably not useful. This function is used
		// only for the level=0 compression option.
		// NOTE: this function should be optimized to avoid extra copying from
		// window to pending_buf.
		function deflate_stored(flush) {
			// Stored blocks are limited to 0xffff bytes, pending_buf is limited
			// to pending_buf_size, and each stored block has a 5 byte header:

			var max_block_size = 0xffff;
			var max_start;

			if (max_block_size > pending_buf_size - 5) {
				max_block_size = pending_buf_size - 5;
			}

			// Copy as much as possible from input to output:
			while (true) {
				// Fill the window as much as possible:
				if (lookahead <= 1) {
					fill_window();
					if (lookahead === 0 && flush == Z_NO_FLUSH)
						return NeedMore;
					if (lookahead === 0)
						break; // flush the current block
				}

				strstart += lookahead;
				lookahead = 0;

				// Emit a stored block if pending_buf will be full:
				max_start = block_start + max_block_size;
				if (strstart === 0 || strstart >= max_start) {
					// strstart === 0 is possible when wraparound on 16-bit machine
					lookahead = (strstart - max_start);
					strstart = max_start;

					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;

				}

				// Flush if we may have to slide, otherwise block_start may become
				// negative and the data will be gone:
				if (strstart - block_start >= w_size - MIN_LOOKAHEAD) {
					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;
				}
			}

			flush_block_only(flush == Z_FINISH);
			if (strm.avail_out === 0)
				return (flush == Z_FINISH) ? FinishStarted : NeedMore;

			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		function longest_match(cur_match) {
			var chain_length = max_chain_length; // max hash chain length
			var scan = strstart; // current string
			var match; // matched string
			var len; // length of current match
			var best_len = prev_length; // best match length so far
			var limit = strstart > (w_size - MIN_LOOKAHEAD) ? strstart - (w_size - MIN_LOOKAHEAD) : 0;
			var _nice_match = nice_match;

			// Stop when cur_match becomes <= limit. To simplify the code,
			// we prevent matches with the string of window index 0.

			var wmask = w_mask;

			var strend = strstart + MAX_MATCH;
			var scan_end1 = window[scan + best_len - 1];
			var scan_end = window[scan + best_len];

			// The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of
			// 16.
			// It is easy to get rid of this optimization if necessary.

			// Do not waste too much time if we already have a good match:
			if (prev_length >= good_match) {
				chain_length >>= 2;
			}

			// Do not look for matches beyond the end of the input. This is
			// necessary
			// to make deflate deterministic.
			if (_nice_match > lookahead)
				_nice_match = lookahead;

			do {
				match = cur_match;

				// Skip to next match if the match length cannot increase
				// or if the match length is less than 2:
				if (window[match + best_len] != scan_end || window[match + best_len - 1] != scan_end1 || window[match] != window[scan]
						|| window[++match] != window[scan + 1])
					continue;

				// The check at best_len-1 can be removed because it will be made
				// again later. (This heuristic is not always a win.)
				// It is not necessary to compare scan[2] and match[2] since they
				// are always equal when the other bytes match, given that
				// the hash keys are equal and that HASH_BITS >= 8.
				scan += 2;
				match++;

				// We check for insufficient lookahead only every 8th comparison;
				// the 256th check will be made at strstart+258.
				do {
				} while (window[++scan] == window[++match] && window[++scan] == window[++match] && window[++scan] == window[++match]
						&& window[++scan] == window[++match] && window[++scan] == window[++match] && window[++scan] == window[++match]
						&& window[++scan] == window[++match] && window[++scan] == window[++match] && scan < strend);

				len = MAX_MATCH - (strend - scan);
				scan = strend - MAX_MATCH;

				if (len > best_len) {
					match_start = cur_match;
					best_len = len;
					if (len >= _nice_match)
						break;
					scan_end1 = window[scan + best_len - 1];
					scan_end = window[scan + best_len];
				}

			} while ((cur_match = (prev[cur_match & wmask] & 0xffff)) > limit && --chain_length !== 0);

			if (best_len <= lookahead)
				return best_len;
			return lookahead;
		}

		// Compress as much as possible from the input stream, return the current
		// block state.
		// This function does not perform lazy evaluation of matches and inserts
		// new strings in the dictionary only for unmatched strings or for short
		// matches. It is used only for the fast compression options.
		function deflate_fast(flush) {
			// short hash_head = 0; // head of the hash chain
			var hash_head = 0; // head of the hash chain
			var bflush; // set if current block must be flushed

			while (true) {
				// Make sure that we always have enough lookahead, except
				// at the end of the input file. We need MAX_MATCH bytes
				// for the next match, plus MIN_MATCH bytes to insert the
				// string following the next match.
				if (lookahead < MIN_LOOKAHEAD) {
					fill_window();
					if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
						return NeedMore;
					}
					if (lookahead === 0)
						break; // flush the current block
				}

				// Insert the string window[strstart .. strstart+2] in the
				// dictionary, and set hash_head to the head of the hash chain:
				if (lookahead >= MIN_MATCH) {
					ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;

					// prev[strstart&w_mask]=hash_head=head[ins_h];
					hash_head = (head[ins_h] & 0xffff);
					prev[strstart & w_mask] = head[ins_h];
					head[ins_h] = strstart;
				}

				// Find the longest match, discarding those <= prev_length.
				// At this point we have always match_length < MIN_MATCH

				if (hash_head !== 0 && ((strstart - hash_head) & 0xffff) <= w_size - MIN_LOOKAHEAD) {
					// To simplify the code, we prevent matches with the string
					// of window index 0 (in particular we have to avoid a match
					// of the string with itself at the start of the input file).
					if (strategy != Z_HUFFMAN_ONLY) {
						match_length = longest_match(hash_head);
					}
					// longest_match() sets match_start
				}
				if (match_length >= MIN_MATCH) {
					// check_match(strstart, match_start, match_length);

					bflush = _tr_tally(strstart - match_start, match_length - MIN_MATCH);

					lookahead -= match_length;

					// Insert new strings in the hash table only if the match length
					// is not too large. This saves time but degrades compression.
					if (match_length <= max_lazy_match && lookahead >= MIN_MATCH) {
						match_length--; // string at strstart already in hash table
						do {
							strstart++;

							ins_h = ((ins_h << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
							// prev[strstart&w_mask]=hash_head=head[ins_h];
							hash_head = (head[ins_h] & 0xffff);
							prev[strstart & w_mask] = head[ins_h];
							head[ins_h] = strstart;

							// strstart never exceeds WSIZE-MAX_MATCH, so there are
							// always MIN_MATCH bytes ahead.
						} while (--match_length !== 0);
						strstart++;
					} else {
						strstart += match_length;
						match_length = 0;
						ins_h = window[strstart] & 0xff;

						ins_h = (((ins_h) << hash_shift) ^ (window[strstart + 1] & 0xff)) & hash_mask;
						// If lookahead < MIN_MATCH, ins_h is garbage, but it does
						// not
						// matter since it will be recomputed at next deflate call.
					}
				} else {
					// No match, output a literal byte

					bflush = _tr_tally(0, window[strstart] & 0xff);
					lookahead--;
					strstart++;
				}
				if (bflush) {

					flush_block_only(false);
					if (strm.avail_out === 0)
						return NeedMore;
				}
			}

			flush_block_only(flush == Z_FINISH);
			if (strm.avail_out === 0) {
				if (flush == Z_FINISH)
					return FinishStarted;
				else
					return NeedMore;
			}
			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		// Same as above, but achieves better compression. We use a lazy
		// evaluation for matches: a match is finally adopted only if there is
		// no better match at the next window position.
		function deflate_slow(flush) {
			// short hash_head = 0; // head of hash chain
			var hash_head = 0; // head of hash chain
			var bflush; // set if current block must be flushed
			var max_insert;

			// Process the input block.
			while (true) {
				// Make sure that we always have enough lookahead, except
				// at the end of the input file. We need MAX_MATCH bytes
				// for the next match, plus MIN_MATCH bytes to insert the
				// string following the next match.

				if (lookahead < MIN_LOOKAHEAD) {
					fill_window();
					if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
						return NeedMore;
					}
					if (lookahead === 0)
						break; // flush the current block
				}

				// Insert the string window[strstart .. strstart+2] in the
				// dictionary, and set hash_head to the head of the hash chain:

				if (lookahead >= MIN_MATCH) {
					ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
					// prev[strstart&w_mask]=hash_head=head[ins_h];
					hash_head = (head[ins_h] & 0xffff);
					prev[strstart & w_mask] = head[ins_h];
					head[ins_h] = strstart;
				}

				// Find the longest match, discarding those <= prev_length.
				prev_length = match_length;
				prev_match = match_start;
				match_length = MIN_MATCH - 1;

				if (hash_head !== 0 && prev_length < max_lazy_match && ((strstart - hash_head) & 0xffff) <= w_size - MIN_LOOKAHEAD) {
					// To simplify the code, we prevent matches with the string
					// of window index 0 (in particular we have to avoid a match
					// of the string with itself at the start of the input file).

					if (strategy != Z_HUFFMAN_ONLY) {
						match_length = longest_match(hash_head);
					}
					// longest_match() sets match_start

					if (match_length <= 5 && (strategy == Z_FILTERED || (match_length == MIN_MATCH && strstart - match_start > 4096))) {

						// If prev_match is also MIN_MATCH, match_start is garbage
						// but we will ignore the current match anyway.
						match_length = MIN_MATCH - 1;
					}
				}

				// If there was a match at the previous step and the current
				// match is not better, output the previous match:
				if (prev_length >= MIN_MATCH && match_length <= prev_length) {
					max_insert = strstart + lookahead - MIN_MATCH;
					// Do not insert strings in hash table beyond this.

					// check_match(strstart-1, prev_match, prev_length);

					bflush = _tr_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);

					// Insert in hash table all strings up to the end of the match.
					// strstart-1 and strstart are already inserted. If there is not
					// enough lookahead, the last two strings are not inserted in
					// the hash table.
					lookahead -= prev_length - 1;
					prev_length -= 2;
					do {
						if (++strstart <= max_insert) {
							ins_h = (((ins_h) << hash_shift) ^ (window[(strstart) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
							// prev[strstart&w_mask]=hash_head=head[ins_h];
							hash_head = (head[ins_h] & 0xffff);
							prev[strstart & w_mask] = head[ins_h];
							head[ins_h] = strstart;
						}
					} while (--prev_length !== 0);
					match_available = 0;
					match_length = MIN_MATCH - 1;
					strstart++;

					if (bflush) {
						flush_block_only(false);
						if (strm.avail_out === 0)
							return NeedMore;
					}
				} else if (match_available !== 0) {

					// If there was no match at the previous position, output a
					// single literal. If there was a match but the current match
					// is longer, truncate the previous match to a single literal.

					bflush = _tr_tally(0, window[strstart - 1] & 0xff);

					if (bflush) {
						flush_block_only(false);
					}
					strstart++;
					lookahead--;
					if (strm.avail_out === 0)
						return NeedMore;
				} else {
					// There is no previous match to compare with, wait for
					// the next step to decide.

					match_available = 1;
					strstart++;
					lookahead--;
				}
			}

			if (match_available !== 0) {
				bflush = _tr_tally(0, window[strstart - 1] & 0xff);
				match_available = 0;
			}
			flush_block_only(flush == Z_FINISH);

			if (strm.avail_out === 0) {
				if (flush == Z_FINISH)
					return FinishStarted;
				else
					return NeedMore;
			}

			return flush == Z_FINISH ? FinishDone : BlockDone;
		}

		function deflateReset(strm) {
			strm.total_in = strm.total_out = 0;
			strm.msg = null; //
			
			that.pending = 0;
			that.pending_out = 0;

			status = BUSY_STATE;

			last_flush = Z_NO_FLUSH;

			tr_init();
			lm_init();
			return Z_OK;
		}

		that.deflateInit = function(strm, _level, bits, _method, memLevel, _strategy) {
			if (!_method)
				_method = Z_DEFLATED;
			if (!memLevel)
				memLevel = DEF_MEM_LEVEL;
			if (!_strategy)
				_strategy = Z_DEFAULT_STRATEGY;

			// byte[] my_version=ZLIB_VERSION;

			//
			// if (!version || version[0] != my_version[0]
			// || stream_size != sizeof(z_stream)) {
			// return Z_VERSION_ERROR;
			// }

			strm.msg = null;

			if (_level == Z_DEFAULT_COMPRESSION)
				_level = 6;

			if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || _method != Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0
					|| _strategy > Z_HUFFMAN_ONLY) {
				return Z_STREAM_ERROR;
			}

			strm.dstate = that;

			w_bits = bits;
			w_size = 1 << w_bits;
			w_mask = w_size - 1;

			hash_bits = memLevel + 7;
			hash_size = 1 << hash_bits;
			hash_mask = hash_size - 1;
			hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH);

			window = new Uint8Array(w_size * 2);
			prev = [];
			head = [];

			lit_bufsize = 1 << (memLevel + 6); // 16K elements by default

			// We overlay pending_buf and d_buf+l_buf. This works since the average
			// output size for (length,distance) codes is <= 24 bits.
			that.pending_buf = new Uint8Array(lit_bufsize * 4);
			pending_buf_size = lit_bufsize * 4;

			d_buf = Math.floor(lit_bufsize / 2);
			l_buf = (1 + 2) * lit_bufsize;

			level = _level;

			strategy = _strategy;
			method = _method & 0xff;

			return deflateReset(strm);
		};

		that.deflateEnd = function() {
			if (status != INIT_STATE && status != BUSY_STATE && status != FINISH_STATE) {
				return Z_STREAM_ERROR;
			}
			// Deallocate in reverse order of allocations:
			that.pending_buf = null;
			head = null;
			prev = null;
			window = null;
			// free
			that.dstate = null;
			return status == BUSY_STATE ? Z_DATA_ERROR : Z_OK;
		};

		that.deflateParams = function(strm, _level, _strategy) {
			var err = Z_OK;

			if (_level == Z_DEFAULT_COMPRESSION) {
				_level = 6;
			}
			if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
				return Z_STREAM_ERROR;
			}

			if (config_table[level].func != config_table[_level].func && strm.total_in !== 0) {
				// Flush the last buffer:
				err = strm.deflate(Z_PARTIAL_FLUSH);
			}

			if (level != _level) {
				level = _level;
				max_lazy_match = config_table[level].max_lazy;
				good_match = config_table[level].good_length;
				nice_match = config_table[level].nice_length;
				max_chain_length = config_table[level].max_chain;
			}
			strategy = _strategy;
			return err;
		};

		that.deflateSetDictionary = function(strm, dictionary, dictLength) {
			var length = dictLength;
			var n, index = 0;

			if (!dictionary || status != INIT_STATE)
				return Z_STREAM_ERROR;

			if (length < MIN_MATCH)
				return Z_OK;
			if (length > w_size - MIN_LOOKAHEAD) {
				length = w_size - MIN_LOOKAHEAD;
				index = dictLength - length; // use the tail of the dictionary
			}
			window.set(dictionary.subarray(index, index + length), 0);

			strstart = length;
			block_start = length;

			// Insert all strings in the hash table (except for the last two bytes).
			// s->lookahead stays null, so s->ins_h will be recomputed at the next
			// call of fill_window.

			ins_h = window[0] & 0xff;
			ins_h = (((ins_h) << hash_shift) ^ (window[1] & 0xff)) & hash_mask;

			for (n = 0; n <= length - MIN_MATCH; n++) {
				ins_h = (((ins_h) << hash_shift) ^ (window[(n) + (MIN_MATCH - 1)] & 0xff)) & hash_mask;
				prev[n & w_mask] = head[ins_h];
				head[ins_h] = n;
			}
			return Z_OK;
		};

		that.deflate = function(_strm, flush) {
			var i, header, level_flags, old_flush, bstate;

			if (flush > Z_FINISH || flush < 0) {
				return Z_STREAM_ERROR;
			}

			if (!_strm.next_out || (!_strm.next_in && _strm.avail_in !== 0) || (status == FINISH_STATE && flush != Z_FINISH)) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_STREAM_ERROR)];
				return Z_STREAM_ERROR;
			}
			if (_strm.avail_out === 0) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			strm = _strm; // just in case
			old_flush = last_flush;
			last_flush = flush;

			// Write the zlib header
			if (status == INIT_STATE) {
				header = (Z_DEFLATED + ((w_bits - 8) << 4)) << 8;
				level_flags = ((level - 1) & 0xff) >> 1;

				if (level_flags > 3)
					level_flags = 3;
				header |= (level_flags << 6);
				if (strstart !== 0)
					header |= PRESET_DICT;
				header += 31 - (header % 31);

				status = BUSY_STATE;
				putShortMSB(header);
			}

			// Flush as much pending output as possible
			if (that.pending !== 0) {
				strm.flush_pending();
				if (strm.avail_out === 0) {
					// console.log(" avail_out==0");
					// Since avail_out is 0, deflate will be called again with
					// more output space, but possibly with both pending and
					// avail_in equal to zero. There won't be anything to do,
					// but this is not an error situation so make sure we
					// return OK instead of BUF_ERROR at next call of deflate:
					last_flush = -1;
					return Z_OK;
				}

				// Make sure there is something to do and avoid duplicate
				// consecutive
				// flushes. For repeated and useless calls with Z_FINISH, we keep
				// returning Z_STREAM_END instead of Z_BUFF_ERROR.
			} else if (strm.avail_in === 0 && flush <= old_flush && flush != Z_FINISH) {
				strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			// User must not provide more input after the first FINISH:
			if (status == FINISH_STATE && strm.avail_in !== 0) {
				_strm.msg = z_errmsg[Z_NEED_DICT - (Z_BUF_ERROR)];
				return Z_BUF_ERROR;
			}

			// Start a new block or continue the current one.
			if (strm.avail_in !== 0 || lookahead !== 0 || (flush != Z_NO_FLUSH && status != FINISH_STATE)) {
				bstate = -1;
				switch (config_table[level].func) {
				case STORED:
					bstate = deflate_stored(flush);
					break;
				case FAST:
					bstate = deflate_fast(flush);
					break;
				case SLOW:
					bstate = deflate_slow(flush);
					break;
				default:
				}

				if (bstate == FinishStarted || bstate == FinishDone) {
					status = FINISH_STATE;
				}
				if (bstate == NeedMore || bstate == FinishStarted) {
					if (strm.avail_out === 0) {
						last_flush = -1; // avoid BUF_ERROR next call, see above
					}
					return Z_OK;
					// If flush != Z_NO_FLUSH && avail_out === 0, the next call
					// of deflate should use the same flush parameter to make sure
					// that the flush is complete. So we don't have to output an
					// empty block here, this will be done at next call. This also
					// ensures that for a very small output buffer, we emit at most
					// one empty block.
				}

				if (bstate == BlockDone) {
					if (flush == Z_PARTIAL_FLUSH) {
						_tr_align();
					} else { // FULL_FLUSH or SYNC_FLUSH
						_tr_stored_block(0, 0, false);
						// For a full flush, this empty block will be recognized
						// as a special marker by inflate_sync().
						if (flush == Z_FULL_FLUSH) {
							// state.head[s.hash_size-1]=0;
							for (i = 0; i < hash_size/*-1*/; i++)
								// forget history
								head[i] = 0;
						}
					}
					strm.flush_pending();
					if (strm.avail_out === 0) {
						last_flush = -1; // avoid BUF_ERROR at next call, see above
						return Z_OK;
					}
				}
			}

			if (flush != Z_FINISH)
				return Z_OK;
			return Z_STREAM_END;
		};
	}

	// ZStream

	function ZStream() {
		var that = this;
		that.next_in_index = 0;
		that.next_out_index = 0;
		// that.next_in; // next input byte
		that.avail_in = 0; // number of bytes available at next_in
		that.total_in = 0; // total nb of input bytes read so far
		// that.next_out; // next output byte should be put there
		that.avail_out = 0; // remaining free space at next_out
		that.total_out = 0; // total nb of bytes output so far
		// that.msg;
		// that.dstate;
	}

	ZStream.prototype = {
		deflateInit : function(level, bits) {
			var that = this;
			that.dstate = new Deflate();
			if (!bits)
				bits = MAX_BITS;
			return that.dstate.deflateInit(that, level, bits);
		},

		deflate : function(flush) {
			var that = this;
			if (!that.dstate) {
				return Z_STREAM_ERROR;
			}
			return that.dstate.deflate(that, flush);
		},

		deflateEnd : function() {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			var ret = that.dstate.deflateEnd();
			that.dstate = null;
			return ret;
		},

		deflateParams : function(level, strategy) {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			return that.dstate.deflateParams(that, level, strategy);
		},

		deflateSetDictionary : function(dictionary, dictLength) {
			var that = this;
			if (!that.dstate)
				return Z_STREAM_ERROR;
			return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
		},

		// Read a new buffer from the current input stream, update the
		// total number of bytes read. All deflate() input goes through
		// this function so some applications may wish to modify it to avoid
		// allocating a large strm->next_in buffer and copying from it.
		// (See also flush_pending()).
		read_buf : function(buf, start, size) {
			var that = this;
			var len = that.avail_in;
			if (len > size)
				len = size;
			if (len === 0)
				return 0;
			that.avail_in -= len;
			buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
			that.next_in_index += len;
			that.total_in += len;
			return len;
		},

		// Flush as much pending output as possible. All deflate() output goes
		// through this function so some applications may wish to modify it
		// to avoid allocating a large strm->next_out buffer and copying into it.
		// (See also read_buf()).
		flush_pending : function() {
			var that = this;
			var len = that.dstate.pending;

			if (len > that.avail_out)
				len = that.avail_out;
			if (len === 0)
				return;

			// if (that.dstate.pending_buf.length <= that.dstate.pending_out || that.next_out.length <= that.next_out_index
			// || that.dstate.pending_buf.length < (that.dstate.pending_out + len) || that.next_out.length < (that.next_out_index +
			// len)) {
			// console.log(that.dstate.pending_buf.length + ", " + that.dstate.pending_out + ", " + that.next_out.length + ", " +
			// that.next_out_index + ", " + len);
			// console.log("avail_out=" + that.avail_out);
			// }

			that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);

			that.next_out_index += len;
			that.dstate.pending_out += len;
			that.total_out += len;
			that.avail_out -= len;
			that.dstate.pending -= len;
			if (that.dstate.pending === 0) {
				that.dstate.pending_out = 0;
			}
		}
	};

	// Deflater

	function Deflater(level) {
		var that = this;
		var z = new ZStream();
		var bufsize = 512;
		var flush = Z_NO_FLUSH;
		var buf = new Uint8Array(bufsize);

		if (typeof level == "undefined")
			level = Z_DEFAULT_COMPRESSION;
		z.deflateInit(level);
		z.next_out = buf;

		that.append = function(data, onprogress) {
			var err, buffers = [], lastIndex = 0, bufferIndex = 0, bufferSize = 0, array;
			if (!data.length)
				return;
			z.next_in_index = 0;
			z.next_in = data;
			z.avail_in = data.length;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				err = z.deflate(flush);
				if (err != Z_OK)
					throw "deflating: " + z.msg;
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
			var err, buffers = [], bufferIndex = 0, bufferSize = 0, array;
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
				err = z.deflate(Z_FINISH);
				if (err != Z_STREAM_END && err != Z_OK)
					throw "deflating: " + z.msg;
				if (bufsize - z.avail_out > 0)
					buffers.push(new Uint8Array(buf.subarray(0, z.next_out_index)));
				bufferSize += z.next_out_index;
			} while (z.avail_in > 0 || z.avail_out === 0);
			z.deflateEnd();
			array = new Uint8Array(bufferSize);
			buffers.forEach(function(chunk) {
				array.set(chunk, bufferIndex);
				bufferIndex += chunk.length;
			});
			return array;
		};
	}

	var deflater;

	if (obj.zip)
		obj.zip.Deflater = Deflater;
	else {
		deflater = new Deflater();
		obj.addEventListener("message", function(event) {
			var message = event.data;
			if (message.init) {
				deflater = new Deflater(message.level);
				obj.postMessage({
					oninit : true
				});
			}
			if (message.append)
				obj.postMessage({
					onappend : true,
					data : deflater.append(message.data, function(current) {
						obj.postMessage({
							progress : true,
							current : current
						});
					})
				});
			if (message.flush)
				obj.postMessage({
					onflush : true,
					data : deflater.flush()
				});
		}, false);
	}

})(self);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDcyOTA0OWM3NjE4Yjc0NjNmOTYud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL1RoaXJkUGFydHkvV29ya2Vycy9kZWZsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1tY2Z3OGdkeXdlYSEuL25vZGVfbW9kdWxlcy9zdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/aWQ9eHBhYjI2c3d6aGchLi9wYWNrYWdlcy90ZXJyaWFqcy9idWlsZHByb2Nlc3MvcmVtb3ZlQ2VzaXVtRGVidWdQcmFnbWFzLmpzIS4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvVGhpcmRQYXJ0eS9Xb3JrZXJzL2RlZmxhdGUuanNcIik7XG4iLCIvKlxuIENvcHlyaWdodCAoYykgMjAxMyBHaWxkYXMgTG9ybWVhdS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4gMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBcbiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gXG4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAzLiBUaGUgbmFtZXMgb2YgdGhlIGF1dGhvcnMgbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG4gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBgYEFTIElTJycgQU5EIEFOWSBFWFBSRVNTRUQgT1IgSU1QTElFRCBXQVJSQU5USUVTLFxuIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgSkNSQUZULFxuIElOQy4gT1IgQU5ZIENPTlRSSUJVVE9SUyBUTyBUSElTIFNPRlRXQVJFIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4gSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLFxuIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSxcbiBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qXG4gKiBUaGlzIHByb2dyYW0gaXMgYmFzZWQgb24gSlpsaWIgMS4wLjIgeW1uaywgSkNyYWZ0LEluYy5cbiAqIEpabGliIGlzIGJhc2VkIG9uIHpsaWItMS4xLjMsIHNvIGFsbCBjcmVkaXQgc2hvdWxkIGdvIGF1dGhvcnNcbiAqIEplYW4tbG91cCBHYWlsbHkoamxvdXBAZ3ppcC5vcmcpIGFuZCBNYXJrIEFkbGVyKG1hZGxlckBhbHVtbmkuY2FsdGVjaC5lZHUpXG4gKiBhbmQgY29udHJpYnV0b3JzIG9mIHpsaWIuXG4gKi9cblxuKGZ1bmN0aW9uKG9iaikge1xuXG5cdC8vIEdsb2JhbFxuXG5cdHZhciBNQVhfQklUUyA9IDE1O1xuXHR2YXIgRF9DT0RFUyA9IDMwO1xuXHR2YXIgQkxfQ09ERVMgPSAxOTtcblxuXHR2YXIgTEVOR1RIX0NPREVTID0gMjk7XG5cdHZhciBMSVRFUkFMUyA9IDI1Njtcblx0dmFyIExfQ09ERVMgPSAoTElURVJBTFMgKyAxICsgTEVOR1RIX0NPREVTKTtcblx0dmFyIEhFQVBfU0laRSA9ICgyICogTF9DT0RFUyArIDEpO1xuXG5cdHZhciBFTkRfQkxPQ0sgPSAyNTY7XG5cblx0Ly8gQml0IGxlbmd0aCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JMX0JJVFMgYml0c1xuXHR2YXIgTUFYX0JMX0JJVFMgPSA3O1xuXG5cdC8vIHJlcGVhdCBwcmV2aW91cyBiaXQgbGVuZ3RoIDMtNiB0aW1lcyAoMiBiaXRzIG9mIHJlcGVhdCBjb3VudClcblx0dmFyIFJFUF8zXzYgPSAxNjtcblxuXHQvLyByZXBlYXQgYSB6ZXJvIGxlbmd0aCAzLTEwIHRpbWVzICgzIGJpdHMgb2YgcmVwZWF0IGNvdW50KVxuXHR2YXIgUkVQWl8zXzEwID0gMTc7XG5cblx0Ly8gcmVwZWF0IGEgemVybyBsZW5ndGggMTEtMTM4IHRpbWVzICg3IGJpdHMgb2YgcmVwZWF0IGNvdW50KVxuXHR2YXIgUkVQWl8xMV8xMzggPSAxODtcblxuXHQvLyBUaGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcyBhcmUgc2VudCBpbiBvcmRlciBvZiBkZWNyZWFzaW5nXG5cdC8vIHByb2JhYmlsaXR5LCB0byBhdm9pZCB0cmFuc21pdHRpbmcgdGhlIGxlbmd0aHMgZm9yIHVudXNlZCBiaXRcblx0Ly8gbGVuZ3RoIGNvZGVzLlxuXG5cdHZhciBCdWZfc2l6ZSA9IDggKiAyO1xuXG5cdC8vIEpabGliIHZlcnNpb24gOiBcIjEuMC4yXCJcblx0dmFyIFpfREVGQVVMVF9DT01QUkVTU0lPTiA9IC0xO1xuXG5cdC8vIGNvbXByZXNzaW9uIHN0cmF0ZWd5XG5cdHZhciBaX0ZJTFRFUkVEID0gMTtcblx0dmFyIFpfSFVGRk1BTl9PTkxZID0gMjtcblx0dmFyIFpfREVGQVVMVF9TVFJBVEVHWSA9IDA7XG5cblx0dmFyIFpfTk9fRkxVU0ggPSAwO1xuXHR2YXIgWl9QQVJUSUFMX0ZMVVNIID0gMTtcblx0dmFyIFpfRlVMTF9GTFVTSCA9IDM7XG5cdHZhciBaX0ZJTklTSCA9IDQ7XG5cblx0dmFyIFpfT0sgPSAwO1xuXHR2YXIgWl9TVFJFQU1fRU5EID0gMTtcblx0dmFyIFpfTkVFRF9ESUNUID0gMjtcblx0dmFyIFpfU1RSRUFNX0VSUk9SID0gLTI7XG5cdHZhciBaX0RBVEFfRVJST1IgPSAtMztcblx0dmFyIFpfQlVGX0VSUk9SID0gLTU7XG5cblx0Ly8gVHJlZVxuXG5cdC8vIHNlZSBkZWZpbml0aW9uIG9mIGFycmF5IGRpc3RfY29kZSBiZWxvd1xuXHR2YXIgX2Rpc3RfY29kZSA9IFsgMCwgMSwgMiwgMywgNCwgNCwgNSwgNSwgNiwgNiwgNiwgNiwgNywgNywgNywgNywgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOSwgOSwgOSwgOSwgOSwgOSwgOSwgOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsXG5cdFx0XHQxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTEsIDExLCAxMSwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMixcblx0XHRcdDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTIsIDEyLCAxMiwgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLFxuXHRcdFx0MTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTMsIDEzLCAxMywgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsXG5cdFx0XHQxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCwgMTQsIDE0LCAxNCxcblx0XHRcdDE0LCAxNCwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LFxuXHRcdFx0MTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAxNSwgMTUsIDE1LCAwLCAwLCAxNiwgMTcsIDE4LCAxOCwgMTksIDE5LFxuXHRcdFx0MjAsIDIwLCAyMCwgMjAsIDIxLCAyMSwgMjEsIDIxLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG5cdFx0XHQyNCwgMjQsIDI0LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNixcblx0XHRcdDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LFxuXHRcdFx0MjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsXG5cdFx0XHQyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOSxcblx0XHRcdDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LFxuXHRcdFx0MjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5IF07XG5cblx0ZnVuY3Rpb24gVHJlZSgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHQvLyBkeW5fdHJlZTsgLy8gdGhlIGR5bmFtaWMgdHJlZVxuXHRcdC8vIG1heF9jb2RlOyAvLyBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3lcblx0XHQvLyBzdGF0X2Rlc2M7IC8vIHRoZSBjb3JyZXNwb25kaW5nIHN0YXRpYyB0cmVlXG5cblx0XHQvLyBDb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzIGZvciBhIHRyZWUgYW5kIHVwZGF0ZSB0aGUgdG90YWwgYml0XG5cdFx0Ly8gbGVuZ3RoXG5cdFx0Ly8gZm9yIHRoZSBjdXJyZW50IGJsb2NrLlxuXHRcdC8vIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBmcmVxIGFuZCBkYWQgYXJlIHNldCwgaGVhcFtoZWFwX21heF0gYW5kXG5cdFx0Ly8gYWJvdmUgYXJlIHRoZSB0cmVlIG5vZGVzIHNvcnRlZCBieSBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cblx0XHQvLyBPVVQgYXNzZXJ0aW9uczogdGhlIGZpZWxkIGxlbiBpcyBzZXQgdG8gdGhlIG9wdGltYWwgYml0IGxlbmd0aCwgdGhlXG5cdFx0Ly8gYXJyYXkgYmxfY291bnQgY29udGFpbnMgdGhlIGZyZXF1ZW5jaWVzIGZvciBlYWNoIGJpdCBsZW5ndGguXG5cdFx0Ly8gVGhlIGxlbmd0aCBvcHRfbGVuIGlzIHVwZGF0ZWQ7IHN0YXRpY19sZW4gaXMgYWxzbyB1cGRhdGVkIGlmIHN0cmVlIGlzXG5cdFx0Ly8gbm90IG51bGwuXG5cdFx0ZnVuY3Rpb24gZ2VuX2JpdGxlbihzKSB7XG5cdFx0XHR2YXIgdHJlZSA9IHRoYXQuZHluX3RyZWU7XG5cdFx0XHR2YXIgc3RyZWUgPSB0aGF0LnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcblx0XHRcdHZhciBleHRyYSA9IHRoYXQuc3RhdF9kZXNjLmV4dHJhX2JpdHM7XG5cdFx0XHR2YXIgYmFzZSA9IHRoYXQuc3RhdF9kZXNjLmV4dHJhX2Jhc2U7XG5cdFx0XHR2YXIgbWF4X2xlbmd0aCA9IHRoYXQuc3RhdF9kZXNjLm1heF9sZW5ndGg7XG5cdFx0XHR2YXIgaDsgLy8gaGVhcCBpbmRleFxuXHRcdFx0dmFyIG4sIG07IC8vIGl0ZXJhdGUgb3ZlciB0aGUgdHJlZSBlbGVtZW50c1xuXHRcdFx0dmFyIGJpdHM7IC8vIGJpdCBsZW5ndGhcblx0XHRcdHZhciB4Yml0czsgLy8gZXh0cmEgYml0c1xuXHRcdFx0dmFyIGY7IC8vIGZyZXF1ZW5jeVxuXHRcdFx0dmFyIG92ZXJmbG93ID0gMDsgLy8gbnVtYmVyIG9mIGVsZW1lbnRzIHdpdGggYml0IGxlbmd0aCB0b28gbGFyZ2VcblxuXHRcdFx0Zm9yIChiaXRzID0gMDsgYml0cyA8PSBNQVhfQklUUzsgYml0cysrKVxuXHRcdFx0XHRzLmJsX2NvdW50W2JpdHNdID0gMDtcblxuXHRcdFx0Ly8gSW4gYSBmaXJzdCBwYXNzLCBjb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzICh3aGljaCBtYXlcblx0XHRcdC8vIG92ZXJmbG93IGluIHRoZSBjYXNlIG9mIHRoZSBiaXQgbGVuZ3RoIHRyZWUpLlxuXHRcdFx0dHJlZVtzLmhlYXBbcy5oZWFwX21heF0gKiAyICsgMV0gPSAwOyAvLyByb290IG9mIHRoZSBoZWFwXG5cblx0XHRcdGZvciAoaCA9IHMuaGVhcF9tYXggKyAxOyBoIDwgSEVBUF9TSVpFOyBoKyspIHtcblx0XHRcdFx0biA9IHMuaGVhcFtoXTtcblx0XHRcdFx0Yml0cyA9IHRyZWVbdHJlZVtuICogMiArIDFdICogMiArIDFdICsgMTtcblx0XHRcdFx0aWYgKGJpdHMgPiBtYXhfbGVuZ3RoKSB7XG5cdFx0XHRcdFx0Yml0cyA9IG1heF9sZW5ndGg7XG5cdFx0XHRcdFx0b3ZlcmZsb3crKztcblx0XHRcdFx0fVxuXHRcdFx0XHR0cmVlW24gKiAyICsgMV0gPSBiaXRzO1xuXHRcdFx0XHQvLyBXZSBvdmVyd3JpdGUgdHJlZVtuKjIrMV0gd2hpY2ggaXMgbm8gbG9uZ2VyIG5lZWRlZFxuXG5cdFx0XHRcdGlmIChuID4gdGhhdC5tYXhfY29kZSlcblx0XHRcdFx0XHRjb250aW51ZTsgLy8gbm90IGEgbGVhZiBub2RlXG5cblx0XHRcdFx0cy5ibF9jb3VudFtiaXRzXSsrO1xuXHRcdFx0XHR4Yml0cyA9IDA7XG5cdFx0XHRcdGlmIChuID49IGJhc2UpXG5cdFx0XHRcdFx0eGJpdHMgPSBleHRyYVtuIC0gYmFzZV07XG5cdFx0XHRcdGYgPSB0cmVlW24gKiAyXTtcblx0XHRcdFx0cy5vcHRfbGVuICs9IGYgKiAoYml0cyArIHhiaXRzKTtcblx0XHRcdFx0aWYgKHN0cmVlKVxuXHRcdFx0XHRcdHMuc3RhdGljX2xlbiArPSBmICogKHN0cmVlW24gKiAyICsgMV0gKyB4Yml0cyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAob3ZlcmZsb3cgPT09IDApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0Ly8gVGhpcyBoYXBwZW5zIGZvciBleGFtcGxlIG9uIG9iajIgYW5kIHBpYyBvZiB0aGUgQ2FsZ2FyeSBjb3JwdXNcblx0XHRcdC8vIEZpbmQgdGhlIGZpcnN0IGJpdCBsZW5ndGggd2hpY2ggY291bGQgaW5jcmVhc2U6XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGJpdHMgPSBtYXhfbGVuZ3RoIC0gMTtcblx0XHRcdFx0d2hpbGUgKHMuYmxfY291bnRbYml0c10gPT09IDApXG5cdFx0XHRcdFx0Yml0cy0tO1xuXHRcdFx0XHRzLmJsX2NvdW50W2JpdHNdLS07IC8vIG1vdmUgb25lIGxlYWYgZG93biB0aGUgdHJlZVxuXHRcdFx0XHRzLmJsX2NvdW50W2JpdHMgKyAxXSArPSAyOyAvLyBtb3ZlIG9uZSBvdmVyZmxvdyBpdGVtIGFzIGl0cyBicm90aGVyXG5cdFx0XHRcdHMuYmxfY291bnRbbWF4X2xlbmd0aF0tLTtcblx0XHRcdFx0Ly8gVGhlIGJyb3RoZXIgb2YgdGhlIG92ZXJmbG93IGl0ZW0gYWxzbyBtb3ZlcyBvbmUgc3RlcCB1cCxcblx0XHRcdFx0Ly8gYnV0IHRoaXMgZG9lcyBub3QgYWZmZWN0IGJsX2NvdW50W21heF9sZW5ndGhdXG5cdFx0XHRcdG92ZXJmbG93IC09IDI7XG5cdFx0XHR9IHdoaWxlIChvdmVyZmxvdyA+IDApO1xuXG5cdFx0XHRmb3IgKGJpdHMgPSBtYXhfbGVuZ3RoOyBiaXRzICE9PSAwOyBiaXRzLS0pIHtcblx0XHRcdFx0biA9IHMuYmxfY291bnRbYml0c107XG5cdFx0XHRcdHdoaWxlIChuICE9PSAwKSB7XG5cdFx0XHRcdFx0bSA9IHMuaGVhcFstLWhdO1xuXHRcdFx0XHRcdGlmIChtID4gdGhhdC5tYXhfY29kZSlcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICh0cmVlW20gKiAyICsgMV0gIT0gYml0cykge1xuXHRcdFx0XHRcdFx0cy5vcHRfbGVuICs9IChiaXRzIC0gdHJlZVttICogMiArIDFdKSAqIHRyZWVbbSAqIDJdO1xuXHRcdFx0XHRcdFx0dHJlZVttICogMiArIDFdID0gYml0cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bi0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV2ZXJzZSB0aGUgZmlyc3QgbGVuIGJpdHMgb2YgYSBjb2RlLCB1c2luZyBzdHJhaWdodGZvcndhcmQgY29kZSAoYVxuXHRcdC8vIGZhc3RlclxuXHRcdC8vIG1ldGhvZCB3b3VsZCB1c2UgYSB0YWJsZSlcblx0XHQvLyBJTiBhc3NlcnRpb246IDEgPD0gbGVuIDw9IDE1XG5cdFx0ZnVuY3Rpb24gYmlfcmV2ZXJzZShjb2RlLCAvLyB0aGUgdmFsdWUgdG8gaW52ZXJ0XG5cdFx0bGVuIC8vIGl0cyBiaXQgbGVuZ3RoXG5cdFx0KSB7XG5cdFx0XHR2YXIgcmVzID0gMDtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmVzIHw9IGNvZGUgJiAxO1xuXHRcdFx0XHRjb2RlID4+Pj0gMTtcblx0XHRcdFx0cmVzIDw8PSAxO1xuXHRcdFx0fSB3aGlsZSAoLS1sZW4gPiAwKTtcblx0XHRcdHJldHVybiByZXMgPj4+IDE7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGNvZGVzIGZvciBhIGdpdmVuIHRyZWUgYW5kIGJpdCBjb3VudHMgKHdoaWNoIG5lZWQgbm90IGJlXG5cdFx0Ly8gb3B0aW1hbCkuXG5cdFx0Ly8gSU4gYXNzZXJ0aW9uOiB0aGUgYXJyYXkgYmxfY291bnQgY29udGFpbnMgdGhlIGJpdCBsZW5ndGggc3RhdGlzdGljcyBmb3Jcblx0XHQvLyB0aGUgZ2l2ZW4gdHJlZSBhbmQgdGhlIGZpZWxkIGxlbiBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuXHRcdC8vIE9VVCBhc3NlcnRpb246IHRoZSBmaWVsZCBjb2RlIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMgb2Ygbm9uXG5cdFx0Ly8gemVybyBjb2RlIGxlbmd0aC5cblx0XHRmdW5jdGlvbiBnZW5fY29kZXModHJlZSwgLy8gdGhlIHRyZWUgdG8gZGVjb3JhdGVcblx0XHRtYXhfY29kZSwgLy8gbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5XG5cdFx0YmxfY291bnQgLy8gbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aFxuXHRcdCkge1xuXHRcdFx0dmFyIG5leHRfY29kZSA9IFtdOyAvLyBuZXh0IGNvZGUgdmFsdWUgZm9yIGVhY2hcblx0XHRcdC8vIGJpdCBsZW5ndGhcblx0XHRcdHZhciBjb2RlID0gMDsgLy8gcnVubmluZyBjb2RlIHZhbHVlXG5cdFx0XHR2YXIgYml0czsgLy8gYml0IGluZGV4XG5cdFx0XHR2YXIgbjsgLy8gY29kZSBpbmRleFxuXHRcdFx0dmFyIGxlbjtcblxuXHRcdFx0Ly8gVGhlIGRpc3RyaWJ1dGlvbiBjb3VudHMgYXJlIGZpcnN0IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGNvZGUgdmFsdWVzXG5cdFx0XHQvLyB3aXRob3V0IGJpdCByZXZlcnNhbC5cblx0XHRcdGZvciAoYml0cyA9IDE7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuXHRcdFx0XHRuZXh0X2NvZGVbYml0c10gPSBjb2RlID0gKChjb2RlICsgYmxfY291bnRbYml0cyAtIDFdKSA8PCAxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hlY2sgdGhhdCB0aGUgYml0IGNvdW50cyBpbiBibF9jb3VudCBhcmUgY29uc2lzdGVudC4gVGhlIGxhc3QgY29kZVxuXHRcdFx0Ly8gbXVzdCBiZSBhbGwgb25lcy5cblx0XHRcdC8vIEFzc2VydCAoY29kZSArIGJsX2NvdW50W01BWF9CSVRTXS0xID09ICgxPDxNQVhfQklUUyktMSxcblx0XHRcdC8vIFwiaW5jb25zaXN0ZW50IGJpdCBjb3VudHNcIik7XG5cdFx0XHQvLyBUcmFjZXYoKHN0ZGVycixcIlxcbmdlbl9jb2RlczogbWF4X2NvZGUgJWQgXCIsIG1heF9jb2RlKSk7XG5cblx0XHRcdGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuXHRcdFx0XHRsZW4gPSB0cmVlW24gKiAyICsgMV07XG5cdFx0XHRcdGlmIChsZW4gPT09IDApXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdC8vIE5vdyByZXZlcnNlIHRoZSBiaXRzXG5cdFx0XHRcdHRyZWVbbiAqIDJdID0gYmlfcmV2ZXJzZShuZXh0X2NvZGVbbGVuXSsrLCBsZW4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvbnN0cnVjdCBvbmUgSHVmZm1hbiB0cmVlIGFuZCBhc3NpZ25zIHRoZSBjb2RlIGJpdCBzdHJpbmdzIGFuZCBsZW5ndGhzLlxuXHRcdC8vIFVwZGF0ZSB0aGUgdG90YWwgYml0IGxlbmd0aCBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG5cdFx0Ly8gSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGQgZnJlcSBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuXHRcdC8vIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGRzIGxlbiBhbmQgY29kZSBhcmUgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhcblx0XHQvLyBhbmQgY29ycmVzcG9uZGluZyBjb2RlLiBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpc1xuXHRcdC8vIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpcyBub3QgbnVsbC4gVGhlIGZpZWxkIG1heF9jb2RlIGlzIHNldC5cblx0XHR0aGF0LmJ1aWxkX3RyZWUgPSBmdW5jdGlvbihzKSB7XG5cdFx0XHR2YXIgdHJlZSA9IHRoYXQuZHluX3RyZWU7XG5cdFx0XHR2YXIgc3RyZWUgPSB0aGF0LnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcblx0XHRcdHZhciBlbGVtcyA9IHRoYXQuc3RhdF9kZXNjLmVsZW1zO1xuXHRcdFx0dmFyIG4sIG07IC8vIGl0ZXJhdGUgb3ZlciBoZWFwIGVsZW1lbnRzXG5cdFx0XHR2YXIgbWF4X2NvZGUgPSAtMTsgLy8gbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5XG5cdFx0XHR2YXIgbm9kZTsgLy8gbmV3IG5vZGUgYmVpbmcgY3JlYXRlZFxuXG5cdFx0XHQvLyBDb25zdHJ1Y3QgdGhlIGluaXRpYWwgaGVhcCwgd2l0aCBsZWFzdCBmcmVxdWVudCBlbGVtZW50IGluXG5cdFx0XHQvLyBoZWFwWzFdLiBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLlxuXHRcdFx0Ly8gaGVhcFswXSBpcyBub3QgdXNlZC5cblx0XHRcdHMuaGVhcF9sZW4gPSAwO1xuXHRcdFx0cy5oZWFwX21heCA9IEhFQVBfU0laRTtcblxuXHRcdFx0Zm9yIChuID0gMDsgbiA8IGVsZW1zOyBuKyspIHtcblx0XHRcdFx0aWYgKHRyZWVbbiAqIDJdICE9PSAwKSB7XG5cdFx0XHRcdFx0cy5oZWFwWysrcy5oZWFwX2xlbl0gPSBtYXhfY29kZSA9IG47XG5cdFx0XHRcdFx0cy5kZXB0aFtuXSA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHJlZVtuICogMiArIDFdID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGUgcGt6aXAgZm9ybWF0IHJlcXVpcmVzIHRoYXQgYXQgbGVhc3Qgb25lIGRpc3RhbmNlIGNvZGUgZXhpc3RzLFxuXHRcdFx0Ly8gYW5kIHRoYXQgYXQgbGVhc3Qgb25lIGJpdCBzaG91bGQgYmUgc2VudCBldmVuIGlmIHRoZXJlIGlzIG9ubHkgb25lXG5cdFx0XHQvLyBwb3NzaWJsZSBjb2RlLiBTbyB0byBhdm9pZCBzcGVjaWFsIGNoZWNrcyBsYXRlciBvbiB3ZSBmb3JjZSBhdCBsZWFzdFxuXHRcdFx0Ly8gdHdvIGNvZGVzIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeS5cblx0XHRcdHdoaWxlIChzLmhlYXBfbGVuIDwgMikge1xuXHRcdFx0XHRub2RlID0gcy5oZWFwWysrcy5oZWFwX2xlbl0gPSBtYXhfY29kZSA8IDIgPyArK21heF9jb2RlIDogMDtcblx0XHRcdFx0dHJlZVtub2RlICogMl0gPSAxO1xuXHRcdFx0XHRzLmRlcHRoW25vZGVdID0gMDtcblx0XHRcdFx0cy5vcHRfbGVuLS07XG5cdFx0XHRcdGlmIChzdHJlZSlcblx0XHRcdFx0XHRzLnN0YXRpY19sZW4gLT0gc3RyZWVbbm9kZSAqIDIgKyAxXTtcblx0XHRcdFx0Ly8gbm9kZSBpcyAwIG9yIDEgc28gaXQgZG9lcyBub3QgaGF2ZSBleHRyYSBiaXRzXG5cdFx0XHR9XG5cdFx0XHR0aGF0Lm1heF9jb2RlID0gbWF4X2NvZGU7XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyBoZWFwW2hlYXBfbGVuLzIrMSAuLiBoZWFwX2xlbl0gYXJlIGxlYXZlcyBvZiB0aGUgdHJlZSxcblx0XHRcdC8vIGVzdGFibGlzaCBzdWItaGVhcHMgb2YgaW5jcmVhc2luZyBsZW5ndGhzOlxuXG5cdFx0XHRmb3IgKG4gPSBNYXRoLmZsb29yKHMuaGVhcF9sZW4gLyAyKTsgbiA+PSAxOyBuLS0pXG5cdFx0XHRcdHMucHFkb3duaGVhcCh0cmVlLCBuKTtcblxuXHRcdFx0Ly8gQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgYnkgcmVwZWF0ZWRseSBjb21iaW5pbmcgdGhlIGxlYXN0IHR3b1xuXHRcdFx0Ly8gZnJlcXVlbnQgbm9kZXMuXG5cblx0XHRcdG5vZGUgPSBlbGVtczsgLy8gbmV4dCBpbnRlcm5hbCBub2RlIG9mIHRoZSB0cmVlXG5cdFx0XHRkbyB7XG5cdFx0XHRcdC8vIG4gPSBub2RlIG9mIGxlYXN0IGZyZXF1ZW5jeVxuXHRcdFx0XHRuID0gcy5oZWFwWzFdO1xuXHRcdFx0XHRzLmhlYXBbMV0gPSBzLmhlYXBbcy5oZWFwX2xlbi0tXTtcblx0XHRcdFx0cy5wcWRvd25oZWFwKHRyZWUsIDEpO1xuXHRcdFx0XHRtID0gcy5oZWFwWzFdOyAvLyBtID0gbm9kZSBvZiBuZXh0IGxlYXN0IGZyZXF1ZW5jeVxuXG5cdFx0XHRcdHMuaGVhcFstLXMuaGVhcF9tYXhdID0gbjsgLy8ga2VlcCB0aGUgbm9kZXMgc29ydGVkIGJ5IGZyZXF1ZW5jeVxuXHRcdFx0XHRzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IG07XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIGEgbmV3IG5vZGUgZmF0aGVyIG9mIG4gYW5kIG1cblx0XHRcdFx0dHJlZVtub2RlICogMl0gPSAodHJlZVtuICogMl0gKyB0cmVlW20gKiAyXSk7XG5cdFx0XHRcdHMuZGVwdGhbbm9kZV0gPSBNYXRoLm1heChzLmRlcHRoW25dLCBzLmRlcHRoW21dKSArIDE7XG5cdFx0XHRcdHRyZWVbbiAqIDIgKyAxXSA9IHRyZWVbbSAqIDIgKyAxXSA9IG5vZGU7XG5cblx0XHRcdFx0Ly8gYW5kIGluc2VydCB0aGUgbmV3IG5vZGUgaW4gdGhlIGhlYXBcblx0XHRcdFx0cy5oZWFwWzFdID0gbm9kZSsrO1xuXHRcdFx0XHRzLnBxZG93bmhlYXAodHJlZSwgMSk7XG5cdFx0XHR9IHdoaWxlIChzLmhlYXBfbGVuID49IDIpO1xuXG5cdFx0XHRzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IHMuaGVhcFsxXTtcblxuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgdGhlIGZpZWxkcyBmcmVxIGFuZCBkYWQgYXJlIHNldC4gV2UgY2FuIG5vd1xuXHRcdFx0Ly8gZ2VuZXJhdGUgdGhlIGJpdCBsZW5ndGhzLlxuXG5cdFx0XHRnZW5fYml0bGVuKHMpO1xuXG5cdFx0XHQvLyBUaGUgZmllbGQgbGVuIGlzIG5vdyBzZXQsIHdlIGNhbiBnZW5lcmF0ZSB0aGUgYml0IGNvZGVzXG5cdFx0XHRnZW5fY29kZXModHJlZSwgdGhhdC5tYXhfY29kZSwgcy5ibF9jb3VudCk7XG5cdFx0fTtcblxuXHR9XG5cblx0VHJlZS5fbGVuZ3RoX2NvZGUgPSBbIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMiwgMTIsIDEyLCAxMiwgMTMsIDEzLCAxMywgMTMsIDE0LCAxNCwgMTQsIDE0LCAxNSwgMTUsIDE1LCAxNSwgMTYsIDE2LCAxNiwgMTYsXG5cdFx0XHQxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCxcblx0XHRcdDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuXHRcdFx0MjIsIDIyLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG5cdFx0XHQyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSxcblx0XHRcdDI1LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LCAyNiwgMjYsIDI2LFxuXHRcdFx0MjYsIDI2LCAyNiwgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI3LCAyNywgMjcsIDI4IF07XG5cblx0VHJlZS5iYXNlX2xlbmd0aCA9IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgMTAsIDEyLCAxNCwgMTYsIDIwLCAyNCwgMjgsIDMyLCA0MCwgNDgsIDU2LCA2NCwgODAsIDk2LCAxMTIsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMCBdO1xuXG5cdFRyZWUuYmFzZV9kaXN0ID0gWyAwLCAxLCAyLCAzLCA0LCA2LCA4LCAxMiwgMTYsIDI0LCAzMiwgNDgsIDY0LCA5NiwgMTI4LCAxOTIsIDI1NiwgMzg0LCA1MTIsIDc2OCwgMTAyNCwgMTUzNiwgMjA0OCwgMzA3MiwgNDA5NiwgNjE0NCwgODE5MiwgMTIyODgsIDE2Mzg0LFxuXHRcdFx0MjQ1NzYgXTtcblxuXHQvLyBNYXBwaW5nIGZyb20gYSBkaXN0YW5jZSB0byBhIGRpc3RhbmNlIGNvZGUuIGRpc3QgaXMgdGhlIGRpc3RhbmNlIC0gMSBhbmRcblx0Ly8gbXVzdCBub3QgaGF2ZSBzaWRlIGVmZmVjdHMuIF9kaXN0X2NvZGVbMjU2XSBhbmQgX2Rpc3RfY29kZVsyNTddIGFyZSBuZXZlclxuXHQvLyB1c2VkLlxuXHRUcmVlLmRfY29kZSA9IGZ1bmN0aW9uKGRpc3QpIHtcblx0XHRyZXR1cm4gKChkaXN0KSA8IDI1NiA/IF9kaXN0X2NvZGVbZGlzdF0gOiBfZGlzdF9jb2RlWzI1NiArICgoZGlzdCkgPj4+IDcpXSk7XG5cdH07XG5cblx0Ly8gZXh0cmEgYml0cyBmb3IgZWFjaCBsZW5ndGggY29kZVxuXHRUcmVlLmV4dHJhX2xiaXRzID0gWyAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAzLCAzLCAzLCAzLCA0LCA0LCA0LCA0LCA1LCA1LCA1LCA1LCAwIF07XG5cblx0Ly8gZXh0cmEgYml0cyBmb3IgZWFjaCBkaXN0YW5jZSBjb2RlXG5cdFRyZWUuZXh0cmFfZGJpdHMgPSBbIDAsIDAsIDAsIDAsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDUsIDYsIDYsIDcsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMiwgMTIsIDEzLCAxMyBdO1xuXG5cdC8vIGV4dHJhIGJpdHMgZm9yIGVhY2ggYml0IGxlbmd0aCBjb2RlXG5cdFRyZWUuZXh0cmFfYmxiaXRzID0gWyAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyLCAzLCA3IF07XG5cblx0VHJlZS5ibF9vcmRlciA9IFsgMTYsIDE3LCAxOCwgMCwgOCwgNywgOSwgNiwgMTAsIDUsIDExLCA0LCAxMiwgMywgMTMsIDIsIDE0LCAxLCAxNSBdO1xuXG5cdC8vIFN0YXRpY1RyZWVcblxuXHRmdW5jdGlvbiBTdGF0aWNUcmVlKHN0YXRpY190cmVlLCBleHRyYV9iaXRzLCBleHRyYV9iYXNlLCBlbGVtcywgbWF4X2xlbmd0aCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGF0LnN0YXRpY190cmVlID0gc3RhdGljX3RyZWU7XG5cdFx0dGhhdC5leHRyYV9iaXRzID0gZXh0cmFfYml0cztcblx0XHR0aGF0LmV4dHJhX2Jhc2UgPSBleHRyYV9iYXNlO1xuXHRcdHRoYXQuZWxlbXMgPSBlbGVtcztcblx0XHR0aGF0Lm1heF9sZW5ndGggPSBtYXhfbGVuZ3RoO1xuXHR9XG5cblx0U3RhdGljVHJlZS5zdGF0aWNfbHRyZWUgPSBbIDEyLCA4LCAxNDAsIDgsIDc2LCA4LCAyMDQsIDgsIDQ0LCA4LCAxNzIsIDgsIDEwOCwgOCwgMjM2LCA4LCAyOCwgOCwgMTU2LCA4LCA5MiwgOCwgMjIwLCA4LCA2MCwgOCwgMTg4LCA4LCAxMjQsIDgsIDI1MiwgOCwgMiwgOCxcblx0XHRcdDEzMCwgOCwgNjYsIDgsIDE5NCwgOCwgMzQsIDgsIDE2MiwgOCwgOTgsIDgsIDIyNiwgOCwgMTgsIDgsIDE0NiwgOCwgODIsIDgsIDIxMCwgOCwgNTAsIDgsIDE3OCwgOCwgMTE0LCA4LCAyNDIsIDgsIDEwLCA4LCAxMzgsIDgsIDc0LCA4LCAyMDIsIDgsIDQyLFxuXHRcdFx0OCwgMTcwLCA4LCAxMDYsIDgsIDIzNCwgOCwgMjYsIDgsIDE1NCwgOCwgOTAsIDgsIDIxOCwgOCwgNTgsIDgsIDE4NiwgOCwgMTIyLCA4LCAyNTAsIDgsIDYsIDgsIDEzNCwgOCwgNzAsIDgsIDE5OCwgOCwgMzgsIDgsIDE2NiwgOCwgMTAyLCA4LCAyMzAsIDgsXG5cdFx0XHQyMiwgOCwgMTUwLCA4LCA4NiwgOCwgMjE0LCA4LCA1NCwgOCwgMTgyLCA4LCAxMTgsIDgsIDI0NiwgOCwgMTQsIDgsIDE0MiwgOCwgNzgsIDgsIDIwNiwgOCwgNDYsIDgsIDE3NCwgOCwgMTEwLCA4LCAyMzgsIDgsIDMwLCA4LCAxNTgsIDgsIDk0LCA4LFxuXHRcdFx0MjIyLCA4LCA2MiwgOCwgMTkwLCA4LCAxMjYsIDgsIDI1NCwgOCwgMSwgOCwgMTI5LCA4LCA2NSwgOCwgMTkzLCA4LCAzMywgOCwgMTYxLCA4LCA5NywgOCwgMjI1LCA4LCAxNywgOCwgMTQ1LCA4LCA4MSwgOCwgMjA5LCA4LCA0OSwgOCwgMTc3LCA4LCAxMTMsXG5cdFx0XHQ4LCAyNDEsIDgsIDksIDgsIDEzNywgOCwgNzMsIDgsIDIwMSwgOCwgNDEsIDgsIDE2OSwgOCwgMTA1LCA4LCAyMzMsIDgsIDI1LCA4LCAxNTMsIDgsIDg5LCA4LCAyMTcsIDgsIDU3LCA4LCAxODUsIDgsIDEyMSwgOCwgMjQ5LCA4LCA1LCA4LCAxMzMsIDgsXG5cdFx0XHQ2OSwgOCwgMTk3LCA4LCAzNywgOCwgMTY1LCA4LCAxMDEsIDgsIDIyOSwgOCwgMjEsIDgsIDE0OSwgOCwgODUsIDgsIDIxMywgOCwgNTMsIDgsIDE4MSwgOCwgMTE3LCA4LCAyNDUsIDgsIDEzLCA4LCAxNDEsIDgsIDc3LCA4LCAyMDUsIDgsIDQ1LCA4LFxuXHRcdFx0MTczLCA4LCAxMDksIDgsIDIzNywgOCwgMjksIDgsIDE1NywgOCwgOTMsIDgsIDIyMSwgOCwgNjEsIDgsIDE4OSwgOCwgMTI1LCA4LCAyNTMsIDgsIDE5LCA5LCAyNzUsIDksIDE0NywgOSwgNDAzLCA5LCA4MywgOSwgMzM5LCA5LCAyMTEsIDksIDQ2NywgOSxcblx0XHRcdDUxLCA5LCAzMDcsIDksIDE3OSwgOSwgNDM1LCA5LCAxMTUsIDksIDM3MSwgOSwgMjQzLCA5LCA0OTksIDksIDExLCA5LCAyNjcsIDksIDEzOSwgOSwgMzk1LCA5LCA3NSwgOSwgMzMxLCA5LCAyMDMsIDksIDQ1OSwgOSwgNDMsIDksIDI5OSwgOSwgMTcxLCA5LFxuXHRcdFx0NDI3LCA5LCAxMDcsIDksIDM2MywgOSwgMjM1LCA5LCA0OTEsIDksIDI3LCA5LCAyODMsIDksIDE1NSwgOSwgNDExLCA5LCA5MSwgOSwgMzQ3LCA5LCAyMTksIDksIDQ3NSwgOSwgNTksIDksIDMxNSwgOSwgMTg3LCA5LCA0NDMsIDksIDEyMywgOSwgMzc5LFxuXHRcdFx0OSwgMjUxLCA5LCA1MDcsIDksIDcsIDksIDI2MywgOSwgMTM1LCA5LCAzOTEsIDksIDcxLCA5LCAzMjcsIDksIDE5OSwgOSwgNDU1LCA5LCAzOSwgOSwgMjk1LCA5LCAxNjcsIDksIDQyMywgOSwgMTAzLCA5LCAzNTksIDksIDIzMSwgOSwgNDg3LCA5LCAyMyxcblx0XHRcdDksIDI3OSwgOSwgMTUxLCA5LCA0MDcsIDksIDg3LCA5LCAzNDMsIDksIDIxNSwgOSwgNDcxLCA5LCA1NSwgOSwgMzExLCA5LCAxODMsIDksIDQzOSwgOSwgMTE5LCA5LCAzNzUsIDksIDI0NywgOSwgNTAzLCA5LCAxNSwgOSwgMjcxLCA5LCAxNDMsIDksXG5cdFx0XHQzOTksIDksIDc5LCA5LCAzMzUsIDksIDIwNywgOSwgNDYzLCA5LCA0NywgOSwgMzAzLCA5LCAxNzUsIDksIDQzMSwgOSwgMTExLCA5LCAzNjcsIDksIDIzOSwgOSwgNDk1LCA5LCAzMSwgOSwgMjg3LCA5LCAxNTksIDksIDQxNSwgOSwgOTUsIDksIDM1MSwgOSxcblx0XHRcdDIyMywgOSwgNDc5LCA5LCA2MywgOSwgMzE5LCA5LCAxOTEsIDksIDQ0NywgOSwgMTI3LCA5LCAzODMsIDksIDI1NSwgOSwgNTExLCA5LCAwLCA3LCA2NCwgNywgMzIsIDcsIDk2LCA3LCAxNiwgNywgODAsIDcsIDQ4LCA3LCAxMTIsIDcsIDgsIDcsIDcyLCA3LFxuXHRcdFx0NDAsIDcsIDEwNCwgNywgMjQsIDcsIDg4LCA3LCA1NiwgNywgMTIwLCA3LCA0LCA3LCA2OCwgNywgMzYsIDcsIDEwMCwgNywgMjAsIDcsIDg0LCA3LCA1MiwgNywgMTE2LCA3LCAzLCA4LCAxMzEsIDgsIDY3LCA4LCAxOTUsIDgsIDM1LCA4LCAxNjMsIDgsXG5cdFx0XHQ5OSwgOCwgMjI3LCA4IF07XG5cblx0U3RhdGljVHJlZS5zdGF0aWNfZHRyZWUgPSBbIDAsIDUsIDE2LCA1LCA4LCA1LCAyNCwgNSwgNCwgNSwgMjAsIDUsIDEyLCA1LCAyOCwgNSwgMiwgNSwgMTgsIDUsIDEwLCA1LCAyNiwgNSwgNiwgNSwgMjIsIDUsIDE0LCA1LCAzMCwgNSwgMSwgNSwgMTcsIDUsIDksIDUsXG5cdFx0XHQyNSwgNSwgNSwgNSwgMjEsIDUsIDEzLCA1LCAyOSwgNSwgMywgNSwgMTksIDUsIDExLCA1LCAyNywgNSwgNywgNSwgMjMsIDUgXTtcblxuXHRTdGF0aWNUcmVlLnN0YXRpY19sX2Rlc2MgPSBuZXcgU3RhdGljVHJlZShTdGF0aWNUcmVlLnN0YXRpY19sdHJlZSwgVHJlZS5leHRyYV9sYml0cywgTElURVJBTFMgKyAxLCBMX0NPREVTLCBNQVhfQklUUyk7XG5cblx0U3RhdGljVHJlZS5zdGF0aWNfZF9kZXNjID0gbmV3IFN0YXRpY1RyZWUoU3RhdGljVHJlZS5zdGF0aWNfZHRyZWUsIFRyZWUuZXh0cmFfZGJpdHMsIDAsIERfQ09ERVMsIE1BWF9CSVRTKTtcblxuXHRTdGF0aWNUcmVlLnN0YXRpY19ibF9kZXNjID0gbmV3IFN0YXRpY1RyZWUobnVsbCwgVHJlZS5leHRyYV9ibGJpdHMsIDAsIEJMX0NPREVTLCBNQVhfQkxfQklUUyk7XG5cblx0Ly8gRGVmbGF0ZVxuXG5cdHZhciBNQVhfTUVNX0xFVkVMID0gOTtcblx0dmFyIERFRl9NRU1fTEVWRUwgPSA4O1xuXG5cdGZ1bmN0aW9uIENvbmZpZyhnb29kX2xlbmd0aCwgbWF4X2xhenksIG5pY2VfbGVuZ3RoLCBtYXhfY2hhaW4sIGZ1bmMpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5nb29kX2xlbmd0aCA9IGdvb2RfbGVuZ3RoO1xuXHRcdHRoYXQubWF4X2xhenkgPSBtYXhfbGF6eTtcblx0XHR0aGF0Lm5pY2VfbGVuZ3RoID0gbmljZV9sZW5ndGg7XG5cdFx0dGhhdC5tYXhfY2hhaW4gPSBtYXhfY2hhaW47XG5cdFx0dGhhdC5mdW5jID0gZnVuYztcblx0fVxuXG5cdHZhciBTVE9SRUQgPSAwO1xuXHR2YXIgRkFTVCA9IDE7XG5cdHZhciBTTE9XID0gMjtcblx0dmFyIGNvbmZpZ190YWJsZSA9IFsgbmV3IENvbmZpZygwLCAwLCAwLCAwLCBTVE9SRUQpLCBuZXcgQ29uZmlnKDQsIDQsIDgsIDQsIEZBU1QpLCBuZXcgQ29uZmlnKDQsIDUsIDE2LCA4LCBGQVNUKSwgbmV3IENvbmZpZyg0LCA2LCAzMiwgMzIsIEZBU1QpLFxuXHRcdFx0bmV3IENvbmZpZyg0LCA0LCAxNiwgMTYsIFNMT1cpLCBuZXcgQ29uZmlnKDgsIDE2LCAzMiwgMzIsIFNMT1cpLCBuZXcgQ29uZmlnKDgsIDE2LCAxMjgsIDEyOCwgU0xPVyksIG5ldyBDb25maWcoOCwgMzIsIDEyOCwgMjU2LCBTTE9XKSxcblx0XHRcdG5ldyBDb25maWcoMzIsIDEyOCwgMjU4LCAxMDI0LCBTTE9XKSwgbmV3IENvbmZpZygzMiwgMjU4LCAyNTgsIDQwOTYsIFNMT1cpIF07XG5cblx0dmFyIHpfZXJybXNnID0gWyBcIm5lZWQgZGljdGlvbmFyeVwiLCAvLyBaX05FRURfRElDVFxuXHQvLyAyXG5cdFwic3RyZWFtIGVuZFwiLCAvLyBaX1NUUkVBTV9FTkQgMVxuXHRcIlwiLCAvLyBaX09LIDBcblx0XCJcIiwgLy8gWl9FUlJOTyAoLTEpXG5cdFwic3RyZWFtIGVycm9yXCIsIC8vIFpfU1RSRUFNX0VSUk9SICgtMilcblx0XCJkYXRhIGVycm9yXCIsIC8vIFpfREFUQV9FUlJPUiAoLTMpXG5cdFwiXCIsIC8vIFpfTUVNX0VSUk9SICgtNClcblx0XCJidWZmZXIgZXJyb3JcIiwgLy8gWl9CVUZfRVJST1IgKC01KVxuXHRcIlwiLC8vIFpfVkVSU0lPTl9FUlJPUiAoLTYpXG5cdFwiXCIgXTtcblxuXHQvLyBibG9jayBub3QgY29tcGxldGVkLCBuZWVkIG1vcmUgaW5wdXQgb3IgbW9yZSBvdXRwdXRcblx0dmFyIE5lZWRNb3JlID0gMDtcblxuXHQvLyBibG9jayBmbHVzaCBwZXJmb3JtZWRcblx0dmFyIEJsb2NrRG9uZSA9IDE7XG5cblx0Ly8gZmluaXNoIHN0YXJ0ZWQsIG5lZWQgb25seSBtb3JlIG91dHB1dCBhdCBuZXh0IGRlZmxhdGVcblx0dmFyIEZpbmlzaFN0YXJ0ZWQgPSAyO1xuXG5cdC8vIGZpbmlzaCBkb25lLCBhY2NlcHQgbm8gbW9yZSBpbnB1dCBvciBvdXRwdXRcblx0dmFyIEZpbmlzaERvbmUgPSAzO1xuXG5cdC8vIHByZXNldCBkaWN0aW9uYXJ5IGZsYWcgaW4gemxpYiBoZWFkZXJcblx0dmFyIFBSRVNFVF9ESUNUID0gMHgyMDtcblxuXHR2YXIgSU5JVF9TVEFURSA9IDQyO1xuXHR2YXIgQlVTWV9TVEFURSA9IDExMztcblx0dmFyIEZJTklTSF9TVEFURSA9IDY2NjtcblxuXHQvLyBUaGUgZGVmbGF0ZSBjb21wcmVzc2lvbiBtZXRob2Rcblx0dmFyIFpfREVGTEFURUQgPSA4O1xuXG5cdHZhciBTVE9SRURfQkxPQ0sgPSAwO1xuXHR2YXIgU1RBVElDX1RSRUVTID0gMTtcblx0dmFyIERZTl9UUkVFUyA9IDI7XG5cblx0dmFyIE1JTl9NQVRDSCA9IDM7XG5cdHZhciBNQVhfTUFUQ0ggPSAyNTg7XG5cdHZhciBNSU5fTE9PS0FIRUFEID0gKE1BWF9NQVRDSCArIE1JTl9NQVRDSCArIDEpO1xuXG5cdGZ1bmN0aW9uIHNtYWxsZXIodHJlZSwgbiwgbSwgZGVwdGgpIHtcblx0XHR2YXIgdG4yID0gdHJlZVtuICogMl07XG5cdFx0dmFyIHRtMiA9IHRyZWVbbSAqIDJdO1xuXHRcdHJldHVybiAodG4yIDwgdG0yIHx8ICh0bjIgPT0gdG0yICYmIGRlcHRoW25dIDw9IGRlcHRoW21dKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBEZWZsYXRlKCkge1xuXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHZhciBzdHJtOyAvLyBwb2ludGVyIGJhY2sgdG8gdGhpcyB6bGliIHN0cmVhbVxuXHRcdHZhciBzdGF0dXM7IC8vIGFzIHRoZSBuYW1lIGltcGxpZXNcblx0XHQvLyBwZW5kaW5nX2J1ZjsgLy8gb3V0cHV0IHN0aWxsIHBlbmRpbmdcblx0XHR2YXIgcGVuZGluZ19idWZfc2l6ZTsgLy8gc2l6ZSBvZiBwZW5kaW5nX2J1ZlxuXHRcdC8vIHBlbmRpbmdfb3V0OyAvLyBuZXh0IHBlbmRpbmcgYnl0ZSB0byBvdXRwdXQgdG8gdGhlIHN0cmVhbVxuXHRcdC8vIHBlbmRpbmc7IC8vIG5iIG9mIGJ5dGVzIGluIHRoZSBwZW5kaW5nIGJ1ZmZlclxuXHRcdHZhciBtZXRob2Q7IC8vIFNUT1JFRCAoZm9yIHppcCBvbmx5KSBvciBERUZMQVRFRFxuXHRcdHZhciBsYXN0X2ZsdXNoOyAvLyB2YWx1ZSBvZiBmbHVzaCBwYXJhbSBmb3IgcHJldmlvdXMgZGVmbGF0ZSBjYWxsXG5cblx0XHR2YXIgd19zaXplOyAvLyBMWjc3IHdpbmRvdyBzaXplICgzMksgYnkgZGVmYXVsdClcblx0XHR2YXIgd19iaXRzOyAvLyBsb2cyKHdfc2l6ZSkgKDguLjE2KVxuXHRcdHZhciB3X21hc2s7IC8vIHdfc2l6ZSAtIDFcblxuXHRcdHZhciB3aW5kb3c7XG5cdFx0Ly8gU2xpZGluZyB3aW5kb3cuIElucHV0IGJ5dGVzIGFyZSByZWFkIGludG8gdGhlIHNlY29uZCBoYWxmIG9mIHRoZSB3aW5kb3csXG5cdFx0Ly8gYW5kIG1vdmUgdG8gdGhlIGZpcnN0IGhhbGYgbGF0ZXIgdG8ga2VlcCBhIGRpY3Rpb25hcnkgb2YgYXQgbGVhc3Qgd1NpemVcblx0XHQvLyBieXRlcy4gV2l0aCB0aGlzIG9yZ2FuaXphdGlvbiwgbWF0Y2hlcyBhcmUgbGltaXRlZCB0byBhIGRpc3RhbmNlIG9mXG5cdFx0Ly8gd1NpemUtTUFYX01BVENIIGJ5dGVzLCBidXQgdGhpcyBlbnN1cmVzIHRoYXQgSU8gaXMgYWx3YXlzXG5cdFx0Ly8gcGVyZm9ybWVkIHdpdGggYSBsZW5ndGggbXVsdGlwbGUgb2YgdGhlIGJsb2NrIHNpemUuIEFsc28sIGl0IGxpbWl0c1xuXHRcdC8vIHRoZSB3aW5kb3cgc2l6ZSB0byA2NEssIHdoaWNoIGlzIHF1aXRlIHVzZWZ1bCBvbiBNU0RPUy5cblx0XHQvLyBUbyBkbzogdXNlIHRoZSB1c2VyIGlucHV0IGJ1ZmZlciBhcyBzbGlkaW5nIHdpbmRvdy5cblxuXHRcdHZhciB3aW5kb3dfc2l6ZTtcblx0XHQvLyBBY3R1YWwgc2l6ZSBvZiB3aW5kb3c6IDIqd1NpemUsIGV4Y2VwdCB3aGVuIHRoZSB1c2VyIGlucHV0IGJ1ZmZlclxuXHRcdC8vIGlzIGRpcmVjdGx5IHVzZWQgYXMgc2xpZGluZyB3aW5kb3cuXG5cblx0XHR2YXIgcHJldjtcblx0XHQvLyBMaW5rIHRvIG9sZGVyIHN0cmluZyB3aXRoIHNhbWUgaGFzaCBpbmRleC4gVG8gbGltaXQgdGhlIHNpemUgb2YgdGhpc1xuXHRcdC8vIGFycmF5IHRvIDY0SywgdGhpcyBsaW5rIGlzIG1haW50YWluZWQgb25seSBmb3IgdGhlIGxhc3QgMzJLIHN0cmluZ3MuXG5cdFx0Ly8gQW4gaW5kZXggaW4gdGhpcyBhcnJheSBpcyB0aHVzIGEgd2luZG93IGluZGV4IG1vZHVsbyAzMksuXG5cblx0XHR2YXIgaGVhZDsgLy8gSGVhZHMgb2YgdGhlIGhhc2ggY2hhaW5zIG9yIE5JTC5cblxuXHRcdHZhciBpbnNfaDsgLy8gaGFzaCBpbmRleCBvZiBzdHJpbmcgdG8gYmUgaW5zZXJ0ZWRcblx0XHR2YXIgaGFzaF9zaXplOyAvLyBudW1iZXIgb2YgZWxlbWVudHMgaW4gaGFzaCB0YWJsZVxuXHRcdHZhciBoYXNoX2JpdHM7IC8vIGxvZzIoaGFzaF9zaXplKVxuXHRcdHZhciBoYXNoX21hc2s7IC8vIGhhc2hfc2l6ZS0xXG5cblx0XHQvLyBOdW1iZXIgb2YgYml0cyBieSB3aGljaCBpbnNfaCBtdXN0IGJlIHNoaWZ0ZWQgYXQgZWFjaCBpbnB1dFxuXHRcdC8vIHN0ZXAuIEl0IG11c3QgYmUgc3VjaCB0aGF0IGFmdGVyIE1JTl9NQVRDSCBzdGVwcywgdGhlIG9sZGVzdFxuXHRcdC8vIGJ5dGUgbm8gbG9uZ2VyIHRha2VzIHBhcnQgaW4gdGhlIGhhc2gga2V5LCB0aGF0IGlzOlxuXHRcdC8vIGhhc2hfc2hpZnQgKiBNSU5fTUFUQ0ggPj0gaGFzaF9iaXRzXG5cdFx0dmFyIGhhc2hfc2hpZnQ7XG5cblx0XHQvLyBXaW5kb3cgcG9zaXRpb24gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCBvdXRwdXQgYmxvY2suIEdldHNcblx0XHQvLyBuZWdhdGl2ZSB3aGVuIHRoZSB3aW5kb3cgaXMgbW92ZWQgYmFja3dhcmRzLlxuXG5cdFx0dmFyIGJsb2NrX3N0YXJ0O1xuXG5cdFx0dmFyIG1hdGNoX2xlbmd0aDsgLy8gbGVuZ3RoIG9mIGJlc3QgbWF0Y2hcblx0XHR2YXIgcHJldl9tYXRjaDsgLy8gcHJldmlvdXMgbWF0Y2hcblx0XHR2YXIgbWF0Y2hfYXZhaWxhYmxlOyAvLyBzZXQgaWYgcHJldmlvdXMgbWF0Y2ggZXhpc3RzXG5cdFx0dmFyIHN0cnN0YXJ0OyAvLyBzdGFydCBvZiBzdHJpbmcgdG8gaW5zZXJ0XG5cdFx0dmFyIG1hdGNoX3N0YXJ0OyAvLyBzdGFydCBvZiBtYXRjaGluZyBzdHJpbmdcblx0XHR2YXIgbG9va2FoZWFkOyAvLyBudW1iZXIgb2YgdmFsaWQgYnl0ZXMgYWhlYWQgaW4gd2luZG93XG5cblx0XHQvLyBMZW5ndGggb2YgdGhlIGJlc3QgbWF0Y2ggYXQgcHJldmlvdXMgc3RlcC4gTWF0Y2hlcyBub3QgZ3JlYXRlciB0aGFuIHRoaXNcblx0XHQvLyBhcmUgZGlzY2FyZGVkLiBUaGlzIGlzIHVzZWQgaW4gdGhlIGxhenkgbWF0Y2ggZXZhbHVhdGlvbi5cblx0XHR2YXIgcHJldl9sZW5ndGg7XG5cblx0XHQvLyBUbyBzcGVlZCB1cCBkZWZsYXRpb24sIGhhc2ggY2hhaW5zIGFyZSBuZXZlciBzZWFyY2hlZCBiZXlvbmQgdGhpc1xuXHRcdC8vIGxlbmd0aC4gQSBoaWdoZXIgbGltaXQgaW1wcm92ZXMgY29tcHJlc3Npb24gcmF0aW8gYnV0IGRlZ3JhZGVzIHRoZSBzcGVlZC5cblx0XHR2YXIgbWF4X2NoYWluX2xlbmd0aDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZmluZCBhIGJldHRlciBtYXRjaCBvbmx5IHdoZW4gdGhlIGN1cnJlbnQgbWF0Y2ggaXMgc3RyaWN0bHlcblx0XHQvLyBzbWFsbGVyIHRoYW4gdGhpcyB2YWx1ZS4gVGhpcyBtZWNoYW5pc20gaXMgdXNlZCBvbmx5IGZvciBjb21wcmVzc2lvblxuXHRcdC8vIGxldmVscyA+PSA0LlxuXHRcdHZhciBtYXhfbGF6eV9tYXRjaDtcblxuXHRcdC8vIEluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgaGFzaCB0YWJsZSBvbmx5IGlmIHRoZSBtYXRjaCBsZW5ndGggaXMgbm90XG5cdFx0Ly8gZ3JlYXRlciB0aGFuIHRoaXMgbGVuZ3RoLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuXHRcdC8vIG1heF9pbnNlcnRfbGVuZ3RoIGlzIHVzZWQgb25seSBmb3IgY29tcHJlc3Npb24gbGV2ZWxzIDw9IDMuXG5cblx0XHR2YXIgbGV2ZWw7IC8vIGNvbXByZXNzaW9uIGxldmVsICgxLi45KVxuXHRcdHZhciBzdHJhdGVneTsgLy8gZmF2b3Igb3IgZm9yY2UgSHVmZm1hbiBjb2RpbmdcblxuXHRcdC8vIFVzZSBhIGZhc3RlciBzZWFyY2ggd2hlbiB0aGUgcHJldmlvdXMgbWF0Y2ggaXMgbG9uZ2VyIHRoYW4gdGhpc1xuXHRcdHZhciBnb29kX21hdGNoO1xuXG5cdFx0Ly8gU3RvcCBzZWFyY2hpbmcgd2hlbiBjdXJyZW50IG1hdGNoIGV4Y2VlZHMgdGhpc1xuXHRcdHZhciBuaWNlX21hdGNoO1xuXG5cdFx0dmFyIGR5bl9sdHJlZTsgLy8gbGl0ZXJhbCBhbmQgbGVuZ3RoIHRyZWVcblx0XHR2YXIgZHluX2R0cmVlOyAvLyBkaXN0YW5jZSB0cmVlXG5cdFx0dmFyIGJsX3RyZWU7IC8vIEh1ZmZtYW4gdHJlZSBmb3IgYml0IGxlbmd0aHNcblxuXHRcdHZhciBsX2Rlc2MgPSBuZXcgVHJlZSgpOyAvLyBkZXNjIGZvciBsaXRlcmFsIHRyZWVcblx0XHR2YXIgZF9kZXNjID0gbmV3IFRyZWUoKTsgLy8gZGVzYyBmb3IgZGlzdGFuY2UgdHJlZVxuXHRcdHZhciBibF9kZXNjID0gbmV3IFRyZWUoKTsgLy8gZGVzYyBmb3IgYml0IGxlbmd0aCB0cmVlXG5cblx0XHQvLyB0aGF0LmhlYXBfbGVuOyAvLyBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGhlYXBcblx0XHQvLyB0aGF0LmhlYXBfbWF4OyAvLyBlbGVtZW50IG9mIGxhcmdlc3QgZnJlcXVlbmN5XG5cdFx0Ly8gVGhlIHNvbnMgb2YgaGVhcFtuXSBhcmUgaGVhcFsyKm5dIGFuZCBoZWFwWzIqbisxXS4gaGVhcFswXSBpcyBub3QgdXNlZC5cblx0XHQvLyBUaGUgc2FtZSBoZWFwIGFycmF5IGlzIHVzZWQgdG8gYnVpbGQgYWxsIHRyZWVzLlxuXG5cdFx0Ly8gRGVwdGggb2YgZWFjaCBzdWJ0cmVlIHVzZWQgYXMgdGllIGJyZWFrZXIgZm9yIHRyZWVzIG9mIGVxdWFsIGZyZXF1ZW5jeVxuXHRcdHRoYXQuZGVwdGggPSBbXTtcblxuXHRcdHZhciBsX2J1ZjsgLy8gaW5kZXggZm9yIGxpdGVyYWxzIG9yIGxlbmd0aHMgKi9cblxuXHRcdC8vIFNpemUgb2YgbWF0Y2ggYnVmZmVyIGZvciBsaXRlcmFscy9sZW5ndGhzLiBUaGVyZSBhcmUgNCByZWFzb25zIGZvclxuXHRcdC8vIGxpbWl0aW5nIGxpdF9idWZzaXplIHRvIDY0Szpcblx0XHQvLyAtIGZyZXF1ZW5jaWVzIGNhbiBiZSBrZXB0IGluIDE2IGJpdCBjb3VudGVyc1xuXHRcdC8vIC0gaWYgY29tcHJlc3Npb24gaXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmaXJzdCBibG9jaywgYWxsIGlucHV0XG5cdFx0Ly8gZGF0YSBpcyBzdGlsbCBpbiB0aGUgd2luZG93IHNvIHdlIGNhbiBzdGlsbCBlbWl0IGEgc3RvcmVkIGJsb2NrIGV2ZW5cblx0XHQvLyB3aGVuIGlucHV0IGNvbWVzIGZyb20gc3RhbmRhcmQgaW5wdXQuIChUaGlzIGNhbiBhbHNvIGJlIGRvbmUgZm9yXG5cdFx0Ly8gYWxsIGJsb2NrcyBpZiBsaXRfYnVmc2l6ZSBpcyBub3QgZ3JlYXRlciB0aGFuIDMySy4pXG5cdFx0Ly8gLSBpZiBjb21wcmVzc2lvbiBpcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgYSBmaWxlIHNtYWxsZXIgdGhhbiA2NEssIHdlIGNhblxuXHRcdC8vIGV2ZW4gZW1pdCBhIHN0b3JlZCBmaWxlIGluc3RlYWQgb2YgYSBzdG9yZWQgYmxvY2sgKHNhdmluZyA1IGJ5dGVzKS5cblx0XHQvLyBUaGlzIGlzIGFwcGxpY2FibGUgb25seSBmb3IgemlwIChub3QgZ3ppcCBvciB6bGliKS5cblx0XHQvLyAtIGNyZWF0aW5nIG5ldyBIdWZmbWFuIHRyZWVzIGxlc3MgZnJlcXVlbnRseSBtYXkgbm90IHByb3ZpZGUgZmFzdFxuXHRcdC8vIGFkYXB0YXRpb24gdG8gY2hhbmdlcyBpbiB0aGUgaW5wdXQgZGF0YSBzdGF0aXN0aWNzLiAoVGFrZSBmb3Jcblx0XHQvLyBleGFtcGxlIGEgYmluYXJ5IGZpbGUgd2l0aCBwb29ybHkgY29tcHJlc3NpYmxlIGNvZGUgZm9sbG93ZWQgYnlcblx0XHQvLyBhIGhpZ2hseSBjb21wcmVzc2libGUgc3RyaW5nIHRhYmxlLikgU21hbGxlciBidWZmZXIgc2l6ZXMgZ2l2ZVxuXHRcdC8vIGZhc3QgYWRhcHRhdGlvbiBidXQgaGF2ZSBvZiBjb3Vyc2UgdGhlIG92ZXJoZWFkIG9mIHRyYW5zbWl0dGluZ1xuXHRcdC8vIHRyZWVzIG1vcmUgZnJlcXVlbnRseS5cblx0XHQvLyAtIEkgY2FuJ3QgY291bnQgYWJvdmUgNFxuXHRcdHZhciBsaXRfYnVmc2l6ZTtcblxuXHRcdHZhciBsYXN0X2xpdDsgLy8gcnVubmluZyBpbmRleCBpbiBsX2J1ZlxuXG5cdFx0Ly8gQnVmZmVyIGZvciBkaXN0YW5jZXMuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCBkX2J1ZiBhbmQgbF9idWYgaGF2ZVxuXHRcdC8vIHRoZSBzYW1lIG51bWJlciBvZiBlbGVtZW50cy4gVG8gdXNlIGRpZmZlcmVudCBsZW5ndGhzLCBhbiBleHRyYSBmbGFnXG5cdFx0Ly8gYXJyYXkgd291bGQgYmUgbmVjZXNzYXJ5LlxuXG5cdFx0dmFyIGRfYnVmOyAvLyBpbmRleCBvZiBwZW5kaWdfYnVmXG5cblx0XHQvLyB0aGF0Lm9wdF9sZW47IC8vIGJpdCBsZW5ndGggb2YgY3VycmVudCBibG9jayB3aXRoIG9wdGltYWwgdHJlZXNcblx0XHQvLyB0aGF0LnN0YXRpY19sZW47IC8vIGJpdCBsZW5ndGggb2YgY3VycmVudCBibG9jayB3aXRoIHN0YXRpYyB0cmVlc1xuXHRcdHZhciBtYXRjaGVzOyAvLyBudW1iZXIgb2Ygc3RyaW5nIG1hdGNoZXMgaW4gY3VycmVudCBibG9ja1xuXHRcdHZhciBsYXN0X2VvYl9sZW47IC8vIGJpdCBsZW5ndGggb2YgRU9CIGNvZGUgZm9yIGxhc3QgYmxvY2tcblxuXHRcdC8vIE91dHB1dCBidWZmZXIuIGJpdHMgYXJlIGluc2VydGVkIHN0YXJ0aW5nIGF0IHRoZSBib3R0b20gKGxlYXN0XG5cdFx0Ly8gc2lnbmlmaWNhbnQgYml0cykuXG5cdFx0dmFyIGJpX2J1ZjtcblxuXHRcdC8vIE51bWJlciBvZiB2YWxpZCBiaXRzIGluIGJpX2J1Zi4gQWxsIGJpdHMgYWJvdmUgdGhlIGxhc3QgdmFsaWQgYml0XG5cdFx0Ly8gYXJlIGFsd2F5cyB6ZXJvLlxuXHRcdHZhciBiaV92YWxpZDtcblxuXHRcdC8vIG51bWJlciBvZiBjb2RlcyBhdCBlYWNoIGJpdCBsZW5ndGggZm9yIGFuIG9wdGltYWwgdHJlZVxuXHRcdHRoYXQuYmxfY291bnQgPSBbXTtcblxuXHRcdC8vIGhlYXAgdXNlZCB0byBidWlsZCB0aGUgSHVmZm1hbiB0cmVlc1xuXHRcdHRoYXQuaGVhcCA9IFtdO1xuXG5cdFx0ZHluX2x0cmVlID0gW107XG5cdFx0ZHluX2R0cmVlID0gW107XG5cdFx0YmxfdHJlZSA9IFtdO1xuXG5cdFx0ZnVuY3Rpb24gbG1faW5pdCgpIHtcblx0XHRcdHZhciBpO1xuXHRcdFx0d2luZG93X3NpemUgPSAyICogd19zaXplO1xuXG5cdFx0XHRoZWFkW2hhc2hfc2l6ZSAtIDFdID0gMDtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBoYXNoX3NpemUgLSAxOyBpKyspIHtcblx0XHRcdFx0aGVhZFtpXSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnM6XG5cdFx0XHRtYXhfbGF6eV9tYXRjaCA9IGNvbmZpZ190YWJsZVtsZXZlbF0ubWF4X2xhenk7XG5cdFx0XHRnb29kX21hdGNoID0gY29uZmlnX3RhYmxlW2xldmVsXS5nb29kX2xlbmd0aDtcblx0XHRcdG5pY2VfbWF0Y2ggPSBjb25maWdfdGFibGVbbGV2ZWxdLm5pY2VfbGVuZ3RoO1xuXHRcdFx0bWF4X2NoYWluX2xlbmd0aCA9IGNvbmZpZ190YWJsZVtsZXZlbF0ubWF4X2NoYWluO1xuXG5cdFx0XHRzdHJzdGFydCA9IDA7XG5cdFx0XHRibG9ja19zdGFydCA9IDA7XG5cdFx0XHRsb29rYWhlYWQgPSAwO1xuXHRcdFx0bWF0Y2hfbGVuZ3RoID0gcHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuXHRcdFx0bWF0Y2hfYXZhaWxhYmxlID0gMDtcblx0XHRcdGluc19oID0gMDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbml0X2Jsb2NrKCkge1xuXHRcdFx0dmFyIGk7XG5cdFx0XHQvLyBJbml0aWFsaXplIHRoZSB0cmVlcy5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBMX0NPREVTOyBpKyspXG5cdFx0XHRcdGR5bl9sdHJlZVtpICogMl0gPSAwO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IERfQ09ERVM7IGkrKylcblx0XHRcdFx0ZHluX2R0cmVlW2kgKiAyXSA9IDA7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgQkxfQ09ERVM7IGkrKylcblx0XHRcdFx0YmxfdHJlZVtpICogMl0gPSAwO1xuXG5cdFx0XHRkeW5fbHRyZWVbRU5EX0JMT0NLICogMl0gPSAxO1xuXHRcdFx0dGhhdC5vcHRfbGVuID0gdGhhdC5zdGF0aWNfbGVuID0gMDtcblx0XHRcdGxhc3RfbGl0ID0gbWF0Y2hlcyA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgdHJlZSBkYXRhIHN0cnVjdHVyZXMgZm9yIGEgbmV3IHpsaWIgc3RyZWFtLlxuXHRcdGZ1bmN0aW9uIHRyX2luaXQoKSB7XG5cblx0XHRcdGxfZGVzYy5keW5fdHJlZSA9IGR5bl9sdHJlZTtcblx0XHRcdGxfZGVzYy5zdGF0X2Rlc2MgPSBTdGF0aWNUcmVlLnN0YXRpY19sX2Rlc2M7XG5cblx0XHRcdGRfZGVzYy5keW5fdHJlZSA9IGR5bl9kdHJlZTtcblx0XHRcdGRfZGVzYy5zdGF0X2Rlc2MgPSBTdGF0aWNUcmVlLnN0YXRpY19kX2Rlc2M7XG5cblx0XHRcdGJsX2Rlc2MuZHluX3RyZWUgPSBibF90cmVlO1xuXHRcdFx0YmxfZGVzYy5zdGF0X2Rlc2MgPSBTdGF0aWNUcmVlLnN0YXRpY19ibF9kZXNjO1xuXG5cdFx0XHRiaV9idWYgPSAwO1xuXHRcdFx0YmlfdmFsaWQgPSAwO1xuXHRcdFx0bGFzdF9lb2JfbGVuID0gODsgLy8gZW5vdWdoIGxvb2thaGVhZCBmb3IgaW5mbGF0ZVxuXG5cdFx0XHQvLyBJbml0aWFsaXplIHRoZSBmaXJzdCBibG9jayBvZiB0aGUgZmlyc3QgZmlsZTpcblx0XHRcdGluaXRfYmxvY2soKTtcblx0XHR9XG5cblx0XHQvLyBSZXN0b3JlIHRoZSBoZWFwIHByb3BlcnR5IGJ5IG1vdmluZyBkb3duIHRoZSB0cmVlIHN0YXJ0aW5nIGF0IG5vZGUgayxcblx0XHQvLyBleGNoYW5naW5nIGEgbm9kZSB3aXRoIHRoZSBzbWFsbGVzdCBvZiBpdHMgdHdvIHNvbnMgaWYgbmVjZXNzYXJ5LFxuXHRcdC8vIHN0b3BwaW5nXG5cdFx0Ly8gd2hlbiB0aGUgaGVhcCBwcm9wZXJ0eSBpcyByZS1lc3RhYmxpc2hlZCAoZWFjaCBmYXRoZXIgc21hbGxlciB0aGFuIGl0c1xuXHRcdC8vIHR3byBzb25zKS5cblx0XHR0aGF0LnBxZG93bmhlYXAgPSBmdW5jdGlvbih0cmVlLCAvLyB0aGUgdHJlZSB0byByZXN0b3JlXG5cdFx0ayAvLyBub2RlIHRvIG1vdmUgZG93blxuXHRcdCkge1xuXHRcdFx0dmFyIGhlYXAgPSB0aGF0LmhlYXA7XG5cdFx0XHR2YXIgdiA9IGhlYXBba107XG5cdFx0XHR2YXIgaiA9IGsgPDwgMTsgLy8gbGVmdCBzb24gb2Yga1xuXHRcdFx0d2hpbGUgKGogPD0gdGhhdC5oZWFwX2xlbikge1xuXHRcdFx0XHQvLyBTZXQgaiB0byB0aGUgc21hbGxlc3Qgb2YgdGhlIHR3byBzb25zOlxuXHRcdFx0XHRpZiAoaiA8IHRoYXQuaGVhcF9sZW4gJiYgc21hbGxlcih0cmVlLCBoZWFwW2ogKyAxXSwgaGVhcFtqXSwgdGhhdC5kZXB0aCkpIHtcblx0XHRcdFx0XHRqKys7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRXhpdCBpZiB2IGlzIHNtYWxsZXIgdGhhbiBib3RoIHNvbnNcblx0XHRcdFx0aWYgKHNtYWxsZXIodHJlZSwgdiwgaGVhcFtqXSwgdGhhdC5kZXB0aCkpXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Ly8gRXhjaGFuZ2UgdiB3aXRoIHRoZSBzbWFsbGVzdCBzb25cblx0XHRcdFx0aGVhcFtrXSA9IGhlYXBbal07XG5cdFx0XHRcdGsgPSBqO1xuXHRcdFx0XHQvLyBBbmQgY29udGludWUgZG93biB0aGUgdHJlZSwgc2V0dGluZyBqIHRvIHRoZSBsZWZ0IHNvbiBvZiBrXG5cdFx0XHRcdGogPDw9IDE7XG5cdFx0XHR9XG5cdFx0XHRoZWFwW2tdID0gdjtcblx0XHR9O1xuXG5cdFx0Ly8gU2NhbiBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSB0byBkZXRlcm1pbmUgdGhlIGZyZXF1ZW5jaWVzIG9mIHRoZSBjb2Rlc1xuXHRcdC8vIGluIHRoZSBiaXQgbGVuZ3RoIHRyZWUuXG5cdFx0ZnVuY3Rpb24gc2Nhbl90cmVlKHRyZWUsLy8gdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZFxuXHRcdG1heF9jb2RlIC8vIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeVxuXHRcdCkge1xuXHRcdFx0dmFyIG47IC8vIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHNcblx0XHRcdHZhciBwcmV2bGVuID0gLTE7IC8vIGxhc3QgZW1pdHRlZCBsZW5ndGhcblx0XHRcdHZhciBjdXJsZW47IC8vIGxlbmd0aCBvZiBjdXJyZW50IGNvZGVcblx0XHRcdHZhciBuZXh0bGVuID0gdHJlZVswICogMiArIDFdOyAvLyBsZW5ndGggb2YgbmV4dCBjb2RlXG5cdFx0XHR2YXIgY291bnQgPSAwOyAvLyByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZVxuXHRcdFx0dmFyIG1heF9jb3VudCA9IDc7IC8vIG1heCByZXBlYXQgY291bnRcblx0XHRcdHZhciBtaW5fY291bnQgPSA0OyAvLyBtaW4gcmVwZWF0IGNvdW50XG5cblx0XHRcdGlmIChuZXh0bGVuID09PSAwKSB7XG5cdFx0XHRcdG1heF9jb3VudCA9IDEzODtcblx0XHRcdFx0bWluX2NvdW50ID0gMztcblx0XHRcdH1cblx0XHRcdHRyZWVbKG1heF9jb2RlICsgMSkgKiAyICsgMV0gPSAweGZmZmY7IC8vIGd1YXJkXG5cblx0XHRcdGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuXHRcdFx0XHRjdXJsZW4gPSBuZXh0bGVuO1xuXHRcdFx0XHRuZXh0bGVuID0gdHJlZVsobiArIDEpICogMiArIDFdO1xuXHRcdFx0XHRpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT0gbmV4dGxlbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvdW50IDwgbWluX2NvdW50KSB7XG5cdFx0XHRcdFx0YmxfdHJlZVtjdXJsZW4gKiAyXSArPSBjb3VudDtcblx0XHRcdFx0fSBlbHNlIGlmIChjdXJsZW4gIT09IDApIHtcblx0XHRcdFx0XHRpZiAoY3VybGVuICE9IHByZXZsZW4pXG5cdFx0XHRcdFx0XHRibF90cmVlW2N1cmxlbiAqIDJdKys7XG5cdFx0XHRcdFx0YmxfdHJlZVtSRVBfM182ICogMl0rKztcblx0XHRcdFx0fSBlbHNlIGlmIChjb3VudCA8PSAxMCkge1xuXHRcdFx0XHRcdGJsX3RyZWVbUkVQWl8zXzEwICogMl0rKztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRibF90cmVlW1JFUFpfMTFfMTM4ICogMl0rKztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRcdHByZXZsZW4gPSBjdXJsZW47XG5cdFx0XHRcdGlmIChuZXh0bGVuID09PSAwKSB7XG5cdFx0XHRcdFx0bWF4X2NvdW50ID0gMTM4O1xuXHRcdFx0XHRcdG1pbl9jb3VudCA9IDM7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY3VybGVuID09IG5leHRsZW4pIHtcblx0XHRcdFx0XHRtYXhfY291bnQgPSA2O1xuXHRcdFx0XHRcdG1pbl9jb3VudCA9IDM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWF4X2NvdW50ID0gNztcblx0XHRcdFx0XHRtaW5fY291bnQgPSA0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgZm9yIHRoZSBiaXQgbGVuZ3RocyBhbmQgcmV0dXJuIHRoZSBpbmRleCBpblxuXHRcdC8vIGJsX29yZGVyIG9mIHRoZSBsYXN0IGJpdCBsZW5ndGggY29kZSB0byBzZW5kLlxuXHRcdGZ1bmN0aW9uIGJ1aWxkX2JsX3RyZWUoKSB7XG5cdFx0XHR2YXIgbWF4X2JsaW5kZXg7IC8vIGluZGV4IG9mIGxhc3QgYml0IGxlbmd0aCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXFcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBiaXQgbGVuZ3RoIGZyZXF1ZW5jaWVzIGZvciBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlc1xuXHRcdFx0c2Nhbl90cmVlKGR5bl9sdHJlZSwgbF9kZXNjLm1heF9jb2RlKTtcblx0XHRcdHNjYW5fdHJlZShkeW5fZHRyZWUsIGRfZGVzYy5tYXhfY29kZSk7XG5cblx0XHRcdC8vIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWU6XG5cdFx0XHRibF9kZXNjLmJ1aWxkX3RyZWUodGhhdCk7XG5cdFx0XHQvLyBvcHRfbGVuIG5vdyBpbmNsdWRlcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cmVlIHJlcHJlc2VudGF0aW9ucywgZXhjZXB0XG5cdFx0XHQvLyB0aGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aHMgY29kZXMgYW5kIHRoZSA1KzUrNCBiaXRzIGZvciB0aGVcblx0XHRcdC8vIGNvdW50cy5cblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2YgYml0IGxlbmd0aCBjb2RlcyB0byBzZW5kLiBUaGUgcGt6aXAgZm9ybWF0XG5cdFx0XHQvLyByZXF1aXJlcyB0aGF0IGF0IGxlYXN0IDQgYml0IGxlbmd0aCBjb2RlcyBiZSBzZW50LiAoYXBwbm90ZS50eHQgc2F5c1xuXHRcdFx0Ly8gMyBidXQgdGhlIGFjdHVhbCB2YWx1ZSB1c2VkIGlzIDQuKVxuXHRcdFx0Zm9yIChtYXhfYmxpbmRleCA9IEJMX0NPREVTIC0gMTsgbWF4X2JsaW5kZXggPj0gMzsgbWF4X2JsaW5kZXgtLSkge1xuXHRcdFx0XHRpZiAoYmxfdHJlZVtUcmVlLmJsX29yZGVyW21heF9ibGluZGV4XSAqIDIgKyAxXSAhPT0gMClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vIFVwZGF0ZSBvcHRfbGVuIHRvIGluY2x1ZGUgdGhlIGJpdCBsZW5ndGggdHJlZSBhbmQgY291bnRzXG5cdFx0XHR0aGF0Lm9wdF9sZW4gKz0gMyAqIChtYXhfYmxpbmRleCArIDEpICsgNSArIDUgKyA0O1xuXG5cdFx0XHRyZXR1cm4gbWF4X2JsaW5kZXg7XG5cdFx0fVxuXG5cdFx0Ly8gT3V0cHV0IGEgYnl0ZSBvbiB0aGUgc3RyZWFtLlxuXHRcdC8vIElOIGFzc2VydGlvbjogdGhlcmUgaXMgZW5vdWdoIHJvb20gaW4gcGVuZGluZ19idWYuXG5cdFx0ZnVuY3Rpb24gcHV0X2J5dGUocCkge1xuXHRcdFx0dGhhdC5wZW5kaW5nX2J1Zlt0aGF0LnBlbmRpbmcrK10gPSBwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHB1dF9zaG9ydCh3KSB7XG5cdFx0XHRwdXRfYnl0ZSh3ICYgMHhmZik7XG5cdFx0XHRwdXRfYnl0ZSgodyA+Pj4gOCkgJiAweGZmKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwdXRTaG9ydE1TQihiKSB7XG5cdFx0XHRwdXRfYnl0ZSgoYiA+PiA4KSAmIDB4ZmYpO1xuXHRcdFx0cHV0X2J5dGUoKGIgJiAweGZmKSAmIDB4ZmYpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNlbmRfYml0cyh2YWx1ZSwgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgdmFsLCBsZW4gPSBsZW5ndGg7XG5cdFx0XHRpZiAoYmlfdmFsaWQgPiBCdWZfc2l6ZSAtIGxlbikge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZTtcblx0XHRcdFx0Ly8gYmlfYnVmIHw9ICh2YWwgPDwgYmlfdmFsaWQpO1xuXHRcdFx0XHRiaV9idWYgfD0gKCh2YWwgPDwgYmlfdmFsaWQpICYgMHhmZmZmKTtcblx0XHRcdFx0cHV0X3Nob3J0KGJpX2J1Zik7XG5cdFx0XHRcdGJpX2J1ZiA9IHZhbCA+Pj4gKEJ1Zl9zaXplIC0gYmlfdmFsaWQpO1xuXHRcdFx0XHRiaV92YWxpZCArPSBsZW4gLSBCdWZfc2l6ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGJpX2J1ZiB8PSAodmFsdWUpIDw8IGJpX3ZhbGlkO1xuXHRcdFx0XHRiaV9idWYgfD0gKCgodmFsdWUpIDw8IGJpX3ZhbGlkKSAmIDB4ZmZmZik7XG5cdFx0XHRcdGJpX3ZhbGlkICs9IGxlbjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzZW5kX2NvZGUoYywgdHJlZSkge1xuXHRcdFx0dmFyIGMyID0gYyAqIDI7XG5cdFx0XHRzZW5kX2JpdHModHJlZVtjMl0gJiAweGZmZmYsIHRyZWVbYzIgKyAxXSAmIDB4ZmZmZik7XG5cdFx0fVxuXG5cdFx0Ly8gU2VuZCBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSBpbiBjb21wcmVzc2VkIGZvcm0sIHVzaW5nIHRoZSBjb2RlcyBpblxuXHRcdC8vIGJsX3RyZWUuXG5cdFx0ZnVuY3Rpb24gc2VuZF90cmVlKHRyZWUsLy8gdGhlIHRyZWUgdG8gYmUgc2VudFxuXHRcdG1heF9jb2RlIC8vIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeVxuXHRcdCkge1xuXHRcdFx0dmFyIG47IC8vIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHNcblx0XHRcdHZhciBwcmV2bGVuID0gLTE7IC8vIGxhc3QgZW1pdHRlZCBsZW5ndGhcblx0XHRcdHZhciBjdXJsZW47IC8vIGxlbmd0aCBvZiBjdXJyZW50IGNvZGVcblx0XHRcdHZhciBuZXh0bGVuID0gdHJlZVswICogMiArIDFdOyAvLyBsZW5ndGggb2YgbmV4dCBjb2RlXG5cdFx0XHR2YXIgY291bnQgPSAwOyAvLyByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZVxuXHRcdFx0dmFyIG1heF9jb3VudCA9IDc7IC8vIG1heCByZXBlYXQgY291bnRcblx0XHRcdHZhciBtaW5fY291bnQgPSA0OyAvLyBtaW4gcmVwZWF0IGNvdW50XG5cblx0XHRcdGlmIChuZXh0bGVuID09PSAwKSB7XG5cdFx0XHRcdG1heF9jb3VudCA9IDEzODtcblx0XHRcdFx0bWluX2NvdW50ID0gMztcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG5cdFx0XHRcdGN1cmxlbiA9IG5leHRsZW47XG5cdFx0XHRcdG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV07XG5cdFx0XHRcdGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PSBuZXh0bGVuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRzZW5kX2NvZGUoY3VybGVuLCBibF90cmVlKTtcblx0XHRcdFx0XHR9IHdoaWxlICgtLWNvdW50ICE9PSAwKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjdXJsZW4gIT09IDApIHtcblx0XHRcdFx0XHRpZiAoY3VybGVuICE9IHByZXZsZW4pIHtcblx0XHRcdFx0XHRcdHNlbmRfY29kZShjdXJsZW4sIGJsX3RyZWUpO1xuXHRcdFx0XHRcdFx0Y291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VuZF9jb2RlKFJFUF8zXzYsIGJsX3RyZWUpO1xuXHRcdFx0XHRcdHNlbmRfYml0cyhjb3VudCAtIDMsIDIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG5cdFx0XHRcdFx0c2VuZF9jb2RlKFJFUFpfM18xMCwgYmxfdHJlZSk7XG5cdFx0XHRcdFx0c2VuZF9iaXRzKGNvdW50IC0gMywgMyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VuZF9jb2RlKFJFUFpfMTFfMTM4LCBibF90cmVlKTtcblx0XHRcdFx0XHRzZW5kX2JpdHMoY291bnQgLSAxMSwgNyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y291bnQgPSAwO1xuXHRcdFx0XHRwcmV2bGVuID0gY3VybGVuO1xuXHRcdFx0XHRpZiAobmV4dGxlbiA9PT0gMCkge1xuXHRcdFx0XHRcdG1heF9jb3VudCA9IDEzODtcblx0XHRcdFx0XHRtaW5fY291bnQgPSAzO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cmxlbiA9PSBuZXh0bGVuKSB7XG5cdFx0XHRcdFx0bWF4X2NvdW50ID0gNjtcblx0XHRcdFx0XHRtaW5fY291bnQgPSAzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1heF9jb3VudCA9IDc7XG5cdFx0XHRcdFx0bWluX2NvdW50ID0gNDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNlbmQgdGhlIGhlYWRlciBmb3IgYSBibG9jayB1c2luZyBkeW5hbWljIEh1ZmZtYW4gdHJlZXM6IHRoZSBjb3VudHMsIHRoZVxuXHRcdC8vIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGggY29kZXMsIHRoZSBsaXRlcmFsIHRyZWUgYW5kIHRoZSBkaXN0YW5jZSB0cmVlLlxuXHRcdC8vIElOIGFzc2VydGlvbjogbGNvZGVzID49IDI1NywgZGNvZGVzID49IDEsIGJsY29kZXMgPj0gNC5cblx0XHRmdW5jdGlvbiBzZW5kX2FsbF90cmVlcyhsY29kZXMsIGRjb2RlcywgYmxjb2Rlcykge1xuXHRcdFx0dmFyIHJhbms7IC8vIGluZGV4IGluIGJsX29yZGVyXG5cblx0XHRcdHNlbmRfYml0cyhsY29kZXMgLSAyNTcsIDUpOyAvLyBub3QgKzI1NSBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHRcblx0XHRcdHNlbmRfYml0cyhkY29kZXMgLSAxLCA1KTtcblx0XHRcdHNlbmRfYml0cyhibGNvZGVzIC0gNCwgNCk7IC8vIG5vdCAtMyBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHRcblx0XHRcdGZvciAocmFuayA9IDA7IHJhbmsgPCBibGNvZGVzOyByYW5rKyspIHtcblx0XHRcdFx0c2VuZF9iaXRzKGJsX3RyZWVbVHJlZS5ibF9vcmRlcltyYW5rXSAqIDIgKyAxXSwgMyk7XG5cdFx0XHR9XG5cdFx0XHRzZW5kX3RyZWUoZHluX2x0cmVlLCBsY29kZXMgLSAxKTsgLy8gbGl0ZXJhbCB0cmVlXG5cdFx0XHRzZW5kX3RyZWUoZHluX2R0cmVlLCBkY29kZXMgLSAxKTsgLy8gZGlzdGFuY2UgdHJlZVxuXHRcdH1cblxuXHRcdC8vIEZsdXNoIHRoZSBiaXQgYnVmZmVyLCBrZWVwaW5nIGF0IG1vc3QgNyBiaXRzIGluIGl0LlxuXHRcdGZ1bmN0aW9uIGJpX2ZsdXNoKCkge1xuXHRcdFx0aWYgKGJpX3ZhbGlkID09IDE2KSB7XG5cdFx0XHRcdHB1dF9zaG9ydChiaV9idWYpO1xuXHRcdFx0XHRiaV9idWYgPSAwO1xuXHRcdFx0XHRiaV92YWxpZCA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKGJpX3ZhbGlkID49IDgpIHtcblx0XHRcdFx0cHV0X2J5dGUoYmlfYnVmICYgMHhmZik7XG5cdFx0XHRcdGJpX2J1ZiA+Pj49IDg7XG5cdFx0XHRcdGJpX3ZhbGlkIC09IDg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2VuZCBvbmUgZW1wdHkgc3RhdGljIGJsb2NrIHRvIGdpdmUgZW5vdWdoIGxvb2thaGVhZCBmb3IgaW5mbGF0ZS5cblx0XHQvLyBUaGlzIHRha2VzIDEwIGJpdHMsIG9mIHdoaWNoIDcgbWF5IHJlbWFpbiBpbiB0aGUgYml0IGJ1ZmZlci5cblx0XHQvLyBUaGUgY3VycmVudCBpbmZsYXRlIGNvZGUgcmVxdWlyZXMgOSBiaXRzIG9mIGxvb2thaGVhZC4gSWYgdGhlXG5cdFx0Ly8gbGFzdCB0d28gY29kZXMgZm9yIHRoZSBwcmV2aW91cyBibG9jayAocmVhbCBjb2RlIHBsdXMgRU9CKSB3ZXJlIGNvZGVkXG5cdFx0Ly8gb24gNSBiaXRzIG9yIGxlc3MsIGluZmxhdGUgbWF5IGhhdmUgb25seSA1KzMgYml0cyBvZiBsb29rYWhlYWQgdG8gZGVjb2RlXG5cdFx0Ly8gdGhlIGxhc3QgcmVhbCBjb2RlLiBJbiB0aGlzIGNhc2Ugd2Ugc2VuZCB0d28gZW1wdHkgc3RhdGljIGJsb2NrcyBpbnN0ZWFkXG5cdFx0Ly8gb2Ygb25lLiAoVGhlcmUgYXJlIG5vIHByb2JsZW1zIGlmIHRoZSBwcmV2aW91cyBibG9jayBpcyBzdG9yZWQgb3IgZml4ZWQuKVxuXHRcdC8vIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBhc3N1bWUgdGhlIHdvcnN0IGNhc2Ugb2YgbGFzdCByZWFsIGNvZGUgZW5jb2RlZFxuXHRcdC8vIG9uIG9uZSBiaXQgb25seS5cblx0XHRmdW5jdGlvbiBfdHJfYWxpZ24oKSB7XG5cdFx0XHRzZW5kX2JpdHMoU1RBVElDX1RSRUVTIDw8IDEsIDMpO1xuXHRcdFx0c2VuZF9jb2RlKEVORF9CTE9DSywgU3RhdGljVHJlZS5zdGF0aWNfbHRyZWUpO1xuXG5cdFx0XHRiaV9mbHVzaCgpO1xuXG5cdFx0XHQvLyBPZiB0aGUgMTAgYml0cyBmb3IgdGhlIGVtcHR5IGJsb2NrLCB3ZSBoYXZlIGFscmVhZHkgc2VudFxuXHRcdFx0Ly8gKDEwIC0gYmlfdmFsaWQpIGJpdHMuIFRoZSBsb29rYWhlYWQgZm9yIHRoZSBsYXN0IHJlYWwgY29kZSAoYmVmb3JlXG5cdFx0XHQvLyB0aGUgRU9CIG9mIHRoZSBwcmV2aW91cyBibG9jaykgd2FzIHRodXMgYXQgbGVhc3Qgb25lIHBsdXMgdGhlIGxlbmd0aFxuXHRcdFx0Ly8gb2YgdGhlIEVPQiBwbHVzIHdoYXQgd2UgaGF2ZSBqdXN0IHNlbnQgb2YgdGhlIGVtcHR5IHN0YXRpYyBibG9jay5cblx0XHRcdGlmICgxICsgbGFzdF9lb2JfbGVuICsgMTAgLSBiaV92YWxpZCA8IDkpIHtcblx0XHRcdFx0c2VuZF9iaXRzKFNUQVRJQ19UUkVFUyA8PCAxLCAzKTtcblx0XHRcdFx0c2VuZF9jb2RlKEVORF9CTE9DSywgU3RhdGljVHJlZS5zdGF0aWNfbHRyZWUpO1xuXHRcdFx0XHRiaV9mbHVzaCgpO1xuXHRcdFx0fVxuXHRcdFx0bGFzdF9lb2JfbGVuID0gNztcblx0XHR9XG5cblx0XHQvLyBTYXZlIHRoZSBtYXRjaCBpbmZvIGFuZCB0YWxseSB0aGUgZnJlcXVlbmN5IGNvdW50cy4gUmV0dXJuIHRydWUgaWZcblx0XHQvLyB0aGUgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQuXG5cdFx0ZnVuY3Rpb24gX3RyX3RhbGx5KGRpc3QsIC8vIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nXG5cdFx0bGMgLy8gbWF0Y2ggbGVuZ3RoLU1JTl9NQVRDSCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdD09MClcblx0XHQpIHtcblx0XHRcdHZhciBvdXRfbGVuZ3RoLCBpbl9sZW5ndGgsIGRjb2RlO1xuXHRcdFx0dGhhdC5wZW5kaW5nX2J1ZltkX2J1ZiArIGxhc3RfbGl0ICogMl0gPSAoZGlzdCA+Pj4gOCkgJiAweGZmO1xuXHRcdFx0dGhhdC5wZW5kaW5nX2J1ZltkX2J1ZiArIGxhc3RfbGl0ICogMiArIDFdID0gZGlzdCAmIDB4ZmY7XG5cblx0XHRcdHRoYXQucGVuZGluZ19idWZbbF9idWYgKyBsYXN0X2xpdF0gPSBsYyAmIDB4ZmY7XG5cdFx0XHRsYXN0X2xpdCsrO1xuXG5cdFx0XHRpZiAoZGlzdCA9PT0gMCkge1xuXHRcdFx0XHQvLyBsYyBpcyB0aGUgdW5tYXRjaGVkIGNoYXJcblx0XHRcdFx0ZHluX2x0cmVlW2xjICogMl0rKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoZXMrKztcblx0XHRcdFx0Ly8gSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSFxuXHRcdFx0XHRkaXN0LS07IC8vIGRpc3QgPSBtYXRjaCBkaXN0YW5jZSAtIDFcblx0XHRcdFx0ZHluX2x0cmVlWyhUcmVlLl9sZW5ndGhfY29kZVtsY10gKyBMSVRFUkFMUyArIDEpICogMl0rKztcblx0XHRcdFx0ZHluX2R0cmVlW1RyZWUuZF9jb2RlKGRpc3QpICogMl0rKztcblx0XHRcdH1cblxuXHRcdFx0aWYgKChsYXN0X2xpdCAmIDB4MWZmZikgPT09IDAgJiYgbGV2ZWwgPiAyKSB7XG5cdFx0XHRcdC8vIENvbXB1dGUgYW4gdXBwZXIgYm91bmQgZm9yIHRoZSBjb21wcmVzc2VkIGxlbmd0aFxuXHRcdFx0XHRvdXRfbGVuZ3RoID0gbGFzdF9saXQgKiA4O1xuXHRcdFx0XHRpbl9sZW5ndGggPSBzdHJzdGFydCAtIGJsb2NrX3N0YXJ0O1xuXHRcdFx0XHRmb3IgKGRjb2RlID0gMDsgZGNvZGUgPCBEX0NPREVTOyBkY29kZSsrKSB7XG5cdFx0XHRcdFx0b3V0X2xlbmd0aCArPSBkeW5fZHRyZWVbZGNvZGUgKiAyXSAqICg1ICsgVHJlZS5leHRyYV9kYml0c1tkY29kZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG91dF9sZW5ndGggPj4+PSAzO1xuXHRcdFx0XHRpZiAoKG1hdGNoZXMgPCBNYXRoLmZsb29yKGxhc3RfbGl0IC8gMikpICYmIG91dF9sZW5ndGggPCBNYXRoLmZsb29yKGluX2xlbmd0aCAvIDIpKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKGxhc3RfbGl0ID09IGxpdF9idWZzaXplIC0gMSk7XG5cdFx0XHQvLyBXZSBhdm9pZCBlcXVhbGl0eSB3aXRoIGxpdF9idWZzaXplIGJlY2F1c2Ugb2Ygd3JhcGFyb3VuZCBhdCA2NEtcblx0XHRcdC8vIG9uIDE2IGJpdCBtYWNoaW5lcyBhbmQgYmVjYXVzZSBzdG9yZWQgYmxvY2tzIGFyZSByZXN0cmljdGVkIHRvXG5cdFx0XHQvLyA2NEstMSBieXRlcy5cblx0XHR9XG5cblx0XHQvLyBTZW5kIHRoZSBibG9jayBkYXRhIGNvbXByZXNzZWQgdXNpbmcgdGhlIGdpdmVuIEh1ZmZtYW4gdHJlZXNcblx0XHRmdW5jdGlvbiBjb21wcmVzc19ibG9jayhsdHJlZSwgZHRyZWUpIHtcblx0XHRcdHZhciBkaXN0OyAvLyBkaXN0YW5jZSBvZiBtYXRjaGVkIHN0cmluZ1xuXHRcdFx0dmFyIGxjOyAvLyBtYXRjaCBsZW5ndGggb3IgdW5tYXRjaGVkIGNoYXIgKGlmIGRpc3QgPT09IDApXG5cdFx0XHR2YXIgbHggPSAwOyAvLyBydW5uaW5nIGluZGV4IGluIGxfYnVmXG5cdFx0XHR2YXIgY29kZTsgLy8gdGhlIGNvZGUgdG8gc2VuZFxuXHRcdFx0dmFyIGV4dHJhOyAvLyBudW1iZXIgb2YgZXh0cmEgYml0cyB0byBzZW5kXG5cblx0XHRcdGlmIChsYXN0X2xpdCAhPT0gMCkge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0ZGlzdCA9ICgodGhhdC5wZW5kaW5nX2J1ZltkX2J1ZiArIGx4ICogMl0gPDwgOCkgJiAweGZmMDApIHwgKHRoYXQucGVuZGluZ19idWZbZF9idWYgKyBseCAqIDIgKyAxXSAmIDB4ZmYpO1xuXHRcdFx0XHRcdGxjID0gKHRoYXQucGVuZGluZ19idWZbbF9idWYgKyBseF0pICYgMHhmZjtcblx0XHRcdFx0XHRseCsrO1xuXG5cdFx0XHRcdFx0aWYgKGRpc3QgPT09IDApIHtcblx0XHRcdFx0XHRcdHNlbmRfY29kZShsYywgbHRyZWUpOyAvLyBzZW5kIGEgbGl0ZXJhbCBieXRlXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEhlcmUsIGxjIGlzIHRoZSBtYXRjaCBsZW5ndGggLSBNSU5fTUFUQ0hcblx0XHRcdFx0XHRcdGNvZGUgPSBUcmVlLl9sZW5ndGhfY29kZVtsY107XG5cblx0XHRcdFx0XHRcdHNlbmRfY29kZShjb2RlICsgTElURVJBTFMgKyAxLCBsdHJlZSk7IC8vIHNlbmQgdGhlIGxlbmd0aFxuXHRcdFx0XHRcdFx0Ly8gY29kZVxuXHRcdFx0XHRcdFx0ZXh0cmEgPSBUcmVlLmV4dHJhX2xiaXRzW2NvZGVdO1xuXHRcdFx0XHRcdFx0aWYgKGV4dHJhICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGxjIC09IFRyZWUuYmFzZV9sZW5ndGhbY29kZV07XG5cdFx0XHRcdFx0XHRcdHNlbmRfYml0cyhsYywgZXh0cmEpOyAvLyBzZW5kIHRoZSBleHRyYSBsZW5ndGggYml0c1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGlzdC0tOyAvLyBkaXN0IGlzIG5vdyB0aGUgbWF0Y2ggZGlzdGFuY2UgLSAxXG5cdFx0XHRcdFx0XHRjb2RlID0gVHJlZS5kX2NvZGUoZGlzdCk7XG5cblx0XHRcdFx0XHRcdHNlbmRfY29kZShjb2RlLCBkdHJlZSk7IC8vIHNlbmQgdGhlIGRpc3RhbmNlIGNvZGVcblx0XHRcdFx0XHRcdGV4dHJhID0gVHJlZS5leHRyYV9kYml0c1tjb2RlXTtcblx0XHRcdFx0XHRcdGlmIChleHRyYSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRkaXN0IC09IFRyZWUuYmFzZV9kaXN0W2NvZGVdO1xuXHRcdFx0XHRcdFx0XHRzZW5kX2JpdHMoZGlzdCwgZXh0cmEpOyAvLyBzZW5kIHRoZSBleHRyYSBkaXN0YW5jZSBiaXRzXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSAvLyBsaXRlcmFsIG9yIG1hdGNoIHBhaXIgP1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgdGhhdCB0aGUgb3ZlcmxheSBiZXR3ZWVuIHBlbmRpbmdfYnVmIGFuZCBkX2J1ZitsX2J1ZiBpc1xuXHRcdFx0XHRcdC8vIG9rOlxuXHRcdFx0XHR9IHdoaWxlIChseCA8IGxhc3RfbGl0KTtcblx0XHRcdH1cblxuXHRcdFx0c2VuZF9jb2RlKEVORF9CTE9DSywgbHRyZWUpO1xuXHRcdFx0bGFzdF9lb2JfbGVuID0gbHRyZWVbRU5EX0JMT0NLICogMiArIDFdO1xuXHRcdH1cblxuXHRcdC8vIEZsdXNoIHRoZSBiaXQgYnVmZmVyIGFuZCBhbGlnbiB0aGUgb3V0cHV0IG9uIGEgYnl0ZSBib3VuZGFyeVxuXHRcdGZ1bmN0aW9uIGJpX3dpbmR1cCgpIHtcblx0XHRcdGlmIChiaV92YWxpZCA+IDgpIHtcblx0XHRcdFx0cHV0X3Nob3J0KGJpX2J1Zik7XG5cdFx0XHR9IGVsc2UgaWYgKGJpX3ZhbGlkID4gMCkge1xuXHRcdFx0XHRwdXRfYnl0ZShiaV9idWYgJiAweGZmKTtcblx0XHRcdH1cblx0XHRcdGJpX2J1ZiA9IDA7XG5cdFx0XHRiaV92YWxpZCA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gQ29weSBhIHN0b3JlZCBibG9jaywgc3RvcmluZyBmaXJzdCB0aGUgbGVuZ3RoIGFuZCBpdHNcblx0XHQvLyBvbmUncyBjb21wbGVtZW50IGlmIHJlcXVlc3RlZC5cblx0XHRmdW5jdGlvbiBjb3B5X2Jsb2NrKGJ1ZiwgLy8gdGhlIGlucHV0IGRhdGFcblx0XHRsZW4sIC8vIGl0cyBsZW5ndGhcblx0XHRoZWFkZXIgLy8gdHJ1ZSBpZiBibG9jayBoZWFkZXIgbXVzdCBiZSB3cml0dGVuXG5cdFx0KSB7XG5cdFx0XHRiaV93aW5kdXAoKTsgLy8gYWxpZ24gb24gYnl0ZSBib3VuZGFyeVxuXHRcdFx0bGFzdF9lb2JfbGVuID0gODsgLy8gZW5vdWdoIGxvb2thaGVhZCBmb3IgaW5mbGF0ZVxuXG5cdFx0XHRpZiAoaGVhZGVyKSB7XG5cdFx0XHRcdHB1dF9zaG9ydChsZW4pO1xuXHRcdFx0XHRwdXRfc2hvcnQofmxlbik7XG5cdFx0XHR9XG5cblx0XHRcdHRoYXQucGVuZGluZ19idWYuc2V0KHdpbmRvdy5zdWJhcnJheShidWYsIGJ1ZiArIGxlbiksIHRoYXQucGVuZGluZyk7XG5cdFx0XHR0aGF0LnBlbmRpbmcgKz0gbGVuO1xuXHRcdH1cblxuXHRcdC8vIFNlbmQgYSBzdG9yZWQgYmxvY2tcblx0XHRmdW5jdGlvbiBfdHJfc3RvcmVkX2Jsb2NrKGJ1ZiwgLy8gaW5wdXQgYmxvY2tcblx0XHRzdG9yZWRfbGVuLCAvLyBsZW5ndGggb2YgaW5wdXQgYmxvY2tcblx0XHRlb2YgLy8gdHJ1ZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGVcblx0XHQpIHtcblx0XHRcdHNlbmRfYml0cygoU1RPUkVEX0JMT0NLIDw8IDEpICsgKGVvZiA/IDEgOiAwKSwgMyk7IC8vIHNlbmQgYmxvY2sgdHlwZVxuXHRcdFx0Y29weV9ibG9jayhidWYsIHN0b3JlZF9sZW4sIHRydWUpOyAvLyB3aXRoIGhlYWRlclxuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZyBmb3IgdGhlIGN1cnJlbnQgYmxvY2s6IGR5bmFtaWMgdHJlZXMsIHN0YXRpY1xuXHRcdC8vIHRyZWVzIG9yIHN0b3JlLCBhbmQgb3V0cHV0IHRoZSBlbmNvZGVkIGJsb2NrIHRvIHRoZSB6aXAgZmlsZS5cblx0XHRmdW5jdGlvbiBfdHJfZmx1c2hfYmxvY2soYnVmLCAvLyBpbnB1dCBibG9jaywgb3IgTlVMTCBpZiB0b28gb2xkXG5cdFx0c3RvcmVkX2xlbiwgLy8gbGVuZ3RoIG9mIGlucHV0IGJsb2NrXG5cdFx0ZW9mIC8vIHRydWUgaWYgdGhpcyBpcyB0aGUgbGFzdCBibG9jayBmb3IgYSBmaWxlXG5cdFx0KSB7XG5cdFx0XHR2YXIgb3B0X2xlbmIsIHN0YXRpY19sZW5iOy8vIG9wdF9sZW4gYW5kIHN0YXRpY19sZW4gaW4gYnl0ZXNcblx0XHRcdHZhciBtYXhfYmxpbmRleCA9IDA7IC8vIGluZGV4IG9mIGxhc3QgYml0IGxlbmd0aCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXFcblxuXHRcdFx0Ly8gQnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgdW5sZXNzIGEgc3RvcmVkIGJsb2NrIGlzIGZvcmNlZFxuXHRcdFx0aWYgKGxldmVsID4gMCkge1xuXHRcdFx0XHQvLyBDb25zdHJ1Y3QgdGhlIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzXG5cdFx0XHRcdGxfZGVzYy5idWlsZF90cmVlKHRoYXQpO1xuXG5cdFx0XHRcdGRfZGVzYy5idWlsZF90cmVlKHRoYXQpO1xuXG5cdFx0XHRcdC8vIEF0IHRoaXMgcG9pbnQsIG9wdF9sZW4gYW5kIHN0YXRpY19sZW4gYXJlIHRoZSB0b3RhbCBiaXQgbGVuZ3Roc1xuXHRcdFx0XHQvLyBvZlxuXHRcdFx0XHQvLyB0aGUgY29tcHJlc3NlZCBibG9jayBkYXRhLCBleGNsdWRpbmcgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLlxuXG5cdFx0XHRcdC8vIEJ1aWxkIHRoZSBiaXQgbGVuZ3RoIHRyZWUgZm9yIHRoZSBhYm92ZSB0d28gdHJlZXMsIGFuZCBnZXQgdGhlXG5cdFx0XHRcdC8vIGluZGV4XG5cdFx0XHRcdC8vIGluIGJsX29yZGVyIG9mIHRoZSBsYXN0IGJpdCBsZW5ndGggY29kZSB0byBzZW5kLlxuXHRcdFx0XHRtYXhfYmxpbmRleCA9IGJ1aWxkX2JsX3RyZWUoKTtcblxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcuIENvbXB1dGUgZmlyc3QgdGhlIGJsb2NrIGxlbmd0aCBpblxuXHRcdFx0XHQvLyBieXRlc1xuXHRcdFx0XHRvcHRfbGVuYiA9ICh0aGF0Lm9wdF9sZW4gKyAzICsgNykgPj4+IDM7XG5cdFx0XHRcdHN0YXRpY19sZW5iID0gKHRoYXQuc3RhdGljX2xlbiArIDMgKyA3KSA+Pj4gMztcblxuXHRcdFx0XHRpZiAoc3RhdGljX2xlbmIgPD0gb3B0X2xlbmIpXG5cdFx0XHRcdFx0b3B0X2xlbmIgPSBzdGF0aWNfbGVuYjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdF9sZW5iID0gc3RhdGljX2xlbmIgPSBzdG9yZWRfbGVuICsgNTsgLy8gZm9yY2UgYSBzdG9yZWQgYmxvY2tcblx0XHRcdH1cblxuXHRcdFx0aWYgKChzdG9yZWRfbGVuICsgNCA8PSBvcHRfbGVuYikgJiYgYnVmICE9IC0xKSB7XG5cdFx0XHRcdC8vIDQ6IHR3byB3b3JkcyBmb3IgdGhlIGxlbmd0aHNcblx0XHRcdFx0Ly8gVGhlIHRlc3QgYnVmICE9IE5VTEwgaXMgb25seSBuZWNlc3NhcnkgaWYgTElUX0JVRlNJWkUgPiBXU0laRS5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIGNhbid0IGhhdmUgcHJvY2Vzc2VkIG1vcmUgdGhhbiBXU0laRSBpbnB1dCBieXRlc1xuXHRcdFx0XHQvLyBzaW5jZVxuXHRcdFx0XHQvLyB0aGUgbGFzdCBibG9jayBmbHVzaCwgYmVjYXVzZSBjb21wcmVzc2lvbiB3b3VsZCBoYXZlIGJlZW5cblx0XHRcdFx0Ly8gc3VjY2Vzc2Z1bC4gSWYgTElUX0JVRlNJWkUgPD0gV1NJWkUsIGl0IGlzIG5ldmVyIHRvbyBsYXRlIHRvXG5cdFx0XHRcdC8vIHRyYW5zZm9ybSBhIGJsb2NrIGludG8gYSBzdG9yZWQgYmxvY2suXG5cdFx0XHRcdF90cl9zdG9yZWRfYmxvY2soYnVmLCBzdG9yZWRfbGVuLCBlb2YpO1xuXHRcdFx0fSBlbHNlIGlmIChzdGF0aWNfbGVuYiA9PSBvcHRfbGVuYikge1xuXHRcdFx0XHRzZW5kX2JpdHMoKFNUQVRJQ19UUkVFUyA8PCAxKSArIChlb2YgPyAxIDogMCksIDMpO1xuXHRcdFx0XHRjb21wcmVzc19ibG9jayhTdGF0aWNUcmVlLnN0YXRpY19sdHJlZSwgU3RhdGljVHJlZS5zdGF0aWNfZHRyZWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VuZF9iaXRzKChEWU5fVFJFRVMgPDwgMSkgKyAoZW9mID8gMSA6IDApLCAzKTtcblx0XHRcdFx0c2VuZF9hbGxfdHJlZXMobF9kZXNjLm1heF9jb2RlICsgMSwgZF9kZXNjLm1heF9jb2RlICsgMSwgbWF4X2JsaW5kZXggKyAxKTtcblx0XHRcdFx0Y29tcHJlc3NfYmxvY2soZHluX2x0cmVlLCBkeW5fZHRyZWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGUgYWJvdmUgY2hlY2sgaXMgbWFkZSBtb2QgMl4zMiwgZm9yIGZpbGVzIGxhcmdlciB0aGFuIDUxMiBNQlxuXHRcdFx0Ly8gYW5kIHVMb25nIGltcGxlbWVudGVkIG9uIDMyIGJpdHMuXG5cblx0XHRcdGluaXRfYmxvY2soKTtcblxuXHRcdFx0aWYgKGVvZikge1xuXHRcdFx0XHRiaV93aW5kdXAoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmbHVzaF9ibG9ja19vbmx5KGVvZikge1xuXHRcdFx0X3RyX2ZsdXNoX2Jsb2NrKGJsb2NrX3N0YXJ0ID49IDAgPyBibG9ja19zdGFydCA6IC0xLCBzdHJzdGFydCAtIGJsb2NrX3N0YXJ0LCBlb2YpO1xuXHRcdFx0YmxvY2tfc3RhcnQgPSBzdHJzdGFydDtcblx0XHRcdHN0cm0uZmx1c2hfcGVuZGluZygpO1xuXHRcdH1cblxuXHRcdC8vIEZpbGwgdGhlIHdpbmRvdyB3aGVuIHRoZSBsb29rYWhlYWQgYmVjb21lcyBpbnN1ZmZpY2llbnQuXG5cdFx0Ly8gVXBkYXRlcyBzdHJzdGFydCBhbmQgbG9va2FoZWFkLlxuXHRcdC8vXG5cdFx0Ly8gSU4gYXNzZXJ0aW9uOiBsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEXG5cdFx0Ly8gT1VUIGFzc2VydGlvbnM6IHN0cnN0YXJ0IDw9IHdpbmRvd19zaXplLU1JTl9MT09LQUhFQURcblx0XHQvLyBBdCBsZWFzdCBvbmUgYnl0ZSBoYXMgYmVlbiByZWFkLCBvciBhdmFpbF9pbiA9PT0gMDsgcmVhZHMgYXJlXG5cdFx0Ly8gcGVyZm9ybWVkIGZvciBhdCBsZWFzdCB0d28gYnl0ZXMgKHJlcXVpcmVkIGZvciB0aGUgemlwIHRyYW5zbGF0ZV9lb2xcblx0XHQvLyBvcHRpb24gLS0gbm90IHN1cHBvcnRlZCBoZXJlKS5cblx0XHRmdW5jdGlvbiBmaWxsX3dpbmRvdygpIHtcblx0XHRcdHZhciBuLCBtO1xuXHRcdFx0dmFyIHA7XG5cdFx0XHR2YXIgbW9yZTsgLy8gQW1vdW50IG9mIGZyZWUgc3BhY2UgYXQgdGhlIGVuZCBvZiB0aGUgd2luZG93LlxuXG5cdFx0XHRkbyB7XG5cdFx0XHRcdG1vcmUgPSAod2luZG93X3NpemUgLSBsb29rYWhlYWQgLSBzdHJzdGFydCk7XG5cblx0XHRcdFx0Ly8gRGVhbCB3aXRoICFAIyQlIDY0SyBsaW1pdDpcblx0XHRcdFx0aWYgKG1vcmUgPT09IDAgJiYgc3Ryc3RhcnQgPT09IDAgJiYgbG9va2FoZWFkID09PSAwKSB7XG5cdFx0XHRcdFx0bW9yZSA9IHdfc2l6ZTtcblx0XHRcdFx0fSBlbHNlIGlmIChtb3JlID09IC0xKSB7XG5cdFx0XHRcdFx0Ly8gVmVyeSB1bmxpa2VseSwgYnV0IHBvc3NpYmxlIG9uIDE2IGJpdCBtYWNoaW5lIGlmIHN0cnN0YXJ0ID09XG5cdFx0XHRcdFx0Ly8gMFxuXHRcdFx0XHRcdC8vIGFuZCBsb29rYWhlYWQgPT0gMSAoaW5wdXQgZG9uZSBvbmUgYnl0ZSBhdCB0aW1lKVxuXHRcdFx0XHRcdG1vcmUtLTtcblxuXHRcdFx0XHRcdC8vIElmIHRoZSB3aW5kb3cgaXMgYWxtb3N0IGZ1bGwgYW5kIHRoZXJlIGlzIGluc3VmZmljaWVudFxuXHRcdFx0XHRcdC8vIGxvb2thaGVhZCxcblx0XHRcdFx0XHQvLyBtb3ZlIHRoZSB1cHBlciBoYWxmIHRvIHRoZSBsb3dlciBvbmUgdG8gbWFrZSByb29tIGluIHRoZVxuXHRcdFx0XHRcdC8vIHVwcGVyIGhhbGYuXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3Ryc3RhcnQgPj0gd19zaXplICsgd19zaXplIC0gTUlOX0xPT0tBSEVBRCkge1xuXHRcdFx0XHRcdHdpbmRvdy5zZXQod2luZG93LnN1YmFycmF5KHdfc2l6ZSwgd19zaXplICsgd19zaXplKSwgMCk7XG5cblx0XHRcdFx0XHRtYXRjaF9zdGFydCAtPSB3X3NpemU7XG5cdFx0XHRcdFx0c3Ryc3RhcnQgLT0gd19zaXplOyAvLyB3ZSBub3cgaGF2ZSBzdHJzdGFydCA+PSBNQVhfRElTVFxuXHRcdFx0XHRcdGJsb2NrX3N0YXJ0IC09IHdfc2l6ZTtcblxuXHRcdFx0XHRcdC8vIFNsaWRlIHRoZSBoYXNoIHRhYmxlIChjb3VsZCBiZSBhdm9pZGVkIHdpdGggMzIgYml0IHZhbHVlc1xuXHRcdFx0XHRcdC8vIGF0IHRoZSBleHBlbnNlIG9mIG1lbW9yeSB1c2FnZSkuIFdlIHNsaWRlIGV2ZW4gd2hlbiBsZXZlbCA9PVxuXHRcdFx0XHRcdC8vIDBcblx0XHRcdFx0XHQvLyB0byBrZWVwIHRoZSBoYXNoIHRhYmxlIGNvbnNpc3RlbnQgaWYgd2Ugc3dpdGNoIGJhY2sgdG8gbGV2ZWxcblx0XHRcdFx0XHQvLyA+IDBcblx0XHRcdFx0XHQvLyBsYXRlci4gKFVzaW5nIGxldmVsIDAgcGVybWFuZW50bHkgaXMgbm90IGFuIG9wdGltYWwgdXNhZ2Ugb2Zcblx0XHRcdFx0XHQvLyB6bGliLCBzbyB3ZSBkb24ndCBjYXJlIGFib3V0IHRoaXMgcGF0aG9sb2dpY2FsIGNhc2UuKVxuXG5cdFx0XHRcdFx0biA9IGhhc2hfc2l6ZTtcblx0XHRcdFx0XHRwID0gbjtcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRtID0gKGhlYWRbLS1wXSAmIDB4ZmZmZik7XG5cdFx0XHRcdFx0XHRoZWFkW3BdID0gKG0gPj0gd19zaXplID8gbSAtIHdfc2l6ZSA6IDApO1xuXHRcdFx0XHRcdH0gd2hpbGUgKC0tbiAhPT0gMCk7XG5cblx0XHRcdFx0XHRuID0gd19zaXplO1xuXHRcdFx0XHRcdHAgPSBuO1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdG0gPSAocHJldlstLXBdICYgMHhmZmZmKTtcblx0XHRcdFx0XHRcdHByZXZbcF0gPSAobSA+PSB3X3NpemUgPyBtIC0gd19zaXplIDogMCk7XG5cdFx0XHRcdFx0XHQvLyBJZiBuIGlzIG5vdCBvbiBhbnkgaGFzaCBjaGFpbiwgcHJldltuXSBpcyBnYXJiYWdlIGJ1dFxuXHRcdFx0XHRcdFx0Ly8gaXRzIHZhbHVlIHdpbGwgbmV2ZXIgYmUgdXNlZC5cblx0XHRcdFx0XHR9IHdoaWxlICgtLW4gIT09IDApO1xuXHRcdFx0XHRcdG1vcmUgKz0gd19zaXplO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfaW4gPT09IDApXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIHdhcyBubyBzbGlkaW5nOlxuXHRcdFx0XHQvLyBzdHJzdGFydCA8PSBXU0laRStNQVhfRElTVC0xICYmIGxvb2thaGVhZCA8PSBNSU5fTE9PS0FIRUFEIC0gMSAmJlxuXHRcdFx0XHQvLyBtb3JlID09IHdpbmRvd19zaXplIC0gbG9va2FoZWFkIC0gc3Ryc3RhcnRcblx0XHRcdFx0Ly8gPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIChNSU5fTE9PS0FIRUFELTEgKyBXU0laRSArIE1BWF9ESVNULTEpXG5cdFx0XHRcdC8vID0+IG1vcmUgPj0gd2luZG93X3NpemUgLSAyKldTSVpFICsgMlxuXHRcdFx0XHQvLyBJbiB0aGUgQklHX01FTSBvciBNTUFQIGNhc2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSxcblx0XHRcdFx0Ly8gd2luZG93X3NpemUgPT0gaW5wdXRfc2l6ZSArIE1JTl9MT09LQUhFQUQgJiZcblx0XHRcdFx0Ly8gc3Ryc3RhcnQgKyBzLT5sb29rYWhlYWQgPD0gaW5wdXRfc2l6ZSA9PiBtb3JlID49IE1JTl9MT09LQUhFQUQuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgd2luZG93X3NpemUgPT0gMipXU0laRSBzbyBtb3JlID49IDIuXG5cdFx0XHRcdC8vIElmIHRoZXJlIHdhcyBzbGlkaW5nLCBtb3JlID49IFdTSVpFLiBTbyBpbiBhbGwgY2FzZXMsIG1vcmUgPj0gMi5cblxuXHRcdFx0XHRuID0gc3RybS5yZWFkX2J1Zih3aW5kb3csIHN0cnN0YXJ0ICsgbG9va2FoZWFkLCBtb3JlKTtcblx0XHRcdFx0bG9va2FoZWFkICs9IG47XG5cblx0XHRcdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgaGFzaCB2YWx1ZSBub3cgdGhhdCB3ZSBoYXZlIHNvbWUgaW5wdXQ6XG5cdFx0XHRcdGlmIChsb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG5cdFx0XHRcdFx0aW5zX2ggPSB3aW5kb3dbc3Ryc3RhcnRdICYgMHhmZjtcblx0XHRcdFx0XHRpbnNfaCA9ICgoKGluc19oKSA8PCBoYXNoX3NoaWZ0KSBeICh3aW5kb3dbc3Ryc3RhcnQgKyAxXSAmIDB4ZmYpKSAmIGhhc2hfbWFzaztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiB0aGUgd2hvbGUgaW5wdXQgaGFzIGxlc3MgdGhhbiBNSU5fTUFUQ0ggYnl0ZXMsIGluc19oIGlzXG5cdFx0XHRcdC8vIGdhcmJhZ2UsXG5cdFx0XHRcdC8vIGJ1dCB0aGlzIGlzIG5vdCBpbXBvcnRhbnQgc2luY2Ugb25seSBsaXRlcmFsIGJ5dGVzIHdpbGwgYmVcblx0XHRcdFx0Ly8gZW1pdHRlZC5cblx0XHRcdH0gd2hpbGUgKGxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29weSB3aXRob3V0IGNvbXByZXNzaW9uIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLFxuXHRcdC8vIHJldHVyblxuXHRcdC8vIHRoZSBjdXJyZW50IGJsb2NrIHN0YXRlLlxuXHRcdC8vIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgaW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBkaWN0aW9uYXJ5IHNpbmNlXG5cdFx0Ly8gdW5jb21wcmVzc2libGUgZGF0YSBpcyBwcm9iYWJseSBub3QgdXNlZnVsLiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWRcblx0XHQvLyBvbmx5IGZvciB0aGUgbGV2ZWw9MCBjb21wcmVzc2lvbiBvcHRpb24uXG5cdFx0Ly8gTk9URTogdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgb3B0aW1pemVkIHRvIGF2b2lkIGV4dHJhIGNvcHlpbmcgZnJvbVxuXHRcdC8vIHdpbmRvdyB0byBwZW5kaW5nX2J1Zi5cblx0XHRmdW5jdGlvbiBkZWZsYXRlX3N0b3JlZChmbHVzaCkge1xuXHRcdFx0Ly8gU3RvcmVkIGJsb2NrcyBhcmUgbGltaXRlZCB0byAweGZmZmYgYnl0ZXMsIHBlbmRpbmdfYnVmIGlzIGxpbWl0ZWRcblx0XHRcdC8vIHRvIHBlbmRpbmdfYnVmX3NpemUsIGFuZCBlYWNoIHN0b3JlZCBibG9jayBoYXMgYSA1IGJ5dGUgaGVhZGVyOlxuXG5cdFx0XHR2YXIgbWF4X2Jsb2NrX3NpemUgPSAweGZmZmY7XG5cdFx0XHR2YXIgbWF4X3N0YXJ0O1xuXG5cdFx0XHRpZiAobWF4X2Jsb2NrX3NpemUgPiBwZW5kaW5nX2J1Zl9zaXplIC0gNSkge1xuXHRcdFx0XHRtYXhfYmxvY2tfc2l6ZSA9IHBlbmRpbmdfYnVmX3NpemUgLSA1O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb3B5IGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSBpbnB1dCB0byBvdXRwdXQ6XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHQvLyBGaWxsIHRoZSB3aW5kb3cgYXMgbXVjaCBhcyBwb3NzaWJsZTpcblx0XHRcdFx0aWYgKGxvb2thaGVhZCA8PSAxKSB7XG5cdFx0XHRcdFx0ZmlsbF93aW5kb3coKTtcblx0XHRcdFx0XHRpZiAobG9va2FoZWFkID09PSAwICYmIGZsdXNoID09IFpfTk9fRkxVU0gpXG5cdFx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHRcdFx0aWYgKGxvb2thaGVhZCA9PT0gMClcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyBmbHVzaCB0aGUgY3VycmVudCBibG9ja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Ryc3RhcnQgKz0gbG9va2FoZWFkO1xuXHRcdFx0XHRsb29rYWhlYWQgPSAwO1xuXG5cdFx0XHRcdC8vIEVtaXQgYSBzdG9yZWQgYmxvY2sgaWYgcGVuZGluZ19idWYgd2lsbCBiZSBmdWxsOlxuXHRcdFx0XHRtYXhfc3RhcnQgPSBibG9ja19zdGFydCArIG1heF9ibG9ja19zaXplO1xuXHRcdFx0XHRpZiAoc3Ryc3RhcnQgPT09IDAgfHwgc3Ryc3RhcnQgPj0gbWF4X3N0YXJ0KSB7XG5cdFx0XHRcdFx0Ly8gc3Ryc3RhcnQgPT09IDAgaXMgcG9zc2libGUgd2hlbiB3cmFwYXJvdW5kIG9uIDE2LWJpdCBtYWNoaW5lXG5cdFx0XHRcdFx0bG9va2FoZWFkID0gKHN0cnN0YXJ0IC0gbWF4X3N0YXJ0KTtcblx0XHRcdFx0XHRzdHJzdGFydCA9IG1heF9zdGFydDtcblxuXHRcdFx0XHRcdGZsdXNoX2Jsb2NrX29ubHkoZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmx1c2ggaWYgd2UgbWF5IGhhdmUgdG8gc2xpZGUsIG90aGVyd2lzZSBibG9ja19zdGFydCBtYXkgYmVjb21lXG5cdFx0XHRcdC8vIG5lZ2F0aXZlIGFuZCB0aGUgZGF0YSB3aWxsIGJlIGdvbmU6XG5cdFx0XHRcdGlmIChzdHJzdGFydCAtIGJsb2NrX3N0YXJ0ID49IHdfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIHtcblx0XHRcdFx0XHRmbHVzaF9ibG9ja19vbmx5KGZhbHNlKTtcblx0XHRcdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zmx1c2hfYmxvY2tfb25seShmbHVzaCA9PSBaX0ZJTklTSCk7XG5cdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApXG5cdFx0XHRcdHJldHVybiAoZmx1c2ggPT0gWl9GSU5JU0gpID8gRmluaXNoU3RhcnRlZCA6IE5lZWRNb3JlO1xuXG5cdFx0XHRyZXR1cm4gZmx1c2ggPT0gWl9GSU5JU0ggPyBGaW5pc2hEb25lIDogQmxvY2tEb25lO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGxvbmdlc3RfbWF0Y2goY3VyX21hdGNoKSB7XG5cdFx0XHR2YXIgY2hhaW5fbGVuZ3RoID0gbWF4X2NoYWluX2xlbmd0aDsgLy8gbWF4IGhhc2ggY2hhaW4gbGVuZ3RoXG5cdFx0XHR2YXIgc2NhbiA9IHN0cnN0YXJ0OyAvLyBjdXJyZW50IHN0cmluZ1xuXHRcdFx0dmFyIG1hdGNoOyAvLyBtYXRjaGVkIHN0cmluZ1xuXHRcdFx0dmFyIGxlbjsgLy8gbGVuZ3RoIG9mIGN1cnJlbnQgbWF0Y2hcblx0XHRcdHZhciBiZXN0X2xlbiA9IHByZXZfbGVuZ3RoOyAvLyBiZXN0IG1hdGNoIGxlbmd0aCBzbyBmYXJcblx0XHRcdHZhciBsaW1pdCA9IHN0cnN0YXJ0ID4gKHdfc2l6ZSAtIE1JTl9MT09LQUhFQUQpID8gc3Ryc3RhcnQgLSAod19zaXplIC0gTUlOX0xPT0tBSEVBRCkgOiAwO1xuXHRcdFx0dmFyIF9uaWNlX21hdGNoID0gbmljZV9tYXRjaDtcblxuXHRcdFx0Ly8gU3RvcCB3aGVuIGN1cl9tYXRjaCBiZWNvbWVzIDw9IGxpbWl0LiBUbyBzaW1wbGlmeSB0aGUgY29kZSxcblx0XHRcdC8vIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmcgb2Ygd2luZG93IGluZGV4IDAuXG5cblx0XHRcdHZhciB3bWFzayA9IHdfbWFzaztcblxuXHRcdFx0dmFyIHN0cmVuZCA9IHN0cnN0YXJ0ICsgTUFYX01BVENIO1xuXHRcdFx0dmFyIHNjYW5fZW5kMSA9IHdpbmRvd1tzY2FuICsgYmVzdF9sZW4gLSAxXTtcblx0XHRcdHZhciBzY2FuX2VuZCA9IHdpbmRvd1tzY2FuICsgYmVzdF9sZW5dO1xuXG5cdFx0XHQvLyBUaGUgY29kZSBpcyBvcHRpbWl6ZWQgZm9yIEhBU0hfQklUUyA+PSA4IGFuZCBNQVhfTUFUQ0gtMiBtdWx0aXBsZSBvZlxuXHRcdFx0Ly8gMTYuXG5cdFx0XHQvLyBJdCBpcyBlYXN5IHRvIGdldCByaWQgb2YgdGhpcyBvcHRpbWl6YXRpb24gaWYgbmVjZXNzYXJ5LlxuXG5cdFx0XHQvLyBEbyBub3Qgd2FzdGUgdG9vIG11Y2ggdGltZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBnb29kIG1hdGNoOlxuXHRcdFx0aWYgKHByZXZfbGVuZ3RoID49IGdvb2RfbWF0Y2gpIHtcblx0XHRcdFx0Y2hhaW5fbGVuZ3RoID4+PSAyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEbyBub3QgbG9vayBmb3IgbWF0Y2hlcyBiZXlvbmQgdGhlIGVuZCBvZiB0aGUgaW5wdXQuIFRoaXMgaXNcblx0XHRcdC8vIG5lY2Vzc2FyeVxuXHRcdFx0Ly8gdG8gbWFrZSBkZWZsYXRlIGRldGVybWluaXN0aWMuXG5cdFx0XHRpZiAoX25pY2VfbWF0Y2ggPiBsb29rYWhlYWQpXG5cdFx0XHRcdF9uaWNlX21hdGNoID0gbG9va2FoZWFkO1xuXG5cdFx0XHRkbyB7XG5cdFx0XHRcdG1hdGNoID0gY3VyX21hdGNoO1xuXG5cdFx0XHRcdC8vIFNraXAgdG8gbmV4dCBtYXRjaCBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGNhbm5vdCBpbmNyZWFzZVxuXHRcdFx0XHQvLyBvciBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIGxlc3MgdGhhbiAyOlxuXHRcdFx0XHRpZiAod2luZG93W21hdGNoICsgYmVzdF9sZW5dICE9IHNjYW5fZW5kIHx8IHdpbmRvd1ttYXRjaCArIGJlc3RfbGVuIC0gMV0gIT0gc2Nhbl9lbmQxIHx8IHdpbmRvd1ttYXRjaF0gIT0gd2luZG93W3NjYW5dXG5cdFx0XHRcdFx0XHR8fCB3aW5kb3dbKyttYXRjaF0gIT0gd2luZG93W3NjYW4gKyAxXSlcblx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHQvLyBUaGUgY2hlY2sgYXQgYmVzdF9sZW4tMSBjYW4gYmUgcmVtb3ZlZCBiZWNhdXNlIGl0IHdpbGwgYmUgbWFkZVxuXHRcdFx0XHQvLyBhZ2FpbiBsYXRlci4gKFRoaXMgaGV1cmlzdGljIGlzIG5vdCBhbHdheXMgYSB3aW4uKVxuXHRcdFx0XHQvLyBJdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNvbXBhcmUgc2NhblsyXSBhbmQgbWF0Y2hbMl0gc2luY2UgdGhleVxuXHRcdFx0XHQvLyBhcmUgYWx3YXlzIGVxdWFsIHdoZW4gdGhlIG90aGVyIGJ5dGVzIG1hdGNoLCBnaXZlbiB0aGF0XG5cdFx0XHRcdC8vIHRoZSBoYXNoIGtleXMgYXJlIGVxdWFsIGFuZCB0aGF0IEhBU0hfQklUUyA+PSA4LlxuXHRcdFx0XHRzY2FuICs9IDI7XG5cdFx0XHRcdG1hdGNoKys7XG5cblx0XHRcdFx0Ly8gV2UgY2hlY2sgZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBldmVyeSA4dGggY29tcGFyaXNvbjtcblx0XHRcdFx0Ly8gdGhlIDI1NnRoIGNoZWNrIHdpbGwgYmUgbWFkZSBhdCBzdHJzdGFydCsyNTguXG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0fSB3aGlsZSAod2luZG93Wysrc2Nhbl0gPT0gd2luZG93WysrbWF0Y2hdICYmIHdpbmRvd1srK3NjYW5dID09IHdpbmRvd1srK21hdGNoXSAmJiB3aW5kb3dbKytzY2FuXSA9PSB3aW5kb3dbKyttYXRjaF1cblx0XHRcdFx0XHRcdCYmIHdpbmRvd1srK3NjYW5dID09IHdpbmRvd1srK21hdGNoXSAmJiB3aW5kb3dbKytzY2FuXSA9PSB3aW5kb3dbKyttYXRjaF0gJiYgd2luZG93Wysrc2Nhbl0gPT0gd2luZG93WysrbWF0Y2hdXG5cdFx0XHRcdFx0XHQmJiB3aW5kb3dbKytzY2FuXSA9PSB3aW5kb3dbKyttYXRjaF0gJiYgd2luZG93Wysrc2Nhbl0gPT0gd2luZG93WysrbWF0Y2hdICYmIHNjYW4gPCBzdHJlbmQpO1xuXG5cdFx0XHRcdGxlbiA9IE1BWF9NQVRDSCAtIChzdHJlbmQgLSBzY2FuKTtcblx0XHRcdFx0c2NhbiA9IHN0cmVuZCAtIE1BWF9NQVRDSDtcblxuXHRcdFx0XHRpZiAobGVuID4gYmVzdF9sZW4pIHtcblx0XHRcdFx0XHRtYXRjaF9zdGFydCA9IGN1cl9tYXRjaDtcblx0XHRcdFx0XHRiZXN0X2xlbiA9IGxlbjtcblx0XHRcdFx0XHRpZiAobGVuID49IF9uaWNlX21hdGNoKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0c2Nhbl9lbmQxID0gd2luZG93W3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuXHRcdFx0XHRcdHNjYW5fZW5kID0gd2luZG93W3NjYW4gKyBiZXN0X2xlbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0fSB3aGlsZSAoKGN1cl9tYXRjaCA9IChwcmV2W2N1cl9tYXRjaCAmIHdtYXNrXSAmIDB4ZmZmZikpID4gbGltaXQgJiYgLS1jaGFpbl9sZW5ndGggIT09IDApO1xuXG5cdFx0XHRpZiAoYmVzdF9sZW4gPD0gbG9va2FoZWFkKVxuXHRcdFx0XHRyZXR1cm4gYmVzdF9sZW47XG5cdFx0XHRyZXR1cm4gbG9va2FoZWFkO1xuXHRcdH1cblxuXHRcdC8vIENvbXByZXNzIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLCByZXR1cm4gdGhlIGN1cnJlbnRcblx0XHQvLyBibG9jayBzdGF0ZS5cblx0XHQvLyBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IHBlcmZvcm0gbGF6eSBldmFsdWF0aW9uIG9mIG1hdGNoZXMgYW5kIGluc2VydHNcblx0XHQvLyBuZXcgc3RyaW5ncyBpbiB0aGUgZGljdGlvbmFyeSBvbmx5IGZvciB1bm1hdGNoZWQgc3RyaW5ncyBvciBmb3Igc2hvcnRcblx0XHQvLyBtYXRjaGVzLiBJdCBpcyB1c2VkIG9ubHkgZm9yIHRoZSBmYXN0IGNvbXByZXNzaW9uIG9wdGlvbnMuXG5cdFx0ZnVuY3Rpb24gZGVmbGF0ZV9mYXN0KGZsdXNoKSB7XG5cdFx0XHQvLyBzaG9ydCBoYXNoX2hlYWQgPSAwOyAvLyBoZWFkIG9mIHRoZSBoYXNoIGNoYWluXG5cdFx0XHR2YXIgaGFzaF9oZWFkID0gMDsgLy8gaGVhZCBvZiB0aGUgaGFzaCBjaGFpblxuXHRcdFx0dmFyIGJmbHVzaDsgLy8gc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkXG5cblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuXHRcdFx0XHQvLyBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuXHRcdFx0XHQvLyBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcblx0XHRcdFx0Ly8gc3RyaW5nIGZvbGxvd2luZyB0aGUgbmV4dCBtYXRjaC5cblx0XHRcdFx0aWYgKGxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcblx0XHRcdFx0XHRmaWxsX3dpbmRvdygpO1xuXHRcdFx0XHRcdGlmIChsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09IFpfTk9fRkxVU0gpIHtcblx0XHRcdFx0XHRcdHJldHVybiBOZWVkTW9yZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGxvb2thaGVhZCA9PT0gMClcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyBmbHVzaCB0aGUgY3VycmVudCBibG9ja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuXHRcdFx0XHQvLyBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcblx0XHRcdFx0aWYgKGxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcblx0XHRcdFx0XHRpbnNfaCA9ICgoKGluc19oKSA8PCBoYXNoX3NoaWZ0KSBeICh3aW5kb3dbKHN0cnN0YXJ0KSArIChNSU5fTUFUQ0ggLSAxKV0gJiAweGZmKSkgJiBoYXNoX21hc2s7XG5cblx0XHRcdFx0XHQvLyBwcmV2W3N0cnN0YXJ0JndfbWFza109aGFzaF9oZWFkPWhlYWRbaW5zX2hdO1xuXHRcdFx0XHRcdGhhc2hfaGVhZCA9IChoZWFkW2luc19oXSAmIDB4ZmZmZik7XG5cdFx0XHRcdFx0cHJldltzdHJzdGFydCAmIHdfbWFza10gPSBoZWFkW2luc19oXTtcblx0XHRcdFx0XHRoZWFkW2luc19oXSA9IHN0cnN0YXJ0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cblx0XHRcdFx0Ly8gQXQgdGhpcyBwb2ludCB3ZSBoYXZlIGFsd2F5cyBtYXRjaF9sZW5ndGggPCBNSU5fTUFUQ0hcblxuXHRcdFx0XHRpZiAoaGFzaF9oZWFkICE9PSAwICYmICgoc3Ryc3RhcnQgLSBoYXNoX2hlYWQpICYgMHhmZmZmKSA8PSB3X3NpemUgLSBNSU5fTE9PS0FIRUFEKSB7XG5cdFx0XHRcdFx0Ly8gVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcblx0XHRcdFx0XHQvLyBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcblx0XHRcdFx0XHQvLyBvZiB0aGUgc3RyaW5nIHdpdGggaXRzZWxmIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgZmlsZSkuXG5cdFx0XHRcdFx0aWYgKHN0cmF0ZWd5ICE9IFpfSFVGRk1BTl9PTkxZKSB7XG5cdFx0XHRcdFx0XHRtYXRjaF9sZW5ndGggPSBsb25nZXN0X21hdGNoKGhhc2hfaGVhZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGxvbmdlc3RfbWF0Y2goKSBzZXRzIG1hdGNoX3N0YXJ0XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1hdGNoX2xlbmd0aCA+PSBNSU5fTUFUQ0gpIHtcblx0XHRcdFx0XHQvLyBjaGVja19tYXRjaChzdHJzdGFydCwgbWF0Y2hfc3RhcnQsIG1hdGNoX2xlbmd0aCk7XG5cblx0XHRcdFx0XHRiZmx1c2ggPSBfdHJfdGFsbHkoc3Ryc3RhcnQgLSBtYXRjaF9zdGFydCwgbWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENIKTtcblxuXHRcdFx0XHRcdGxvb2thaGVhZCAtPSBtYXRjaF9sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBJbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGhhc2ggdGFibGUgb25seSBpZiB0aGUgbWF0Y2ggbGVuZ3RoXG5cdFx0XHRcdFx0Ly8gaXMgbm90IHRvbyBsYXJnZS4gVGhpcyBzYXZlcyB0aW1lIGJ1dCBkZWdyYWRlcyBjb21wcmVzc2lvbi5cblx0XHRcdFx0XHRpZiAobWF0Y2hfbGVuZ3RoIDw9IG1heF9sYXp5X21hdGNoICYmIGxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcblx0XHRcdFx0XHRcdG1hdGNoX2xlbmd0aC0tOyAvLyBzdHJpbmcgYXQgc3Ryc3RhcnQgYWxyZWFkeSBpbiBoYXNoIHRhYmxlXG5cdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdHN0cnN0YXJ0Kys7XG5cblx0XHRcdFx0XHRcdFx0aW5zX2ggPSAoKGluc19oIDw8IGhhc2hfc2hpZnQpIF4gKHdpbmRvd1soc3Ryc3RhcnQpICsgKE1JTl9NQVRDSCAtIDEpXSAmIDB4ZmYpKSAmIGhhc2hfbWFzaztcblx0XHRcdFx0XHRcdFx0Ly8gcHJldltzdHJzdGFydCZ3X21hc2tdPWhhc2hfaGVhZD1oZWFkW2luc19oXTtcblx0XHRcdFx0XHRcdFx0aGFzaF9oZWFkID0gKGhlYWRbaW5zX2hdICYgMHhmZmZmKTtcblx0XHRcdFx0XHRcdFx0cHJldltzdHJzdGFydCAmIHdfbWFza10gPSBoZWFkW2luc19oXTtcblx0XHRcdFx0XHRcdFx0aGVhZFtpbnNfaF0gPSBzdHJzdGFydDtcblxuXHRcdFx0XHRcdFx0XHQvLyBzdHJzdGFydCBuZXZlciBleGNlZWRzIFdTSVpFLU1BWF9NQVRDSCwgc28gdGhlcmUgYXJlXG5cdFx0XHRcdFx0XHRcdC8vIGFsd2F5cyBNSU5fTUFUQ0ggYnl0ZXMgYWhlYWQuXG5cdFx0XHRcdFx0XHR9IHdoaWxlICgtLW1hdGNoX2xlbmd0aCAhPT0gMCk7XG5cdFx0XHRcdFx0XHRzdHJzdGFydCsrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdHJzdGFydCArPSBtYXRjaF9sZW5ndGg7XG5cdFx0XHRcdFx0XHRtYXRjaF9sZW5ndGggPSAwO1xuXHRcdFx0XHRcdFx0aW5zX2ggPSB3aW5kb3dbc3Ryc3RhcnRdICYgMHhmZjtcblxuXHRcdFx0XHRcdFx0aW5zX2ggPSAoKChpbnNfaCkgPDwgaGFzaF9zaGlmdCkgXiAod2luZG93W3N0cnN0YXJ0ICsgMV0gJiAweGZmKSkgJiBoYXNoX21hc2s7XG5cdFx0XHRcdFx0XHQvLyBJZiBsb29rYWhlYWQgPCBNSU5fTUFUQ0gsIGluc19oIGlzIGdhcmJhZ2UsIGJ1dCBpdCBkb2VzXG5cdFx0XHRcdFx0XHQvLyBub3Rcblx0XHRcdFx0XHRcdC8vIG1hdHRlciBzaW5jZSBpdCB3aWxsIGJlIHJlY29tcHV0ZWQgYXQgbmV4dCBkZWZsYXRlIGNhbGwuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGVcblxuXHRcdFx0XHRcdGJmbHVzaCA9IF90cl90YWxseSgwLCB3aW5kb3dbc3Ryc3RhcnRdICYgMHhmZik7XG5cdFx0XHRcdFx0bG9va2FoZWFkLS07XG5cdFx0XHRcdFx0c3Ryc3RhcnQrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYmZsdXNoKSB7XG5cblx0XHRcdFx0XHRmbHVzaF9ibG9ja19vbmx5KGZhbHNlKTtcblx0XHRcdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zmx1c2hfYmxvY2tfb25seShmbHVzaCA9PSBaX0ZJTklTSCk7XG5cdFx0XHRpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcblx0XHRcdFx0aWYgKGZsdXNoID09IFpfRklOSVNIKVxuXHRcdFx0XHRcdHJldHVybiBGaW5pc2hTdGFydGVkO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cmV0dXJuIE5lZWRNb3JlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZsdXNoID09IFpfRklOSVNIID8gRmluaXNoRG9uZSA6IEJsb2NrRG9uZTtcblx0XHR9XG5cblx0XHQvLyBTYW1lIGFzIGFib3ZlLCBidXQgYWNoaWV2ZXMgYmV0dGVyIGNvbXByZXNzaW9uLiBXZSB1c2UgYSBsYXp5XG5cdFx0Ly8gZXZhbHVhdGlvbiBmb3IgbWF0Y2hlczogYSBtYXRjaCBpcyBmaW5hbGx5IGFkb3B0ZWQgb25seSBpZiB0aGVyZSBpc1xuXHRcdC8vIG5vIGJldHRlciBtYXRjaCBhdCB0aGUgbmV4dCB3aW5kb3cgcG9zaXRpb24uXG5cdFx0ZnVuY3Rpb24gZGVmbGF0ZV9zbG93KGZsdXNoKSB7XG5cdFx0XHQvLyBzaG9ydCBoYXNoX2hlYWQgPSAwOyAvLyBoZWFkIG9mIGhhc2ggY2hhaW5cblx0XHRcdHZhciBoYXNoX2hlYWQgPSAwOyAvLyBoZWFkIG9mIGhhc2ggY2hhaW5cblx0XHRcdHZhciBiZmx1c2g7IC8vIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZFxuXHRcdFx0dmFyIG1heF9pbnNlcnQ7XG5cblx0XHRcdC8vIFByb2Nlc3MgdGhlIGlucHV0IGJsb2NrLlxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG5cdFx0XHRcdC8vIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG5cdFx0XHRcdC8vIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuXHRcdFx0XHQvLyBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuXG5cdFx0XHRcdGlmIChsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEKSB7XG5cdFx0XHRcdFx0ZmlsbF93aW5kb3coKTtcblx0XHRcdFx0XHRpZiAobG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PSBaX05PX0ZMVVNIKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsb29rYWhlYWQgPT09IDApXG5cdFx0XHRcdFx0XHRicmVhazsgLy8gZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2tcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEluc2VydCB0aGUgc3RyaW5nIHdpbmRvd1tzdHJzdGFydCAuLiBzdHJzdGFydCsyXSBpbiB0aGVcblx0XHRcdFx0Ly8gZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG5cblx0XHRcdFx0aWYgKGxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcblx0XHRcdFx0XHRpbnNfaCA9ICgoKGluc19oKSA8PCBoYXNoX3NoaWZ0KSBeICh3aW5kb3dbKHN0cnN0YXJ0KSArIChNSU5fTUFUQ0ggLSAxKV0gJiAweGZmKSkgJiBoYXNoX21hc2s7XG5cdFx0XHRcdFx0Ly8gcHJldltzdHJzdGFydCZ3X21hc2tdPWhhc2hfaGVhZD1oZWFkW2luc19oXTtcblx0XHRcdFx0XHRoYXNoX2hlYWQgPSAoaGVhZFtpbnNfaF0gJiAweGZmZmYpO1xuXHRcdFx0XHRcdHByZXZbc3Ryc3RhcnQgJiB3X21hc2tdID0gaGVhZFtpbnNfaF07XG5cdFx0XHRcdFx0aGVhZFtpbnNfaF0gPSBzdHJzdGFydDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG5cdFx0XHRcdHByZXZfbGVuZ3RoID0gbWF0Y2hfbGVuZ3RoO1xuXHRcdFx0XHRwcmV2X21hdGNoID0gbWF0Y2hfc3RhcnQ7XG5cdFx0XHRcdG1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG5cblx0XHRcdFx0aWYgKGhhc2hfaGVhZCAhPT0gMCAmJiBwcmV2X2xlbmd0aCA8IG1heF9sYXp5X21hdGNoICYmICgoc3Ryc3RhcnQgLSBoYXNoX2hlYWQpICYgMHhmZmZmKSA8PSB3X3NpemUgLSBNSU5fTE9PS0FIRUFEKSB7XG5cdFx0XHRcdFx0Ly8gVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcblx0XHRcdFx0XHQvLyBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcblx0XHRcdFx0XHQvLyBvZiB0aGUgc3RyaW5nIHdpdGggaXRzZWxmIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgZmlsZSkuXG5cblx0XHRcdFx0XHRpZiAoc3RyYXRlZ3kgIT0gWl9IVUZGTUFOX09OTFkpIHtcblx0XHRcdFx0XHRcdG1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2goaGFzaF9oZWFkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gbG9uZ2VzdF9tYXRjaCgpIHNldHMgbWF0Y2hfc3RhcnRcblxuXHRcdFx0XHRcdGlmIChtYXRjaF9sZW5ndGggPD0gNSAmJiAoc3RyYXRlZ3kgPT0gWl9GSUxURVJFRCB8fCAobWF0Y2hfbGVuZ3RoID09IE1JTl9NQVRDSCAmJiBzdHJzdGFydCAtIG1hdGNoX3N0YXJ0ID4gNDA5NikpKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHByZXZfbWF0Y2ggaXMgYWxzbyBNSU5fTUFUQ0gsIG1hdGNoX3N0YXJ0IGlzIGdhcmJhZ2Vcblx0XHRcdFx0XHRcdC8vIGJ1dCB3ZSB3aWxsIGlnbm9yZSB0aGUgY3VycmVudCBtYXRjaCBhbnl3YXkuXG5cdFx0XHRcdFx0XHRtYXRjaF9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlIHdhcyBhIG1hdGNoIGF0IHRoZSBwcmV2aW91cyBzdGVwIGFuZCB0aGUgY3VycmVudFxuXHRcdFx0XHQvLyBtYXRjaCBpcyBub3QgYmV0dGVyLCBvdXRwdXQgdGhlIHByZXZpb3VzIG1hdGNoOlxuXHRcdFx0XHRpZiAocHJldl9sZW5ndGggPj0gTUlOX01BVENIICYmIG1hdGNoX2xlbmd0aCA8PSBwcmV2X2xlbmd0aCkge1xuXHRcdFx0XHRcdG1heF9pbnNlcnQgPSBzdHJzdGFydCArIGxvb2thaGVhZCAtIE1JTl9NQVRDSDtcblx0XHRcdFx0XHQvLyBEbyBub3QgaW5zZXJ0IHN0cmluZ3MgaW4gaGFzaCB0YWJsZSBiZXlvbmQgdGhpcy5cblxuXHRcdFx0XHRcdC8vIGNoZWNrX21hdGNoKHN0cnN0YXJ0LTEsIHByZXZfbWF0Y2gsIHByZXZfbGVuZ3RoKTtcblxuXHRcdFx0XHRcdGJmbHVzaCA9IF90cl90YWxseShzdHJzdGFydCAtIDEgLSBwcmV2X21hdGNoLCBwcmV2X2xlbmd0aCAtIE1JTl9NQVRDSCk7XG5cblx0XHRcdFx0XHQvLyBJbnNlcnQgaW4gaGFzaCB0YWJsZSBhbGwgc3RyaW5ncyB1cCB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cblx0XHRcdFx0XHQvLyBzdHJzdGFydC0xIGFuZCBzdHJzdGFydCBhcmUgYWxyZWFkeSBpbnNlcnRlZC4gSWYgdGhlcmUgaXMgbm90XG5cdFx0XHRcdFx0Ly8gZW5vdWdoIGxvb2thaGVhZCwgdGhlIGxhc3QgdHdvIHN0cmluZ3MgYXJlIG5vdCBpbnNlcnRlZCBpblxuXHRcdFx0XHRcdC8vIHRoZSBoYXNoIHRhYmxlLlxuXHRcdFx0XHRcdGxvb2thaGVhZCAtPSBwcmV2X2xlbmd0aCAtIDE7XG5cdFx0XHRcdFx0cHJldl9sZW5ndGggLT0gMjtcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRpZiAoKytzdHJzdGFydCA8PSBtYXhfaW5zZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdGluc19oID0gKCgoaW5zX2gpIDw8IGhhc2hfc2hpZnQpIF4gKHdpbmRvd1soc3Ryc3RhcnQpICsgKE1JTl9NQVRDSCAtIDEpXSAmIDB4ZmYpKSAmIGhhc2hfbWFzaztcblx0XHRcdFx0XHRcdFx0Ly8gcHJldltzdHJzdGFydCZ3X21hc2tdPWhhc2hfaGVhZD1oZWFkW2luc19oXTtcblx0XHRcdFx0XHRcdFx0aGFzaF9oZWFkID0gKGhlYWRbaW5zX2hdICYgMHhmZmZmKTtcblx0XHRcdFx0XHRcdFx0cHJldltzdHJzdGFydCAmIHdfbWFza10gPSBoZWFkW2luc19oXTtcblx0XHRcdFx0XHRcdFx0aGVhZFtpbnNfaF0gPSBzdHJzdGFydDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IHdoaWxlICgtLXByZXZfbGVuZ3RoICE9PSAwKTtcblx0XHRcdFx0XHRtYXRjaF9hdmFpbGFibGUgPSAwO1xuXHRcdFx0XHRcdG1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG5cdFx0XHRcdFx0c3Ryc3RhcnQrKztcblxuXHRcdFx0XHRcdGlmIChiZmx1c2gpIHtcblx0XHRcdFx0XHRcdGZsdXNoX2Jsb2NrX29ubHkoZmFsc2UpO1xuXHRcdFx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKG1hdGNoX2F2YWlsYWJsZSAhPT0gMCkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIG5vIG1hdGNoIGF0IHRoZSBwcmV2aW91cyBwb3NpdGlvbiwgb3V0cHV0IGFcblx0XHRcdFx0XHQvLyBzaW5nbGUgbGl0ZXJhbC4gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYnV0IHRoZSBjdXJyZW50IG1hdGNoXG5cdFx0XHRcdFx0Ly8gaXMgbG9uZ2VyLCB0cnVuY2F0ZSB0aGUgcHJldmlvdXMgbWF0Y2ggdG8gYSBzaW5nbGUgbGl0ZXJhbC5cblxuXHRcdFx0XHRcdGJmbHVzaCA9IF90cl90YWxseSgwLCB3aW5kb3dbc3Ryc3RhcnQgLSAxXSAmIDB4ZmYpO1xuXG5cdFx0XHRcdFx0aWYgKGJmbHVzaCkge1xuXHRcdFx0XHRcdFx0Zmx1c2hfYmxvY2tfb25seShmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cnN0YXJ0Kys7XG5cdFx0XHRcdFx0bG9va2FoZWFkLS07XG5cdFx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIE5lZWRNb3JlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFRoZXJlIGlzIG5vIHByZXZpb3VzIG1hdGNoIHRvIGNvbXBhcmUgd2l0aCwgd2FpdCBmb3Jcblx0XHRcdFx0XHQvLyB0aGUgbmV4dCBzdGVwIHRvIGRlY2lkZS5cblxuXHRcdFx0XHRcdG1hdGNoX2F2YWlsYWJsZSA9IDE7XG5cdFx0XHRcdFx0c3Ryc3RhcnQrKztcblx0XHRcdFx0XHRsb29rYWhlYWQtLTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWF0Y2hfYXZhaWxhYmxlICE9PSAwKSB7XG5cdFx0XHRcdGJmbHVzaCA9IF90cl90YWxseSgwLCB3aW5kb3dbc3Ryc3RhcnQgLSAxXSAmIDB4ZmYpO1xuXHRcdFx0XHRtYXRjaF9hdmFpbGFibGUgPSAwO1xuXHRcdFx0fVxuXHRcdFx0Zmx1c2hfYmxvY2tfb25seShmbHVzaCA9PSBaX0ZJTklTSCk7XG5cblx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuXHRcdFx0XHRpZiAoZmx1c2ggPT0gWl9GSU5JU0gpXG5cdFx0XHRcdFx0cmV0dXJuIEZpbmlzaFN0YXJ0ZWQ7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRyZXR1cm4gTmVlZE1vcmU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbHVzaCA9PSBaX0ZJTklTSCA/IEZpbmlzaERvbmUgOiBCbG9ja0RvbmU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZGVmbGF0ZVJlc2V0KHN0cm0pIHtcblx0XHRcdHN0cm0udG90YWxfaW4gPSBzdHJtLnRvdGFsX291dCA9IDA7XG5cdFx0XHRzdHJtLm1zZyA9IG51bGw7IC8vXG5cdFx0XHRcblx0XHRcdHRoYXQucGVuZGluZyA9IDA7XG5cdFx0XHR0aGF0LnBlbmRpbmdfb3V0ID0gMDtcblxuXHRcdFx0c3RhdHVzID0gQlVTWV9TVEFURTtcblxuXHRcdFx0bGFzdF9mbHVzaCA9IFpfTk9fRkxVU0g7XG5cblx0XHRcdHRyX2luaXQoKTtcblx0XHRcdGxtX2luaXQoKTtcblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH1cblxuXHRcdHRoYXQuZGVmbGF0ZUluaXQgPSBmdW5jdGlvbihzdHJtLCBfbGV2ZWwsIGJpdHMsIF9tZXRob2QsIG1lbUxldmVsLCBfc3RyYXRlZ3kpIHtcblx0XHRcdGlmICghX21ldGhvZClcblx0XHRcdFx0X21ldGhvZCA9IFpfREVGTEFURUQ7XG5cdFx0XHRpZiAoIW1lbUxldmVsKVxuXHRcdFx0XHRtZW1MZXZlbCA9IERFRl9NRU1fTEVWRUw7XG5cdFx0XHRpZiAoIV9zdHJhdGVneSlcblx0XHRcdFx0X3N0cmF0ZWd5ID0gWl9ERUZBVUxUX1NUUkFURUdZO1xuXG5cdFx0XHQvLyBieXRlW10gbXlfdmVyc2lvbj1aTElCX1ZFUlNJT047XG5cblx0XHRcdC8vXG5cdFx0XHQvLyBpZiAoIXZlcnNpb24gfHwgdmVyc2lvblswXSAhPSBteV92ZXJzaW9uWzBdXG5cdFx0XHQvLyB8fCBzdHJlYW1fc2l6ZSAhPSBzaXplb2Yoel9zdHJlYW0pKSB7XG5cdFx0XHQvLyByZXR1cm4gWl9WRVJTSU9OX0VSUk9SO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHRzdHJtLm1zZyA9IG51bGw7XG5cblx0XHRcdGlmIChfbGV2ZWwgPT0gWl9ERUZBVUxUX0NPTVBSRVNTSU9OKVxuXHRcdFx0XHRfbGV2ZWwgPSA2O1xuXG5cdFx0XHRpZiAobWVtTGV2ZWwgPCAxIHx8IG1lbUxldmVsID4gTUFYX01FTV9MRVZFTCB8fCBfbWV0aG9kICE9IFpfREVGTEFURUQgfHwgYml0cyA8IDkgfHwgYml0cyA+IDE1IHx8IF9sZXZlbCA8IDAgfHwgX2xldmVsID4gOSB8fCBfc3RyYXRlZ3kgPCAwXG5cdFx0XHRcdFx0fHwgX3N0cmF0ZWd5ID4gWl9IVUZGTUFOX09OTFkpIHtcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHJtLmRzdGF0ZSA9IHRoYXQ7XG5cblx0XHRcdHdfYml0cyA9IGJpdHM7XG5cdFx0XHR3X3NpemUgPSAxIDw8IHdfYml0cztcblx0XHRcdHdfbWFzayA9IHdfc2l6ZSAtIDE7XG5cblx0XHRcdGhhc2hfYml0cyA9IG1lbUxldmVsICsgNztcblx0XHRcdGhhc2hfc2l6ZSA9IDEgPDwgaGFzaF9iaXRzO1xuXHRcdFx0aGFzaF9tYXNrID0gaGFzaF9zaXplIC0gMTtcblx0XHRcdGhhc2hfc2hpZnQgPSBNYXRoLmZsb29yKChoYXNoX2JpdHMgKyBNSU5fTUFUQ0ggLSAxKSAvIE1JTl9NQVRDSCk7XG5cblx0XHRcdHdpbmRvdyA9IG5ldyBVaW50OEFycmF5KHdfc2l6ZSAqIDIpO1xuXHRcdFx0cHJldiA9IFtdO1xuXHRcdFx0aGVhZCA9IFtdO1xuXG5cdFx0XHRsaXRfYnVmc2l6ZSA9IDEgPDwgKG1lbUxldmVsICsgNik7IC8vIDE2SyBlbGVtZW50cyBieSBkZWZhdWx0XG5cblx0XHRcdC8vIFdlIG92ZXJsYXkgcGVuZGluZ19idWYgYW5kIGRfYnVmK2xfYnVmLiBUaGlzIHdvcmtzIHNpbmNlIHRoZSBhdmVyYWdlXG5cdFx0XHQvLyBvdXRwdXQgc2l6ZSBmb3IgKGxlbmd0aCxkaXN0YW5jZSkgY29kZXMgaXMgPD0gMjQgYml0cy5cblx0XHRcdHRoYXQucGVuZGluZ19idWYgPSBuZXcgVWludDhBcnJheShsaXRfYnVmc2l6ZSAqIDQpO1xuXHRcdFx0cGVuZGluZ19idWZfc2l6ZSA9IGxpdF9idWZzaXplICogNDtcblxuXHRcdFx0ZF9idWYgPSBNYXRoLmZsb29yKGxpdF9idWZzaXplIC8gMik7XG5cdFx0XHRsX2J1ZiA9ICgxICsgMikgKiBsaXRfYnVmc2l6ZTtcblxuXHRcdFx0bGV2ZWwgPSBfbGV2ZWw7XG5cblx0XHRcdHN0cmF0ZWd5ID0gX3N0cmF0ZWd5O1xuXHRcdFx0bWV0aG9kID0gX21ldGhvZCAmIDB4ZmY7XG5cblx0XHRcdHJldHVybiBkZWZsYXRlUmVzZXQoc3RybSk7XG5cdFx0fTtcblxuXHRcdHRoYXQuZGVmbGF0ZUVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHN0YXR1cyAhPSBJTklUX1NUQVRFICYmIHN0YXR1cyAhPSBCVVNZX1NUQVRFICYmIHN0YXR1cyAhPSBGSU5JU0hfU1RBVEUpIHtcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVhbGxvY2F0ZSBpbiByZXZlcnNlIG9yZGVyIG9mIGFsbG9jYXRpb25zOlxuXHRcdFx0dGhhdC5wZW5kaW5nX2J1ZiA9IG51bGw7XG5cdFx0XHRoZWFkID0gbnVsbDtcblx0XHRcdHByZXYgPSBudWxsO1xuXHRcdFx0d2luZG93ID0gbnVsbDtcblx0XHRcdC8vIGZyZWVcblx0XHRcdHRoYXQuZHN0YXRlID0gbnVsbDtcblx0XHRcdHJldHVybiBzdGF0dXMgPT0gQlVTWV9TVEFURSA/IFpfREFUQV9FUlJPUiA6IFpfT0s7XG5cdFx0fTtcblxuXHRcdHRoYXQuZGVmbGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0cm0sIF9sZXZlbCwgX3N0cmF0ZWd5KSB7XG5cdFx0XHR2YXIgZXJyID0gWl9PSztcblxuXHRcdFx0aWYgKF9sZXZlbCA9PSBaX0RFRkFVTFRfQ09NUFJFU1NJT04pIHtcblx0XHRcdFx0X2xldmVsID0gNjtcblx0XHRcdH1cblx0XHRcdGlmIChfbGV2ZWwgPCAwIHx8IF9sZXZlbCA+IDkgfHwgX3N0cmF0ZWd5IDwgMCB8fCBfc3RyYXRlZ3kgPiBaX0hVRkZNQU5fT05MWSkge1xuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWdfdGFibGVbbGV2ZWxdLmZ1bmMgIT0gY29uZmlnX3RhYmxlW19sZXZlbF0uZnVuYyAmJiBzdHJtLnRvdGFsX2luICE9PSAwKSB7XG5cdFx0XHRcdC8vIEZsdXNoIHRoZSBsYXN0IGJ1ZmZlcjpcblx0XHRcdFx0ZXJyID0gc3RybS5kZWZsYXRlKFpfUEFSVElBTF9GTFVTSCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsZXZlbCAhPSBfbGV2ZWwpIHtcblx0XHRcdFx0bGV2ZWwgPSBfbGV2ZWw7XG5cdFx0XHRcdG1heF9sYXp5X21hdGNoID0gY29uZmlnX3RhYmxlW2xldmVsXS5tYXhfbGF6eTtcblx0XHRcdFx0Z29vZF9tYXRjaCA9IGNvbmZpZ190YWJsZVtsZXZlbF0uZ29vZF9sZW5ndGg7XG5cdFx0XHRcdG5pY2VfbWF0Y2ggPSBjb25maWdfdGFibGVbbGV2ZWxdLm5pY2VfbGVuZ3RoO1xuXHRcdFx0XHRtYXhfY2hhaW5fbGVuZ3RoID0gY29uZmlnX3RhYmxlW2xldmVsXS5tYXhfY2hhaW47XG5cdFx0XHR9XG5cdFx0XHRzdHJhdGVneSA9IF9zdHJhdGVneTtcblx0XHRcdHJldHVybiBlcnI7XG5cdFx0fTtcblxuXHRcdHRoYXQuZGVmbGF0ZVNldERpY3Rpb25hcnkgPSBmdW5jdGlvbihzdHJtLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKSB7XG5cdFx0XHR2YXIgbGVuZ3RoID0gZGljdExlbmd0aDtcblx0XHRcdHZhciBuLCBpbmRleCA9IDA7XG5cblx0XHRcdGlmICghZGljdGlvbmFyeSB8fCBzdGF0dXMgIT0gSU5JVF9TVEFURSlcblx0XHRcdFx0cmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuXG5cdFx0XHRpZiAobGVuZ3RoIDwgTUlOX01BVENIKVxuXHRcdFx0XHRyZXR1cm4gWl9PSztcblx0XHRcdGlmIChsZW5ndGggPiB3X3NpemUgLSBNSU5fTE9PS0FIRUFEKSB7XG5cdFx0XHRcdGxlbmd0aCA9IHdfc2l6ZSAtIE1JTl9MT09LQUhFQUQ7XG5cdFx0XHRcdGluZGV4ID0gZGljdExlbmd0aCAtIGxlbmd0aDsgLy8gdXNlIHRoZSB0YWlsIG9mIHRoZSBkaWN0aW9uYXJ5XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cuc2V0KGRpY3Rpb25hcnkuc3ViYXJyYXkoaW5kZXgsIGluZGV4ICsgbGVuZ3RoKSwgMCk7XG5cblx0XHRcdHN0cnN0YXJ0ID0gbGVuZ3RoO1xuXHRcdFx0YmxvY2tfc3RhcnQgPSBsZW5ndGg7XG5cblx0XHRcdC8vIEluc2VydCBhbGwgc3RyaW5ncyBpbiB0aGUgaGFzaCB0YWJsZSAoZXhjZXB0IGZvciB0aGUgbGFzdCB0d28gYnl0ZXMpLlxuXHRcdFx0Ly8gcy0+bG9va2FoZWFkIHN0YXlzIG51bGwsIHNvIHMtPmluc19oIHdpbGwgYmUgcmVjb21wdXRlZCBhdCB0aGUgbmV4dFxuXHRcdFx0Ly8gY2FsbCBvZiBmaWxsX3dpbmRvdy5cblxuXHRcdFx0aW5zX2ggPSB3aW5kb3dbMF0gJiAweGZmO1xuXHRcdFx0aW5zX2ggPSAoKChpbnNfaCkgPDwgaGFzaF9zaGlmdCkgXiAod2luZG93WzFdICYgMHhmZikpICYgaGFzaF9tYXNrO1xuXG5cdFx0XHRmb3IgKG4gPSAwOyBuIDw9IGxlbmd0aCAtIE1JTl9NQVRDSDsgbisrKSB7XG5cdFx0XHRcdGluc19oID0gKCgoaW5zX2gpIDw8IGhhc2hfc2hpZnQpIF4gKHdpbmRvd1sobikgKyAoTUlOX01BVENIIC0gMSldICYgMHhmZikpICYgaGFzaF9tYXNrO1xuXHRcdFx0XHRwcmV2W24gJiB3X21hc2tdID0gaGVhZFtpbnNfaF07XG5cdFx0XHRcdGhlYWRbaW5zX2hdID0gbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBaX09LO1xuXHRcdH07XG5cblx0XHR0aGF0LmRlZmxhdGUgPSBmdW5jdGlvbihfc3RybSwgZmx1c2gpIHtcblx0XHRcdHZhciBpLCBoZWFkZXIsIGxldmVsX2ZsYWdzLCBvbGRfZmx1c2gsIGJzdGF0ZTtcblxuXHRcdFx0aWYgKGZsdXNoID4gWl9GSU5JU0ggfHwgZmx1c2ggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFfc3RybS5uZXh0X291dCB8fCAoIV9zdHJtLm5leHRfaW4gJiYgX3N0cm0uYXZhaWxfaW4gIT09IDApIHx8IChzdGF0dXMgPT0gRklOSVNIX1NUQVRFICYmIGZsdXNoICE9IFpfRklOSVNIKSkge1xuXHRcdFx0XHRfc3RybS5tc2cgPSB6X2Vycm1zZ1taX05FRURfRElDVCAtIChaX1NUUkVBTV9FUlJPUildO1xuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX3N0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG5cdFx0XHRcdF9zdHJtLm1zZyA9IHpfZXJybXNnW1pfTkVFRF9ESUNUIC0gKFpfQlVGX0VSUk9SKV07XG5cdFx0XHRcdHJldHVybiBaX0JVRl9FUlJPUjtcblx0XHRcdH1cblxuXHRcdFx0c3RybSA9IF9zdHJtOyAvLyBqdXN0IGluIGNhc2Vcblx0XHRcdG9sZF9mbHVzaCA9IGxhc3RfZmx1c2g7XG5cdFx0XHRsYXN0X2ZsdXNoID0gZmx1c2g7XG5cblx0XHRcdC8vIFdyaXRlIHRoZSB6bGliIGhlYWRlclxuXHRcdFx0aWYgKHN0YXR1cyA9PSBJTklUX1NUQVRFKSB7XG5cdFx0XHRcdGhlYWRlciA9IChaX0RFRkxBVEVEICsgKCh3X2JpdHMgLSA4KSA8PCA0KSkgPDwgODtcblx0XHRcdFx0bGV2ZWxfZmxhZ3MgPSAoKGxldmVsIC0gMSkgJiAweGZmKSA+PiAxO1xuXG5cdFx0XHRcdGlmIChsZXZlbF9mbGFncyA+IDMpXG5cdFx0XHRcdFx0bGV2ZWxfZmxhZ3MgPSAzO1xuXHRcdFx0XHRoZWFkZXIgfD0gKGxldmVsX2ZsYWdzIDw8IDYpO1xuXHRcdFx0XHRpZiAoc3Ryc3RhcnQgIT09IDApXG5cdFx0XHRcdFx0aGVhZGVyIHw9IFBSRVNFVF9ESUNUO1xuXHRcdFx0XHRoZWFkZXIgKz0gMzEgLSAoaGVhZGVyICUgMzEpO1xuXG5cdFx0XHRcdHN0YXR1cyA9IEJVU1lfU1RBVEU7XG5cdFx0XHRcdHB1dFNob3J0TVNCKGhlYWRlcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGVcblx0XHRcdGlmICh0aGF0LnBlbmRpbmcgIT09IDApIHtcblx0XHRcdFx0c3RybS5mbHVzaF9wZW5kaW5nKCk7XG5cdFx0XHRcdGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiIGF2YWlsX291dD09MFwiKTtcblx0XHRcdFx0XHQvLyBTaW5jZSBhdmFpbF9vdXQgaXMgMCwgZGVmbGF0ZSB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aXRoXG5cdFx0XHRcdFx0Ly8gbW9yZSBvdXRwdXQgc3BhY2UsIGJ1dCBwb3NzaWJseSB3aXRoIGJvdGggcGVuZGluZyBhbmRcblx0XHRcdFx0XHQvLyBhdmFpbF9pbiBlcXVhbCB0byB6ZXJvLiBUaGVyZSB3b24ndCBiZSBhbnl0aGluZyB0byBkbyxcblx0XHRcdFx0XHQvLyBidXQgdGhpcyBpcyBub3QgYW4gZXJyb3Igc2l0dWF0aW9uIHNvIG1ha2Ugc3VyZSB3ZVxuXHRcdFx0XHRcdC8vIHJldHVybiBPSyBpbnN0ZWFkIG9mIEJVRl9FUlJPUiBhdCBuZXh0IGNhbGwgb2YgZGVmbGF0ZTpcblx0XHRcdFx0XHRsYXN0X2ZsdXNoID0gLTE7XG5cdFx0XHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGRvIGFuZCBhdm9pZCBkdXBsaWNhdGVcblx0XHRcdFx0Ly8gY29uc2VjdXRpdmVcblx0XHRcdFx0Ly8gZmx1c2hlcy4gRm9yIHJlcGVhdGVkIGFuZCB1c2VsZXNzIGNhbGxzIHdpdGggWl9GSU5JU0gsIHdlIGtlZXBcblx0XHRcdFx0Ly8gcmV0dXJuaW5nIFpfU1RSRUFNX0VORCBpbnN0ZWFkIG9mIFpfQlVGRl9FUlJPUi5cblx0XHRcdH0gZWxzZSBpZiAoc3RybS5hdmFpbF9pbiA9PT0gMCAmJiBmbHVzaCA8PSBvbGRfZmx1c2ggJiYgZmx1c2ggIT0gWl9GSU5JU0gpIHtcblx0XHRcdFx0c3RybS5tc2cgPSB6X2Vycm1zZ1taX05FRURfRElDVCAtIChaX0JVRl9FUlJPUildO1xuXHRcdFx0XHRyZXR1cm4gWl9CVUZfRVJST1I7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZXIgbXVzdCBub3QgcHJvdmlkZSBtb3JlIGlucHV0IGFmdGVyIHRoZSBmaXJzdCBGSU5JU0g6XG5cdFx0XHRpZiAoc3RhdHVzID09IEZJTklTSF9TVEFURSAmJiBzdHJtLmF2YWlsX2luICE9PSAwKSB7XG5cdFx0XHRcdF9zdHJtLm1zZyA9IHpfZXJybXNnW1pfTkVFRF9ESUNUIC0gKFpfQlVGX0VSUk9SKV07XG5cdFx0XHRcdHJldHVybiBaX0JVRl9FUlJPUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhcnQgYSBuZXcgYmxvY2sgb3IgY29udGludWUgdGhlIGN1cnJlbnQgb25lLlxuXHRcdFx0aWYgKHN0cm0uYXZhaWxfaW4gIT09IDAgfHwgbG9va2FoZWFkICE9PSAwIHx8IChmbHVzaCAhPSBaX05PX0ZMVVNIICYmIHN0YXR1cyAhPSBGSU5JU0hfU1RBVEUpKSB7XG5cdFx0XHRcdGJzdGF0ZSA9IC0xO1xuXHRcdFx0XHRzd2l0Y2ggKGNvbmZpZ190YWJsZVtsZXZlbF0uZnVuYykge1xuXHRcdFx0XHRjYXNlIFNUT1JFRDpcblx0XHRcdFx0XHRic3RhdGUgPSBkZWZsYXRlX3N0b3JlZChmbHVzaCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRkFTVDpcblx0XHRcdFx0XHRic3RhdGUgPSBkZWZsYXRlX2Zhc3QoZmx1c2gpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNMT1c6XG5cdFx0XHRcdFx0YnN0YXRlID0gZGVmbGF0ZV9zbG93KGZsdXNoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChic3RhdGUgPT0gRmluaXNoU3RhcnRlZCB8fCBic3RhdGUgPT0gRmluaXNoRG9uZSkge1xuXHRcdFx0XHRcdHN0YXR1cyA9IEZJTklTSF9TVEFURTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYnN0YXRlID09IE5lZWRNb3JlIHx8IGJzdGF0ZSA9PSBGaW5pc2hTdGFydGVkKSB7XG5cdFx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRsYXN0X2ZsdXNoID0gLTE7IC8vIGF2b2lkIEJVRl9FUlJPUiBuZXh0IGNhbGwsIHNlZSBhYm92ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gWl9PSztcblx0XHRcdFx0XHQvLyBJZiBmbHVzaCAhPSBaX05PX0ZMVVNIICYmIGF2YWlsX291dCA9PT0gMCwgdGhlIG5leHQgY2FsbFxuXHRcdFx0XHRcdC8vIG9mIGRlZmxhdGUgc2hvdWxkIHVzZSB0aGUgc2FtZSBmbHVzaCBwYXJhbWV0ZXIgdG8gbWFrZSBzdXJlXG5cdFx0XHRcdFx0Ly8gdGhhdCB0aGUgZmx1c2ggaXMgY29tcGxldGUuIFNvIHdlIGRvbid0IGhhdmUgdG8gb3V0cHV0IGFuXG5cdFx0XHRcdFx0Ly8gZW1wdHkgYmxvY2sgaGVyZSwgdGhpcyB3aWxsIGJlIGRvbmUgYXQgbmV4dCBjYWxsLiBUaGlzIGFsc29cblx0XHRcdFx0XHQvLyBlbnN1cmVzIHRoYXQgZm9yIGEgdmVyeSBzbWFsbCBvdXRwdXQgYnVmZmVyLCB3ZSBlbWl0IGF0IG1vc3Rcblx0XHRcdFx0XHQvLyBvbmUgZW1wdHkgYmxvY2suXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYnN0YXRlID09IEJsb2NrRG9uZSkge1xuXHRcdFx0XHRcdGlmIChmbHVzaCA9PSBaX1BBUlRJQUxfRkxVU0gpIHtcblx0XHRcdFx0XHRcdF90cl9hbGlnbigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7IC8vIEZVTExfRkxVU0ggb3IgU1lOQ19GTFVTSFxuXHRcdFx0XHRcdFx0X3RyX3N0b3JlZF9ibG9jaygwLCAwLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHQvLyBGb3IgYSBmdWxsIGZsdXNoLCB0aGlzIGVtcHR5IGJsb2NrIHdpbGwgYmUgcmVjb2duaXplZFxuXHRcdFx0XHRcdFx0Ly8gYXMgYSBzcGVjaWFsIG1hcmtlciBieSBpbmZsYXRlX3N5bmMoKS5cblx0XHRcdFx0XHRcdGlmIChmbHVzaCA9PSBaX0ZVTExfRkxVU0gpIHtcblx0XHRcdFx0XHRcdFx0Ly8gc3RhdGUuaGVhZFtzLmhhc2hfc2l6ZS0xXT0wO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgaGFzaF9zaXplLyotMSovOyBpKyspXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZm9yZ2V0IGhpc3Rvcnlcblx0XHRcdFx0XHRcdFx0XHRoZWFkW2ldID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RybS5mbHVzaF9wZW5kaW5nKCk7XG5cdFx0XHRcdFx0aWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRsYXN0X2ZsdXNoID0gLTE7IC8vIGF2b2lkIEJVRl9FUlJPUiBhdCBuZXh0IGNhbGwsIHNlZSBhYm92ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbHVzaCAhPSBaX0ZJTklTSClcblx0XHRcdFx0cmV0dXJuIFpfT0s7XG5cdFx0XHRyZXR1cm4gWl9TVFJFQU1fRU5EO1xuXHRcdH07XG5cdH1cblxuXHQvLyBaU3RyZWFtXG5cblx0ZnVuY3Rpb24gWlN0cmVhbSgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5uZXh0X2luX2luZGV4ID0gMDtcblx0XHR0aGF0Lm5leHRfb3V0X2luZGV4ID0gMDtcblx0XHQvLyB0aGF0Lm5leHRfaW47IC8vIG5leHQgaW5wdXQgYnl0ZVxuXHRcdHRoYXQuYXZhaWxfaW4gPSAwOyAvLyBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlIGF0IG5leHRfaW5cblx0XHR0aGF0LnRvdGFsX2luID0gMDsgLy8gdG90YWwgbmIgb2YgaW5wdXQgYnl0ZXMgcmVhZCBzbyBmYXJcblx0XHQvLyB0aGF0Lm5leHRfb3V0OyAvLyBuZXh0IG91dHB1dCBieXRlIHNob3VsZCBiZSBwdXQgdGhlcmVcblx0XHR0aGF0LmF2YWlsX291dCA9IDA7IC8vIHJlbWFpbmluZyBmcmVlIHNwYWNlIGF0IG5leHRfb3V0XG5cdFx0dGhhdC50b3RhbF9vdXQgPSAwOyAvLyB0b3RhbCBuYiBvZiBieXRlcyBvdXRwdXQgc28gZmFyXG5cdFx0Ly8gdGhhdC5tc2c7XG5cdFx0Ly8gdGhhdC5kc3RhdGU7XG5cdH1cblxuXHRaU3RyZWFtLnByb3RvdHlwZSA9IHtcblx0XHRkZWZsYXRlSW5pdCA6IGZ1bmN0aW9uKGxldmVsLCBiaXRzKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHR0aGF0LmRzdGF0ZSA9IG5ldyBEZWZsYXRlKCk7XG5cdFx0XHRpZiAoIWJpdHMpXG5cdFx0XHRcdGJpdHMgPSBNQVhfQklUUztcblx0XHRcdHJldHVybiB0aGF0LmRzdGF0ZS5kZWZsYXRlSW5pdCh0aGF0LCBsZXZlbCwgYml0cyk7XG5cdFx0fSxcblxuXHRcdGRlZmxhdGUgOiBmdW5jdGlvbihmbHVzaCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYgKCF0aGF0LmRzdGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhhdC5kc3RhdGUuZGVmbGF0ZSh0aGF0LCBmbHVzaCk7XG5cdFx0fSxcblxuXHRcdGRlZmxhdGVFbmQgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdGlmICghdGhhdC5kc3RhdGUpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdHZhciByZXQgPSB0aGF0LmRzdGF0ZS5kZWZsYXRlRW5kKCk7XG5cdFx0XHR0aGF0LmRzdGF0ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHRkZWZsYXRlUGFyYW1zIDogZnVuY3Rpb24obGV2ZWwsIHN0cmF0ZWd5KSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRpZiAoIXRoYXQuZHN0YXRlKVxuXHRcdFx0XHRyZXR1cm4gWl9TVFJFQU1fRVJST1I7XG5cdFx0XHRyZXR1cm4gdGhhdC5kc3RhdGUuZGVmbGF0ZVBhcmFtcyh0aGF0LCBsZXZlbCwgc3RyYXRlZ3kpO1xuXHRcdH0sXG5cblx0XHRkZWZsYXRlU2V0RGljdGlvbmFyeSA6IGZ1bmN0aW9uKGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpIHtcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdGlmICghdGhhdC5kc3RhdGUpXG5cdFx0XHRcdHJldHVybiBaX1NUUkVBTV9FUlJPUjtcblx0XHRcdHJldHVybiB0aGF0LmRzdGF0ZS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGF0LCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKTtcblx0XHR9LFxuXG5cdFx0Ly8gUmVhZCBhIG5ldyBidWZmZXIgZnJvbSB0aGUgY3VycmVudCBpbnB1dCBzdHJlYW0sIHVwZGF0ZSB0aGVcblx0XHQvLyB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgcmVhZC4gQWxsIGRlZmxhdGUoKSBpbnB1dCBnb2VzIHRocm91Z2hcblx0XHQvLyB0aGlzIGZ1bmN0aW9uIHNvIHNvbWUgYXBwbGljYXRpb25zIG1heSB3aXNoIHRvIG1vZGlmeSBpdCB0byBhdm9pZFxuXHRcdC8vIGFsbG9jYXRpbmcgYSBsYXJnZSBzdHJtLT5uZXh0X2luIGJ1ZmZlciBhbmQgY29weWluZyBmcm9tIGl0LlxuXHRcdC8vIChTZWUgYWxzbyBmbHVzaF9wZW5kaW5nKCkpLlxuXHRcdHJlYWRfYnVmIDogZnVuY3Rpb24oYnVmLCBzdGFydCwgc2l6ZSkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0dmFyIGxlbiA9IHRoYXQuYXZhaWxfaW47XG5cdFx0XHRpZiAobGVuID4gc2l6ZSlcblx0XHRcdFx0bGVuID0gc2l6ZTtcblx0XHRcdGlmIChsZW4gPT09IDApXG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0dGhhdC5hdmFpbF9pbiAtPSBsZW47XG5cdFx0XHRidWYuc2V0KHRoYXQubmV4dF9pbi5zdWJhcnJheSh0aGF0Lm5leHRfaW5faW5kZXgsIHRoYXQubmV4dF9pbl9pbmRleCArIGxlbiksIHN0YXJ0KTtcblx0XHRcdHRoYXQubmV4dF9pbl9pbmRleCArPSBsZW47XG5cdFx0XHR0aGF0LnRvdGFsX2luICs9IGxlbjtcblx0XHRcdHJldHVybiBsZW47XG5cdFx0fSxcblxuXHRcdC8vIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGUuIEFsbCBkZWZsYXRlKCkgb3V0cHV0IGdvZXNcblx0XHQvLyB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gc28gc29tZSBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0XG5cdFx0Ly8gdG8gYXZvaWQgYWxsb2NhdGluZyBhIGxhcmdlIHN0cm0tPm5leHRfb3V0IGJ1ZmZlciBhbmQgY29weWluZyBpbnRvIGl0LlxuXHRcdC8vIChTZWUgYWxzbyByZWFkX2J1ZigpKS5cblx0XHRmbHVzaF9wZW5kaW5nIDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHR2YXIgbGVuID0gdGhhdC5kc3RhdGUucGVuZGluZztcblxuXHRcdFx0aWYgKGxlbiA+IHRoYXQuYXZhaWxfb3V0KVxuXHRcdFx0XHRsZW4gPSB0aGF0LmF2YWlsX291dDtcblx0XHRcdGlmIChsZW4gPT09IDApXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0Ly8gaWYgKHRoYXQuZHN0YXRlLnBlbmRpbmdfYnVmLmxlbmd0aCA8PSB0aGF0LmRzdGF0ZS5wZW5kaW5nX291dCB8fCB0aGF0Lm5leHRfb3V0Lmxlbmd0aCA8PSB0aGF0Lm5leHRfb3V0X2luZGV4XG5cdFx0XHQvLyB8fCB0aGF0LmRzdGF0ZS5wZW5kaW5nX2J1Zi5sZW5ndGggPCAodGhhdC5kc3RhdGUucGVuZGluZ19vdXQgKyBsZW4pIHx8IHRoYXQubmV4dF9vdXQubGVuZ3RoIDwgKHRoYXQubmV4dF9vdXRfaW5kZXggK1xuXHRcdFx0Ly8gbGVuKSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhhdC5kc3RhdGUucGVuZGluZ19idWYubGVuZ3RoICsgXCIsIFwiICsgdGhhdC5kc3RhdGUucGVuZGluZ19vdXQgKyBcIiwgXCIgKyB0aGF0Lm5leHRfb3V0Lmxlbmd0aCArIFwiLCBcIiArXG5cdFx0XHQvLyB0aGF0Lm5leHRfb3V0X2luZGV4ICsgXCIsIFwiICsgbGVuKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiYXZhaWxfb3V0PVwiICsgdGhhdC5hdmFpbF9vdXQpO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHR0aGF0Lm5leHRfb3V0LnNldCh0aGF0LmRzdGF0ZS5wZW5kaW5nX2J1Zi5zdWJhcnJheSh0aGF0LmRzdGF0ZS5wZW5kaW5nX291dCwgdGhhdC5kc3RhdGUucGVuZGluZ19vdXQgKyBsZW4pLCB0aGF0Lm5leHRfb3V0X2luZGV4KTtcblxuXHRcdFx0dGhhdC5uZXh0X291dF9pbmRleCArPSBsZW47XG5cdFx0XHR0aGF0LmRzdGF0ZS5wZW5kaW5nX291dCArPSBsZW47XG5cdFx0XHR0aGF0LnRvdGFsX291dCArPSBsZW47XG5cdFx0XHR0aGF0LmF2YWlsX291dCAtPSBsZW47XG5cdFx0XHR0aGF0LmRzdGF0ZS5wZW5kaW5nIC09IGxlbjtcblx0XHRcdGlmICh0aGF0LmRzdGF0ZS5wZW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdHRoYXQuZHN0YXRlLnBlbmRpbmdfb3V0ID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gRGVmbGF0ZXJcblxuXHRmdW5jdGlvbiBEZWZsYXRlcihsZXZlbCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR2YXIgeiA9IG5ldyBaU3RyZWFtKCk7XG5cdFx0dmFyIGJ1ZnNpemUgPSA1MTI7XG5cdFx0dmFyIGZsdXNoID0gWl9OT19GTFVTSDtcblx0XHR2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYnVmc2l6ZSk7XG5cblx0XHRpZiAodHlwZW9mIGxldmVsID09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRsZXZlbCA9IFpfREVGQVVMVF9DT01QUkVTU0lPTjtcblx0XHR6LmRlZmxhdGVJbml0KGxldmVsKTtcblx0XHR6Lm5leHRfb3V0ID0gYnVmO1xuXG5cdFx0dGhhdC5hcHBlbmQgPSBmdW5jdGlvbihkYXRhLCBvbnByb2dyZXNzKSB7XG5cdFx0XHR2YXIgZXJyLCBidWZmZXJzID0gW10sIGxhc3RJbmRleCA9IDAsIGJ1ZmZlckluZGV4ID0gMCwgYnVmZmVyU2l6ZSA9IDAsIGFycmF5O1xuXHRcdFx0aWYgKCFkYXRhLmxlbmd0aClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0ei5uZXh0X2luX2luZGV4ID0gMDtcblx0XHRcdHoubmV4dF9pbiA9IGRhdGE7XG5cdFx0XHR6LmF2YWlsX2luID0gZGF0YS5sZW5ndGg7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHoubmV4dF9vdXRfaW5kZXggPSAwO1xuXHRcdFx0XHR6LmF2YWlsX291dCA9IGJ1ZnNpemU7XG5cdFx0XHRcdGVyciA9IHouZGVmbGF0ZShmbHVzaCk7XG5cdFx0XHRcdGlmIChlcnIgIT0gWl9PSylcblx0XHRcdFx0XHR0aHJvdyBcImRlZmxhdGluZzogXCIgKyB6Lm1zZztcblx0XHRcdFx0aWYgKHoubmV4dF9vdXRfaW5kZXgpXG5cdFx0XHRcdFx0aWYgKHoubmV4dF9vdXRfaW5kZXggPT0gYnVmc2l6ZSlcblx0XHRcdFx0XHRcdGJ1ZmZlcnMucHVzaChuZXcgVWludDhBcnJheShidWYpKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRidWZmZXJzLnB1c2gobmV3IFVpbnQ4QXJyYXkoYnVmLnN1YmFycmF5KDAsIHoubmV4dF9vdXRfaW5kZXgpKSk7XG5cdFx0XHRcdGJ1ZmZlclNpemUgKz0gei5uZXh0X291dF9pbmRleDtcblx0XHRcdFx0aWYgKG9ucHJvZ3Jlc3MgJiYgei5uZXh0X2luX2luZGV4ID4gMCAmJiB6Lm5leHRfaW5faW5kZXggIT0gbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0b25wcm9ncmVzcyh6Lm5leHRfaW5faW5kZXgpO1xuXHRcdFx0XHRcdGxhc3RJbmRleCA9IHoubmV4dF9pbl9pbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZSAoei5hdmFpbF9pbiA+IDAgfHwgei5hdmFpbF9vdXQgPT09IDApO1xuXHRcdFx0YXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJTaXplKTtcblx0XHRcdGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihjaHVuaykge1xuXHRcdFx0XHRhcnJheS5zZXQoY2h1bmssIGJ1ZmZlckluZGV4KTtcblx0XHRcdFx0YnVmZmVySW5kZXggKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0fTtcblx0XHR0aGF0LmZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZXJyLCBidWZmZXJzID0gW10sIGJ1ZmZlckluZGV4ID0gMCwgYnVmZmVyU2l6ZSA9IDAsIGFycmF5O1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHR6Lm5leHRfb3V0X2luZGV4ID0gMDtcblx0XHRcdFx0ei5hdmFpbF9vdXQgPSBidWZzaXplO1xuXHRcdFx0XHRlcnIgPSB6LmRlZmxhdGUoWl9GSU5JU0gpO1xuXHRcdFx0XHRpZiAoZXJyICE9IFpfU1RSRUFNX0VORCAmJiBlcnIgIT0gWl9PSylcblx0XHRcdFx0XHR0aHJvdyBcImRlZmxhdGluZzogXCIgKyB6Lm1zZztcblx0XHRcdFx0aWYgKGJ1ZnNpemUgLSB6LmF2YWlsX291dCA+IDApXG5cdFx0XHRcdFx0YnVmZmVycy5wdXNoKG5ldyBVaW50OEFycmF5KGJ1Zi5zdWJhcnJheSgwLCB6Lm5leHRfb3V0X2luZGV4KSkpO1xuXHRcdFx0XHRidWZmZXJTaXplICs9IHoubmV4dF9vdXRfaW5kZXg7XG5cdFx0XHR9IHdoaWxlICh6LmF2YWlsX2luID4gMCB8fCB6LmF2YWlsX291dCA9PT0gMCk7XG5cdFx0XHR6LmRlZmxhdGVFbmQoKTtcblx0XHRcdGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyU2l6ZSk7XG5cdFx0XHRidWZmZXJzLmZvckVhY2goZnVuY3Rpb24oY2h1bmspIHtcblx0XHRcdFx0YXJyYXkuc2V0KGNodW5rLCBidWZmZXJJbmRleCk7XG5cdFx0XHRcdGJ1ZmZlckluZGV4ICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdH07XG5cdH1cblxuXHR2YXIgZGVmbGF0ZXI7XG5cblx0aWYgKG9iai56aXApXG5cdFx0b2JqLnppcC5EZWZsYXRlciA9IERlZmxhdGVyO1xuXHRlbHNlIHtcblx0XHRkZWZsYXRlciA9IG5ldyBEZWZsYXRlcigpO1xuXHRcdG9iai5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuXHRcdFx0aWYgKG1lc3NhZ2UuaW5pdCkge1xuXHRcdFx0XHRkZWZsYXRlciA9IG5ldyBEZWZsYXRlcihtZXNzYWdlLmxldmVsKTtcblx0XHRcdFx0b2JqLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRvbmluaXQgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lc3NhZ2UuYXBwZW5kKVxuXHRcdFx0XHRvYmoucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdG9uYXBwZW5kIDogdHJ1ZSxcblx0XHRcdFx0XHRkYXRhIDogZGVmbGF0ZXIuYXBwZW5kKG1lc3NhZ2UuZGF0YSwgZnVuY3Rpb24oY3VycmVudCkge1xuXHRcdFx0XHRcdFx0b2JqLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRcdFx0cHJvZ3Jlc3MgOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50IDogY3VycmVudFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSk7XG5cdFx0XHRpZiAobWVzc2FnZS5mbHVzaClcblx0XHRcdFx0b2JqLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRvbmZsdXNoIDogdHJ1ZSxcblx0XHRcdFx0XHRkYXRhIDogZGVmbGF0ZXIuZmx1c2goKVxuXHRcdFx0XHR9KTtcblx0XHR9LCBmYWxzZSk7XG5cdH1cblxufSkoc2VsZik7XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9