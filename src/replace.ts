import curryRight from './curryRight'
import identical from './identical'
import map from './map'

type Replacement<T, U> = string | (((item: T) => U) | U)
type Target<T> = string | T[]

type Replace = {
  <T, U>(targetArray: T[], replacee: T, replacement: U): (T | U)[]
  <T, U>(targetArray: T[], replacee: T, replacement: (item: T) => U): (T | U)[]
  <T, U>(targetArray: T[], replacee: (arg0: T) => boolean, replacement: U): (T | U)[]
  <T, U>(targetArray: T[], replacee: (arg0: T) => boolean, replacement: (item: T) => U): (T | U)[]
  (targetString: string, substring: string, replacement: string): string
  (targetString: string, regex: RegExp, replacement: string): string
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

export default /*#__PURE__*/ curryRight(replace)
