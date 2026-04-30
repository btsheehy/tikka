type Remove = {
    <T>(pred: (value: T) => boolean, arr: T[]): T[];
    <T>(pred: (value: T) => boolean): (arr: T[]) => T[];
};
/**
 * Removes items that match a predicate.
 * @param arr - Source array.
 * @param pred - Predicate that marks elements to remove.
 * @returns A new array containing only elements where `pred` is `false`.
 *
 * @example
 * remove((n) => n % 2 === 0, [1, 2, 3, 4]) // [1, 3]
 */
declare const removeCurried: Remove;
export default removeCurried;
//# sourceMappingURL=remove.d.ts.map