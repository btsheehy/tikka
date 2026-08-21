import curry from './curry'

const plus = (a: number, b: number) => a + b

type Plus = {
  (a: number, b: number): number
  (a: number): (b: number) => number
}

/**
 * Adds two numbers.
 * @param a - Left addend.
 * @param b - Right addend.
 * @returns Sum `a + b`.
 *
 * @example
 * plus(2)(3) // 5
 */
const plusCurried = /*#__PURE__*/ curry(plus) as Plus

export default plusCurried
