import curryRight from './curryRight'

const get = (object, property) => object[property]

export default curryRight(get)
