'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const multiply = (a, b) => a * b;
/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
const multiplyCurried = /*#__PURE__*/ curry.default(multiply);

exports.default = multiplyCurried;
//# sourceMappingURL=multiply.cjs.map
