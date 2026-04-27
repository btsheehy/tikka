'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns index of first matching element or `-1`.
 * @param arr - Input value for arr.
 * @param findFunc - Input value for findFunc.
 * @returns The computed result.
 *
 * @example
 * findIndex(arr, findFunc)
 */
const findIndex = (arr, findFunc) => {
    let i = 0;
    const length = arr.length;
    while (i < length) {
        if (findFunc(arr[i]))
            return i;
        i++;
    }
    return -1;
};
var findIndex$1 = /*#__PURE__*/ curryRight.default(findIndex);

exports.default = findIndex$1;
//# sourceMappingURL=findIndex.cjs.map
