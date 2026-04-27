import isEven from './isEven'

/**
 * Checks whether a number is odd.
 * @param number - Number to test.
 * @returns `true` when `number` is not divisible by `2`.
 *
 * @example
 * isOdd(7) // true
 */
const isOdd = (number: number) => !isEven(number)

export default isOdd
