type Or = {
    (a: any, b: any): boolean;
    (a: any): (b: any) => boolean;
};
/**
 * Returns `true` when either value is truthy.
 * @param a - Left operand to evaluate.
 * @param b - Right operand to evaluate.
 * @returns `true` if at least one operand is truthy.
 *
 * @example
 * or(user.isAdmin, user.isOwner)
 */
declare const orCurried: Or;
export default orCurried;
//# sourceMappingURL=or.d.ts.map