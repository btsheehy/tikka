'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const test = (str, regex) => regex.test(str);
var test$1 = /*#__PURE__*/ curryRight.default(test);

exports.default = test$1;
//# sourceMappingURL=test.cjs.map
