'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

/**
 * Adds two numbers.
 */
const multiply = (a, b) => a * b;
var multiply$1 = /*#__PURE__*/ curry.default(multiply);

exports.default = multiply$1;
//# sourceMappingURL=multiply.cjs.map
