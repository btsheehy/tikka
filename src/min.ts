import curryRight from './curryRight'

const min = (a: number, b: number): number => Math.min(a, b)

type Min = {
  (a: number, b: number): number
  (a: number): (b: number) => number
}

/**
 * Returns the smaller of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The minimum of `a` and `b`.
 *
 * @example
 * min(4, 9) // 4
 */
const minCurried = /*#__PURE__*/ curryRight(min) as Min

export default minCurried
