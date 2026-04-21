/**
 * mapValues utility function.
 */
import curryRight from './curryRight'

const mapValues = <T extends Record<string, unknown>, R>(
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

export default /*#__PURE__*/ curryRight(mapValues)
