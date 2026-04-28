import curry from './curry.js';

const and = (a, b) => !!(a && b);
/**
 * Returns `true` when both values are truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if both operands are truthy, otherwise `false`.
 *
 * @example
 * and(user.isActive, user.isVerified)
 */
const andCurried = /*#__PURE__*/ curry(and);

export { andCurried as default };
//# sourceMappingURL=and.js.map
