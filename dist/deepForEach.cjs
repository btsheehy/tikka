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
/**
 * Walks nested arrays/objects and runs a callback for each leaf value.
 * @param data - Nested structure to traverse.
 * @param func - Callback called for each non-object/non-array leaf node.
 * @returns Nothing.
 *
 * @example
 * deepForEach((value) => console.log(value), { a: 1, b: [2, 3] })
 */
const deepForEachCurried = /*#__PURE__*/ curryRight.default(deepForEach);

exports.default = deepForEachCurried;
//# sourceMappingURL=deepForEach.cjs.map
