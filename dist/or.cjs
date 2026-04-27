'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * or utility function.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * or(a, b)
 */
const or = (a, b) => !!(a || b);
var or$1 = /*#__PURE__*/ curry.default(or);

exports.default = or$1;
//# sourceMappingURL=or.cjs.map
