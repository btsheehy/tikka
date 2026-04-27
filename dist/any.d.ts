type Any = {
    <T>(test: (t: T) => boolean, arr: Array<T>): boolean;
    <T>(test: (t: T) => boolean): (arr: Array<T>) => boolean;
};
declare const anyCurried: Any;
export default anyCurried;
//# sourceMappingURL=any.d.ts.map