type DeepMap = {
    <T, R>(func: (x: T) => R, data: Array<T>): Array<R>;
    <T extends object, R>(func: (x: any) => R, data: T): object;
    <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>;
    <T extends object, R>(func: (x: any) => R): (data: T) => object;
};
/**
 * Recursively maps every leaf value in a nested array/object structure.
 * @param data - Nested structure to transform.
 * @param func - Mapper applied to each leaf value.
 * @returns A new structure with the same shape and transformed leaves.
 *
 * @example
 * deepMap((n) => n * 10, { a: 1, b: [2, 3] })
 */
declare const deepMapCurried: DeepMap;
export default deepMapCurried;
//# sourceMappingURL=deepMap.d.ts.map