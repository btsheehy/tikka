import curryRight from './curryRight.js';

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
var sort$1 = /*#__PURE__*/ curryRight(sort);

export { sort$1 as default };
//# sourceMappingURL=sort.js.map
