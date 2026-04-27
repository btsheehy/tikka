/**
 * Returns a normalized runtime type label.
 * @param val - Value to inspect.
 * @returns `'Null'`, `'Undefined'`, or the internal tag (for example `'Array'`, `'Date'`).
 *
 * @example
 * type([1, 2, 3]) // 'Array'
 */
const type = (val: any): string => {
  if (val === null) return 'Null'
  if (val === undefined) return 'Undefined'
  return Object.prototype.toString.call(val).slice(8, -1)
}

export default type
