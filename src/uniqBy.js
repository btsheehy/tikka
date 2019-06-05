import curryRight from './curryRight'

// TODO: implement an equals function to handle
// nested equality checks

const uniqBy = (arr, uniqCond) => {
  const uniqResult = arr.reduce(
    (acc, val) => {
      const uniqByVal = uniqCond(val)
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

export default curryRight(uniqBy)
