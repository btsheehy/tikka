'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const lte = (a, b) => a <= b;
/**
 * Compares numbers with `<=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than or equal to `a`.
 *
 * @example
 * lte(5)(5) // true
 * lte(9)(2) // true
 */
const lteCurried = /*#__PURE__*/ curryRight.default(lte);

exports.default = lteCurried;
//# sourceMappingURL=lte.cjs.map
