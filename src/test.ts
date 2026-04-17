import curryRight from './curryRight'

const test = (str: string, regex: RegExp) => regex.test(str)

export default /*#__PURE__*/ curryRight(test)
