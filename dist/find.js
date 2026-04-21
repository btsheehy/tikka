import curryRight from './curryRight.js';
import findIndex from './findIndex.js';

const find = (arr, findFunc) => {
    const i = findIndex(findFunc, arr);
    if (i > -1)
        return arr[i];
    return undefined;
};
var find$1 = /*#__PURE__*/ curryRight(find);

export { find$1 as default };
//# sourceMappingURL=find.js.map
