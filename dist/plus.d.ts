type Plus = {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
};
/**
 * Adds two numbers.
 * @param a - Left addend.
 * @param b - Right addend.
 * @returns Sum `a + b`.
 *
 * @example
 * plus(2)(3) // 5
 */
declare const plusCurried: Plus;
export default plusCurried;
//# sourceMappingURL=plus.d.ts.map