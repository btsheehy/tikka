'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curry = require('./curry.cjs');

const cond = (args, predicateArg) => {
    const defaultValue = args[args.length - 1];
    const pairs = args.slice(0, -1);
    for (const [predicate, value] of pairs) {
        if (predicate(predicateArg))
            return value;
    }
    return defaultValue;
};
var cond$1 = /*#__PURE__*/ curry.default(cond);

exports.default = cond$1;
//# sourceMappingURL=cond.cjs.map
