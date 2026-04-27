/**
 * lte utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * lt(a, b)
 */
import curry from './curry'

const lt = (a: number, b: number) => a <= b

export default /*#__PURE__*/ curry(lt)
