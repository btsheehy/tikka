import curryRight from './curryRight'

/**
 * Checks whether a string ends with a suffix.
 * @param str - Full string to inspect.
 * @param suffix - Trailing substring to match.
 * @returns `true` when `str` ends with `suffix`.
 *
 * @example
 * endsWith('.ts', 'index.ts') // true
 */
const endsWith = (str: string, suffix: string) => str.endsWith(suffix)

export default /*#__PURE__*/ curryRight(endsWith)
