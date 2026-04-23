import curryRight from './curryRight.js';

/**
 * Runs `test()`, then executes `onTrue()` or `onFalse()`.
 */
// TODO: Needs work
const ifElse = (test, onTrue, onFalse) => {
    const trueOrFalse = test();
    if (trueOrFalse)
        return onTrue();
    return onFalse();
};
var ifElse$1 = /*#__PURE__*/ curryRight(ifElse);

export { ifElse$1 as default };
//# sourceMappingURL=ifElse.js.map
