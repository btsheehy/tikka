import curryRight from './curryRight.js';

/**
 * Runs `str.endsWith(suffix)`.
 * @param str - Input value for str.
 * @param suffix - Input value for suffix.
 * @returns The computed result.
 *
 * @example
 * endsWith(str, suffix)
 */
const endsWith = (str, suffix) => str.endsWith(suffix);
var endsWith$1 = /*#__PURE__*/ curryRight(endsWith);

export { endsWith$1 as default };
//# sourceMappingURL=endsWith.js.map
