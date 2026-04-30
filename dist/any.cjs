'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

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
/**
 * Checks whether at least one array item satisfies a predicate.
 * @param arr - Array to scan.
 * @param test - Predicate run for each element until a match is found.
 * @returns `true` as soon as one element passes `test`; otherwise `false`.
 *
 * @example
 * any((n) => n > 10, [3, 8, 12]) // true
 */
const anyCurried = /*#__PURE__*/ curryRight.default(any);

exports.default = anyCurried;
//# sourceMappingURL=any.cjs.map
