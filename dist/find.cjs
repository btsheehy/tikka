'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const find = (arr, findFunc) => {
    let i = 0;
    const length = arr.length;
    while (i < length) {
        if (findFunc(arr[i]))
            return arr[i];
        i++;
    }
    return undefined;
};
/**
 * Finds the first array element that satisfies a predicate.
 * @param arr - Array to search.
 * @param findFunc - Predicate used to test each element in order.
 * @returns The first matching item, or `undefined` when no item matches.
 *
 * @example
 * find((user) => user.id === 42, users)
 */
const findCurried = /*#__PURE__*/ curryRight.default(find);

exports.default = findCurried;
//# sourceMappingURL=find.cjs.map
