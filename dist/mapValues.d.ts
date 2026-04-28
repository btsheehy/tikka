type MapValues = {
    <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R, obj: T): Record<keyof T, R>;
    <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R): (obj: T) => Record<keyof T, R>;
};
/**
 * Transforms object values while preserving keys.
 * @param obj - Object whose values will be mapped.
 * @param fn - Mapper run for each value.
 * @returns A new object with the same keys and mapped values.
 *
 * @example
 * mapValues((n) => n * 10, { a: 1, b: 2 }) // { a: 10, b: 20 }
 */
declare const mapValuesCurried: MapValues;
export default mapValuesCurried;
//# sourceMappingURL=mapValues.d.ts.map