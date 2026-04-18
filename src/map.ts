import curryRight from './curryRight'

const map = <T, R>(arr: T[], fn: (x: T) => R): R[] => {
  const result = new Array<R>(arr.length)
  let index = 0

  while (index < arr.length) {
    result[index] = fn(arr[index])
    index += 1
  }

  return result
}

export default /*#__PURE__*/ curryRight(map)
