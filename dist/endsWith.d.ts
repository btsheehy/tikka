type EndsWith = {
    (suffix: string, str: string): boolean;
    (suffix: string): (str: string) => boolean;
};
/**
 * Checks whether a string ends with a suffix.
 * @param str - Full string to inspect.
 * @param suffix - Trailing substring to match.
 * @returns `true` when `str` ends with `suffix`.
 *
 * @example
 * endsWith('.ts', 'index.ts') // true
 */
declare const endsWithCurried: EndsWith;
export default endsWithCurried;
//# sourceMappingURL=endsWith.d.ts.map