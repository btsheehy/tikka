'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const gt = (a, b) => a > b;
/**
 * Compares numbers with `>`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than `a`.
 *
 * @example
 * gt(10)(4) // false
 */
const gtCurried = /*#__PURE__*/ curryRight.default(gt);

exports.default = gtCurried;
//# sourceMappingURL=gt.cjs.map
