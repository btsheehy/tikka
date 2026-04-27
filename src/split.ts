import curryRight from './curryRight'

/**
 * Splits a string using a separator string or regex.
 * @param str - String to split.
 * @param separator - Delimiter used by `String.prototype.split`.
 * @returns Array of substrings.
 *
 * @example
 * split(',', 'a,b,c') // ['a', 'b', 'c']
 */
const split = (str: string, separator: string | RegExp) => str.split(separator)

export default /*#__PURE__*/ curryRight(split)
