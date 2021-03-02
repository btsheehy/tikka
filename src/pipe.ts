const pipe = (...fns: Function[]) => (val: any) =>
  fns.reduce((acc, fn) => fn(acc), val)

export default pipe
