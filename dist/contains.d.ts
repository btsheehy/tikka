/**
 * Checks whether `searchTarget.includes(value)` is true.
 */
export type IncludesTarget = {
    includes: (value: unknown) => boolean;
};
declare const _default: {
    (b: unknown, a: IncludesTarget, ...extra: unknown[]): boolean;
    (b: unknown): (a: IncludesTarget, ...extra: unknown[]) => boolean;
};
export default _default;
//# sourceMappingURL=contains.d.ts.map