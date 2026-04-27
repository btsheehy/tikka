type FindIndex = {
    <T>(findFunc: (x: T) => boolean, arr: Array<T>): number;
    <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => number;
};
declare const findIndexCurried: FindIndex;
export default findIndexCurried;
//# sourceMappingURL=findIndex.d.ts.map