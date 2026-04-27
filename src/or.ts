/**
 * or utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * or(a, b)
 */
import curry from './curry'

const or = (a: any, b: any) => !!(a || b)

export default /*#__PURE__*/ curry(or)
