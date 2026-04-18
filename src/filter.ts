import curryRight from './curryRight'

const filter = <T>(arr: Array<T>, filterFunc: (x: T) => boolean) => {
  const result: T[] = []
  let index = 0

  while (index < arr.length) {
    const value = arr[index]
    if (filterFunc(value)) {
      result.push(value)
    }
    index += 1
  }

  return result
}

export default /*#__PURE__*/ curryRight(filter, filter.length)
