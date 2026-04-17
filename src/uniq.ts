const uniq = <T>(arr: T[]): T[] =>
  arr.reduce<T[]>((acc, val) => (acc.includes(val) ? acc : acc.concat(val)), [])

export default uniq
