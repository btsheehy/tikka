'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const min = (a, b) => Math.min(a, b);
var min$1 = curryRight.default(min);

exports.default = min$1;
//# sourceMappingURL=min.cjs.map
