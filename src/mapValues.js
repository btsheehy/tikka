import curryRight from './curryRight'

const mapValues = (obj, fn) => {
  const keys = Object.keys(obj)
  const newObj = {}
  keys.forEach(k => {
    newObj[k] = fn(obj[k])
  })
  return newObj
}

export default curryRight(mapValues)
