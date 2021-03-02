import curryRight from './curryRight'

const forEachValues = (obj: {}, fn: (x: any) => any) => {
  Object.entries(obj).forEach(([key, value]) => {
    fn(value)
  })
  return obj
}

export default curryRight(forEachValues)
