import curryRight from './curryRight'

const gt = (a: number, b: number) => a > b

type Gt = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

/**
 * Compares numbers with `>`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than `a`.
 *
 * @example
 * gt(10)(4) // false
 */
const gtCurried = /*#__PURE__*/ curryRight(gt) as Gt

export default gtCurried
