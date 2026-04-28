import curry from './curry.js';

const lt = (a, b) => a < b;
/**
 * Compares numbers with `<`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than `b`.
 *
 * @example
 * lt(2, 5) // true
 */
const ltCurried = /*#__PURE__*/ curry(lt);

export { ltCurried as default };
//# sourceMappingURL=lt.js.map
