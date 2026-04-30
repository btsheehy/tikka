type Test = {
    (regex: RegExp, str: string): boolean;
    (regex: RegExp): (str: string) => boolean;
};
/**
 * Tests whether a string matches a regular expression.
 * @param str - String to test.
 * @param regex - Regular expression to run.
 * @returns `true` when `regex.test(str)` matches.
 *
 * @example
 * test(/^v\d+$/, 'v12') // true
 */
declare const testCurried: Test;
export default testCurried;
//# sourceMappingURL=test.d.ts.map