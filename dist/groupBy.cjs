'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const groupBy = (arr, groupingFunction) => {
    return arr.reduce((acc, val) => {
        const group = groupingFunction(val);
        if (acc[group]) {
            acc[group].push(val);
        }
        else {
            acc[group] = [val];
        }
        return acc;
    }, {});
};
var groupBy$1 = /*#__PURE__*/ curryRight.default(groupBy);

exports.default = groupBy$1;
//# sourceMappingURL=groupBy.cjs.map
