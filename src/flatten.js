const flatten = arr => {
  let result = []
  const flat = val => {
    if (!Array.isArray(val)) result.push(val)
    else {
      let i = 0
      const length = val.length
      while (i < length) {
        if (Array.isArray(val[i])) val[i].forEach(flat)
        else result.push(val[i])
        i++
      }
    }
  }
  flat(arr)
  return result
}

export default flatten
