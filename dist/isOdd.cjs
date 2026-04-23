'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isEven = require('./isEven.cjs');

/**
 * Returns true for odd numbers.
 */
const isOdd = (number) => !isEven.default(number);

exports.default = isOdd;
//# sourceMappingURL=isOdd.cjs.map
