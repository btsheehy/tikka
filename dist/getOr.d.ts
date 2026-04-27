type GetOr = {
    <T, K extends keyof T, R>(defaultValue: R, prop: K, obj: T): T[K];
    <R>(defaultValue: R, prop: PropertyKey, obj: {}): R;
    <T, K extends keyof T, R>(defaultValue: R, prop: K): (obj: T) => T[K];
    <R>(defaultValue: R, prop: PropertyKey): (obj: {}) => R;
};
declare const getOrCurried: GetOr;
export default getOrCurried;
//# sourceMappingURL=getOr.d.ts.map