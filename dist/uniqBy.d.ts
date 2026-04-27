type UniqBy = {
    <T, U>(uniqCond: (x: T) => U, arr: T[]): T[];
    <T, U>(uniqCond: (x: T) => U): (arr: T[]) => T[];
};
declare const uniqByCurried: UniqBy;
export default uniqByCurried;
//# sourceMappingURL=uniqBy.d.ts.map