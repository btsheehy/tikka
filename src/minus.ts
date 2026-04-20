import curryRight from './curryRight'

/**
 * Subtracts second arg from first in curried-right style.
 */
const minus = (a: number, b: number) => a - b

export default /*#__PURE__*/ curryRight(minus)
