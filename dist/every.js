import curryRight from './curryRight.js';

/**
 * Checks whether all items in an array satisfy a predicate.
 * @param arr - Array to validate.
 * @param test - Predicate run for each element until a failure is found.
 * @returns `true` when every element passes `test`; otherwise `false`.
 *
 * @example
 * every((n) => n > 0, [1, 3, 5]) // true
 */
const every = (arr, test) => {
    let allPass = true;
    let i = 0;
    const length = arr.length;
    while (i < length) {
        const passes = test(arr[i]);
        allPass = passes;
        if (!passes)
            break;
        i++;
    }
    return allPass;
};
var every$1 = /*#__PURE__*/ curryRight(every);

export { every$1 as default };
//# sourceMappingURL=every.js.map
