type GroupBy = {
    <T>(grouper: (x: T) => string | number, arr: T[]): Record<string, T[]>;
    <T, K extends keyof T>(grouper: K, arr: T[]): Record<string, T[]>;
    <T>(grouper: (x: T) => string | number): (arr: T[]) => Record<string, T[]>;
    <K extends string | number>(grouper: K): <T extends Record<K, string | number>>(arr: T[]) => Record<string, T[]>;
};
declare const groupBy: GroupBy;
export default groupBy;
//# sourceMappingURL=groupBy.d.ts.map