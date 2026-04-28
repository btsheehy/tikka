'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const lt = (a, b) => a <= b;
/**
 * Compares numbers with `<=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than or equal to `b`.
 *
 * @example
 * lte(5, 5) // true
 */
const lteCurried = /*#__PURE__*/ curry.default(lt);

exports.default = lteCurried;
//# sourceMappingURL=lte.cjs.map
