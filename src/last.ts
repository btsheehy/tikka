const last = <T>(arr: T[]) => {
  const l = arr.length
  if (!l) return undefined
  else return arr[l - 1]
}

export default last
