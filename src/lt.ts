import curry from './curry'

/**
 * Less-than comparison.
 */
const lt = (a: number, b: number) => a < b

export default /*#__PURE__*/ curry(lt)
