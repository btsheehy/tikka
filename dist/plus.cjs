'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Adds two numbers.
 * @param a - Left addend.
 * @param b - Right addend.
 * @returns Sum `a + b`.
 *
 * @example
 * plus(2)(3) // 5
 */
const plus = (a, b) => a + b;
var plus$1 = /*#__PURE__*/ curry.default(plus);

exports.default = plus$1;
//# sourceMappingURL=plus.cjs.map
