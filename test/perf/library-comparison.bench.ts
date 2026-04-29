import fp from 'lodash/fp'
import * as R from 'ramda'
import { bench, describe } from 'vitest'
import {
  cond,
  contains,
  debug,
  filter,
  find,
  first,
  flatten,
  get,
  groupBy,
  gt,
  highestBy,
  lt,
  map,
  mapValues,
  pipe,
  uniq,
  uniqBy,
  uniqueBy,
} from '../../dist/index.js'
import { LARGE_DATASET, PerfUser } from './fixtures'
import { sortBy } from '../../src/index.js'

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

  describe('pipe composed collection pipeline (filter -> groupBy (pipe get -> cond(lt)) -> mapValues(pipe -> highestBy -> get) -> get)', () => {
    const scorePipelineTikka = pipe(
      filter(get('isActive')),
      groupBy(
        pipe(
          get('age'),
          cond([
            [lt(20), 'teens'],
            [lt(30), '20s'],
            [lt(40), '30s'],
            [lt(50), '40s'],
            [lt(60), '50s'],
            'senior',
          ])
        )
      ),
      mapValues(pipe(highestBy(get('score')), get('id')))
    )

    const scorePipelineLodash = fp.pipe(
      fp.filter(fp.get('isActive')),
      fp.groupBy(
        fp.flow(
          fp.get('age'),
          fp.cond([
            [fp.gt(20), fp.constant('teens')],
            [fp.gt(30), fp.constant('20s')],
            [fp.gt(40), fp.constant('30s')],
            [fp.gt(50), fp.constant('40s')],
            [fp.gt(60), fp.constant('50s')],
            [fp.constant(true), fp.constant('senior')],
          ])
        )
      ),
      fp.mapValues(fp.flow(highestBy(fp.get('score')), fp.get('id')))
    )

    const scorePipelineRamda = R.pipe(
      R.filter(R.prop('isActive')),
      R.groupBy(
        R.pipe(
          R.prop('age'),
          R.cond([
            [R.gt(20), R.always('teens')],
            [R.gt(30), R.always('20s')],
            [R.gt(40), R.always('30s')],
            [R.gt(50), R.always('40s')],
            [R.gt(60), R.always('50s')],
            [R.always(true), R.always('senior')],
          ])
        )
      ),
      R.map(R.pipe(highestBy(R.prop('score')), R.prop('id')))
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
    console.log(
      [scorePipelineTikka, scorePipelineLodash, scorePipelineRamda].map((f) =>
        f(LARGE_DATASET.users)
      )
    )
  })
})
