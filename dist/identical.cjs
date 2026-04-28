'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const identical = (a, b) => Object.is(a, b);
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
const identicalCurried = /*#__PURE__*/ curryRight.default(identical);

exports.default = identicalCurried;
//# sourceMappingURL=identical.cjs.map
