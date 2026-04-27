import {

/**
 * Data-first wrappers for the data-last functional core APIs.
 *
 * @example
 * _get({ a: 1 }, 'a') // 1
 */
  and,
  any,
  compact,
  coalesce,
  concat,
  contains,
  countBy,
  countWhere,
  curry,
  curryRight,
  debug,
  deepClone,
  sort,
  deepForEach,
  deepMap,
  every,
  filter,
  find,
  findIndex,
  first,
  flatten,
  forEach,
  forEachValues,
  get,
  getOr,
  grab,
  groupBy,
  gt,
  gte,
  has,
  head,
  identity,
  ifElse,
  includes,
  isEven,
  isOdd,
  last,
  lt,
  lte,
  map,
  mapKeys,
  mapValues,
  minus,
  noop,
  or,
  pipe,
  placeholder,
  pluck,
  plus,
  select,
  self,
  slice,
  sortBy,
  split,
  startsWith,
  endsWith,
  tail,
  take,
  test,
  toLower,
  toUpper,
  trim,
  type,
  uniq,
  uniqBy
} from './index'

/**
 * Creates a data-first wrapper by moving the final argument to the front.
 *
 * This is intended for ergonomic imperative usage where the data value is
 * supplied first (for example `_get(obj, 'key')`) while preserving the
 * existing data-last functional core implementation.
 */
const dataFirst = <T extends (...args: any[]) => any>(fn: T) => {
  return (data: any, ...args: any[]) => {
    return fn(...args, data)
  }
}

export const _and = dataFirst(and)
export const _any = dataFirst(any)
export const _compact = dataFirst(compact)
export const _coalesce = dataFirst(coalesce)
export const _concat = dataFirst(concat)
export const _contains = dataFirst(contains)
export const _countBy = dataFirst(countBy)
export const _countWhere = dataFirst(countWhere)
export const _curry = dataFirst(curry)
export const _curryRight = dataFirst(curryRight)
export const _debug = dataFirst(debug)
export const _deepClone = dataFirst(deepClone)
export const _sort = dataFirst(sort)
export const _deepForEach = dataFirst(deepForEach)
export const _deepMap = dataFirst(deepMap)
export const _every = dataFirst(every)
export const _filter = dataFirst(filter)
export const _find = dataFirst(find)
export const _findIndex = dataFirst(findIndex)
export const _first = dataFirst(first)
export const _flatten = dataFirst(flatten)
export const _forEach = dataFirst(forEach)
export const _forEachValues = dataFirst(forEachValues)
export const _get = dataFirst(get)
export const _getOr = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  prop: K,
  defaultValue: unknown
) => getOr(defaultValue, prop, obj)
export const _grab = dataFirst(grab)
export const _groupBy = dataFirst(groupBy)
export const _gt = dataFirst(gt)
export const _gte = dataFirst(gte)
export const _has = dataFirst(has)
export const _head = dataFirst(head)
export const _identity = dataFirst(identity)
export const _ifElse = dataFirst(ifElse)
export const _includes = dataFirst(includes)
export const _isEven = dataFirst(isEven)
export const _isOdd = dataFirst(isOdd)
export const _last = dataFirst(last)
export const _lt = dataFirst(lt)
export const _lte = dataFirst(lte)
export const _map = dataFirst(map)
export const _mapKeys = dataFirst(mapKeys)
export const _mapValues = dataFirst(mapValues)
export const _minus = dataFirst(minus)
export const _noop = dataFirst(noop)
export const _or = dataFirst(or)
export const _pipe = dataFirst(pipe)
export const _placeholder = placeholder
export const _pluck = dataFirst(pluck)
export const _plus = dataFirst(plus)
export const _select = dataFirst(select)
export const _self = dataFirst(self)
export const _slice = dataFirst(slice)
export const _sortBy = dataFirst(sortBy)
export const _split = dataFirst(split)
export const _startsWith = dataFirst(startsWith)
export const _endsWith = dataFirst(endsWith)
export const _tail = dataFirst(tail)
export const _take = dataFirst(take)
export const _test = dataFirst(test)
export const _toLower = dataFirst(toLower)
export const _toUpper = dataFirst(toUpper)
export const _trim = dataFirst(trim)
export const _type = dataFirst(type)
export const _uniq = dataFirst(uniq)
export const _uniqBy = dataFirst(uniqBy)
