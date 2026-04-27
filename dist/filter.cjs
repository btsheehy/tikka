'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * filter utility function.
 */
const filter = (arr, filterFunc) => {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        if (filterFunc(arr[i])) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
};
var filter$1 = /*#__PURE__*/ curryRight.default(filter, filter.length);

exports.default = filter$1;
//# sourceMappingURL=filter.cjs.map
