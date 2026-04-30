import curryRight from './curryRight.js';

const debug = (value, msg) => {
    console.log(msg);
    console.log(value);
    return value;
};
/**
 * Logs a label and value, then returns the original value.
 * @param value - Value to pass through unchanged.
 * @param msg - Label printed before the value.
 * @returns The same `value`, enabling debug taps in pipelines.
 *
 * @example
 * debug('after parse', record)
 */
const debugCurried = /*#__PURE__*/ curryRight(debug);

export { debugCurried as default };
//# sourceMappingURL=debug.js.map
