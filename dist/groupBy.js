import curryRight from './curryRight.js';

const groupBy = (arr, groupingFunction) => {
    return arr.reduce((acc, val) => {
        const group = groupingFunction(val);
        if (acc[group]) {
            acc[group].push(val);
        }
        else {
            acc[group] = [val];
        }
        return acc;
    }, {});
};
var groupBy$1 = /*#__PURE__*/ curryRight(groupBy);

export { groupBy$1 as default };
//# sourceMappingURL=groupBy.js.map
