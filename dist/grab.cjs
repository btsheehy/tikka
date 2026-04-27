'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

/**
 * grab utility function.
 * @param obj - Input value for obj.
 * @param props - Input value for props.
 * @returns The computed result.
 *
 * @example
 * grabFromOne(obj, props)
 */
const grabFromOne = (obj, props) => {
    const result = {};
    return props.reduce((acc, p) => {
        acc[p] = get.default(p, obj);
        return acc;
    }, result);
};
function grabImpl(data, props) {
    if (Array.isArray(data)) {
        return data.map((item) => grabFromOne(item, props));
    }
    return grabFromOne(data, props);
}
const grab = /*#__PURE__*/ curryRight.default(grabImpl);

exports.default = grab;
//# sourceMappingURL=grab.cjs.map
