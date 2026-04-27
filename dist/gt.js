import curry from './curry.js';

/**
 * Compares numbers with `>`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than `b`.
 *
 * @example
 * gt(10, 4) // true
 */
const gt = (a, b) => a > b;
var gt$1 = /*#__PURE__*/ curry(gt);

export { gt$1 as default };
//# sourceMappingURL=gt.js.map
