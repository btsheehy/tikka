import curryRight from './curryRight'
import map from './map'
import get from './get'

const pluck = <T, K extends keyof T>(collection: T[], prop: K): T[K][] =>
  map(get(prop), collection)

export default curryRight(pluck)
