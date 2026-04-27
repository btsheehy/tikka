import curryRight from './curryRight'

/**
 * Tests whether a string matches a regular expression.
 * @param str - String to test.
 * @param regex - Regular expression to run.
 * @returns `true` when `regex.test(str)` matches.
 *
 * @example
 * test(/^v\d+$/, 'v12') // true
 */
const test = (str: string, regex: RegExp) => regex.test(str)

export default /*#__PURE__*/ curryRight(test)
