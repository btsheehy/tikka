'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const or = (a, b) => !!(a || b);
/**
 * Returns `true` when either value is truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if at least one operand is truthy.
 *
 * @example
 * or(user.isAdmin, user.isOwner)
 */
const orCurried = /*#__PURE__*/ curry.default(or);

exports.default = orCurried;
//# sourceMappingURL=or.cjs.map
