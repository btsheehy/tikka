import curryRight from './curryRight.js';

const filter = (arr, filterFunc) => {
    const result = [];
    let index = 0;
    while (index < arr.length) {
        const value = arr[index];
        if (filterFunc(value)) {
            result.push(value);
        }
        index += 1;
    }
    return result;
};
var filter$1 = /*#__PURE__*/ curryRight(filter, filter.length);

export { filter$1 as default };
//# sourceMappingURL=filter.js.map
