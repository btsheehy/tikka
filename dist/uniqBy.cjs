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
    const uniqBy = new Set();
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
        const uniqByVal = uniqCond(arr[i]);
        if (!uniqBy.has(uniqByVal)) {
            newArr.push(arr[i]);
            uniqBy.add(uniqByVal);
        }
        i++;
    }
    return newArr;
};
var uniqBy$1 = /*#__PURE__*/ curryRight.default(uniqBy);

exports.default = uniqBy$1;
//# sourceMappingURL=uniqBy.cjs.map
