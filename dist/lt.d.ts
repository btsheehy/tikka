type Lt = {
    (a: number, b: number): boolean;
    (a: number): (b: number) => boolean;
};
/**
 * Compares numbers with `<`.
 * @param a - Right numeric operand.
 * @param b - Left numeric operand.
 * @returns `true` when `b` is less than `a`.
 *
 * @example
 * lt(2)(5) // false
 */
declare const ltCurried: Lt;
export default ltCurried;
//# sourceMappingURL=lt.d.ts.map