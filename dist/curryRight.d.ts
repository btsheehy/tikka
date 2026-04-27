/**
 * Right-to-left curry helper.
 *
 * @example
 * curryRight((a,b)=>a/b)(2,8) // 4
 * @param fn - Input value for fn.
 * @param b - Input value for b.
 * @returns The computed result.
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