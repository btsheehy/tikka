'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Runs `str.endsWith(suffix)`.
 */
const endsWith = (str, suffix) => str.endsWith(suffix);
var endsWith$1 = /*#__PURE__*/ curryRight.default(endsWith);

exports.default = endsWith$1;
//# sourceMappingURL=endsWith.cjs.map
