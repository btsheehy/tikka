import curryRight from './curryRight'

const uniqBy = <T, U>(arr: T[], uniqCond: (x: T) => U): T[] => {
  const uniqResult = arr.reduce<{ uniqBy: U[]; newArr: T[] }>(
    (acc, val) => {
      const uniqByVal = uniqCond(val)
      const isUnique = !acc.uniqBy.includes(uniqByVal)
      return {
        newArr: isUnique ? acc.newArr.concat(val) : acc.newArr,
        uniqBy: isUnique ? acc.uniqBy.concat(uniqByVal) : acc.uniqBy,
      }
    },
    { uniqBy: [], newArr: [] }
  )

  return uniqResult.newArr
}

export default /*#__PURE__*/ curryRight(uniqBy)
