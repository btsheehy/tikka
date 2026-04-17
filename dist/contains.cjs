'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const contains = (searchTarget, value) => searchTarget.includes(value);
var contains$1 = /*#__PURE__*/ curryRight.default(contains);

exports.default = contains$1;
//# sourceMappingURL=contains.cjs.map
