import curryRight from './curryRight.js';

const min = (a, b) => Math.min(a, b);
/**
 * Returns the smaller of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The minimum of `a` and `b`.
 *
 * @example
 * min(4, 9) // 4
 */
const minCurried = /*#__PURE__*/ curryRight(min);

export { minCurried as default };
//# sourceMappingURL=min.js.map
