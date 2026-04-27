import curryRight from './curryRight'

/**
 * Runs `str.endsWith(suffix)`.
 */
const endsWith = (str: string, suffix: string) => str.endsWith(suffix)

export default /*#__PURE__*/ curryRight(endsWith)
