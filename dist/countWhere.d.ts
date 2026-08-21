type CountWhere = {
    <T>(test: (x: T) => boolean, arr: Array<T>): number;
    <T>(test: (x: T) => boolean): (arr: Array<T>) => number;
};
/**
 * Counts how many array items satisfy a predicate.
 * @param arr - Items to test.
 * @param test - Predicate used to include/exclude each item.
 * @returns Number of elements for which `test` returns `true`.
 *
 * @example
 * countWhere((n) => n % 2 === 0, [1, 2, 3, 4]) // 2
 */
declare const countWhereCurried: CountWhere;
export default countWhereCurried;
//# sourceMappingURL=countWhere.d.ts.map