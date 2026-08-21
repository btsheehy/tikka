type Minus = {
    (b: number, a: number): number;
    (b: number): (a: number) => number;
};
/**
 * Subtracts one number from another.
 * @param a - Minuend.
 * @param b - Subtrahend.
 * @returns Numeric difference `a - b`.
 *
 * @example
 * minus(3, 10) // 7
 */
declare const minusCurried: Minus;
export default minusCurried;
//# sourceMappingURL=minus.d.ts.map