type Every = {
    <T>(test: (x: T) => boolean, arr: Array<T>): boolean;
    <T>(test: (x: T) => boolean): (arr: Array<T>) => boolean;
};
/**
 * Checks whether all items in an array satisfy a predicate.
 * @param arr - Array to validate.
 * @param test - Predicate run for each element until a failure is found.
 * @returns `true` when every element passes `test`; otherwise `false`.
 *
 * @example
 * every((n) => n > 0, [1, 3, 5]) // true
 */
declare const everyCurried: Every;
export default everyCurried;
//# sourceMappingURL=every.d.ts.map