'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Less-than comparison.
 * @param a - Input value for a.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * lt(a, b)
 */
const lt = (a, b) => a < b;
var lt$1 = /*#__PURE__*/ curry.default(lt);

exports.default = lt$1;
//# sourceMappingURL=lt.cjs.map
