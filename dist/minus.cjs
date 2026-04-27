'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Subtracts second arg from first in curried-right style.
 */
const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight.default(minus);

exports.default = minus$1;
//# sourceMappingURL=minus.cjs.map
