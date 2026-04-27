import curryRight from './curryRight.js';

/**
 * Subtracts second arg from first in curried-right style.
 */
const minus = (a, b) => a - b;
var minus$1 = /*#__PURE__*/ curryRight(minus);

export { minus$1 as default };
//# sourceMappingURL=minus.js.map
