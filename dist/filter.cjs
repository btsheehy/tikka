'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Filters an array by predicate.
 * @param arr - Source array.
 * @param filterFunc - Predicate that decides which items to keep.
 * @returns A new array containing only elements where `filterFunc` returned `true`.
 *
 * @example
 * filter((user) => user.active, users)
 */
const filter = (arr, filterFunc) => {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        if (filterFunc(arr[i])) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
};
const filterCurried = /*#__PURE__*/ curryRight.default(filter, filter.length);

exports.default = filterCurried;
//# sourceMappingURL=filter.cjs.map
