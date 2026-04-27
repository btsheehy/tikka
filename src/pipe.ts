/**
 * Composes functions left-to-right.
 * @param fns - Functions to run in sequence; each result feeds the next function.
 * @returns A function that executes the pipeline, or identity when no functions are provided.
 *
 * @example
 * const normalize = pipe(trim, toLower)
 * normalize('  Hello  ') // 'hello'
 */
type AnyFn = (...args: any[]) => any

type UnaryFn<Input = any, Output = any> = (input: Input) => Output

type Last<T extends readonly unknown[]> = T extends readonly [...infer _, infer Tail] ? Tail : never

type ValidPipeChain<Fns extends readonly AnyFn[]> = Fns extends readonly [AnyFn]
  ? Fns
  : Fns extends readonly [infer Head, infer Next, ...infer Rest]
    ? Head extends AnyFn
      ? Next extends UnaryFn
        ? ReturnType<Head> extends Parameters<Next>[0]
          ? readonly [Head, ...ValidPipeChain<[Next, ...(Rest extends AnyFn[] ? Rest : never)]>]
          : never
        : never
      : never
    : never

type PipeResult<Fns extends readonly [AnyFn, ...AnyFn[]]> = (
  ...args: Parameters<Fns[0]>
) => ReturnType<Last<Fns> & AnyFn>

function pipe(): <T>(value: T) => T
function pipe<const Fns extends readonly [AnyFn, ...AnyFn[]]>(
  ...fns: ValidPipeChain<Fns> extends never ? never : Fns
): PipeResult<Fns>
function pipe(...fns: AnyFn[]) {
  if (fns.length === 0) {
    return <T>(value: T) => value
  }

  return (...args: unknown[]) => {
    let index = 1
    let acc = fns[0](...args)

    while (index < fns.length) {
      acc = fns[index](acc)
      index += 1
    }

    return acc
  }
}

export default pipe
