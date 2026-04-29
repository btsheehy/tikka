import curryRight from './curryRight'

const lt = (a: number, b: number) => a < b

type Lt = {
  (a: number, b: number): boolean
  (a: number): (b: number) => boolean
}

/**
 * Compares numbers with `<`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than `a`.
 *
 * @example
 * lt(2)(5) // false
 */
const ltCurried = /*#__PURE__*/ curryRight(lt) as Lt

export default ltCurried
