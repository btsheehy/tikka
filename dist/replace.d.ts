type Replace = {
    <T, U>(replacement: U, replacee: T, targetArray: T[]): (T | U)[];
    <T, U>(replacement: (item: T) => U, replacee: T, targetArray: T[]): (T | U)[];
    <T, U>(replacement: U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[];
    <T, U>(replacement: (item: T) => U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[];
    (replacement: string, substring: string, targetString: string): string;
    (replacement: string, regex: RegExp, targetString: string): string;
};
declare const replaceCurried: Replace;
export default replaceCurried;
//# sourceMappingURL=replace.d.ts.map