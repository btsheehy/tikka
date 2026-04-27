type Every = {
    <T>(test: (x: T) => boolean, arr: Array<T>): boolean;
    <T>(test: (x: T) => boolean): (arr: Array<T>) => boolean;
};
declare const everyCurried: Every;
export default everyCurried;
//# sourceMappingURL=every.d.ts.map