import curry from './curry.js';

const gt = (a, b) => a > b;
/**
 * Compares numbers with `>`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than `b`.
 *
 * @example
 * gt(10, 4) // true
 */
const gtCurried = /*#__PURE__*/ curry(gt);

export { gtCurried as default };
//# sourceMappingURL=gt.js.map
