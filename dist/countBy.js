import curryRight from './curryRight.js';

/**
 * Builds a frequency object keyed by `iteratee(value)`.
 * @param arr - Input value for arr.
 * @param iteratee - Input value for iteratee.
 * @returns The computed result.
 *
 * @example
 * countBy(arr, iteratee)
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
