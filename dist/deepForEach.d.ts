type DeepForEach = {
    <T>(func: (value: T) => void, data: Array<T>): void;
    <T extends object>(func: (value: any) => void, data: T): void;
    <T>(func: (value: T) => void): (data: Array<T>) => void;
    <T extends object>(func: (value: any) => void): (data: T) => void;
};
/**
 * Walks nested arrays/objects and runs a callback for each leaf value.
 * @param data - Nested structure to traverse.
 * @param func - Callback called for each non-object/non-array leaf node.
 * @returns Nothing.
 *
 * @example
 * deepForEach((value) => console.log(value), { a: 1, b: [2, 3] })
 */
declare const deepForEachCurried: DeepForEach;
export default deepForEachCurried;
//# sourceMappingURL=deepForEach.d.ts.map