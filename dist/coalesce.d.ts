type Coalesce = {
    <T>(fallback: T, value: T | null | undefined): T;
    <T>(fallback: T): (value: T | null | undefined) => T;
};
declare const coalesceCurried: Coalesce;
export default coalesceCurried;
//# sourceMappingURL=coalesce.d.ts.map