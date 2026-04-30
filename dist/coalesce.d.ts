type Coalesce = {
    <T>(fallback: T, value: T | null | undefined): T;
    <T>(fallback: T): (value: T | null | undefined) => T;
};
/**
 * Falls back when a value is `null` or `undefined`.
 * @param value - Preferred value.
 * @param fallback - Value used only when `value` is nullish.
 * @returns `value` when present, otherwise `fallback`.
 *
 * @example
 * coalesce('Anonymous', profile.nickname)
 */
declare const coalesceCurried: Coalesce;
export default coalesceCurried;
//# sourceMappingURL=coalesce.d.ts.map