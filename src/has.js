import curryRight from './curryRight'

const has = (obj, prop) => obj.hasOwnProperty(prop)

export default curryRight(has)
