'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const max = (a, b) => Math.max(a, b);
/**
 * Returns the larger of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The maximum of `a` and `b`.
 *
 * @example
 * max(4, 9) // 9
 */
const maxCurried = /*#__PURE__*/ curryRight.default(max);

exports.default = maxCurried;
//# sourceMappingURL=max.cjs.map
