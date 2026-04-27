import curryRight from './curryRight.js';

/**
 * Sorts an array by a computed key without mutating the input.
 * @param arr - Array to sort.
 * @param iteratee - Function that computes the sortable value for each item.
 * @returns A new array sorted ascending by `iteratee(item)`.
 *
 * @example
 * sort((user) => user.age, users)
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
const sortCurried = /*#__PURE__*/ curryRight(sort);

export { sortCurried as default };
//# sourceMappingURL=sort.js.map
