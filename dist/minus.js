import curryRight from './curryRight.js';

/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight(minus);

export { minus$1 as default };
//# sourceMappingURL=minus.js.map
