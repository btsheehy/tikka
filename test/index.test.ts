import { describe, expect, it, vi } from 'vitest'
import {
  and,
  any,
  compact,
  concat,
  contains,
  countWhere,
  curry,
  curryRight,
  debug,
  deepClone,
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
  tail,
  take,
  test,
  toLower,
  toUpper,
  trim,
  type,
  uniq,
  uniqBy,
} from '../src/index'
import tikka from '../src/tikka'

describe('tikka exports', () => {
  it('has a default export object with function members', () => {
    expect(typeof tikka.and).toBe('function')
    expect(typeof tikka.map).toBe('function')
    expect(tikka.placeholder).toBeNull()
  })

  it('and', () => {
    expect(and(true, true)).toBe(true)
    expect(and(true, false)).toBe(false)
  })

  it('any', () => {
    expect(any((x: number) => x > 2, [1, 2, 3])).toBe(true)
    expect(any((x: number) => x > 5, [1, 2, 3])).toBe(false)
  })

  it('compact', () => {
    expect(compact([1, null, 2, undefined, 3])).toEqual([1, 2, 3])
  })

  it('concat', () => {
    expect(concat(3, [1, 2])).toEqual([1, 2, 3])
  })

  it('contains and includes', () => {
    expect(contains(2, [1, 2, 3])).toBe(true)
    expect(includes('b', 'abc')).toBe(true)
  })

  it('countWhere', () => {
    expect(countWhere((x: number) => x % 2 === 0, [1, 2, 3, 4])).toBe(2)
  })

  it('curry', () => {
    const add3 = (a: number, b: number, c: number) => a + b + c
    expect(curry(add3)(1)(2)(3)).toBe(6)
  })

  it('curryRight', () => {
    const divide = (a: number, b: number) => a / b
    expect(curryRight(divide)(2, 8)).toBe(4)
    expect((curryRight(divide) as any)(2)(8)).toBe(4)
  })

  it('debug', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    expect(debug('value', 123)).toBe(123)
    expect(spy).toHaveBeenCalledTimes(2)
    spy.mockRestore()
  })

  it('deepClone', () => {
    const original = { a: 1, b: { c: [2, 3] }, d: /x/g, e: new Date('2020-01-01') }
    const cloned = deepClone(original) as typeof original
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
    expect(cloned.b).not.toBe(original.b)
    expect(cloned.b.c).not.toBe(original.b.c)
  })

  it('deepForEach', () => {
    const seen: unknown[] = []
    deepForEach((value: unknown) => seen.push(value), { a: [1, { b: 2 }], c: 3 })
    expect(seen).toEqual([1, 2, 3])
  })

  it('deepMap', () => {
    const result = deepMap((x: unknown) => (typeof x === 'number' ? x * 2 : x), {
      a: [1, 2],
      b: { c: 3 },
    })
    expect(result).toEqual({ a: [2, 4], b: { c: 6 } })
  })

  it('every', () => {
    expect(every((x: number) => x > 0, [1, 2, 3])).toBe(true)
    expect(every((x: number) => x > 2, [1, 2, 3])).toBe(false)
  })

  it('filter', () => {
    expect(filter((x: number) => x > 1, [1, 2, 3])).toEqual([2, 3])
  })

  it('find and findIndex', () => {
    expect(find((x: number) => x > 1, [1, 2, 3])).toBe(2)
    expect(findIndex((x: number) => x > 1, [1, 2, 3])).toBe(1)
  })

  it('first head last tail', () => {
    expect(first([1, 2, 3] as any)).toBe(1)
    expect(head([1, 2, 3] as any)).toBe(1)
    expect(last([1, 2, 3])).toBe(3)
    expect(tail([1, 2, 3])).toBe(3)
  })

  it('flatten', () => {
    expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, 3, 4])
  })

  it('forEach', () => {
    const out: number[] = []
    const arr = [1, 2, 3]
    expect(forEach((x: number) => out.push(x), arr)).toBe(arr)
    expect(out).toEqual([1, 2, 3])
  })

  it('forEachValues', () => {
    const out: number[] = []
    const obj = { a: 1, b: 2 }
    expect(forEachValues((x: number) => out.push(x), obj)).toBe(obj)
    expect(out).toEqual([1, 2])
  })

  it('get and getOr', () => {
    const obj = { a: 1 }
    expect(get('a', obj)).toBe(1)
    expect(getOr(9, 'a', obj)).toBe(1)
    expect(getOr(9, 'b', obj)).toBe(9)
  })

  it('grab and select', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(grab(['a', 'c'] as any, obj as any)).toEqual({ a: 1, c: 3 })
    expect(select(['b'] as any, obj as any)).toEqual({ b: 2 })
    expect(grab(['a'] as any, [obj] as any)).toEqual([{ a: 1 }])
  })

  it('groupBy', () => {
    const grouped = groupBy((x: number) => (x % 2 === 0 ? 'even' : 'odd'), [1, 2, 3, 4])
    expect(grouped).toEqual({ odd: [1, 3], even: [2, 4] })
  })

  it('comparison helpers', () => {
    expect(gt(3, 2)).toBe(true)
    expect(gte(3, 3)).toBe(true)
    expect(lt(2, 3)).toBe(true)
    expect(lte(3, 3)).toBe(true)
  })

  it('has', () => {
    expect(has('a', { a: 1 })).toBe(true)
    expect(has('b', { a: 1 })).toBe(false)
  })

  it('identity and self', () => {
    expect(identity(5)).toBe(5)
    expect(self('x')).toBe('x')
  })

  it('ifElse', () => {
    const result = ifElse(
      () => 'no',
      () => 'yes',
      () => true
    )
    expect(result).toBe('yes')
  })

  it('isEven and isOdd', () => {
    expect(isEven(4)).toBe(true)
    expect(isOdd(3)).toBe(true)
  })

  it('map', () => {
    expect(map((x: number) => x * 2, [1, 2, 3])).toEqual([2, 4, 6])
  })

  it('mapKeys', () => {
    expect(mapKeys((key: string) => key.toUpperCase(), { a: 1, b: 2 })).toEqual({ A: 1, B: 2 })
  })

  it('mapValues', () => {
    expect(mapValues((value: number) => value * 2, { a: 1, b: 2 })).toEqual({ a: 2, b: 4 })
  })

  it('minus and plus', () => {
    expect(plus(2, 3)).toBe(5)
    expect(minus(3, 10)).toBe(7)
  })

  it('noop', () => {
    expect(noop()).toBeUndefined()
  })

  it('or', () => {
    expect(or(false, true)).toBe(true)
    expect(or(false, false)).toBe(false)
  })

  it('pipe', () => {
    const fn = pipe(
      (x: number) => x + 1,
      (x: number) => x * 2
    )
    expect(fn(2)).toBe(6)
  })

  it('placeholder', () => {
    expect(placeholder).toBeNull()
  })

  it('pluck', () => {
    expect(pluck('name', [{ name: 'a' }, { name: 'b' }])).toEqual(['a', 'b'])
  })

  it('take', () => {
    expect(take(2, [1, 2, 3])).toEqual([1, 2])
  })

  it('test', () => {
    expect(test(/abc/, 'zabcx')).toBe(true)
  })

  it('string helpers', () => {
    expect(toLower('AbC')).toBe('abc')
    expect(toUpper('AbC')).toBe('ABC')
    expect(trim('  x  ')).toBe('x')
  })

  it('type', () => {
    expect(type(null)).toBe('Null')
    expect(type(undefined)).toBe('Undefined')
    expect(type([])).toBe('Array')
  })

  it('uniq and uniqBy', () => {
    expect(uniq([1, 2, 1, 3, 2])).toEqual([1, 2, 3])
    expect(uniqBy((x: string) => x[0], ['apple', 'apricot', 'banana'])).toEqual(['apple', 'banana'])
  })
})
