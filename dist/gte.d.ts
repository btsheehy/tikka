type Gte = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `>=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is greater than or equal to `b`.
 *
 * @example
 * gte(10, 10) // true
 */
declare const gteCurried: Gte;
export default gteCurried;
//# sourceMappingURL=gte.d.ts.map