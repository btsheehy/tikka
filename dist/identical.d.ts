type Identical = {
    <T>(b: T, a: T): boolean;
    <T>(b: T): (a: T) => boolean;
};
declare const identicalCurried: Identical;
export default identicalCurried;
//# sourceMappingURL=identical.d.ts.map