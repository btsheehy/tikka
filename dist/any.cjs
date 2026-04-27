'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns true if at least one array element passes `test`.
 * @param arr - Input value for arr.
 * @param test - Input value for test.
 * @returns The computed result.
 *
 * @example
 * any(arr, test)
 */
const any = (arr, test) => {
    let i = 0;
    const length = arr.length;
    while (i < length) {
        const val = arr[i];
        const passes = test(val);
        if (passes)
            return true;
        i++;
    }
    return false;
};
var any$1 = /*#__PURE__*/ curryRight.default(any);

exports.default = any$1;
//# sourceMappingURL=any.cjs.map
