// TODO: Needs work
import curryRight from './curryRight'

const ifElse = (test: () => boolean, onTrue: Function, onFalse: Function) => {
  const trueOrFalse = test()
  if (trueOrFalse) return onTrue()
  return onFalse()
}

export default curryRight(ifElse)
