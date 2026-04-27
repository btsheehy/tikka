import curryRight from './curryRight'

/**
 * Runs a callback for each own enumerable value in an object.
 * @param obj - Object whose values will be visited.
 * @param fn - Callback invoked for each value.
 * @returns The original `obj`.
 *
 * @example
 * forEachValues((value) => console.log(value), { a: 1, b: 2 })
 */
const forEachValues = (obj: {}, fn: (x: any) => any) => {
  Object.entries(obj).forEach(([_key, value]) => {
    fn(value)
  })
  return obj
}

export default /*#__PURE__*/ curryRight(forEachValues)
