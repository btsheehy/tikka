import curry from './curry'

/**
 * Less-than comparison.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * lt(a, b)
 */
const lt = (a: number, b: number) => a < b

export default /*#__PURE__*/ curry(lt)
