'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');
var get = require('./get.cjs');

const groupByImpl = (arr, grouper) => {
    const groupingFunction = typeof grouper === 'function' ? grouper : get.default(grouper);
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
const groupBy = /*#__PURE__*/ curryRight.default(groupByImpl);

exports.default = groupBy;
//# sourceMappingURL=groupBy.cjs.map
