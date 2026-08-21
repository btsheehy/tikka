'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const lt = (a, b) => a < b;
/**
 * Compares numbers with `<`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than `a`.
 *
 * @example
 * lt(2)(5) // false
 */
const ltCurried = /*#__PURE__*/ curryRight.default(lt);

exports.default = ltCurried;
//# sourceMappingURL=lt.cjs.map
