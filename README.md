# tikka

Tikka is a minimal, dependency-free functional utility library for TypeScript and JavaScript. It works out of the box, is fully typed, tested, and bundled for modern ESM tree-shaking so consumers only pay for what they import.

## Why use tikka

- Minimal API surface focused on practical helpers
- Zero runtime dependencies
- TypeScript type declarations published in package output
- Curried utilities for composable functional style
- Tested with Vitest
- Bundled with Rollup and validated for tree-shaking

## Why teams switch from larger FP utility libraries

A common pain point with utility libraries is bundle bloat when a project imports a broad FP API surface.

Measured with the same browser bundling setup (esbuild, minified, loading each library's full FP API object):

- `tikka/all`: 5.25 KiB minified / 2.29 KiB gzip
- `lodash/fp`: 82.27 KiB minified / 29.15 KiB gzip
- `ramda`: 68.04 KiB minified / 20.30 KiB gzip

That means `tikka/all` is roughly:

- ~15.7x smaller than `lodash/fp` (minified)
- ~13.0x smaller than `ramda` (minified)

If you only import specific named utilities from `tikka`, tree-shaking can reduce this even further.

## Installation

npm install tikka

## Usage

Named imports (recommended for tree-shaking):

```ts
import { filter, isEven, map, pipe, plus } from 'tikka'

const result = pipe(
  filter(isEven),
  map(plus(1)),
)([1, 2, 3, 4])
// [3, 5]
```

Default aggregate import (all utilities):

```ts
import tikka from 'tikka/all'

const out = tikka.map((x) => x * 2, [1, 2, 3])
```

Data-first wrappers (underscore-prefixed):

```ts
import { _get, _map, _sortBy } from 'tikka/data-first'

const user = { name: 'Brandon', score: 7 }
const name = _get(user, 'name')
const doubled = _map([1, 2, 3], (n) => n * 2)
const sorted = _sortBy([{ score: 2 }, { score: 1 }], 'score', 'asc')
```

## Tree-shaking

Use named ESM imports from `tikka`:

```ts
import { plus } from 'tikka'
```

This package is published with `sideEffects: false` and ESM module output designed for dead-code elimination. Verified with a Rollup consumer bundle: importing only `plus` emits only the `plus` implementation.

## API

Notes:
- Many helpers are curried (especially those implemented with `curryRight`).
- Argument order for most collection helpers is callback/key first, then data.
- Aliases are documented explicitly below.

### and(a, b)
Boolean AND over two values.
Example:
```ts
and(true, false) // false
```

### any(test, arr)
Returns true if at least one array element passes `test`.
Example:
```ts
any((x) => x > 2, [1,2,3]) // true
```

### compact(arr)
Removes `null` and `undefined` values from an array.
Example:
```ts
compact([1, null, 2, undefined]) // [1,2]
```

### concat(left, right)
Concatenates arrays or strings.
Examples:
```ts
concat([1,2], [3,4]) // [1,2,3,4]
concat('ab', 'cd') // 'abcd'
```

### contains(value, searchTarget)
Checks whether `searchTarget.includes(value)` is true.
Example:
```ts
contains(2, [1,2,3]) // true
```

### countBy(iteratee, arr)
Builds a frequency object keyed by `iteratee(value)`.
Example:
```ts
countBy((x)=>x%2?'odd':'even', [1,2,3,4]) // { odd: 2, even: 2 }
```

### countWhere(test, arr)
Counts array elements matching `test`.
Example:
```ts
countWhere((x) => x % 2 === 0, [1,2,3,4]) // 2
```

### curry(fn, arity?)
Left-to-right curry helper.
Example:
```ts
curry((a,b,c)=>a+b+c)(1)(2)(3) // 6
```

### curryRight(fn, arity?)
Right-to-left curry helper.
Example:
```ts
curryRight((a,b)=>a/b)(2,8) // 4
```

### debug(msg, value)
Logs `msg` and `value`, then returns `value`.
Example:
```ts
debug('current', 42) // 42
```

### deepClone(data)
Deep-clones arrays/objects recursively (supports Date and RegExp cloning).
Example:
```ts
deepClone({ a: { b: [1] } })
```

### deepForEach(func, data)
Recursively visits nested arrays/objects and runs `func` on leaf values.
Example:
```ts
deepForEach(console.log, { a:[1,{b:2}] })
```

### deepMap(func, data)
Recursively maps leaf values in nested arrays/objects.
Example:
```ts
deepMap((x)=>typeof x==='number'?x*2:x, { a:[1,2] })
```

### every(test, arr)
Returns true if all elements pass `test`.
Example:
```ts
every((x)=>x>0, [1,2,3]) // true
```

### filter(test, arr)
Filters an array by predicate.
Example:
```ts
filter((x)=>x>1, [1,2,3]) // [2,3]
```

### find(test, arr)
Returns first matching element or `undefined`.
Example:
```ts
find((x)=>x>1, [1,2,3]) // 2
```

### findIndex(test, arr)
Returns index of first matching element or `-1`.
Example:
```ts
findIndex((x)=>x>1, [1,2,3]) // 1
```

### first(arr)
Alias of `head`.
Example:
```ts
first([1,2,3]) // 1
```

### flatten(arr)
Deep-flattens nested arrays.
Example:
```ts
flatten([1,[2,[3]],4]) // [1,2,3,4]
```

### forEach(func, arr)
Runs `func` for each element and returns original array.
Example:
```ts
forEach(console.log, [1,2])
```

### forEachValues(func, obj)
Runs `func` for each object value and returns original object.
Example:
```ts
forEachValues(console.log, { a:1, b:2 })
```

### get(prop, obj)
Gets property by key.
Example:
```ts
get('a', { a: 1 }) // 1
```

### getOr(defaultValue, prop, obj)
Gets property if present, otherwise returns `defaultValue`.
Example:
```ts
getOr(0, 'a', {}) // 0
```

### grab(props, data)
Picks listed keys from an object, or from each object in an array.
Example:
```ts
grab(['a'], { a:1,b:2 }) // { a:1 }
```

### groupBy(groupingFunction, arr)
Groups array values by string key.
Example:
```ts
groupBy((x)=>x%2?'odd':'even', [1,2,3])
```

### gt(a, b)
Greater-than comparison.
Example:
```ts
gt(3,2) // true
```

### gte(a, b)
Greater-than-or-equal comparison.
Example:
```ts
gte(3,3) // true
```

### has(prop, obj)
Own-property existence check.
Example:
```ts
has('a', { a:1 }) // true
```

### head(arr)
Returns first element.
Example:
```ts
head([1,2,3]) // 1
```

### identity(value)
Alias of `self`; returns input unchanged.
Example:
```ts
identity('x') // 'x'
```

### ifElse(onFalse, onTrue, test)
Runs `test()`, then executes `onTrue()` or `onFalse()`.
Example:
```ts
ifElse(()=>0, ()=>1, ()=>true) // 1
```

### includes(value, searchTarget)
Alias of `contains`.
Example:
```ts
includes('a', 'cat') // true
```

### isEven(num)
Returns true for even numbers.
Example:
```ts
isEven(4) // true
```

### isOdd(num)
Returns true for odd numbers.
Example:
```ts
isOdd(3) // true
```

### last(arrOrString)
Returns final element/character.
Example:
```ts
last([1,2,3]) // 3
```

### lt(a, b)
Less-than comparison.
Example:
```ts
lt(2,3) // true
```

### lte(a, b)
Less-than-or-equal comparison.
Example:
```ts
lte(3,3) // true
```

### map(fn, arr)
Maps array values.
Example:
```ts
map((x)=>x*2, [1,2,3]) // [2,4,6]
```

### mapKeys(fn, obj)
Transforms object keys, preserving values.
Example:
```ts
mapKeys((k)=>k.toUpperCase(), { a:1 }) // { A:1 }
```

### mapValues(fn, obj)
Transforms object values, preserving keys.
Example:
```ts
mapValues((v)=>v*2, { a:1 }) // { a:2 }
```

### minus(b, a)
Subtracts second arg from first in curried-right style.
Example:
```ts
minus(3, 10) // 7
```

### noop()
No-op function.
Example:
```ts
noop() // undefined
```

### or(a, b)
Boolean OR over two values.
Example:
```ts
or(false, true) // true
```

### pipe(...fns)
Creates a left-to-right function pipeline. This is the core composition primitive in tikka.

Example:
```ts
import { pipe } from 'tikka'

const transform = pipe(
  (value: number) => value + 1,
  (value) => value * 2,
)

transform(2)
// 6
```

Common tikka composition pattern:
```ts
import { filter, isEven, map, pipe, plus, take } from 'tikka'

const firstThreeIncrementedEvens = pipe(
  filter(isEven),
  map(plus(1)),
  take(3),
)

firstThreeIncrementedEvens([1, 2, 3, 4, 5, 6, 7, 8])
// [3, 5, 7]
```

Pipeline with object helpers:
```ts
import { grab, map, pipe, sortBy } from 'tikka'

const selectLeaderboardFields = pipe(
  sortBy('score', 'desc'),
  map(grab(['name', 'score'])),
)

selectLeaderboardFields([
  { name: 'Ari', score: 12, email: 'ari@example.com' },
  { name: 'Bea', score: 19, email: 'bea@example.com' },
])
// [{ name: 'Bea', score: 19 }, { name: 'Ari', score: 12 }]
```

### placeholder
Exported placeholder value (`null`).

### pluck(prop, collection)
Extracts property values from array of objects.
Example:
```ts
pluck('name', [{name:'a'},{name:'b'}]) // ['a','b']
```

### plus(a, b)
Adds two numbers.
Example:
```ts
plus(2,3) // 5
```

### select(props, data)
Alias of `grab`.
Example:
```ts
select(['id'], { id:1, name:'x' }) // { id:1 }
```

### self(value)
Returns input unchanged.
Example:
```ts
self(42) // 42
```

### sort(iteratee, arr)
Sorts an array by a computed key (non-mutating).
Example:
```ts
sort((x)=>x.age, [{age:3},{age:1}]) // [{age:1},{age:3}]
```

### sortBy(fieldOrIteratee, direction, arr)
Sorts an array of objects by either a field name or a value-selector function, using `'asc'` or `'desc'` direction.
Examples:
```ts
sortBy('age', 'desc', [{age:1},{age:3},{age:2}]) // [{age:3},{age:2},{age:1}]
sortBy((x)=>x.age, 'asc', [{age:3},{age:1}]) // [{age:1},{age:3}]
```

### tail(arrOrString)
Returns everything except the first element/character.
Examples:
```ts
tail([1,2,3]) // [2,3]
tail('hello') // 'ello'
```

### take(num, arr)
Returns first `num` elements.
Example:
```ts
take(2, [1,2,3]) // [1,2]
```

### test(regex, str)
Runs `regex.test(str)`.
Example:
```ts
test(/ab/, 'zabx') // true
```

### toLower(str)
Lowercases string with locale support.
Example:
```ts
toLower('AbC') // 'abc'
```

### toUpper(str)
Uppercases string with locale support.
Example:
```ts
toUpper('AbC') // 'ABC'
```

### trim(str)
Trims string whitespace.
Example:
```ts
trim('  x  ') // 'x'
```

### type(val)
Returns internal type label (for example: `Array`, `Object`, `Null`, `Undefined`).
Example:
```ts
type([]) // 'Array'
```

### uniq(arr)
Returns array with duplicate values removed (first occurrence kept).
Example:
```ts
uniq([1,2,1,3]) // [1,2,3]
```

### uniqBy(uniqCond, arr)
Returns unique items by computed key.
Example:
```ts
uniqBy((x)=>x.id, [{id:1},{id:1},{id:2}])
```

## Performance benchmark suites (large datasets)

This repo includes dedicated performance benchmark suites to compare identical function workloads across `tikka`, `lodash/fp`, and `ramda` on very large deterministic datasets.

Benchmarked functions:
- `map`
- `filter`
- `find`
- `groupBy`
- `uniq`
- `uniqBy`
- `flatten` / `flattenDeep`
- `contains` / `includes`

Dataset sizes (generated in `test/perf/fixtures.ts`):
- `numbers`: 60,000 items
- `users`: 80,000 objects
- `nestedNumbers`: 5,000 nested groups

Commands:
- Parity validation (same output across all three libs): `vitest run test/perf/parity.test.ts`
- Performance suite: `npm run perf`
- Watch performance suite: `npm run perf:watch`
- Run a specific benchmark group by test name pattern: `npm run perf:test -- map`

## Quality gates in this repo

- Lint: `npm run lint`
- Type-check: `npm run typecheck`
- Tests: `npm test`
- Build: `npm run build`
- Full check: `npm run check`

## Biome rule policy

This codebase intentionally allows dynamic typing patterns used by curried functional helpers:
- `suspicious.noExplicitAny`: off
- `complexity.noBannedTypes`: off

Those two rules were disabled to avoid unsafe blanket suppressions in many files while preserving the rest of Biome recommended rules.
