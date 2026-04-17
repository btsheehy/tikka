'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const map = (arr, fn) => arr.map((el) => fn(el));
var map$1 = /*#__PURE__*/ curryRight.default(map);

exports.default = map$1;
//# sourceMappingURL=map.cjs.map
