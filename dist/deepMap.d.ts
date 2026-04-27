type DeepMap = {
    <T, R>(func: (x: T) => R, data: Array<T>): Array<R>;
    (func: (x: unknown) => unknown, data: object): object;
    <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>;
    (func: (x: unknown) => unknown): (data: object) => object;
};
declare const deepMapCurried: DeepMap;
export default deepMapCurried;
//# sourceMappingURL=deepMap.d.ts.map