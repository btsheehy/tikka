type Test = {
    (regex: RegExp, str: string): boolean;
    (regex: RegExp): (str: string) => boolean;
};
declare const testCurried: Test;
export default testCurried;
//# sourceMappingURL=test.d.ts.map