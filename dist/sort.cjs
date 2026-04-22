'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Sorts an array by a computed key (non-mutating).
 */
const sort = (arr, iteratee) => {
    return [...arr].sort((left, right) => {
        const leftValue = iteratee(left);
        const rightValue = iteratee(right);
        if (leftValue > rightValue) {
            return 1;
        }
        if (leftValue < rightValue) {
            return -1;
        }
        return 0;
    });
};
var sort$1 = /*#__PURE__*/ curryRight.default(sort);

exports.default = sort$1;
//# sourceMappingURL=sort.cjs.map
