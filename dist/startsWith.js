import curryRight from './curryRight.js';

const startsWith = (str, prefix) => str.startsWith(prefix);
/**
 * Checks whether a string starts with a prefix.
 * @param str - Full string to inspect.
 * @param prefix - Leading substring to match.
 * @returns `true` when `str` starts with `prefix`.
 *
 * @example
 * startsWith('user:', 'user:42') // true
 */
const startsWithCurried = /*#__PURE__*/ curryRight(startsWith);

export { startsWithCurried as default };
//# sourceMappingURL=startsWith.js.map
