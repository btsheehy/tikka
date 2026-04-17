'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const has = (obj, prop) => Object.hasOwn(obj, prop);
var has$1 = /*#__PURE__*/ curryRight.default(has);

exports.default = has$1;
//# sourceMappingURL=has.cjs.map
