type ForEachValues = {
    (fn: (x: any) => any, obj: {}): {};
    (fn: (x: any) => any): (obj: {}) => {};
};
/**
 * Runs a callback for each own enumerable value in an object.
 * @param obj - Object whose values will be visited.
 * @param fn - Callback invoked for each value.
 * @returns The original `obj`.
 *
 * @example
 * forEachValues((value) => console.log(value), { a: 1, b: 2 })
 */
declare const forEachValuesCurried: ForEachValues;
export default forEachValuesCurried;
//# sourceMappingURL=forEachValues.d.ts.map