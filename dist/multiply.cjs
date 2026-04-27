'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
const multiply = (a, b) => a * b;
var multiply$1 = /*#__PURE__*/ curry.default(multiply);

exports.default = multiply$1;
//# sourceMappingURL=multiply.cjs.map
