import curryRight from './curryRight'

/**
 * Runs `str.split(separator)`.
 * @param str - Input value for str.
 * @param separator - Input value for separator.
 * @returns The computed result.
 *
 * @example
 * split(str, separator)
 */
const split = (str: string, separator: string | RegExp) => str.split(separator)

export default /*#__PURE__*/ curryRight(split)
