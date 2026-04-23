'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

/**
 * grab utility function.
 */
const grabFromOne = (obj, props) => {
    const result = {};
    return props.reduce((acc, p) => {
        acc[p] = get.default(p, obj);
        return acc;
    }, result);
};
function grab(data, props) {
    if (Array.isArray(data))
        return data.map((x) => grabFromOne(x, props));
    else
        return grabFromOne(data, props);
}
var grab$1 = /*#__PURE__*/ curryRight.default(grab);

exports.default = grab$1;
//# sourceMappingURL=grab.cjs.map
