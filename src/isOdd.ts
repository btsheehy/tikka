import isEven from './isEven'

/**
 * Returns true for odd numbers.
 * @param number - Input value for number.
 * @returns The computed result.
 *
 * @example
 * isOdd(number)
 */
const isOdd = (number: number) => !isEven(number)

export default isOdd
