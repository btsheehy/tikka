import curryRight from './curryRight'

const has = (obj: {}, prop: string) => obj.hasOwnProperty(prop)

export default curryRight(has)
