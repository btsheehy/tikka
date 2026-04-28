'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const gt = (a, b) => a > b;
/**
 * Compares numbers with `>`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than `b`.
 *
 * @example
 * gt(10, 4) // true
 */
const gtCurried = /*#__PURE__*/ curry.default(gt);

exports.default = gtCurried;
//# sourceMappingURL=gt.cjs.map
