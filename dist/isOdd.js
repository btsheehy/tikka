import isEven from './isEven.js';

/**
 * Checks whether a number is odd.
 * @param number - Number to test.
 * @returns `true` when `number` is not divisible by `2`.
 *
 * @example
 * isOdd(7) // true
 */
const isOdd = (number) => !isEven(number);

export { isOdd as default };
//# sourceMappingURL=isOdd.js.map
