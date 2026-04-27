import curryRight from './curryRight.js';
import filter from './filter.js';

/**
 * Counts array elements matching `test`.
 *
 * @example
 * countWhere((x) => x % 2 === 0, [1,2,3,4]) // 2
 * @param arr - Input value for arr.
 * @param test - Input value for test.
 * @returns The computed result.
 */
const countWhere = (arr, test) => {
    return filter(test, arr).length;
};
var countWhere$1 = /*#__PURE__*/ curryRight(countWhere);

export { countWhere$1 as default };
//# sourceMappingURL=countWhere.js.map
