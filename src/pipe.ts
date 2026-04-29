/**
 * Composes functions left-to-right.
 * @param fns - Functions to run in sequence; each result feeds the next function.
 * @returns A function that executes the pipeline, or identity when no functions are provided.
 *
 * @example
 * const normalize = pipe(trim, toLower)
 * normalize('  Hello  ') // 'hello'
 */

type AnyFn = (...args: any[]) => any

// Overloads: explicit arities enable contextual type inference through generic fns
function pipe(): <T>(value: T) => T
function pipe<A extends any[], B>(f1: (...args: A) => B): (...args: A) => B
function pipe<A extends any[], B, C>(f1: (...args: A) => B, f2: (b: B) => C): (...args: A) => C
function pipe<A extends any[], B, C, D>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D
): (...args: A) => D
function pipe<A extends any[], B, C, D, E>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E
): (...args: A) => E
function pipe<A extends any[], B, C, D, E, F>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F
): (...args: A) => F
function pipe<A extends any[], B, C, D, E, F, G>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F,
  f6: (f: F) => G
): (...args: A) => G
function pipe<A extends any[], B, C, D, E, F, G, H>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F,
  f6: (f: F) => G,
  f7: (g: G) => H
): (...args: A) => H
function pipe<A extends any[], B, C, D, E, F, G, H, I>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F,
  f6: (f: F) => G,
  f7: (g: G) => H,
  f8: (h: H) => I
): (...args: A) => I
function pipe<A extends any[], B, C, D, E, F, G, H, I, J>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F,
  f6: (f: F) => G,
  f7: (g: G) => H,
  f8: (h: H) => I,
  f9: (i: I) => J
): (...args: A) => J
function pipe<A extends any[], B, C, D, E, F, G, H, I, J, K>(
  f1: (...args: A) => B,
  f2: (b: B) => C,
  f3: (c: C) => D,
  f4: (d: D) => E,
  f5: (e: E) => F,
  f6: (f: F) => G,
  f7: (g: G) => H,
  f8: (h: H) => I,
  f9: (i: I) => J,
  f10: (j: J) => K
): (...args: A) => K
// Fallback: more than 10 functions — no strict type checking beyond the 10th
function pipe(...fns: AnyFn[]): AnyFn
function pipe(...fns: AnyFn[]) {
  if (fns.length === 0) {
    return <T>(value: T) => value
  }

  return (...args: unknown[]) => {
    let index = 1
    let acc = fns[0](...args)

    while (index < fns.length) {
      acc = fns[index](acc)
      index += 1
    }

    return acc
  }
}

export default pipe
