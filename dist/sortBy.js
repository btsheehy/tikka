import curryRight from './curryRight.js';
import get from './get.js';

const sortBy = (arr, direction, fieldOrIteratee) => {
    const directionMultiplier = direction === 'desc' ? -1 : 1;
    const accessor = typeof fieldOrIteratee === 'function'
        ? fieldOrIteratee
        : (value) => get(fieldOrIteratee, value);
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
const sortByCurried = /*#__PURE__*/ curryRight(sortBy);

export { sortByCurried as default };
//# sourceMappingURL=sortBy.js.map
