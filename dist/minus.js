import curryRight from './curryRight.js';

const minus = (a, b) => a - b;
/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
const minusCurried = /*#__PURE__*/ curryRight(minus);

export { minusCurried as default };
//# sourceMappingURL=minus.js.map
