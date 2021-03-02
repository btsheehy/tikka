function last<T>(a: T[]): T
function last(a: string): string

function last(arr: any) {
  const l = arr.length
  return arr[l - 1]
}

export default last
