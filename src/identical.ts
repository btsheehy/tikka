import curryRight from './curryRight'

/**
 * Compares two values using `Object.is` semantics.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` when the values are the same according to `Object.is`, otherwise `false`.
 *
 * @example
 * identical(NaN, NaN) // true
 */
const identical = <T>(a: T, b: T) => Object.is(a, b)

type Identical = {
  <T>(b: T, a: T): boolean
  <T>(b: T): (a: T) => boolean
}

const identicalCurried = /*#__PURE__*/ curryRight(identical) as Identical

export default identicalCurried
