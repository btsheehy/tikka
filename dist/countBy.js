import curryRight from './curryRight.js';

/**
 * Counts items in an array by a derived key.
 * @param arr - Items to count.
 * @param iteratee - Function that maps each item to a bucket key.
 * @returns An object where each key stores the number of matching items.
 *
 * @example
 * countBy((word) => word.length.toString(), ['a', 'to', 'cat'])
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
var countBy$1 = /*#__PURE__*/ curryRight(countBy);

export { countBy$1 as default };
//# sourceMappingURL=countBy.js.map
