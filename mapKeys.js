import curryRight from './curryRight'

const mapKeys = (obj, fn) => {
  const keys = Object.keys(obj)
  const newObj = {}
  keys.forEach(k => {
    newObj[fn(k)] = obj[k]
  })
  return newObj
}

export default curryRight(mapKeys)
