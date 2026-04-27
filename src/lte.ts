/**
 * Compares numbers with `<=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than or equal to `b`.
 *
 * @example
 * lte(5, 5) // true
 */
import curry from './curry'

const lt = (a: number, b: number) => a <= b

type Lte = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

const lteCurried = /*#__PURE__*/ curry(lt) as Lte

export default lteCurried
