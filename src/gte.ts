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

export default /*#__PURE__*/ curry(gt)
