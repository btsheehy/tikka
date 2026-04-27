import curryRight from './curryRight.js';

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
// TODO: Needs work
const ifElse = (test, onTrue, onFalse) => {
    const trueOrFalse = test();
    if (trueOrFalse)
        return onTrue();
    return onFalse();
};
const ifElseCurried = /*#__PURE__*/ curryRight(ifElse);

export { ifElseCurried as default };
//# sourceMappingURL=ifElse.js.map
