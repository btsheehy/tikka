'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Boolean AND over two values.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * and(a, b)
 */
const and = (a, b) => !!(a && b);
var and$1 = /*#__PURE__*/ curry.default(and);

exports.default = and$1;
//# sourceMappingURL=and.cjs.map
