/**
 * Curries a function from right to left.
 * @param fn - Function to curry.
 * @param arity - Optional number of arguments required before invoking `fn`.
 * @returns A function that collects arguments from the rightmost parameter first.
 *
 * @example
 * const divide = curryRight((a: number, b: number) => a / b)
 * divide(2, 8) // 4
 */
type CurryRight2<A, B, R> = {
    (b: B, a: A, ...extra: unknown[]): R;
    (b: B): (a: A, ...extra: unknown[]) => R;
};
type CurryRight3<A, B, C, R> = {
    (c: C, b: B, a: A, ...extra: unknown[]): R;
    (c: C, b: B): (a: A, ...extra: unknown[]) => R;
    (c: C): {
        (b: B, a: A, ...extra: unknown[]): R;
        (b: B): (a: A, ...extra: unknown[]) => R;
    };
};
declare function curryRight<A, B, R>(fn: (a: A, b: B) => R, arity?: number): CurryRight2<A, B, R>;
declare function curryRight<A, B, C, R>(fn: (a: A, b: B, c: C) => R, arity?: number): CurryRight3<A, B, C, R>;
export default curryRight;
//# sourceMappingURL=curryRight.d.ts.map