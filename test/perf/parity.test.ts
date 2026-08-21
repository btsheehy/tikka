import fp from 'lodash/fp'
import * as R from 'ramda'
import { describe, expect, it } from 'vitest'
import {
  contains,
  filter,
  find,
  flatten,
  groupBy,
  map,
  pipe,
  sort,
  uniq,
  uniqBy,
} from '../../dist/index.js'
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
    'sort (score asc)',
    () => {
      const byScore = (user: (typeof LARGE_DATASET.users)[number]) => user.score

      const sample = LARGE_DATASET.users.slice(0, 5_000)
      const tikkaResult = sort(byScore, sample)
      const lodashResult = fp.sortBy(byScore, sample)
      const ramdaResult = R.sortBy(byScore, sample)

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

  it(
    'pipe unary chain parity',
    () => {
      const f1 = (x: number) => x + 3
      const f2 = (x: number) => x * 2
      const f3 = (x: number) => x - 7
      const f4 = (x: number) => x / 3

      const tikkaPipe = pipe(f1, f2, f3, f4)
      const lodashPipe = fp.pipe(f1, f2, f3, f4)
      const ramdaPipe = R.pipe(f1, f2, f3, f4)

      const sample = LARGE_DATASET.users.slice(0, 1_000)

      const tikkaResult = sample.map((user) => tikkaPipe(user.score))
      const lodashResult = sample.map((user) => lodashPipe(user.score))
      const ramdaResult = sample.map((user) => ramdaPipe(user.score))

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'pipe variadic-first chain parity',
    () => {
      const first = (a: number, b: number) => a + b
      const f2 = (x: number) => x * 2
      const f3 = (x: number) => x - 7
      const f4 = (x: number) => x / 3

      const tikkaPipe = pipe(first, f2, f3, f4)
      const lodashPipe = fp.pipe(first, f2, f3, f4)
      const ramdaPipe = R.pipe(first, f2, f3, f4)

      const left = LARGE_DATASET.numbers.slice(0, 2_000)
      const right = LARGE_DATASET.numbers.slice(2_000, 4_000)

      const tikkaResult = left.map((value, i) => tikkaPipe(value, right[i]))
      const lodashResult = left.map((value, i) => lodashPipe(value, right[i]))
      const ramdaResult = left.map((value, i) => ramdaPipe(value, right[i]))

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )

  it(
    'pipe composed collection pipeline parity',
    () => {
      const tikkaPipe = pipe(
        filter((user: (typeof LARGE_DATASET.users)[number]) => user.isActive),
        map((user: (typeof LARGE_DATASET.users)[number]) => user.score % 500),
        uniq,
        find((score: number) => score > 450)
      )

      const lodashPipe = fp.pipe(
        fp.filter((user: (typeof LARGE_DATASET.users)[number]) => user.isActive),
        fp.map((user: (typeof LARGE_DATASET.users)[number]) => user.score % 500),
        fp.uniq,
        fp.find((score: number) => score > 450)
      )

      const ramdaPipe = R.pipe(
        R.filter((user: (typeof LARGE_DATASET.users)[number]) => user.isActive),
        R.map((user: (typeof LARGE_DATASET.users)[number]) => user.score % 500),
        R.uniq,
        R.find((score: number) => score > 450)
      )

      const tikkaResult = tikkaPipe(LARGE_DATASET.users)
      const lodashResult = lodashPipe(LARGE_DATASET.users)
      const ramdaResult = ramdaPipe(LARGE_DATASET.users)

      expect(tikkaResult).toEqual(lodashResult)
      expect(tikkaResult).toEqual(ramdaResult)
    },
    LONG_TIMEOUT_MS
  )
})
