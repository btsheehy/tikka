import curryRight from './curryRight'

/**
 * Runs `regex.test(str)`.
 */
const test = (str: string, regex: RegExp) => regex.test(str)

export default /*#__PURE__*/ curryRight(test)
