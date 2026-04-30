export type PerfUser = {
  id: number
  age: number
  score: number
  city: string
  isActive: boolean
}

const createRng = (seed: number) => {
  let state = seed >>> 0

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 4294967296
  }
}

const randomInt = (rng: () => number, maxExclusive: number) => Math.floor(rng() * maxExclusive)

const cities = ['nyc', 'la', 'chi', 'sf', 'bos', 'sea', 'aus', 'mia'] as const

const makeNumbers = (size: number): number[] => {
  const rng = createRng(1729)
  const values = Array.from({ length: size }, () => randomInt(rng, 100_000))
  return values
}

const makeUsers = (size: number): PerfUser[] => {
  const rng = createRng(9_733)

  return Array.from({ length: size }, (_, id) => {
    return {
      id,
      age: 18 + randomInt(rng, 60),
      score: randomInt(rng, 10_000_000_000),
      city: cities[randomInt(rng, cities.length)],
      isActive: randomInt(rng, 2) === 0,
    }
  })
}

const makeNestedNumbers = (groups: number, width: number): unknown[] => {
  const rng = createRng(42)

  return Array.from({ length: groups }, () => {
    return [
      Array.from({ length: width }, () => randomInt(rng, 50_000)),
      [
        Array.from({ length: width }, () => randomInt(rng, 50_000)),
        [Array.from({ length: width }, () => randomInt(rng, 50_000))],
      ],
    ]
  })
}

export const LARGE_DATASET = {
  numbers: makeNumbers(60_000),
  users: makeUsers(80_000),
  nestedNumbers: makeNestedNumbers(5_000, 4),
} as const
