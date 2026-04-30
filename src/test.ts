import curryRight from './curryRight'

const test = (str: string, regex: RegExp) => regex.test(str)

type Test = {
  (regex: RegExp, str: string): boolean
  (regex: RegExp): (str: string) => boolean
}

/**
 * Tests whether a string matches a regular expression.
 * @param str - String to test.
 * @param regex - Regular expression to run.
 * @returns `true` when `regex.test(str)` matches.
 *
 * @example
 * test(/^v\d+$/, 'v12') // true
 */
const testCurried = /*#__PURE__*/ curryRight(test) as Test

export default testCurried
