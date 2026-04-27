import curryRight from './curryRight.js';

/**
 * forEach utility function.
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
