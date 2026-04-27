import curry from './curry.js';

const cond = (args, predicateArg) => {
    const defaultValue = args[args.length - 1];
    const pairs = args.slice(0, -1);
    for (const [predicate, value] of pairs) {
        if (predicate(predicateArg))
            return value;
    }
    return defaultValue;
};
var cond$1 = /*#__PURE__*/ curry(cond);

export { cond$1 as default };
//# sourceMappingURL=cond.js.map
