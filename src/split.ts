import curryRight from './curryRight'

/**
 * Runs `str.split(separator)`.
 */
const split = (str: string, separator: string | RegExp) => str.split(separator)

export default /*#__PURE__*/ curryRight(split)
