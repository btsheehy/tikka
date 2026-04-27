import curry from './curry'

/**
 * Adds two numbers.
 * @param a - Left addend.
 * @param b - Right addend.
 * @returns Sum `a + b`.
 *
 * @example
 * plus(2)(3) // 5
 */
const plus = (a: number, b: number) => a + b

export default /*#__PURE__*/ curry(plus)
