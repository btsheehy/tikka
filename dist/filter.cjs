'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * filter utility function.
 */
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
var filter$1 = /*#__PURE__*/ curryRight.default(filter, filter.length);

exports.default = filter$1;
//# sourceMappingURL=filter.cjs.map
