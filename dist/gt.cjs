'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Compares numbers with `>`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than `b`.
 *
 * @example
 * gt(10, 4) // true
 */
const gt = (a, b) => a > b;
var gt$1 = /*#__PURE__*/ curry.default(gt);

exports.default = gt$1;
//# sourceMappingURL=gt.cjs.map
