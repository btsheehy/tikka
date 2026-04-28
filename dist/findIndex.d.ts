type FindIndex = {
    <T>(findFunc: (x: T) => boolean, arr: Array<T>): number;
    <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => number;
};
/**
 * Finds the index of the first array element that satisfies a predicate.
 * @param arr - Array to search.
 * @param findFunc - Predicate used to test each element in order.
 * @returns Index of the first match, or `-1` when no element matches.
 *
 * @example
 * findIndex((n) => n < 0, [3, 2, -1, 5]) // 2
 */
declare const findIndexCurried: FindIndex;
export default findIndexCurried;
//# sourceMappingURL=findIndex.d.ts.map