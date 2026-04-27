import curryRight from './curryRight.js';

/**
 * Splits a string using a separator string or regex.
 * @param str - String to split.
 * @param separator - Delimiter used by `String.prototype.split`.
 * @returns Array of substrings.
 *
 * @example
 * split(',', 'a,b,c') // ['a', 'b', 'c']
 */
const split = (str, separator) => str.split(separator);
var split$1 = /*#__PURE__*/ curryRight(split);

export { split$1 as default };
//# sourceMappingURL=split.js.map
