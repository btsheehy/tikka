import curryRight from './curryRight.js';

/**
 * filter utility function.
 * @param arr - Input value for arr.
 * @param filterFunc - Input value for filterFunc.
 * @returns The computed result.
 *
 * @example
 * filter(arr, filterFunc)
 */
const filter = (arr, filterFunc) => {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        if (filterFunc(arr[i])) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
};
var filter$1 = /*#__PURE__*/ curryRight(filter, filter.length);

export { filter$1 as default };
//# sourceMappingURL=filter.js.map
