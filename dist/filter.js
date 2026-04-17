import curryRight from './curryRight.js';

const filter = (arr, filterFunc) => arr.filter((val) => filterFunc(val));
var filter$1 = /*#__PURE__*/ curryRight(filter, filter.length);

export { filter$1 as default };
//# sourceMappingURL=filter.js.map
