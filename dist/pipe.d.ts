/**
 * Composes functions left-to-right.
 * @param fns - Functions to run in sequence; each result feeds the next function.
 * @returns A function that executes the pipeline, or identity when no functions are provided.
 *
 * @example
 * const normalize = pipe(trim, toLower)
 * normalize('  Hello  ') // 'hello'
 */
type AnyFn = (...args: any[]) => any;
declare function pipe(): <T>(value: T) => T;
declare function pipe<A extends any[], B>(f1: (...args: A) => B): (...args: A) => B;
declare function pipe<A extends any[], B, C>(f1: (...args: A) => B, f2: (b: B) => C): (...args: A) => C;
declare function pipe<A extends any[], B, C, D>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D): (...args: A) => D;
declare function pipe<A extends any[], B, C, D, E>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E): (...args: A) => E;
declare function pipe<A extends any[], B, C, D, E, F>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F): (...args: A) => F;
declare function pipe<A extends any[], B, C, D, E, F, G>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F, f6: (f: F) => G): (...args: A) => G;
declare function pipe<A extends any[], B, C, D, E, F, G, H>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F, f6: (f: F) => G, f7: (g: G) => H): (...args: A) => H;
declare function pipe<A extends any[], B, C, D, E, F, G, H, I>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F, f6: (f: F) => G, f7: (g: G) => H, f8: (h: H) => I): (...args: A) => I;
declare function pipe<A extends any[], B, C, D, E, F, G, H, I, J>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F, f6: (f: F) => G, f7: (g: G) => H, f8: (h: H) => I, f9: (i: I) => J): (...args: A) => J;
declare function pipe<A extends any[], B, C, D, E, F, G, H, I, J, K>(f1: (...args: A) => B, f2: (b: B) => C, f3: (c: C) => D, f4: (d: D) => E, f5: (e: E) => F, f6: (f: F) => G, f7: (g: G) => H, f8: (h: H) => I, f9: (i: I) => J, f10: (j: J) => K): (...args: A) => K;
declare function pipe(...fns: AnyFn[]): AnyFn;
export default pipe;
//# sourceMappingURL=pipe.d.ts.map