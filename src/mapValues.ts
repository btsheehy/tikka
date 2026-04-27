/**
 * Transforms object values while preserving keys.
 * @param obj - Object whose values will be mapped.
 * @param fn - Mapper run for each value.
 * @returns A new object with the same keys and mapped values.
 *
 * @example
 * mapValues((n) => n * 10, { a: 1, b: 2 }) // { a: 10, b: 20 }
 */
import curryRight from './curryRight'

const mapValues = <T extends Record<string, any>, R>(
  obj: T,
  fn: (x: T[keyof T]) => R
): Record<keyof T, R> => {
  const keys = Object.keys(obj) as Array<keyof T>
  const newObj: Partial<Record<keyof T, R>> = {}

  for (const key of keys) {
    newObj[key] = fn(obj[key])
  }

  return newObj as Record<keyof T, R>
}

type MapValues = {
  <T extends Record<string, any>, R>(fn: (x: T[keyof T]) => R, obj: T): Record<keyof T, R>
  <T extends Record<string, any>, R>(
    fn: (x: T[keyof T]) => R
  ): (obj: T) => Record<keyof T, R>
}

const mapValuesCurried = /*#__PURE__*/ curryRight(mapValues) as MapValues

export default mapValuesCurried
