import curryRight from './curryRight.js';

const uniqBy = (arr, uniqCond) => {
    const uniqResult = arr.reduce((acc, val) => {
        const uniqByVal = uniqCond(val);
        const isUnique = !acc.uniqBy.includes(uniqByVal);
        if (isUnique) {
            acc.newArr.push(val);
            acc.uniqBy.push(uniqByVal);
        }
        return acc;
    }, { uniqBy: [], newArr: [] });
    return uniqResult.newArr;
};
var uniqBy$1 = /*#__PURE__*/ curryRight(uniqBy);

export { uniqBy$1 as default };
//# sourceMappingURL=uniqBy.js.map
