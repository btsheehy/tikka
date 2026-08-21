import curryRight from './curryRight'

const minus = (a: number, b: number) => a - b

type Minus = {
  (b: number, a: number): number
  (b: number): (a: number) => number
}

/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
const minusCurried = /*#__PURE__*/ curryRight(minus) as Minus

export default minusCurried
