import curry from './curry'

/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
const multiply = (a: number, b: number) => a * b

export default /*#__PURE__*/ curry(multiply)
