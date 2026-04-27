/**
 * Executes one of two callbacks based on a predicate callback.
 * @param test - Function whose boolean result chooses the branch.
 * @param onTrue - Callback invoked when `test()` returns `true`.
 * @param onFalse - Callback invoked when `test()` returns `false`.
 * @returns Result of `onTrue()` or `onFalse()`.
 *
 * @example
 * ifElse(() => env === 'prod', () => 'minified', () => 'debug')
 */
// TODO: Needs work
import curryRight from './curryRight'

const ifElse = (test: () => boolean, onTrue: Function, onFalse: Function) => {
  const trueOrFalse = test()
  if (trueOrFalse) return onTrue()
  return onFalse()
}

export default /*#__PURE__*/ curryRight(ifElse)
