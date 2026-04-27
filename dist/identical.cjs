'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Compares two values using `Object.is` semantics.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` when the values are the same according to `Object.is`, otherwise `false`.
 *
 * @example
 * identical(NaN, NaN) // true
 */
const identical = (a, b) => Object.is(a, b);
var identical$1 = /*#__PURE__*/ curryRight.default(identical);

exports.default = identical$1;
//# sourceMappingURL=identical.cjs.map
