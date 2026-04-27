/**
 * Runs `test()`, then executes `onTrue()` or `onFalse()`.
 * @param test - Input value for test.
 * @returns The computed result.
 *
 * @example
 * ifElse(test)
 */
// TODO: Needs work
import curryRight from './curryRight'

const ifElse = (test: () => boolean, onTrue: Function, onFalse: Function) => {
  const trueOrFalse = test()
  if (trueOrFalse) return onTrue()
  return onFalse()
}

export default /*#__PURE__*/ curryRight(ifElse)
