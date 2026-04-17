import curryRight from './curryRight'

const debug = <T>(value: T, msg: string): T => {
  console.log(msg)
  console.log(value)
  return value
}

export default /*#__PURE__*/ curryRight(debug)
