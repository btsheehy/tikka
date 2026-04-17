'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const filter = (arr, filterFunc) => arr.filter((val) => filterFunc(val));
var filter$1 = /*#__PURE__*/ curryRight.default(filter, filter.length);

exports.default = filter$1;
//# sourceMappingURL=filter.cjs.map
