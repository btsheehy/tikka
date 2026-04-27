import curryRight from './curryRight.js';

/**
 * Logs `msg` and `value`, then returns `value`.
 * @param value - Input value for value.
 * @param msg - Input value for msg.
 * @returns The computed result.
 *
 * @example
 * debug(value, msg)
 */
const debug = (value, msg) => {
    console.log(msg);
    console.log(value);
    return value;
};
var debug$1 = /*#__PURE__*/ curryRight(debug);

export { debug$1 as default };
//# sourceMappingURL=debug.js.map
