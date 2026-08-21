import curry from './curry'

const or = (a: any, b: any) => !!(a || b)

type Or = {
  (a: any, b: any): boolean
  (a: any): (b: any) => boolean
}

/**
 * Returns `true` when either value is truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if at least one operand is truthy.
 *
 * @example
 * or(user.isAdmin, user.isOwner)
 */
const orCurried = /*#__PURE__*/ curry(or) as Or

export default orCurried
