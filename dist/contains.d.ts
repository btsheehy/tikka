/**
 * Checks whether a target with an `includes` method contains a value.
 * @param searchTarget - Array/string/set-like object that implements `includes`.
 * @param value - Value to look for.
 * @returns `true` when `searchTarget.includes(value)` is truthy.
 *
 * @example
 * contains('berry', ['apple', 'berry', 'citrus']) // true
 */
export type IncludesTarget<T> = {
    includes: (value: T) => boolean;
};
type Contains = {
    <T>(value: T, searchTarget: IncludesTarget<T>): boolean;
    <T>(value: T): (searchTarget: IncludesTarget<T>) => boolean;
};
declare const containsCurried: Contains;
export default containsCurried;
//# sourceMappingURL=contains.d.ts.map