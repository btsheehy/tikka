import curryRight from './curryRight.js';

/**
 * Runs `str.startsWith(prefix)`.
 * @param str - Input value for str.
 * @param prefix - Input value for prefix.
 * @returns The computed result.
 *
 * @example
 * startsWith(str, prefix)
 */
const startsWith = (str, prefix) => str.startsWith(prefix);
var startsWith$1 = /*#__PURE__*/ curryRight(startsWith);

export { startsWith$1 as default };
//# sourceMappingURL=startsWith.js.map
