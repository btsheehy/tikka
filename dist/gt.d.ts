type Gt = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `>`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than `b`.
 *
 * @example
 * gt(10, 4) // true
 */
declare const gtCurried: Gt;
export default gtCurried;
//# sourceMappingURL=gt.d.ts.map