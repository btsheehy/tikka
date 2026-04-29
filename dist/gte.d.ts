type Gte = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `>=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is greater than or equal to `a`.
 *
 * @example
 * gte(10)(10) // true
 * get(12)(9) // false
 */
declare const gteCurried: Gte;
export default gteCurried;
//# sourceMappingURL=gte.d.ts.map