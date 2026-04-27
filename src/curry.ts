/**
 * Curries a function from left to right.
 * @param fn - Function to curry.
 * @param arity - Optional number of arguments required before invoking `fn`.
 * @returns A function that accepts arguments incrementally, left-to-right.
 *
 * @example
 * const add = curry((a: number, b: number) => a + b)
 * add(2)(3) // 5
 */
type Curry2<A, B, R> = {
  (a: A, b: B, ...extra: unknown[]): R
  (a: A): (b: B, ...extra: unknown[]) => R
}

type Curry3<A, B, C, R> = {
  (a: A, b: B, c: C, ...extra: unknown[]): R
  (a: A, b: B): (c: C, ...extra: unknown[]) => R
  (
    a: A
  ): {
    (b: B, c: C, ...extra: unknown[]): R
    (b: B): (c: C, ...extra: unknown[]) => R
  }
}

function curry<A, B, R>(fn: (a: A, b: B) => R, arity?: number): Curry2<A, B, R>
function curry<A, B, C, R>(fn: (a: A, b: B, c: C) => R, arity?: number): Curry3<A, B, C, R>
function curry(fn: Function, arity = fn.length): Function {
  const warnTooManyArguments = () => {
    console.warn('Too many arguments passed to curried func.')
  }

  if (arity === 1) {
    return function f1(a: unknown) {
      switch (arguments.length) {
        case 0:
          return f1
        case 1:
          return fn(a)
        default:
          warnTooManyArguments()
          return fn(a)
      }
    }
  }

  if (arity === 2) {
    return function f2(a: unknown, b: unknown) {
      switch (arguments.length) {
        case 0:
          return f2
        case 1:
          return function f1(nextB: unknown) {
            switch (arguments.length) {
              case 0:
                return f1
              case 1:
                return fn(a, nextB)
              default:
                warnTooManyArguments()
                return fn(a, nextB)
            }
          }
        case 2:
          return fn(a, b)
        default:
          warnTooManyArguments()
          return fn(a, b)
      }
    }
  }

  if (arity === 3) {
    return function f3(a: unknown, b: unknown, c: unknown) {
      switch (arguments.length) {
        case 0:
          return f3
        case 1:
          return function f3_1(nextB: unknown, nextC: unknown) {
            switch (arguments.length) {
              case 0:
                return f3_1
              case 1:
                return function f3_1_1(lastC: unknown) {
                  switch (arguments.length) {
                    case 0:
                      return f3_1_1
                    case 1:
                      return fn(a, nextB, lastC)
                    default:
                      warnTooManyArguments()
                      return fn(a, nextB, lastC)
                  }
                }
              case 2:
                return fn(a, nextB, nextC)
              default:
                warnTooManyArguments()
                return fn(a, nextB, nextC)
            }
          }
        case 2:
          return function f3_2(nextC: unknown) {
            switch (arguments.length) {
              case 0:
                return f3_2
              case 1:
                return fn(a, b, nextC)
              default:
                warnTooManyArguments()
                return fn(a, b, nextC)
            }
          }
        case 3:
          return fn(a, b, c)
        default:
          warnTooManyArguments()
          return fn(a, b, c)
      }
    }
  }

  const createCurried = (existingArgs: unknown[]): Function => {
    return function curried(...args: unknown[]) {
      if (args.length === 0) {
        return curried
      }

      const totalLength = existingArgs.length + args.length

      if (totalLength >= arity) {
        if (totalLength > arity) {
          warnTooManyArguments()
        }

        const finalArgs = new Array(arity)
        let i = 0

        while (i < existingArgs.length && i < arity) {
          finalArgs[i] = existingArgs[i]
          i += 1
        }

        let j = 0
        while (i < arity) {
          finalArgs[i] = args[j]
          i += 1
          j += 1
        }

        return fn(...finalArgs)
      }

      const nextArgs = new Array(totalLength)
      let i = 0

      while (i < existingArgs.length) {
        nextArgs[i] = existingArgs[i]
        i += 1
      }

      let j = 0
      while (j < args.length) {
        nextArgs[i + j] = args[j]
        j += 1
      }

      return createCurried(nextArgs)
    }
  }

  return createCurried([])
}

export default curry
