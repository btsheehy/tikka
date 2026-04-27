import curry from './curry'

/**
 * Adds two numbers.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * multiply(a, b)
 */
const multiply = (a: number, b: number) => a * b

export default /*#__PURE__*/ curry(multiply)
