import curryRight from './curryRight'

/**
 * Runs `str.startsWith(prefix)`.
 */
const startsWith = (str: string, prefix: string) => str.startsWith(prefix)

export default /*#__PURE__*/ curryRight(startsWith)
