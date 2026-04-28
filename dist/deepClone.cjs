'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var deepMap = require('./deepMap.cjs');
var type = require('./type.cjs');

const cloneRegex = (regex) => {
    return new RegExp(regex.source, (regex.global ? 'g' : '') +
        (regex.ignoreCase ? 'i' : '') +
        (regex.multiline ? 'm' : '') +
        (regex.sticky ? 'y' : '') +
        (regex.unicode ? 'u' : ''));
};
function cloneValue(val) {
    if (type.default(val) === 'Date')
        return new Date(val.valueOf());
    if (type.default(val) === 'RegExp')
        return cloneRegex(val);
    return val;
}
function deepClone(data) {
    return deepMap.default(cloneValue, data);
}

exports.default = deepClone;
//# sourceMappingURL=deepClone.cjs.map
