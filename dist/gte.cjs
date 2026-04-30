'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const gt = (a, b) => a >= b;
/**
 * Compares numbers with `>=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than or equal to `a`.
 *
 * @example
 * gte(10)(10) // true
 * get(12)(9) // false
 */
const gteCurried = /*#__PURE__*/ curryRight.default(gt);

exports.default = gteCurried;
//# sourceMappingURL=gte.cjs.map
