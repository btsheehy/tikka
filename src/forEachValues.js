import curryRight from './curryRight'

const forEachValues = (obj, fn) => {
  const keys = Object.keys(obj)
  keys.forEach(k => {
    fn(obj[k])
  })
  return obj
}

export default curryRight(forEachValues)
