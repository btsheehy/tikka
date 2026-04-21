'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const take = (arr, num) => {
    return arr.slice(0, num);
};
var take$1 = /*#__PURE__*/ curryRight.default(take);

exports.default = take$1;
//# sourceMappingURL=take.cjs.map
