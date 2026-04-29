'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const lowestBy = (arr, fn) => {
    let li = 0;
    let l = fn(arr[0]);
    let i = 1;
    while (i < arr.length) {
        const c = fn(arr[i]);
        if (c < l) {
            l = c;
            li = i;
        }
        i++;
    }
    return arr[li];
};
var lowestBy$1 = curryRight.default(lowestBy);

exports.default = lowestBy$1;
//# sourceMappingURL=lowestBy.cjs.map
