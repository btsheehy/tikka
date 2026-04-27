import curry from './curry.js';

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
var gte = /*#__PURE__*/ curry(gt);

export { gte as default };
//# sourceMappingURL=gte.js.map
