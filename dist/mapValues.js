import curryRight from './curryRight.js';

const mapValues = (obj, fn) => {
    const keys = Object.keys(obj);
    const newObj = {};
    for (const key of keys) {
        newObj[key] = fn(obj[key]);
    }
    return newObj;
};
var mapValues$1 = /*#__PURE__*/ curryRight(mapValues);

export { mapValues$1 as default };
//# sourceMappingURL=mapValues.js.map
