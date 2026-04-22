'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns unique items by computed key.
 *
 * @example
 * uniqBy((x)=>x.id, [{id:1},{id:1},{id:2}])
 */
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
var uniqBy$1 = /*#__PURE__*/ curryRight.default(uniqBy);

exports.default = uniqBy$1;
//# sourceMappingURL=uniqBy.cjs.map
