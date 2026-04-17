import curryRight from './curryRight.js';
import map from './map.js';
import mapValues from './mapValues.js';
import type from './type.js';

function deepMap(data, func) {
    const recurseFunc = (value) => {
        if (type(value) === 'Array') {
            return map((entry) => recurseFunc(entry), value);
        }
        if (type(value) === 'Object') {
            return mapValues((entry) => recurseFunc(entry), value);
        }
        return func(value);
    };
    return recurseFunc(data);
}
var deepMap$1 = /*#__PURE__*/ curryRight(deepMap);

export { deepMap$1 as default };
//# sourceMappingURL=deepMap.js.map
