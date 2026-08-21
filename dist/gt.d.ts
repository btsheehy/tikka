type Gt = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `>`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than `a`.
 *
 * @example
 * gt(10)(4) // false
 */
declare const gtCurried: Gt;
export default gtCurried;
//# sourceMappingURL=gt.d.ts.map