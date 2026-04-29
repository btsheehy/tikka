import fp from 'lodash/fp'
import * as R from 'ramda'
import { bench, describe } from 'vitest'
import {
  contains,
  filter,
  find,
  flatten,
  groupBy,
  map,
  pipe,
  uniq,
  uniqBy,
} from '../../dist/index.js'
import { LARGE_DATASET } from './fixtures'

const byScore = (user: (typeof LARGE_DATASET.users)[number]) => user.score
const isActive = (user: (typeof LARGE_DATASET.users)[number]) => user.isActive
const highScore = (user: (typeof LARGE_DATASET.users)[number]) => user.score > 9_900
const byCity = (user: (typeof LARGE_DATASET.users)[number]) => user.city
const byAge = (user: (typeof LARGE_DATASET.users)[number]) => user.age
const sentinel = LARGE_DATASET.numbers[Math.floor(LARGE_DATASET.numbers.length / 3)]

let _sink: unknown

describe('large dataset perf: tikka vs lodash/fp vs ramda', () => {
  describe('map(users -> score)', () => {
    bench('tikka map', () => {
      _sink = map(byScore, LARGE_DATASET.users)
    })

    bench('lodash/fp map', () => {
      _sink = fp.map(byScore, LARGE_DATASET.users)
    })

    bench('ramda map', () => {
      _sink = R.map(byScore, LARGE_DATASET.users)
    })
  })

  describe('filter(active users)', () => {
    bench('tikka filter', () => {
      _sink = filter(isActive, LARGE_DATASET.users)
    })

    bench('lodash/fp filter', () => {
      _sink = fp.filter(isActive, LARGE_DATASET.users)
    })

    bench('ramda filter', () => {
      _sink = R.filter(isActive, LARGE_DATASET.users)
    })
  })

  describe('find(first high scorer)', () => {
    bench('tikka find', () => {
      _sink = find(highScore, LARGE_DATASET.users)
    })

    bench('lodash/fp find', () => {
      _sink = fp.find(highScore, LARGE_DATASET.users)
    })

    bench('ramda find', () => {
      _sink = R.find(highScore, LARGE_DATASET.users)
    })
  })

  describe('groupBy(city)', () => {
    bench('tikka groupBy', () => {
      _sink = groupBy(byCity, LARGE_DATASET.users)
    })

    bench('lodash/fp groupBy', () => {
      _sink = fp.groupBy(byCity, LARGE_DATASET.users)
    })

    bench('ramda groupBy', () => {
      _sink = R.groupBy(byCity, LARGE_DATASET.users)
    })
  })

  describe('uniq(numbers)', () => {
    bench('tikka uniq', () => {
      _sink = uniq(LARGE_DATASET.numbers)
    })

    bench('lodash/fp uniq', () => {
      _sink = fp.uniq(LARGE_DATASET.numbers)
    })

    bench('ramda uniq', () => {
      _sink = R.uniq(LARGE_DATASET.numbers)
    })
  })

  describe('uniqBy(age)', () => {
    bench('tikka uniqBy', () => {
      _sink = uniqBy(byAge, LARGE_DATASET.users)
    })

    bench('lodash/fp uniqBy', () => {
      _sink = fp.uniqBy(byAge, LARGE_DATASET.users)
    })

    bench('ramda uniqBy', () => {
      _sink = R.uniqBy(byAge, LARGE_DATASET.users)
    })
  })

  describe('flatten nested numbers', () => {
    bench('tikka flatten', () => {
      _sink = flatten(LARGE_DATASET.nestedNumbers)
    })

    bench('lodash/fp flattenDeep', () => {
      _sink = fp.flattenDeep(LARGE_DATASET.nestedNumbers)
    })

    bench('ramda flatten', () => {
      _sink = R.flatten(LARGE_DATASET.nestedNumbers)
    })
  })

  describe('contains/includes sentinel', () => {
    bench('tikka contains', () => {
      _sink = contains(sentinel, LARGE_DATASET.numbers)
    })

    bench('lodash/fp includes', () => {
      _sink = fp.includes(sentinel, LARGE_DATASET.numbers)
    })

    bench('ramda includes', () => {
      _sink = R.includes(sentinel, LARGE_DATASET.numbers)
    })
  })

  describe('pipe composed collection pipeline (filter -> map -> uniq -> find)', () => {
    const scorePipelineTikka = pipe(
      filter((user: (typeof LARGE_DATASET.users)[number]) => user.isActive),
      map((user: (typeof LARGE_DATASET.users)[number]) => user.score % 500),
      uniq,
      find((score: number) => score > 450)
    )

    const scorePipelineLodash = fp.pipe(
      fp.filter((user: (typeof LARGE_DATASET.users)[number]) => user.isActive),
      fp.map((user: (typeof LARGE_DATASET.users)[number]) => user.score % 500),
      fp.uniq,
      fp.find((score: number) => score > 450)
    )

    const scorePipelineRamda = R.pipe(
      R.filter((user: (typeof LARGE_DATASET.users)[number]) => user.isActive),
      R.map((user: (typeof LARGE_DATASET.users)[number]) => user.score % 500),
      R.uniq,
      R.find((score: number) => score > 450)
    )

    bench('tikka pipe collection pipeline', () => {
      _sink = scorePipelineTikka(LARGE_DATASET.users)
    })

    bench('lodash/fp pipe collection pipeline', () => {
      _sink = scorePipelineLodash(LARGE_DATASET.users)
    })

    bench('ramda pipe collection pipeline', () => {
      _sink = scorePipelineRamda(LARGE_DATASET.users)
    })
  })
})
