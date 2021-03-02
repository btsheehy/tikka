const curry = (fn: Function, arity = fn.length): Function => {
  const createCachedFunc = (fn: Function, arity: number, existingArgs = []) => (
    ...args
  ) => {
    return (function (fn, arity, existingArgs = []) {
      const newArgs = Array.from(args)
      const currentArgs = existingArgs.concat(newArgs)
      if (currentArgs.length === arity) return fn(...currentArgs)
      if (currentArgs.length > arity)
        console.warn('Too many arguments passed to curried func.')
      return createCachedFunc(fn, arity, currentArgs)
    })(fn, arity, existingArgs)
  }
  return createCachedFunc(fn, arity)
}

export default curry
