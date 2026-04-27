type CountBy = {
    <T>(iteratee: (value: T) => string, arr: T[]): Record<string, number>;
    <T>(iteratee: (value: T) => string): (arr: T[]) => Record<string, number>;
};
declare const countByCurried: CountBy;
export default countByCurried;
//# sourceMappingURL=countBy.d.ts.map