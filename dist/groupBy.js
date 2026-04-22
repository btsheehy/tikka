import curryRight from './curryRight.js';

const groupByImpl = (arr, grouper) => {
    const groupingFunction = typeof grouper === 'function'
        ? grouper
        : (item) => {
            const value = item[grouper];
            if (typeof value === 'string' || typeof value === 'number') {
                return value;
            }
            return String(value);
        };
    return arr.reduce((acc, value) => {
        const group = String(groupingFunction(value));
        if (acc[group]) {
            acc[group].push(value);
        }
        else {
            acc[group] = [value];
        }
        return acc;
    }, {});
};
const groupBy = /*#__PURE__*/ curryRight(groupByImpl);

export { groupBy as default };
//# sourceMappingURL=groupBy.js.map
