type Filter = {
    <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
    <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
};
declare const filterCurried: Filter;
export default filterCurried;
//# sourceMappingURL=filter.d.ts.map