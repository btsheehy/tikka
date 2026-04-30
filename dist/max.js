import curryRight from './curryRight.js';

const max = (a, b) => Math.max(a, b);
/**
 * Returns the larger of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The maximum of `a` and `b`.
 *
 * @example
 * max(4, 9) // 9
 */
const maxCurried = /*#__PURE__*/ curryRight(max);

export { maxCurried as default };
//# sourceMappingURL=max.js.map
