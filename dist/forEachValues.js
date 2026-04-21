import curryRight from './curryRight.js';

const forEachValues = (obj, fn) => {
    Object.entries(obj).forEach(([_key, value]) => {
        fn(value);
    });
    return obj;
};
var forEachValues$1 = /*#__PURE__*/ curryRight(forEachValues);

export { forEachValues$1 as default };
//# sourceMappingURL=forEachValues.js.map
