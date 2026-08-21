'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const min = (a, b) => Math.min(a, b);
/**
 * Returns the smaller of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The minimum of `a` and `b`.
 *
 * @example
 * min(4, 9) // 4
 */
const minCurried = /*#__PURE__*/ curryRight.default(min);

exports.default = minCurried;
//# sourceMappingURL=min.cjs.map
