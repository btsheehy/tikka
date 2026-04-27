type StartsWith = {
    (prefix: string, str: string): boolean;
    (prefix: string): (str: string) => boolean;
};
declare const startsWithCurried: StartsWith;
export default startsWithCurried;
//# sourceMappingURL=startsWith.d.ts.map