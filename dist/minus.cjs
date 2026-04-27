'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Subtracts second arg from first in curried-right style.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * minus(a, b)
 */
const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight.default(minus);

exports.default = minus$1;
//# sourceMappingURL=minus.cjs.map
