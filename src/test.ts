import curryRight from './curryRight'

/**
 * Runs `regex.test(str)`.
 * @param str - Input value for str.
 * @param regex - Input value for regex.
 * @returns The computed result.
 *
 * @example
 * test(str, regex)
 */
const test = (str: string, regex: RegExp) => regex.test(str)

export default /*#__PURE__*/ curryRight(test)
