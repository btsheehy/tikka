'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var findIndex = require('./findIndex.cjs');

const find = (arr, findFunc) => {
    const i = findIndex.default(findFunc, arr);
    if (i > -1)
        return arr[i];
    return undefined;
};
var find$1 = /*#__PURE__*/ curryRight.default(find);

exports.default = find$1;
//# sourceMappingURL=find.cjs.map
