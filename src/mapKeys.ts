import curryRight from './curryRight'

const mapKeys = <T extends {}, K extends keyof T>(
  obj: T,
  fn: (x: K) => string
) => {
  const keys = Object.keys(obj) as K[]
  const newObj: Record<string, any> = {}
  keys.forEach((k) => {
    newObj[fn(k)] = obj[k]
  })
  return newObj
}

export default curryRight(mapKeys)
