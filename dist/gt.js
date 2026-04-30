import curryRight from './curryRight.js';

const gt = (a, b) => a > b;
/**
 * Compares numbers with `>`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than `a`.
 *
 * @example
 * gt(10)(4) // false
 */
const gtCurried = /*#__PURE__*/ curryRight(gt);

export { gtCurried as default };
//# sourceMappingURL=gt.js.map
