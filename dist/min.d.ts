type Min = {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
};
/**
 * Returns the smaller of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The minimum of `a` and `b`.
 *
 * @example
 * min(4, 9) // 4
 */
declare const minCurried: Min;
export default minCurried;
//# sourceMappingURL=min.d.ts.map