import curryRight from './curryRight'

/**
 * Subtracts second arg from first in curried-right style.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * minus(a, b)
 */
const minus = (a: number, b: number) => a - b

export default /*#__PURE__*/ curryRight(minus)
