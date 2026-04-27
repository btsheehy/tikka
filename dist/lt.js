import curry from './curry.js';

/**
 * Compares numbers with `<`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than `b`.
 *
 * @example
 * lt(2, 5) // true
 */
const lt = (a, b) => a < b;
var lt$1 = /*#__PURE__*/ curry(lt);

export { lt$1 as default };
//# sourceMappingURL=lt.js.map
