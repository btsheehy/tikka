type Split = {
    (separator: string | RegExp, str: string): string[];
    (separator: string | RegExp): (str: string) => string[];
};
/**
 * Splits a string using a separator string or regex.
 * @param str - String to split.
 * @param separator - Delimiter used by `String.prototype.split`.
 * @returns Array of substrings.
 *
 * @example
 * split(',', 'a,b,c') // ['a', 'b', 'c']
 */
declare const splitCurried: Split;
export default splitCurried;
//# sourceMappingURL=split.d.ts.map