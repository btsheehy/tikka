'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

const mapValues = (obj, fn) => {
    const keys = Object.keys(obj);
    const newObj = {};
    for (const key of keys) {
        newObj[key] = fn(obj[key]);
    }
    return newObj;
};
var mapValues$1 = /*#__PURE__*/ curryRight.default(mapValues);

exports.default = mapValues$1;
//# sourceMappingURL=mapValues.cjs.map
