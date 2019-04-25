import curryRight from './curryRight'

const mapValues = (obj, fn) => {
  const keys = Object.keys(obj)
  keys.forEach(k => {
    obj[k] = fn(obj[k])
  })
  return obj
}

export default curryRight(mapValues)
