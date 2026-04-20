/**
 * Returns internal type label (for example: `Array`, `Object`, `Null`, `Undefined`).
 */
const type = (val: any): string => {
  if (val === null) return 'Null'
  if (val === undefined) return 'Undefined'
  return Object.prototype.toString.call(val).slice(8, -1)
}

export default type
