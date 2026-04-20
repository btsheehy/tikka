/**
 * forEach utility function.
 */
import curryRight from './curryRight'

const forEach = <T>(arr: T[], func: (x: T) => unknown) => {
  arr.forEach((val) => {
    func(val)
  })
  return arr
}

export default /*#__PURE__*/ curryRight(forEach)
