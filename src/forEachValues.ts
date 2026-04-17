import curryRight from './curryRight'

const forEachValues = (obj: {}, fn: (x: any) => any) => {
  Object.entries(obj).forEach(([_key, value]) => {
    fn(value)
  })
  return obj
}

export default /*#__PURE__*/ curryRight(forEachValues)
