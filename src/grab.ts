/**
 * Picks a subset of keys from an object or each object in an array.
 * @param data - Source object or array of objects.
 * @param props - Keys to keep.
 * @returns A partial object (or array of partial objects) containing only `props`.
 *
 * @example
 * grab(['id', 'name'], [{ id: 1, name: 'Ada', admin: true }])
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
  <K extends PropertyKey>(
    props: readonly K[]
  ): {
    <T extends Record<K, any>>(data: T): Partial<Pick<T, K>>
    <T extends Record<K, any>>(data: T[]): Array<Partial<Pick<T, K>>>
  }
}

function grabImpl<T, K extends keyof T>(data: T[], props: readonly K[]): Array<Partial<Pick<T, K>>>
function grabImpl<T, K extends keyof T>(data: T, props: readonly K[]): Partial<Pick<T, K>>

function grabImpl(
  data: Record<PropertyKey, any> | Array<Record<PropertyKey, any>>,
  props: readonly PropertyKey[]
) {
  if (Array.isArray(data)) {
    return data.map((item) => grabFromOne(item, props))
  }

  return grabFromOne(data, props)
}

const grab = /*#__PURE__*/ curryRight(grabImpl) as Grab

export default grab
