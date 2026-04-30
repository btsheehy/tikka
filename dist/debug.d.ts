type Debug = {
    <T>(msg: string, value: T): T;
    (msg: string): <T>(value: T) => T;
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
declare const debugCurried: Debug;
export default debugCurried;
//# sourceMappingURL=debug.d.ts.map