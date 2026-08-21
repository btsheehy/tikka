type Any = {
    <T>(test: (t: T) => boolean, arr: Array<T>): boolean;
    <T>(test: (t: T) => boolean): (arr: Array<T>) => boolean;
};
/**
 * Checks whether at least one array item satisfies a predicate.
 * @param arr - Array to scan.
 * @param test - Predicate run for each element until a match is found.
 * @returns `true` as soon as one element passes `test`; otherwise `false`.
 *
 * @example
 * any((n) => n > 10, [3, 8, 12]) // true
 */
declare const anyCurried: Any;
export default anyCurried;
//# sourceMappingURL=any.d.ts.map