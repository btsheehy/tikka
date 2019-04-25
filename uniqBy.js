import curryRight from './curryRight'

const uniqBy = (arr, uniqCond) => {
  const uniqFn = arrayItem => {
    if (typeof uniqCond === 'function') return uniqCond
    if (typeof uniqCond === 'string') {
      return arrayItem[uniqCond]
    }
  }
  const uniqResult = arr.reduce(
    (acc, val) => {
      const uniqByVal = uniqFn(val)
      const isUnique = !acc.uniqBy.contains(uniqByVal)
      return {
        newArr: isUnique ? acc.newArr.concat(val) : acc.newArr,
        uniqBy: isUnique ? acc.uniqBy.concat(uniqByVal) : acc.uniqBy,
      }
    },
    { uniqBy: [], newArr: [] }
  )
  return uniqResult.newArr
}

return curryRight(uniqBy)
