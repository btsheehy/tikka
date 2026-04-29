'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const max = (a, b) => Math.max(a, b);
var max$1 = curryRight.default(max);

exports.default = max$1;
//# sourceMappingURL=max.cjs.map
