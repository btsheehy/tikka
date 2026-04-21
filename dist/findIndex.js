import curryRight from './curryRight.js';

const findIndex = (arr, findFunc) => {
    let i = 0;
    const length = arr.length;
    while (i < length) {
        if (findFunc(arr[i]))
            return i;
        i++;
    }
    return -1;
};
var findIndex$1 = /*#__PURE__*/ curryRight(findIndex);

export { findIndex$1 as default };
//# sourceMappingURL=findIndex.js.map
