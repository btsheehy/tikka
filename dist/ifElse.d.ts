type IfElse = {
    <TR, FR>(onFalse: () => FR, onTrue: () => TR, test: () => boolean): TR | FR;
    <TR, FR>(onFalse: () => FR, onTrue: () => TR): (test: () => boolean) => TR | FR;
    <TR, FR>(onFalse: () => FR): (onTrue: () => TR, test: () => boolean) => TR | FR;
    <TR, FR>(onFalse: () => FR): (onTrue: () => TR) => (test: () => boolean) => TR | FR;
};
/**
 * Executes one of two callbacks based on a predicate callback.
 * @param test - Function whose boolean result chooses the branch.
 * @param onTrue - Callback invoked when `test()` returns `true`.
 * @param onFalse - Callback invoked when `test()` returns `false`.
 * @returns Result of `onTrue()` or `onFalse()`.
 *
 * @example
 * ifElse(() => env === 'prod', () => 'minified', () => 'debug')
 */
declare const ifElseCurried: IfElse;
export default ifElseCurried;
//# sourceMappingURL=ifElse.d.ts.map