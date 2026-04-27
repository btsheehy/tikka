const reverse = <T>(v: T[] | string) => {
  if (Array.isArray(v)) {
    const newArr = []
    let i = v.length - 1
    while (i >= 0) {
      newArr.push(v[i])
      i--
    }
    return newArr
  }
  let newStr = ''
  let i = v.length - 1
  while (i >= 0) {
    newStr += v[i]
    i--
  }
  return newStr
}

export default reverse
