type Lte = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `<=`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than or equal to `a`.
 *
 * @example
 * lte(5)(5) // true
 * lte(9)(2) // true
 */
declare const lteCurried: Lte;
export default lteCurried;
//# sourceMappingURL=lte.d.ts.map