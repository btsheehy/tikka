'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var forEach = require('./forEach.cjs');
var forEachValues = require('./forEachValues.cjs');
var type = require('./type.cjs');

function deepForEach(data, func) {
    const recurseFunc = (value) => {
        if (type.default(value) === 'Array') {
            forEach.default((entry) => recurseFunc(entry), value);
            return;
        }
        if (type.default(value) === 'Object') {
            forEachValues.default((entry) => recurseFunc(entry), value);
            return;
        }
        func(value);
    };
    recurseFunc(data);
}
const deepForEachCurried = /*#__PURE__*/ curryRight.default(deepForEach);

exports.default = deepForEachCurried;
//# sourceMappingURL=deepForEach.cjs.map
