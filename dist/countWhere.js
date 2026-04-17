import curryRight from './curryRight.js';
import filter from './filter.js';

const countWhere = (arr, test) => {
    return filter(test, arr).length;
};
var countWhere$1 = /*#__PURE__*/ curryRight(countWhere);

export { countWhere$1 as default };
//# sourceMappingURL=countWhere.js.map
