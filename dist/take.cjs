'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Takes the first `num` elements from an array.
 * @param arr - Source array.
 * @param num - Number of elements to keep from the start.
 * @returns A new array containing up to `num` leading items.
 *
 * @example
 * take(3, [10, 20, 30, 40]) // [10, 20, 30]
 */
const take = (arr, num) => {
    return arr.slice(0, num);
};
var take$1 = /*#__PURE__*/ curryRight.default(take);

exports.default = take$1;
//# sourceMappingURL=take.cjs.map
