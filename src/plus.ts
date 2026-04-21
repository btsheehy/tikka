import curry from './curry'

/**
 * Adds two numbers.
 */
const plus = (a: number, b: number) => a + b

export default /*#__PURE__*/ curry(plus)
