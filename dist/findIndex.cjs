'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

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
/**
 * Finds the index of the first array element that satisfies a predicate.
 * @param arr - Array to search.
 * @param findFunc - Predicate used to test each element in order.
 * @returns Index of the first match, or `-1` when no element matches.
 *
 * @example
 * findIndex((n) => n < 0, [3, 2, -1, 5]) // 2
 */
const findIndexCurried = /*#__PURE__*/ curryRight.default(findIndex);

exports.default = findIndexCurried;
//# sourceMappingURL=findIndex.cjs.map
