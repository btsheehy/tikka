'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const get = (object, property) => object[property];
var get$1 = /*#__PURE__*/ curryRight.default(get);

exports.default = get$1;
//# sourceMappingURL=get.cjs.map
