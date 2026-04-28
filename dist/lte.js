import curry from './curry.js';

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
const lteCurried = /*#__PURE__*/ curry(lt);

export { lteCurried as default };
//# sourceMappingURL=lte.js.map
