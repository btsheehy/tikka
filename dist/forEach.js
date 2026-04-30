import curryRight from './curryRight.js';

const forEach = (arr, func) => {
    arr.forEach((val) => {
        func(val);
    });
    return arr;
};
/**
 * Runs a callback for each array item and returns the original array.
 * @param arr - Array to iterate.
 * @param func - Side-effect callback executed for each element.
 * @returns The same `arr` instance.
 *
 * @example
 * forEach((n) => console.log(n), [1, 2, 3])
 */
const forEachCurried = /*#__PURE__*/ curryRight(forEach);

export { forEachCurried as default };
//# sourceMappingURL=forEach.js.map
