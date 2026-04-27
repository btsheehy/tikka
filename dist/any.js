import curryRight from './curryRight.js';

/**
 * Checks whether at least one array item satisfies a predicate.
 * @param arr - Array to scan.
 * @param test - Predicate run for each element until a match is found.
 * @returns `true` as soon as one element passes `test`; otherwise `false`.
 *
 * @example
 * any((n) => n > 10, [3, 8, 12]) // true
 */
const any = (arr, test) => {
    let i = 0;
    const length = arr.length;
    while (i < length) {
        const val = arr[i];
        const passes = test(val);
        if (passes)
            return true;
        i++;
    }
    return false;
};
const anyCurried = /*#__PURE__*/ curryRight(any);

export { anyCurried as default };
//# sourceMappingURL=any.js.map
