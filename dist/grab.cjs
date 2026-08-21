'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

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
/**
 * Picks a subset of keys from an object or each object in an array.
 * @param data - Source object or array of objects.
 * @param props - Keys to keep.
 * @returns A partial object (or array of partial objects) containing only `props`.
 *
 * @example
 * grab(['id', 'name'], [{ id: 1, name: 'Ada', admin: true }])
 */
const grab = /*#__PURE__*/ curryRight.default(grabImpl);

exports.default = grab;
//# sourceMappingURL=grab.cjs.map
