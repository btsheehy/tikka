const type = val => {
  if (val === null) return 'Null'
  if (val === undefined) return 'Undefined'
  return Object.prototype.toString.call(val).slice(8, -1)
}

export default type
