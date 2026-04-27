'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Adds two numbers.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * multiply(a, b)
 */
const multiply = (a, b) => a * b;
var multiply$1 = /*#__PURE__*/ curry.default(multiply);

exports.default = multiply$1;
//# sourceMappingURL=multiply.cjs.map
