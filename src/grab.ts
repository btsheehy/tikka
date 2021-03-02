import curryRight from './curryRight'
import get from './get'

const grabFromOne = <T, K extends keyof T>(obj: T, props: K[]) => {
  const result: Partial<T> = {}
  return props.reduce((acc, p) => {
    acc[p] = get(p, obj)
    return acc
  }, result)
}

function grab<T, K extends keyof T>(data: T[], props: K[]): Partial<T>[]
function grab<T, K extends keyof T>(data: T, props: K[]): Partial<T>

function grab(data: any, props: string[]) {
  if (Array.isArray(data)) return data.map(x => grabFromOne(x, props))
  else return grabFromOne(data, props)
}

export default curryRight(grab)
