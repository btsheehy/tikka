'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns first `num` elements.
 * @param arr - Input value for arr.
 * @param num - Input value for num.
 * @returns The computed result.
 *
 * @example
 * take(arr, num)
 */
const take = (arr, num) => {
    return arr.slice(0, num);
};
var take$1 = /*#__PURE__*/ curryRight.default(take);

exports.default = take$1;
//# sourceMappingURL=take.cjs.map
