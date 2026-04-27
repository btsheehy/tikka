'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Maps each array item to a new value.
 * @param arr - Source array.
 * @param fn - Mapper applied to each element.
 * @returns A new array with transformed values.
 *
 * @example
 * map((n) => n * 2, [1, 2, 3]) // [2, 4, 6]
 */
const map = (arr, fn) => {
    const result = new Array(arr.length);
    let index = 0;
    while (index < arr.length) {
        result[index] = fn(arr[index]);
        index += 1;
    }
    return result;
};
var map$1 = /*#__PURE__*/ curryRight.default(map);

exports.default = map$1;
//# sourceMappingURL=map.cjs.map
