type Find = {
    <T>(findFunc: (x: T) => boolean, arr: Array<T>): T | undefined;
    <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => T | undefined;
};
declare const findCurried: Find;
export default findCurried;
//# sourceMappingURL=find.d.ts.map