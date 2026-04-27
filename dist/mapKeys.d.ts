type MapKeys = {
    <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R, obj: T): Record<R, T[K]>;
    <T extends object, K extends keyof T, R extends string>(fn: (x: K) => R): (obj: T) => Record<R, T[K]>;
};
declare const mapKeys: MapKeys;
export default mapKeys;
//# sourceMappingURL=mapKeys.d.ts.map