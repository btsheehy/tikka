'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const uniqBy = (arr, uniqCond) => {
    const uniqResult = arr.reduce((acc, val) => {
        const uniqByVal = uniqCond(val);
        const isUnique = !acc.uniqBy.includes(uniqByVal);
        return {
            newArr: isUnique ? acc.newArr.concat(val) : acc.newArr,
            uniqBy: isUnique ? acc.uniqBy.concat(uniqByVal) : acc.uniqBy,
        };
    }, { uniqBy: [], newArr: [] });
    return uniqResult.newArr;
};
var uniqBy$1 = /*#__PURE__*/ curryRight.default(uniqBy);

exports.default = uniqBy$1;
//# sourceMappingURL=uniqBy.cjs.map
