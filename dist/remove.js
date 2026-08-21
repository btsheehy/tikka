import curryRight from './curryRight.js';

const remove = (arr, pred) => {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        if (!pred(arr[i]))
            result.push(arr[i]);
        i++;
    }
    return result;
};
/**
 * Removes items that match a predicate.
 * @param arr - Source array.
 * @param pred - Predicate that marks elements to remove.
 * @returns A new array containing only elements where `pred` is `false`.
 *
 * @example
 * remove((n) => n % 2 === 0, [1, 2, 3, 4]) // [1, 3]
 */
const removeCurried = /*#__PURE__*/ curryRight(remove);

export { removeCurried as default };
//# sourceMappingURL=remove.js.map
