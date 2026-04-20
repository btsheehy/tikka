import curry from './curry'

/**
 * Boolean AND over two values.
 */
const and = (a: any, b: any): boolean => !!(a && b)

export default /*#__PURE__*/ curry(and)
