import curryRight from './curryRight.js';
import forEach from './forEach.js';
import forEachValues from './forEachValues.js';
import type from './type.js';

function deepForEach(data, func) {
    const recurseFunc = (value) => {
        if (type(value) === 'Array') {
            forEach((entry) => recurseFunc(entry), value);
            return;
        }
        if (type(value) === 'Object') {
            forEachValues((entry) => recurseFunc(entry), value);
            return;
        }
        func(value);
    };
    recurseFunc(data);
}
var deepForEach$1 = /*#__PURE__*/ curryRight(deepForEach);

export { deepForEach$1 as default };
//# sourceMappingURL=deepForEach.js.map
