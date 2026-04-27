'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isEven = require('./isEven.cjs');

/**
 * Returns true for odd numbers.
 * @param number - Input value for number.
 * @returns The computed result.
 *
 * @example
 * isOdd(number)
 */
const isOdd = (number) => !isEven.default(number);

exports.default = isOdd;
//# sourceMappingURL=isOdd.cjs.map
