'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var identical = require('./identical.cjs');
var map = require('./map.cjs');

const replace = ((target, replacee, replacement) => {
    if (Array.isArray(target)) {
        const replacementFunc = (typeof replacement === 'function' ? replacement : () => replacement);
        const replacementTestFunc = (typeof replacee === 'function' ? replacee : identical.default(replacee));
        const replaceFunc = (val) => {
            if (replacementTestFunc(val))
                return replacementFunc(val);
            return val;
        };
        return map.default(replaceFunc, target);
    }
    return target.replaceAll(replacee, replacement);
});
var replace$1 = /*#__PURE__*/ curryRight.default(replace);

exports.default = replace$1;
//# sourceMappingURL=replace.cjs.map
