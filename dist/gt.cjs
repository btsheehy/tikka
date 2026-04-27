'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * gt utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * gt(a, b)
 */
const gt = (a, b) => a > b;
var gt$1 = /*#__PURE__*/ curry.default(gt);

exports.default = gt$1;
//# sourceMappingURL=gt.cjs.map
