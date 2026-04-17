'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const or = (a, b) => !!(a || b);
var or$1 = /*#__PURE__*/ curry.default(or);

exports.default = or$1;
//# sourceMappingURL=or.cjs.map
