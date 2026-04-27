'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Compares numbers with `<`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than `b`.
 *
 * @example
 * lt(2, 5) // true
 */
const lt = (a, b) => a < b;
const ltCurried = /*#__PURE__*/ curry.default(lt);

exports.default = ltCurried;
//# sourceMappingURL=lt.cjs.map
