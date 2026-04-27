import curryRight from './curryRight'

/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
const minus = (a: number, b: number) => a - b

export default /*#__PURE__*/ curryRight(minus)
