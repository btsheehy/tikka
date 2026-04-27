'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isEven = require('./isEven.cjs');

/**
 * Checks whether a number is odd.
 * @param number - Number to test.
 * @returns `true` when `number` is not divisible by `2`.
 *
 * @example
 * isOdd(7) // true
 */
const isOdd = (number) => !isEven.default(number);

exports.default = isOdd;
//# sourceMappingURL=isOdd.cjs.map
