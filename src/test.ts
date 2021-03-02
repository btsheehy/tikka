import curryRight from './curryRight'

const test = (str: string, regex: RegExp) => regex.test(str)

export default curryRight(test)
