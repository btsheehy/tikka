import curryRight from './curryRight'

const debug = (value, msg) => console.log(msg) || console.log(value) || value

export default curryRight(debug)
