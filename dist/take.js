import curryRight from './curryRight.js';

/**
 * Returns first `num` elements.
 */
const take = (arr, num) => {
    return arr.slice(0, num);
};
var take$1 = /*#__PURE__*/ curryRight(take);

export { take$1 as default };
//# sourceMappingURL=take.js.map
