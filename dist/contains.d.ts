/**
 * Checks whether a target with an `includes` method contains a value.
 * @param searchTarget - Array/string/set-like object that implements `includes`.
 * @param value - Value to look for.
 * @returns `true` when `searchTarget.includes(value)` is truthy.
 *
 * @example
 * contains('berry', ['apple', 'berry', 'citrus']) // true
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