import curryRight from './curryRight'

const identical = (a: unknown, b: unknown) => Object.is(a, b)

export default /*#__PURE__*/ curryRight(identical)
