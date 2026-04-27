'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Compares numbers with `>=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than or equal to `b`.
 *
 * @example
 * gte(10, 10) // true
 */
const gt = (a, b) => a >= b;
var gte = /*#__PURE__*/ curry.default(gt);

exports.default = gte;
//# sourceMappingURL=gte.cjs.map
