/**
 * Curries a function from left to right.
 * @param fn - Function to curry.
 * @param arity - Optional number of arguments required before invoking `fn`.
 * @returns A function that accepts arguments incrementally, left-to-right.
 *
 * @example
 * const add = curry((a: number, b: number) => a + b)
 * add(2)(3) // 5
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