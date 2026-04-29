import always from './always'
import and from './and'
import any from './any'
import coalesce from './coalesce'
import compact from './compact'
import concat from './concat'
import cond from './cond'
import contains from './contains'
import countBy from './countBy'
import countWhere from './countWhere'
import curry from './curry'
import curryRight from './curryRight'
import debug from './debug'
import deepClone from './deepClone'
import deepForEach from './deepForEach'
import deepMap from './deepMap'
import endsWith from './endsWith'
import every from './every'
import filter from './filter'
import find from './find'
import findIndex from './findIndex'
import first from './first'
import flatten from './flatten'
import forEach from './forEach'
import forEachValues from './forEachValues'
import get from './get'
import getOr from './getOr'
import grab from './grab'
import groupBy from './groupBy'
import gt from './gt'
import gte from './gte'
import has from './has'
import head from './head'
import highest from './highest'
import highestBy from './highestBy'
import identity from './identity'
import ifElse from './ifElse'
import includes from './includes'
import isEven from './isEven'
import isOdd from './isOdd'
import last from './last'
import lowest from './lowest'
import lowestBy from './lowestBy'
import lt from './lt'
import lte from './lte'
import map from './map'
import mapKeys from './mapKeys'
import mapValues from './mapValues'
import max from './max'
import min from './min'
import minus from './minus'
import multiply from './multiply'
import noop from './noop'
import or from './or'
import pipe from './pipe'
import placeholder from './placeholder'
import pluck from './pluck'
import plus from './plus'
import replace from './replace'
import reverse from './reverse'
import select from './select'
import self from './self'
import slice from './slice'
import sort from './sort'
import sortBy from './sortBy'
import split from './split'
import startsWith from './startsWith'
import tail from './tail'
import take from './take'
import test from './test'
import toLower from './toLower'
import toUpper from './toUpper'
import trim from './trim'
import type from './type'
import uniq from './uniq'
import uniqBy from './uniqBy'

const tikka = {
  always,
  and,
  any,
  coalesce,
  compact,
  concat,
  cond,
  contains,
  countBy,
  countWhere,
  curry,
  curryRight,
  debug,
  deepClone,
  deepForEach,
  deepMap,
  endsWith,
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
  highest,
  highestBy,
  identity,
  ifElse,
  includes,
  isEven,
  isOdd,
  last,
  lowest,
  lowestBy,
  lt,
  lte,
  map,
  mapKeys,
  mapValues,
  max,
  min,
  minus,
  multiply,
  noop,
  or,
  pipe,
  placeholder,
  pluck,
  plus,
  replace,
  reverse,
  select,
  self,
  slice,
  sort,
  sortBy,
  split,
  startsWith,
  tail,
  take,
  test,
  toLower,
  toUpper,
  trim,
  type,
  uniq,
  uniqBy,

  // Alias properties
  both: and,
  conjunction: and,

  some: any,
  anyPass: any,

  compactNil: compact,
  removeNil: compact,
  filterNil: compact,
  nonNil: compact,

  append: concat,
  conj: concat,

  condition: cond,

  includesValue: contains,
  containsValue: contains,
  member: contains,
  memberOf: contains,
  inList: contains,

  countIf: countWhere,
  tallyWhere: countWhere,

  autoCurry: curry,

  curryR: curryRight,
  rightCurry: curryRight,
  reverseCurry: curryRight,

  trace: debug,
  inspect: debug,
  peek: debug,

  cloneDeep: deepClone,
  copyDeep: deepClone,
  deepCopy: deepClone,

  sortWith: sort,
  sortOn: sort,
  orderWith: sort,
  order: sort,
  orderOn: sort,

  forEachDeep: deepForEach,
  eachDeep: deepForEach,
  walkDeep: deepForEach,

  mapDeep: deepMap,
  deepTransform: deepMap,

  all: every,
  allPass: every,
  eachPasses: every,

  where: filter,
  selectWhere: filter,
  keep: filter,
  keepIf: filter,
  keepWhere: filter,
  selectIf: filter,

  findFirst: find,
  firstWhere: find,

  indexWhere: findIndex,
  findPosition: findIndex,
  positionWhere: findIndex,

  headValue: first,
  firstItem: first,
  firstValue: first,

  flattenDeep: flatten,
  deepFlatten: flatten,
  concatAll: flatten,
  smoosh: flatten,
  flat: flatten,

  each: forEach,
  forEachItem: forEach,
  walk: forEach,

  eachValue: forEachValues,
  forEachValue: forEachValues,
  walkValues: forEachValues,

  prop: get,
  property: get,
  lookup: get,

  propOr: getOr,
  getDefault: getOr,
  getWithDefault: getOr,

  pick: grab,
  pickKeys: grab,
  selectKeys: grab,

  classify: groupBy,
  bucketBy: groupBy,
  partitionByKey: groupBy,

  greaterThan: gt,
  isGreaterThan: gt,

  greaterThanOrEqual: gte,
  isAtLeast: gte,

  hasKey: has,
  hasProp: has,
  hasOwnKey: has,

  id: identity,
  selfRef: identity,
  noopValue: identity,
  identityValue: identity,
  same: identity,
  idValue: identity,

  whenElse: ifElse,
  branch: ifElse,

  even: isEven,
  isDivisibleBy2: isEven,

  odd: isOdd,
  isNotDivisibleBy2: isOdd,

  lastItem: last,
  end: last,
  lastValue: last,
  endValue: last,

  lessThan: lt,
  isLessThan: lt,

  lessThanOrEqual: lte,
  isAtMost: lte,

  transformKeys: mapKeys,
  renameKeys: mapKeys,
  mapObjectKeys: mapKeys,

  transformValues: mapValues,
  mapObjectValues: mapValues,

  subtract: minus,
  sub: minus,
  difference: minus,

  doNothing: noop,
  noopFn: noop,
  pass: noop,

  either: or,
  disjunction: or,

  flow: pipe,
  composeLeft: pipe,
  chain: pipe,

  __: placeholder,
  hole: placeholder,
  argPlaceholder: placeholder,

  mapProp: pluck,
  projectProp: pluck,
  extractProp: pluck,
  propertyValues: pluck,

  add: plus,
  sum2: plus,
  add2: plus,
  sum: plus,

  orderBy: sortBy,
  sortByKey: sortBy,

  rest: tail,
  dropFirst: tail,

  takeLeft: take,
  firstN: take,
  headN: take,
  takeN: take,

  matches: test,
  regexTest: test,
  isMatch: test,
  testRegex: test,

  lower: toLower,
  lowerCase: toLower,
  downcase: toLower,

  upper: toUpper,
  upperCase: toUpper,
  upcase: toUpper,

  strip: trim,
  trimWhitespace: trim,

  typeOf: type,
  kindOf: type,
  tagOf: type,

  distinct: uniq,
  unique: uniq,
  dedupe: uniq,
  nub: uniq,

  distinctBy: uniqBy,
  uniqueBy: uniqBy,
  dedupeBy: uniqBy,
  nubBy: uniqBy,

  replaceAll: replace,
}

export default tikka
