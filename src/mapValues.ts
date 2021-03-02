import curryRight from './curryRight'

const mapValues = <T, K extends keyof T>(
  obj: T,
  fn: (x: any) => any
): Record<K, any> => {
  const keys = Object.keys(obj) as K[]
  const newObj: Partial<Record<K, any>> = {}
  keys.forEach(k => {
    newObj[k] = fn(obj[k])
  })
  return newObj as Record<K, any>
}

export default curryRight(mapValues)
