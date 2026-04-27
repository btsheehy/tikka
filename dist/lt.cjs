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
var lt$1 = /*#__PURE__*/ curry.default(lt);

exports.default = lt$1;
//# sourceMappingURL=lt.cjs.map
