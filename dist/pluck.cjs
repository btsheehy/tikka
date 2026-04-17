'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const pluck = (collection, prop) => collection.map((item) => item[prop]);
var pluck$1 = /*#__PURE__*/ curryRight.default(pluck);

exports.default = pluck$1;
//# sourceMappingURL=pluck.cjs.map
