import curryRight from './curryRight.js';
import mapCurried from './map.js';
import mapValuesCurried from './mapValues.js';
import type from './type.js';

function deepMap(data, func) {
    const recurseFunc = (value) => {
        if (type(value) === 'Array') {
            return mapCurried((entry) => recurseFunc(entry), value);
        }
        if (type(value) === 'Object') {
            return mapValuesCurried((entry) => recurseFunc(entry), value);
        }
        return func(value);
    };
    return recurseFunc(data);
}
const deepMapCurried = /*#__PURE__*/ curryRight(deepMap);

export { deepMapCurried as default };
//# sourceMappingURL=deepMap.js.map
