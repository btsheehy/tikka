'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * forEach utility function.
 */
const forEach = (arr, func) => {
    arr.forEach((val) => {
        func(val);
    });
    return arr;
};
var forEach$1 = /*#__PURE__*/ curryRight.default(forEach);

exports.default = forEach$1;
//# sourceMappingURL=forEach.cjs.map
