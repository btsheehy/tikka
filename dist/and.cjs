'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const and = (a, b) => !!(a && b);
var and$1 = /*#__PURE__*/ curry.default(and);

exports.default = and$1;
//# sourceMappingURL=and.cjs.map
