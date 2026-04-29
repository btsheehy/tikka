'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const highestBy = (arr, fn) => {
    let hi = 0;
    let h = fn(arr[0]);
    let i = 1;
    while (i < arr.length) {
        const c = fn(arr[i]);
        if (c > h) {
            h = c;
            hi = i;
        }
        i++;
    }
    return arr[hi];
};
var highestBy$1 = curryRight.default(highestBy);

exports.default = highestBy$1;
//# sourceMappingURL=highestBy.cjs.map
