import curry from './curry.js';

/**
 * Returns the value for the first matching predicate in a list of predicate/value pairs.
 *
 * The final element of `args` acts as the default value when none of the predicates match.
 *
 * @param args - A list of `[predicate, value]` tuples followed by a required default value.
 * @param predicateArg - The value passed to each predicate.
 * @returns The value paired with the first predicate that returns `true`, or the default value.
 *
 * @example
 * cond([
 *   [(n: number) => n < 0, 'negative'],
 *   [(n: number) => n === 0, 'zero'],
 *   'positive',
 * ], 0) // 'zero'
 */
const cond = (args, predicateArg) => {
    const defaultValue = args[args.length - 1];
    const pairs = args.slice(0, -1);
    for (const [predicate, value] of pairs) {
        if (predicate(predicateArg))
            return value;
    }
    return defaultValue;
};
const condCurried = /*#__PURE__*/ curry(cond);

export { condCurried as default };
//# sourceMappingURL=cond.js.map
