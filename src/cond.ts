import curry from './curry'

type CondPair<T, P> = [(args: P) => boolean, T]
type CondArgs<T, P> = [...CondPair<T, P>[], T]

const cond = <T, P>(args: CondArgs<T, P>, predicateArg: P): T => {
  const defaultValue = args[args.length - 1] as T
  const pairs = args.slice(0, -1) as CondPair<T, P>[]

  for (const [predicate, value] of pairs) {
    if (predicate(predicateArg)) return value
  }

  return defaultValue
}

export default /*#__PURE__*/ curry(cond)
