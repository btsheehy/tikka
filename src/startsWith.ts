import curryRight from './curryRight'

const startsWith = (str: string, prefix: string) => str.startsWith(prefix)

type StartsWith = {
  (prefix: string, str: string): boolean
  (prefix: string): (str: string) => boolean
}

/**
 * Checks whether a string starts with a prefix.
 * @param str - Full string to inspect.
 * @param prefix - Leading substring to match.
 * @returns `true` when `str` starts with `prefix`.
 *
 * @example
 * startsWith('user:', 'user:42') // true
 */
const startsWithCurried = /*#__PURE__*/ curryRight(startsWith) as StartsWith

export default startsWithCurried
