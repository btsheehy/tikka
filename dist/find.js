import curryRight from './curryRight.js';

/**
 * Returns first matching element or `undefined`.
 */
const find = (arr, findFunc) => {
    let i = 0;
    while (i < arr.length) {
        if (findFunc(arr[i]))
            return arr[i];
        i++;
    }
    return undefined;
};
var find$1 = /*#__PURE__*/ curryRight(find);

export { find$1 as default };
//# sourceMappingURL=find.js.map
