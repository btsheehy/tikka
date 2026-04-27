type Identical = {
    (b: unknown, a: unknown): boolean;
    (b: unknown): (a: unknown) => boolean;
};
declare const identicalCurried: Identical;
export default identicalCurried;
//# sourceMappingURL=identical.d.ts.map