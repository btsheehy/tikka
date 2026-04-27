import curryRight from './curryRight.js';

/**
 * Checks whether a string starts with a prefix.
 * @param str - Full string to inspect.
 * @param prefix - Leading substring to match.
 * @returns `true` when `str` starts with `prefix`.
 *
 * @example
 * startsWith('user:', 'user:42') // true
 */
const startsWith = (str, prefix) => str.startsWith(prefix);
var startsWith$1 = /*#__PURE__*/ curryRight(startsWith);

export { startsWith$1 as default };
//# sourceMappingURL=startsWith.js.map
