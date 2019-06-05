// TODO: Needs work
import curryRight from './curryRight'

const ifElse = (test, onTrue, onFalse) => {
  const trueOrFalse = test()
  if (trueOrFalse) return onTrue()
  return onFalse()
}

export default curryRight(ifElse)
