import curryRight from './curryRight.js';

/**
 * Removes duplicates based on a derived key function.
 * @param arr - Source array.
 * @param uniqCond - Function that computes each item's uniqueness key.
 * @returns A new array containing the first item seen for each key.
 *
 * @example
 * uniqBy((user) => user.id, [{ id: 1 }, { id: 1 }, { id: 2 }])
 */
const uniqBy = (arr, uniqCond) => {
    const uniqBy = new Set();
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
        const uniqByVal = uniqCond(arr[i]);
        if (!uniqBy.has(uniqByVal)) {
            newArr.push(arr[i]);
            uniqBy.add(uniqByVal);
        }
        i++;
    }
    return newArr;
};
const uniqByCurried = /*#__PURE__*/ curryRight(uniqBy);

export { uniqByCurried as default };
//# sourceMappingURL=uniqBy.js.map
