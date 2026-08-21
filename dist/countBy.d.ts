type CountBy = {
    <T>(iteratee: (value: T) => string, arr: T[]): Record<string, number>;
    <T>(iteratee: (value: T) => string): (arr: T[]) => Record<string, number>;
};
/**
 * Counts items in an array by a derived key.
 * @param arr - Items to count.
 * @param iteratee - Function that maps each item to a bucket key.
 * @returns An object where each key stores the number of matching items.
 *
 * @example
 * countBy((word) => word.length.toString(), ['a', 'to', 'cat'])
 */
declare const countByCurried: CountBy;
export default countByCurried;
//# sourceMappingURL=countBy.d.ts.map