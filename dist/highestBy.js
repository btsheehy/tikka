import curryRight from './curryRight.js';

const highestBy = (arr, fn) => {
    let hi = 0;
    let h = fn(arr[0]);
    let i = 1;
    while (i < arr.length) {
        const c = fn(arr[i]);
        if (c > h) {
            h = c;
            hi = i;
        }
        i++;
    }
    return arr[hi];
};
/**
 * Returns the element with the highest derived numeric score.
 * @param arr - Source array.
 * @param fn - Selector that computes each element's score.
 * @returns The element whose score is greatest.
 *
 * @example
 * highestBy((user) => user.score, [{ name: 'Ari', score: 12 }, { name: 'Bea', score: 21 }])
 * // { name: 'Bea', score: 21 }
 */
const highestByCurried = /*#__PURE__*/ curryRight(highestBy);

export { highestByCurried as default };
//# sourceMappingURL=highestBy.js.map
