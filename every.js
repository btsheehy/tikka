import curryRight from './curryRight'

const every = (arr, test) => {
  let allPass = true
  let i = 0
  let length = arr.length
  while (i < length) {
    const passes = test(val)
    allPass = passes
    if (!passes) break
    i++
  }

  return allPass
}

export default curryRight(every)
