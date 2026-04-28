'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const minus = (a, b) => a - b;
/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
const minusCurried = /*#__PURE__*/ curryRight.default(minus);

exports.default = minusCurried;
//# sourceMappingURL=minus.cjs.map
