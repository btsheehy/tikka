'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const contains = (searchTarget, value) => searchTarget.includes(value);
const containsCurried = /*#__PURE__*/ curryRight.default(contains);

exports.default = containsCurried;
//# sourceMappingURL=contains.cjs.map
