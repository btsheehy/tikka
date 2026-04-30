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
/**
 * Groups array items by a key function or object property.
 * @param arr - Items to group.
 * @param grouper - Property name or function that returns each item's group key.
 * @returns An object whose keys are group names and values are grouped items.
 *
 * @example
 * groupBy('status', [{ status: 'open' }, { status: 'closed' }, { status: 'open' }])
 */
const groupBy = /*#__PURE__*/ curryRight(groupByImpl);

export { groupBy as default };
//# sourceMappingURL=groupBy.js.map
