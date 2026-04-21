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
var map$1 = /*#__PURE__*/ curryRight(map);

export { map$1 as default };
//# sourceMappingURL=map.js.map
