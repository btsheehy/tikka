type ForEach = {
    <T>(func: (x: T) => unknown, arr: T[]): T[];
    <T>(func: (x: T) => unknown): (arr: T[]) => T[];
};
declare const forEachCurried: ForEach;
export default forEachCurried;
//# sourceMappingURL=forEach.d.ts.map