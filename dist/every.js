import curryRight from './curryRight.js';

/**
 * Returns true if all elements pass `test`.
 * @param arr - Input value for arr.
 * @param test - Input value for test.
 * @returns The computed result.
 *
 * @example
 * every(arr, test)
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
