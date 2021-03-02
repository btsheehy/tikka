import curryRight from './curryRight'
import map from './map'
import get from './get'

const pluck = <T, K extends keyof T>(collection: T[], prop: K): any[] =>
  map(get(prop), collection)

export default curryRight(pluck)
