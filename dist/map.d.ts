type Map = {
    <T, R>(fn: (x: T) => R, arr: T[]): R[];
    <T, R>(fn: (x: T) => R): (arr: T[]) => R[];
};
declare const mapCurried: Map;
export default mapCurried;
//# sourceMappingURL=map.d.ts.map