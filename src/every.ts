import curryRight from './curryRight'

const every = <T>(arr: Array<T>, test: (x: T) => boolean) => {
  let allPass = true
  let i = 0
  let length = arr.length
  while (i < length) {
    const passes = test(arr[i])
    allPass = passes
    if (!passes) break
    i++
  }

  return allPass
}

export default curryRight(every)
