'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns `value` unless it is `null` or `undefined`, otherwise returns `fallback`.
 */
const coalesce = (value, fallback) => (value ?? fallback);
var coalesce$1 = /*#__PURE__*/ curryRight.default(coalesce);

exports.default = coalesce$1;
//# sourceMappingURL=coalesce.cjs.map
