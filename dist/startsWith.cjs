'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Runs `str.startsWith(prefix)`.
 */
const startsWith = (str, prefix) => str.startsWith(prefix);
var startsWith$1 = /*#__PURE__*/ curryRight.default(startsWith);

exports.default = startsWith$1;
//# sourceMappingURL=startsWith.cjs.map
