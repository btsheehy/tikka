'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

const sortBy = (arr, direction, fieldOrIteratee) => {
    const directionMultiplier = direction === 'desc' ? -1 : 1;
    const accessor = typeof fieldOrIteratee === 'function'
        ? fieldOrIteratee
        : (value) => get.default(fieldOrIteratee, value);
    return [...arr].sort((left, right) => {
        const leftValue = accessor(left);
        const rightValue = accessor(right);
        if (leftValue > rightValue) {
            return 1 * directionMultiplier;
        }
        if (leftValue < rightValue) {
            return -1 * directionMultiplier;
        }
        return 0;
    });
};
var sortBy$1 = /*#__PURE__*/ curryRight.default(sortBy);

exports.default = sortBy$1;
//# sourceMappingURL=sortBy.cjs.map
