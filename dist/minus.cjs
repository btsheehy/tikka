'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight.default(minus);

exports.default = minus$1;
//# sourceMappingURL=minus.cjs.map
