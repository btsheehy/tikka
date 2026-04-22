'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Returns true if all elements pass `test`.
 */
const every = (arr, test) => {
    let allPass = true;
    let i = 0;
    const length = arr.length;
    while (i < length) {
        const passes = test(arr[i]);
        allPass = passes;
        if (!passes)
            break;
        i++;
    }
    return allPass;
};
var every$1 = /*#__PURE__*/ curryRight.default(every);

exports.default = every$1;
//# sourceMappingURL=every.cjs.map
