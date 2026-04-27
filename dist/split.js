import curryRight from './curryRight.js';

/**
 * Runs `str.split(separator)`.
 * @param str - Input value for str.
 * @param separator - Input value for separator.
 * @returns The computed result.
 *
 * @example
 * split(str, separator)
 */
const split = (str, separator) => str.split(separator);
var split$1 = /*#__PURE__*/ curryRight(split);

export { split$1 as default };
//# sourceMappingURL=split.js.map
