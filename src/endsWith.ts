import curryRight from './curryRight'

/**
 * Runs `str.endsWith(suffix)`.
 * @param str - Input value for str.
 * @param suffix - Input value for suffix.
 * @returns The computed result.
 *
 * @example
 * endsWith(str, suffix)
 */
const endsWith = (str: string, suffix: string) => str.endsWith(suffix)

export default /*#__PURE__*/ curryRight(endsWith)
