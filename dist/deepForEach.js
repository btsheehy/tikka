import curryRight from './curryRight.js';
import forEachCurried from './forEach.js';
import forEachValuesCurried from './forEachValues.js';
import type from './type.js';

function deepForEach(data, func) {
    const recurseFunc = (value) => {
        if (type(value) === 'Array') {
            forEachCurried((entry) => recurseFunc(entry), value);
            return;
        }
        if (type(value) === 'Object') {
            forEachValuesCurried((entry) => recurseFunc(entry), value);
            return;
        }
        func(value);
    };
    recurseFunc(data);
}
const deepForEachCurried = /*#__PURE__*/ curryRight(deepForEach);

export { deepForEachCurried as default };
//# sourceMappingURL=deepForEach.js.map
