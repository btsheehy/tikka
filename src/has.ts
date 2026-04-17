import curryRight from './curryRight'

const has = (obj: {}, prop: string) => Object.hasOwn(obj, prop)

export default curryRight(has)
