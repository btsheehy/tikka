'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight.default(minus);

exports.default = minus$1;
//# sourceMappingURL=minus.cjs.map
