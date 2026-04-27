type ForEach = {
    <T>(func: (x: T) => void, arr: T[]): T[];
    <T>(func: (x: T) => void): (arr: T[]) => T[];
};
declare const forEachCurried: ForEach;
export default forEachCurried;
//# sourceMappingURL=forEach.d.ts.map