import curryRight from './curryRight'

/**
 * Checks whether a string starts with a prefix.
 * @param str - Full string to inspect.
 * @param prefix - Leading substring to match.
 * @returns `true` when `str` starts with `prefix`.
 *
 * @example
 * startsWith('user:', 'user:42') // true
 */
const startsWith = (str: string, prefix: string) => str.startsWith(prefix)

export default /*#__PURE__*/ curryRight(startsWith)
