type EndsWith = {
    (suffix: string, str: string): boolean;
    (suffix: string): (str: string) => boolean;
};
declare const endsWithCurried: EndsWith;
export default endsWithCurried;
//# sourceMappingURL=endsWith.d.ts.map