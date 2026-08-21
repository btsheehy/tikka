/**
 * Creates a zero-argument function that always returns the provided value.
 *
 * @param arg - The value to capture and return on every invocation.
 * @returns A new function that ignores its inputs and returns `arg`.
 *
 * @example
 * const alwaysFive = always(5)
 * alwaysFive() // 5
 */
declare const always: <T>(arg: T) => () => T;
export default always;
//# sourceMappingURL=always.d.ts.map