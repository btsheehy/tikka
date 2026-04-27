type Pluck = {
    <T, K extends keyof T>(prop: K, collection: T[]): T[K][];
    <K extends PropertyKey>(prop: K): <T extends Record<K, any>>(collection: T[]) => T[K][];
};
declare const pluck: Pluck;
export default pluck;
//# sourceMappingURL=pluck.d.ts.map