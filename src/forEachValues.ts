import curryRight from './curryRight'

/**
 * Runs `func` for each object value and returns original object.
 */
const forEachValues = (obj: {}, fn: (x: any) => any) => {
  Object.entries(obj).forEach(([_key, value]) => {
    fn(value)
  })
  return obj
}

export default /*#__PURE__*/ curryRight(forEachValues)
