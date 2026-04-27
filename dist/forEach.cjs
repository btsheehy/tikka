'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Runs a callback for each array item and returns the original array.
 * @param arr - Array to iterate.
 * @param func - Side-effect callback executed for each element.
 * @returns The same `arr` instance.
 *
 * @example
 * forEach((n) => console.log(n), [1, 2, 3])
 */
const forEach = (arr, func) => {
    arr.forEach((val) => {
        func(val);
    });
    return arr;
};
const forEachCurried = /*#__PURE__*/ curryRight.default(forEach);

exports.default = forEachCurried;
//# sourceMappingURL=forEach.cjs.map
