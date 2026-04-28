import curryRight from './curryRight'
import identical from './identical'
import map from './map'

type Replacement<T, U> = string | (((item: T) => U) | U)
type Target<T> = string | T[]

type Replace = {
  <T, U>(replacement: U, replacee: T, targetArray: T[]): (T | U)[]
  <T, U>(replacement: (item: T) => U, replacee: T, targetArray: T[]): (T | U)[]
  <T, U>(replacement: U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[]
  <T, U>(replacement: (item: T) => U, replacee: (arg0: T) => boolean, targetArray: T[]): (T | U)[]
  (replacement: string, substring: string, targetString: string): string
  (replacement: string, regex: RegExp, targetString: string): string
}

const replace = (<T, U>(
  target: Target<T>,
  replacee: T | string | RegExp | ((arg0: T) => boolean),
  replacement: Replacement<T, U>
) => {
  if (Array.isArray(target)) {
    const replacementFunc = (
      typeof replacement === 'function' ? replacement : () => replacement
    ) as (v: T) => U
    const replacementTestFunc = (
      typeof replacee === 'function' ? replacee : identical(replacee)
    ) as (v: T) => boolean
    const replaceFunc = (val: T) => {
      if (replacementTestFunc(val)) return replacementFunc(val)
      return val
    }
    return map(replaceFunc, target as T[]) as (T | U)[]
  }
  return (target as string).replaceAll(replacee as string | RegExp, replacement as string)
}) as unknown as Replace

/**
 * Replaces values in an array or substrings in a string.
 *
 * For arrays, `replacee` can be either an exact value or a predicate function.
 * `replacement` can be a static value or a mapper function.
 *
 * For strings, this delegates to `String.prototype.replaceAll`.
 *
 * Note: the exported function is curried with `curryRight`, so it is typically called as
 * `replace(replacement, replacee, target)`.
 *
 * @param target - The string or array to transform.
 * @param replacee - The value/predicate (for arrays) or substring/regex (for strings) to match.
 * @param replacement - The replacement value/function (arrays) or replacement string (strings).
 * @returns A new array/string with all matches replaced.
 *
 * @example
 * replace(9, 2, [1, 2, 3, 2]) // [1, 9, 3, 9]
 *
 * @example
 * replace('baz', 'foo', 'foo-bar-foo') // 'baz-bar-baz'
 */
const replaceCurried = /*#__PURE__*/ curryRight(
  replace as unknown as (...args: unknown[]) => unknown
) as Replace

export default replaceCurried
