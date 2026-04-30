type And = {
    (a: any, b: any): boolean;
    (a: any): (b: any) => boolean;
};
/**
 * Returns `true` when both values are truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if both operands are truthy, otherwise `false`.
 *
 * @example
 * and(user.isActive, user.isVerified)
 */
declare const andCurried: And;
export default andCurried;
//# sourceMappingURL=and.d.ts.map