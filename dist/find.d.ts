type Find = {
    <T>(findFunc: (x: T) => boolean, arr: Array<T>): T | undefined;
    <T>(findFunc: (x: T) => boolean): (arr: Array<T>) => T | undefined;
};
/**
 * Finds the first array element that satisfies a predicate.
 * @param arr - Array to search.
 * @param findFunc - Predicate used to test each element in order.
 * @returns The first matching item, or `undefined` when no item matches.
 *
 * @example
 * find((user) => user.id === 42, users)
 */
declare const findCurried: Find;
export default findCurried;
//# sourceMappingURL=find.d.ts.map