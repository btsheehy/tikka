'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Builds a frequency object keyed by `iteratee(value)`.
 */
const countBy = (arr, iteratee) => {
    const counts = {};
    let index = 0;
    while (index < arr.length) {
        const key = iteratee(arr[index]);
        counts[key] = (counts[key] ?? 0) + 1;
        index += 1;
    }
    return counts;
};
var countBy$1 = /*#__PURE__*/ curryRight.default(countBy);

exports.default = countBy$1;
//# sourceMappingURL=countBy.cjs.map
