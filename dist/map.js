import curryRight from './curryRight.js';

const map = (arr, fn) => {
    const result = new Array(arr.length);
    let index = 0;
    while (index < arr.length) {
        result[index] = fn(arr[index]);
        index += 1;
    }
    return result;
};
/**
 * Maps each array item to a new value.
 * @param arr - Source array.
 * @param fn - Mapper applied to each element.
 * @returns A new array with transformed values.
 *
 * @example
 * map((n) => n * 2, [1, 2, 3]) // [2, 4, 6]
 */
const mapCurried = /*#__PURE__*/ curryRight(map);

export { mapCurried as default };
//# sourceMappingURL=map.js.map
