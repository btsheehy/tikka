import curryRight from './curryRight'

const test = (str, regex) => regex.test(str)

export default curryRight(test)
