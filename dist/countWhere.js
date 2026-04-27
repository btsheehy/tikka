import curryRight from './curryRight.js';
import filter from './filter.js';

/**
 * Counts how many array items satisfy a predicate.
 * @param arr - Items to test.
 * @param test - Predicate used to include/exclude each item.
 * @returns Number of elements for which `test` returns `true`.
 *
 * @example
 * countWhere((n) => n % 2 === 0, [1, 2, 3, 4]) // 2
 */
const countWhere = (arr, test) => {
    return filter(test, arr).length;
};
var countWhere$1 = /*#__PURE__*/ curryRight(countWhere);

export { countWhere$1 as default };
//# sourceMappingURL=countWhere.js.map
