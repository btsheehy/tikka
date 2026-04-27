type Split = {
    (separator: string | RegExp, str: string): string[];
    (separator: string | RegExp): (str: string) => string[];
};
declare const splitCurried: Split;
export default splitCurried;
//# sourceMappingURL=split.d.ts.map