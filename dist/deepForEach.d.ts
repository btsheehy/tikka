type DeepForEach = {
    <T>(func: (value: T) => unknown, data: Array<T>): void;
    (func: (value: unknown) => unknown, data: object): void;
    <T>(func: (value: T) => unknown): (data: Array<T>) => void;
    (func: (value: unknown) => unknown): (data: object) => void;
};
declare const deepForEachCurried: DeepForEach;
export default deepForEachCurried;
//# sourceMappingURL=deepForEach.d.ts.map