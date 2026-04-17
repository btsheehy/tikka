import curryRight from './curryRight'

const filter = <T>(arr: Array<T>, filterFunc: (x: T) => boolean) =>
  arr.filter((val) => filterFunc(val))

export default /*#__PURE__*/ curryRight(filter, filter.length)
