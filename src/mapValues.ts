import curryRight from './curryRight'

const mapValues = <T, K extends keyof T, R>(
  obj: T,
  fn: (x: T[K]) => R
): Record<K, R> => {
  const keys = Object.keys(obj) as K[]
  const newObj: Partial<Record<K, any>> = {}
  keys.forEach((k) => {
    newObj[k] = fn(obj[k])
  })
  return newObj as Record<K, R>
}

export default curryRight(mapValues)
