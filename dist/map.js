import curryRight from './curryRight.js';

/**
 * Maps array values.
 *
 * @example
 * map((x)=>x*2, [1,2,3]) // [2,4,6]
 */
const map = (arr, fn) => {
    const result = new Array(arr.length);
    let index = 0;
    while (index < arr.length) {
        result[index] = fn(arr[index]);
        index += 1;
    }
    return result;
};
var map$1 = /*#__PURE__*/ curryRight(map);

export { map$1 as default };
//# sourceMappingURL=map.js.map
