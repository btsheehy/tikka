import curryRight from './curryRight.js';

const gt = (a, b) => a >= b;
/**
 * Compares numbers with `>=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than or equal to `a`.
 *
 * @example
 * gte(10)(10) // true
 * get(12)(9) // false
 */
const gteCurried = /*#__PURE__*/ curryRight(gt);

export { gteCurried as default };
//# sourceMappingURL=gte.js.map
