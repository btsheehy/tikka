'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const remove = (arr, pred) => {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        if (!pred(arr[i]))
            result.push(arr[i]);
        i++;
    }
    return result;
};
/**
 * Removes items that match a predicate.
 * @param arr - Source array.
 * @param pred - Predicate that marks elements to remove.
 * @returns A new array containing only elements where `pred` is `false`.
 *
 * @example
 * remove((n) => n % 2 === 0, [1, 2, 3, 4]) // [1, 3]
 */
const removeCurried = /*#__PURE__*/ curryRight.default(remove);

exports.default = removeCurried;
//# sourceMappingURL=remove.cjs.map
