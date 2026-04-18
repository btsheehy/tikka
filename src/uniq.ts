const uniq = <T>(arr: T[]): T[] =>
  arr.reduce<T[]>((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val)
    }
    return acc
  }, [])

export default uniq
