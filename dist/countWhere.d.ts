type CountWhere = {
    <T>(test: (x: T) => boolean, arr: Array<T>): number;
    <T>(test: (x: T) => boolean): (arr: Array<T>) => number;
};
declare const countWhereCurried: CountWhere;
export default countWhereCurried;
//# sourceMappingURL=countWhere.d.ts.map