import curry from './curry.js';

/**
 * Compares numbers with `<=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than or equal to `b`.
 *
 * @example
 * lte(5, 5) // true
 */
const lt = (a, b) => a <= b;
var lte = /*#__PURE__*/ curry(lt);

export { lte as default };
//# sourceMappingURL=lte.js.map
