import curryRight from './curryRight'

/**
 * Runs `str.startsWith(prefix)`.
 * @param str - Input value for str.
 * @param prefix - Input value for prefix.
 * @returns The computed result.
 *
 * @example
 * startsWith(str, prefix)
 */
const startsWith = (str: string, prefix: string) => str.startsWith(prefix)

export default /*#__PURE__*/ curryRight(startsWith)
