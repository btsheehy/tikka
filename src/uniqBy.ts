import curryRight from './curryRight'

/**
 * Returns unique items by computed key.
 *
 * @example
 * uniqBy((x)=>x.id, [{id:1},{id:1},{id:2}])
 */
const uniqBy = <T, U>(arr: T[], uniqCond: (x: T) => U): T[] => {
  const uniqResult = arr.reduce<{ uniqBy: U[]; newArr: T[] }>(
    (acc, val) => {
      const uniqByVal = uniqCond(val)
      const isUnique = !acc.uniqBy.includes(uniqByVal)

      if (isUnique) {
        acc.newArr.push(val)
        acc.uniqBy.push(uniqByVal)
      }

      return acc
    },
    { uniqBy: [], newArr: [] }
  )

  return uniqResult.newArr
}

export default /*#__PURE__*/ curryRight(uniqBy)
