import curry from './curry'

const lt = (a: number, b: number) => a < b

type Lt = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

/**
 * Compares numbers with `<`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than `b`.
 *
 * @example
 * lt(2, 5) // true
 */
const ltCurried = /*#__PURE__*/ curry(lt) as Lt

export default ltCurried
