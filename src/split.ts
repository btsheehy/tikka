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

type Split = {
  (separator: string | RegExp, str: string): string[]
  (separator: string | RegExp): (str: string) => string[]
}

const splitCurried = /*#__PURE__*/ curryRight(split) as Split

export default splitCurried
