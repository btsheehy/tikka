import curry from './curry'

/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
const multiply = (a: number, b: number) => a * b

type Multiply = {
  (a: number, b: number): number
  (a: number): (b: number) => number
}

const multiplyCurried = /*#__PURE__*/ curry(multiply) as Multiply

export default multiplyCurried
