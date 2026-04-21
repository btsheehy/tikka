'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const concat = (original, addition) => original.concat(addition);
var concat$1 = /*#__PURE__*/ curryRight.default(concat);

exports.default = concat$1;
//# sourceMappingURL=concat.cjs.map
