import fp from 'lodash/fp'
import * as R from 'ramda'
import { describe, expect, it } from 'vitest'
import { contains, filter, find, flatten, groupBy, map, uniq, uniqBy } from '../../src/index'
import { LARGE_DATASET } from './fixtures'

const LONG_TIMEOUT_MS = 120_000

describe('large-dataset parity across tikka, lodash/fp, and ramda', () => {
  it(
    'map (users -> score)',
    () => {
      const tikkaResult = map((user) => user.score, LARGE_DATASET.users)
      const lodashResult = fp.map((user) => user.score, LARGE_DATASET.users)
      const ramdaResult = R.map((user) => user.score, LARGE_DATASET.users)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'filter (active users)',
    () => {
      const tikkaResult = filter((user) => user.isActive, LARGE_DATASET.users)
      const lodashResult = fp.filter((user) => user.isActive, LARGE_DATASET.users)
      const ramdaResult = R.filter((user) => user.isActive, LARGE_DATASET.users)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'find (first high scorer)',
    () => {
      const predicate = (user: (typeof LARGE_DATASET.users)[number]) => user.score > 9_900

      const tikkaResult = find(predicate, LARGE_DATASET.users)
      const lodashResult = fp.find(predicate, LARGE_DATASET.users)
      const ramdaResult = R.find(predicate, LARGE_DATASET.users)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'groupBy (city)',
    () => {
      const groupByCity = (user: (typeof LARGE_DATASET.users)[number]) => user.city

      const tikkaResult = groupBy(groupByCity, LARGE_DATASET.users)
      const lodashResult = fp.groupBy(groupByCity, LARGE_DATASET.users)
      const ramdaResult = R.groupBy(groupByCity, LARGE_DATASET.users)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'uniq (numbers)',
    () => {
      const tikkaResult = uniq(LARGE_DATASET.numbers)
      const lodashResult = fp.uniq(LARGE_DATASET.numbers)
      const ramdaResult = R.uniq(LARGE_DATASET.numbers)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'uniqBy (age)',
    () => {
      const byAge = (user: (typeof LARGE_DATASET.users)[number]) => user.age

      const tikkaResult = uniqBy(byAge, LARGE_DATASET.users)
      const lodashResult = fp.uniqBy(byAge, LARGE_DATASET.users)
      const ramdaResult = R.uniqBy(byAge, LARGE_DATASET.users)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'flatten / flattenDeep on nested numbers',
    () => {
      const tikkaResult = flatten(LARGE_DATASET.nestedNumbers)
      const lodashResult = fp.flattenDeep(LARGE_DATASET.nestedNumbers)
      const ramdaResult = R.flatten(LARGE_DATASET.nestedNumbers)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'contains/includes (sentinel)',
    () => {
      const sentinel = LARGE_DATASET.numbers[Math.floor(LARGE_DATASET.numbers.length / 3)]

      const tikkaResult = contains(sentinel, LARGE_DATASET.numbers)
      const lodashResult = fp.includes(sentinel, LARGE_DATASET.numbers)
      const ramdaResult = R.includes(sentinel, LARGE_DATASET.numbers)

      expect(tikkaResult).toBe(lodashResult)
      expect(tikkaResult).toBe(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )
})
