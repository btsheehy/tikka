import curryRight from './curryRight'

const gt = (a: number, b: number) => a >= b

type Gte = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

/**
 * Compares numbers with `>=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than or equal to `a`.
 *
 * @example
 * gte(10)(10) // true
 * get(12)(9) // false
 */
const gteCurried = /*#__PURE__*/ curryRight(gt) as Gte

export default gteCurried
