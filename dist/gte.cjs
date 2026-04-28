'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const gt = (a, b) => a >= b;
/**
 * Compares numbers with `>=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than or equal to `b`.
 *
 * @example
 * gte(10, 10) // true
 */
const gteCurried = /*#__PURE__*/ curry.default(gt);

exports.default = gteCurried;
//# sourceMappingURL=gte.cjs.map
