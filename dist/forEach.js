import curryRight from './curryRight.js';

/**
 * Runs a callback for each array item and returns the original array.
 * @param arr - Array to iterate.
 * @param func - Side-effect callback executed for each element.
 * @returns The same `arr` instance.
 *
 * @example
 * forEach((n) => console.log(n), [1, 2, 3])
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
