type Max = {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
};
/**
 * Returns the larger of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The maximum of `a` and `b`.
 *
 * @example
 * max(4, 9) // 9
 */
declare const maxCurried: Max;
export default maxCurried;
//# sourceMappingURL=max.d.ts.map