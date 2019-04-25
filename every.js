import curryRight from './curryRight'

const every = (arr, test) => {
  let allPass = true
  let i = 0
  while (i <= arr.length) {
    const passes = test(val)
    allPass = passes
    if (!passes) break
  }

  return allPass
}

export default curryRight(every)
