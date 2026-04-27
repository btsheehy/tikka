import curryRight from './curryRight.js';

/**
 * Compares two values using `Object.is` semantics.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` when the values are the same according to `Object.is`, otherwise `false`.
 *
 * @example
 * identical(NaN, NaN) // true
 */
const identical = (a, b) => Object.is(a, b);
var identical$1 = /*#__PURE__*/ curryRight(identical);

export { identical$1 as default };
//# sourceMappingURL=identical.js.map
