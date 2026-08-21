import curryRight from './curryRight'

const max = (a: number, b: number): number => Math.max(a, b)

type Max = {
  (a: number, b: number): number
  (a: number): (b: number) => number
}

/**
 * Returns the larger of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The maximum of `a` and `b`.
 *
 * @example
 * max(4, 9) // 9
 */
const maxCurried = /*#__PURE__*/ curryRight(max) as Max

export default maxCurried
