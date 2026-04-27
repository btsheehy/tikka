type DeepMap = {
    <T, R>(func: (x: T) => R, data: Array<T>): Array<R>;
    <T extends object, R>(func: (x: any) => R, data: T): object;
    <T, R>(func: (x: T) => R): (data: Array<T>) => Array<R>;
    <T extends object, R>(func: (x: any) => R): (data: T) => object;
};
declare const deepMapCurried: DeepMap;
export default deepMapCurried;
//# sourceMappingURL=deepMap.d.ts.map