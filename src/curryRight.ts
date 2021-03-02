function curryRight<T1, T2, R>(
  fn: (a: T1, b: T2) => R,
  arity?: number
): (b: T2, a: T1) => R

function curryRight<T1, T2, T3, R>(
  fn: (a: T1, b: T2, c: T3) => R,
  arity?: number
): (c: T3, b: T2, a: T1) => R

function curryRight(fn: Function, arity = fn.length): Function {
  const createCachedFunc = (
    fn: Function,
    arity: number,
    existingArgs: any[] = []
  ) => (...args: any[]) => {
    return (function (fn, arity, existingArgs = []) {
      const newArgs = Array.from(args)
      const currentArgs = existingArgs.concat(newArgs)
      if (currentArgs.length === arity) return fn(...currentArgs.reverse())
      if (currentArgs.length > arity)
        console.warn('Too many arguments passed to curried func.')
      return createCachedFunc(fn, arity, currentArgs)
    })(fn, arity, existingArgs)
  }
  return createCachedFunc(fn, arity)
}

export default curryRight
