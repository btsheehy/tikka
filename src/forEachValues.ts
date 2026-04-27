import curryRight from './curryRight'

/**
 * Runs `func` for each object value and returns original object.
 * @param obj - Input value for obj.
 * @param fn - Input value for fn.
 * @returns The computed result.
 *
 * @example
 * forEachValues(obj, fn)
 */
const forEachValues = (obj: {}, fn: (x: any) => any) => {
  Object.entries(obj).forEach(([_key, value]) => {
    fn(value)
  })
  return obj
}

export default /*#__PURE__*/ curryRight(forEachValues)
