import curryRight from './curryRight'

const lte = (a: number, b: number) => a <= b

type Lte = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

/**
 * Compares numbers with `<=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than or equal to `a`.
 *
 * @example
 * lte(5)(5) // true
 * lte(9)(2) // true
 */
const lteCurried = /*#__PURE__*/ curryRight(lte) as Lte

export default lteCurried
