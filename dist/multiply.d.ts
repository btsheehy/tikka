type Multiply = {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
};
/**
 * Multiplies two numbers.
 * @param a - Left factor.
 * @param b - Right factor.
 * @returns Product `a * b`.
 *
 * @example
 * multiply(6, 7) // 42
 */
declare const multiplyCurried: Multiply;
export default multiplyCurried;
//# sourceMappingURL=multiply.d.ts.map