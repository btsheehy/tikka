import curryRight from './curryRight'

const get = <T, K extends keyof T>(object: T, property: K) => object[property]

export default curryRight(get)
