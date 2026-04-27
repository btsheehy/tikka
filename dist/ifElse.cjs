'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

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
var ifElse$1 = /*#__PURE__*/ curryRight.default(ifElse);

exports.default = ifElse$1;
//# sourceMappingURL=ifElse.cjs.map
