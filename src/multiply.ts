import curry from './curry'

/**
 * Adds two numbers.
 */
const multiply = (a: number, b: number) => a * b

export default /*#__PURE__*/ curry(multiply)
