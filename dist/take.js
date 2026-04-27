import curryRight from './curryRight.js';

/**
 * Returns first `num` elements.
 * @param arr - Input value for arr.
 * @param num - Input value for num.
 * @returns The computed result.
 *
 * @example
 * take(arr, num)
 */
const take = (arr, num) => {
    return arr.slice(0, num);
};
var take$1 = /*#__PURE__*/ curryRight(take);

export { take$1 as default };
//# sourceMappingURL=take.js.map
