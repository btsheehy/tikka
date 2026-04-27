/**
 * gt utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * gt(a, b)
 */
import curry from './curry'

const gt = (a: number, b: number) => a > b

export default /*#__PURE__*/ curry(gt)
