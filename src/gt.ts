/**
 * Compares numbers with `>`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than `b`.
 *
 * @example
 * gt(10, 4) // true
 */
import curry from './curry'

const gt = (a: number, b: number) => a > b

export default /*#__PURE__*/ curry(gt)
