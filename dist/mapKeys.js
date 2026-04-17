import curryRight from './curryRight.js';

const mapKeys = (obj, fn) => {
    const keys = Object.keys(obj);
    const newObj = {};
    keys.forEach((k) => {
        newObj[fn(k)] = obj[k];
    });
    return newObj;
};
var mapKeys$1 = /*#__PURE__*/ curryRight(mapKeys);

export { mapKeys$1 as default };
//# sourceMappingURL=mapKeys.js.map
