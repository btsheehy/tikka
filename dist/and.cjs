'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Returns `true` when both values are truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if both operands are truthy, otherwise `false`.
 *
 * @example
 * and(user.isActive, user.isVerified)
 */
const and = (a, b) => !!(a && b);
var and$1 = /*#__PURE__*/ curry.default(and);

exports.default = and$1;
//# sourceMappingURL=and.cjs.map
