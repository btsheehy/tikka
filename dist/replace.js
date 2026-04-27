import curryRight from './curryRight.js';
import identical from './identical.js';
import map from './map.js';

/**
 * Replaces values in an array or substrings in a string.
 *
 * For arrays, `replacee` can be either an exact value or a predicate function.
 * `replacement` can be a static value or a mapper function.
 *
 * For strings, this delegates to `String.prototype.replaceAll`.
 *
 * Note: the exported function is curried with `curryRight`, so it is typically called as
 * `replace(replacement, replacee, target)`.
 *
 * @param target - The string or array to transform.
 * @param replacee - The value/predicate (for arrays) or substring/regex (for strings) to match.
 * @param replacement - The replacement value/function (arrays) or replacement string (strings).
 * @returns A new array/string with all matches replaced.
 *
 * @example
 * replace(9, 2, [1, 2, 3, 2]) // [1, 9, 3, 9]
 *
 * @example
 * replace('baz', 'foo', 'foo-bar-foo') // 'baz-bar-baz'
 */
const replace = ((target, replacee, replacement) => {
    if (Array.isArray(target)) {
        const replacementFunc = (typeof replacement === 'function' ? replacement : () => replacement);
        const replacementTestFunc = (typeof replacee === 'function' ? replacee : identical(replacee));
        const replaceFunc = (val) => {
            if (replacementTestFunc(val))
                return replacementFunc(val);
            return val;
        };
        return map(replaceFunc, target);
    }
    return target.replaceAll(replacee, replacement);
});
const replaceCurried = /*#__PURE__*/ curryRight(replace);

export { replaceCurried as default };
//# sourceMappingURL=replace.js.map
