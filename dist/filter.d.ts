type Filter = {
    <T>(filterFunc: (x: T) => boolean, arr: Array<T>): T[];
    <T>(filterFunc: (x: T) => boolean): (arr: Array<T>) => T[];
};
/**
 * Filters an array by predicate.
 * @param arr - Source array.
 * @param filterFunc - Predicate that decides which items to keep.
 * @returns A new array containing only elements where `filterFunc` returned `true`.
 *
 * @example
 * filter((user) => user.active, users)
 */
declare const filterCurried: Filter;
export default filterCurried;
//# sourceMappingURL=filter.d.ts.map