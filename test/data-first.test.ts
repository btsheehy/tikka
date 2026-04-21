import { describe, expect, it } from 'vitest'
import {
  _countBy,
  _filter,
  _get,
  _getOr,
  _groupBy,
  _map,
  _sort,
  _sortBy,
  _tail,
} from '../src/data-first'

describe('data-first wrappers', () => {
  it('uses object/array first argument order', () => {
    const obj: Record<string, number> = { a: 1 }

    expect(_get(obj, 'a')).toBe(1)
    expect(_getOr(obj, 'b', 9)).toBe(9)
    expect(_map([1, 2, 3], (x: number) => x * 2)).toEqual([2, 4, 6])
    expect(_filter([1, 2, 3], (x: number) => x > 1)).toEqual([2, 3])
    expect(_tail([1, 2, 3])).toEqual([2, 3])
  })

  it('keeps parity with data-last sort/group/count helpers', () => {
    const users = [
      { name: 'charlie', age: 30 },
      { name: 'alice', age: 20 },
      { name: 'bob', age: 25 },
    ]

    expect(_sort(users, (user) => user.age)).toEqual([
      { name: 'alice', age: 20 },
      { name: 'bob', age: 25 },
      { name: 'charlie', age: 30 },
    ])

    expect(_sortBy(users, 'age', 'desc')).toEqual([
      { name: 'charlie', age: 30 },
      { name: 'bob', age: 25 },
      { name: 'alice', age: 20 },
    ])

    expect(_groupBy(users, (user) => (user.age >= 25 ? 'adult' : 'young'))).toEqual({
      adult: [
        { name: 'charlie', age: 30 },
        { name: 'bob', age: 25 },
      ],
      young: [{ name: 'alice', age: 20 }],
    })

    expect(_countBy(users, (user) => (user.age >= 25 ? 'adult' : 'young'))).toEqual({
      adult: 2,
      young: 1,
    })
  })
})
