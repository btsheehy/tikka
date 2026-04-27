/**
 * curry utility function.
 * @param fn - Input value for fn.
 * @param b - Input value for b.
 * @returns The computed result.
 *
 * @example
 * curry(fn, b)
 */
type Curry2<A, B, R> = {
    (a: A, b: B, ...extra: unknown[]): R;
    (a: A): (b: B, ...extra: unknown[]) => R;
};
type Curry3<A, B, C, R> = {
    (a: A, b: B, c: C, ...extra: unknown[]): R;
    (a: A, b: B): (c: C, ...extra: unknown[]) => R;
    (a: A): {
        (b: B, c: C, ...extra: unknown[]): R;
        (b: B): (c: C, ...extra: unknown[]) => R;
    };
};
declare function curry<A, B, R>(fn: (a: A, b: B) => R, arity?: number): Curry2<A, B, R>;
declare function curry<A, B, C, R>(fn: (a: A, b: B, c: C) => R, arity?: number): Curry3<A, B, C, R>;
export default curry;
//# sourceMappingURL=curry.d.ts.map