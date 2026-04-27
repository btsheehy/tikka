import curryRight from './curryRight.js';
import get from './get.js';

const groupByImpl = (arr, grouper) => {
    const groupingFunction = typeof grouper === 'function' ? grouper : get(grouper);
    const groups = {};
    let i = 0;
    while (i < arr.length) {
        const group = String(groupingFunction(arr[i]));
        if (groups[group])
            groups[group].push(arr[i]);
        else
            groups[group] = [arr[i]];
        i++;
    }
    return groups;
};
const groupBy = /*#__PURE__*/ curryRight(groupByImpl);

export { groupBy as default };
//# sourceMappingURL=groupBy.js.map
