import curry from './curry'

/**
 * Returns `true` when both values are truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if both operands are truthy, otherwise `false`.
 *
 * @example
 * and(user.isActive, user.isVerified)
 */
const and = (a: any, b: any): boolean => !!(a && b)

type And = {
  (a: any, b: any): boolean
  (a: any): (b: any) => boolean
}

const andCurried = /*#__PURE__*/ curry(and) as And

export default andCurried
