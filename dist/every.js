import curryRight from './curryRight.js';

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
/**
 * Checks whether all items in an array satisfy a predicate.
 * @param arr - Array to validate.
 * @param test - Predicate run for each element until a failure is found.
 * @returns `true` when every element passes `test`; otherwise `false`.
 *
 * @example
 * every((n) => n > 0, [1, 3, 5]) // true
 */
const everyCurried = /*#__PURE__*/ curryRight(every);

export { everyCurried as default };
//# sourceMappingURL=every.js.map
