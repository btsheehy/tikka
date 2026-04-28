type Lte = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `<=`.
 * @param a - Left numeric operand.
 * @param b - Right numeric operand.
 * @returns `true` when `a` is less than or equal to `b`.
 *
 * @example
 * lte(5, 5) // true
 */
declare const lteCurried: Lte;
export default lteCurried;
//# sourceMappingURL=lte.d.ts.map