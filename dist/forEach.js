import curryRight from './curryRight.js';

/**
 * forEach utility function.
 * @param arr - Input value for arr.
 * @param func - Input value for func.
 * @returns The computed result.
 *
 * @example
 * forEach(arr, func)
 */
const forEach = (arr, func) => {
    arr.forEach((val) => {
        func(val);
    });
    return arr;
};
var forEach$1 = /*#__PURE__*/ curryRight(forEach);

export { forEach$1 as default };
//# sourceMappingURL=forEach.js.map
