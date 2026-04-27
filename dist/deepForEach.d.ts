type DeepForEach = {
    <T>(func: (value: T) => void, data: Array<T>): void;
    <T extends object>(func: (value: any) => void, data: T): void;
    <T>(func: (value: T) => void): (data: Array<T>) => void;
    <T extends object>(func: (value: any) => void): (data: T) => void;
};
declare const deepForEachCurried: DeepForEach;
export default deepForEachCurried;
//# sourceMappingURL=deepForEach.d.ts.map