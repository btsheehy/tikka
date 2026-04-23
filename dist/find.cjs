'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns first matching element or `undefined`.
 */
const find = (arr, findFunc) => {
    let i = 0;
    while (i < arr.length) {
        if (findFunc(arr[i]))
            return arr[i];
        i++;
    }
    return undefined;
};
var find$1 = /*#__PURE__*/ curryRight.default(find);

exports.default = find$1;
//# sourceMappingURL=find.cjs.map
