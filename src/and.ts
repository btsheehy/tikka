import curry from './curry'

/**
 * Boolean AND over two values.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * and(a, b)
 */
const and = (a: any, b: any): boolean => !!(a && b)

export default /*#__PURE__*/ curry(and)
