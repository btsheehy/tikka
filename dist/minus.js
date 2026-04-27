import curryRight from './curryRight.js';

/**
 * Subtracts second arg from first in curried-right style.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * minus(a, b)
 */
const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight(minus);

export { minus$1 as default };
//# sourceMappingURL=minus.js.map
