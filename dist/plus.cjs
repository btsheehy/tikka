'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Adds two numbers.
 */
const plus = (a, b) => a + b;
var plus$1 = /*#__PURE__*/ curry.default(plus);

exports.default = plus$1;
//# sourceMappingURL=plus.cjs.map
