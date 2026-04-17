import curryRight from './curryRight'

const minus = (a: number, b: number) => a - b

export default /*#__PURE__*/ curryRight(minus)
