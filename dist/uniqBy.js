import curryRight from './curryRight.js';

/**
 * Returns unique items by computed key.
 *
 * @example
 * uniqBy((x)=>x.id, [{id:1},{id:1},{id:2}])
 * @param arr - Input value for arr.
 * @param uniqCond - Input value for uniqCond.
 * @returns The computed result.
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
var uniqBy$1 = /*#__PURE__*/ curryRight(uniqBy);

export { uniqBy$1 as default };
//# sourceMappingURL=uniqBy.js.map
