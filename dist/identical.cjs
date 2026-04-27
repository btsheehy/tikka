'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const identical = (a, b) => Object.is(a, b);
var identical$1 = /*#__PURE__*/ curryRight.default(identical);

exports.default = identical$1;
//# sourceMappingURL=identical.cjs.map
