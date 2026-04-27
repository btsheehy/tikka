/**
 * grab utility function.
 * @param obj - Input value for obj.
 * @param props - Input value for props.
 * @returns The computed result.
 *
 * @example
 * grabFromOne(obj, props)
 */
import curryRight from './curryRight'
import get from './get'

const grabFromOne = <T, K extends keyof T>(obj: T, props: readonly K[]): Partial<Pick<T, K>> => {
  const result: Partial<Pick<T, K>> = {}

  return props.reduce((acc, p) => {
    acc[p] = get(p, obj)
    return acc
  }, result)
}

type Grab = {
  <T, K extends keyof T>(props: readonly K[], data: T): Partial<Pick<T, K>>
  <T, K extends keyof T>(props: readonly K[], data: T[]): Array<Partial<Pick<T, K>>>
  <K extends PropertyKey>(props: readonly K[]): {
    <T extends Record<K, unknown>>(data: T): Partial<Pick<T, K>>
    <T extends Record<K, unknown>>(data: T[]): Array<Partial<Pick<T, K>>>
  }
}

function grabImpl<T, K extends keyof T>(data: T[], props: readonly K[]): Array<Partial<Pick<T, K>>>
function grabImpl<T, K extends keyof T>(data: T, props: readonly K[]): Partial<Pick<T, K>>

function grabImpl(
  data: Record<PropertyKey, unknown> | Array<Record<PropertyKey, unknown>>,
  props: readonly PropertyKey[]
) {
  if (Array.isArray(data)) {
    return data.map((item) => grabFromOne(item, props))
  }

  return grabFromOne(data, props)
}

const grab = /*#__PURE__*/ curryRight(grabImpl) as Grab

export default grab
