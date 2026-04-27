'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns `value` unless it is `null` or `undefined`, otherwise returns `fallback`.
 * @param value - Input value for value.
 * @param fallback - Input value for fallback.
 * @returns The computed result.
 *
 * @example
 * coalesce(value, fallback)
 */
const coalesce = (value, fallback) => (value ?? fallback);
var coalesce$1 = /*#__PURE__*/ curryRight.default(coalesce);

exports.default = coalesce$1;
//# sourceMappingURL=coalesce.cjs.map
