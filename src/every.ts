import curryRight from './curryRight'

/**
 * Returns true if all elements pass `test`.
 */
const every = <T>(arr: Array<T>, test: (x: T) => boolean) => {
  let allPass = true
  let i = 0
  const length = arr.length
  while (i < length) {
    const passes = test(arr[i])
    allPass = passes
    if (!passes) break
    i++
  }

  return allPass
}

export default /*#__PURE__*/ curryRight(every)
