type Has = {
    (prop: string, obj: {}): boolean;
    (prop: string): (obj: {}) => boolean;
};
declare const hasCurried: Has;
export default hasCurried;
//# sourceMappingURL=has.d.ts.map