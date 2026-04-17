'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var filter = require('./filter.cjs');

const countWhere = (arr, test) => {
    return filter.default(test, arr).length;
};
var countWhere$1 = /*#__PURE__*/ curryRight.default(countWhere);

exports.default = countWhere$1;
//# sourceMappingURL=countWhere.cjs.map
