/**
 * Compares numbers with `>=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than or equal to `b`.
 *
 * @example
 * gte(10, 10) // true
 */
import curry from './curry'

const gt = (a: number, b: number) => a >= b

type Gte = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

const gteCurried = /*#__PURE__*/ curry(gt) as Gte

export default gteCurried
