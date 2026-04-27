import and from './and.js';
import any from './any.js';
import compact from './compact.js';
import coalesce from './coalesce.js';
import concat from './concat.js';
import contains from './contains.js';
import countBy from './countBy.js';
import countWhere from './countWhere.js';
import curry from './curry.js';
import curryRight from './curryRight.js';
import debug from './debug.js';
import deepClone from './deepClone.js';
import sort from './sort.js';
import deepForEach from './deepForEach.js';
import deepMap from './deepMap.js';
import every from './every.js';
import filter from './filter.js';
import find from './find.js';
import findIndex from './findIndex.js';
import head from './head.js';
import flatten from './flatten.js';
import forEach from './forEach.js';
import forEachValues from './forEachValues.js';
import get from './get.js';
import getOr from './getOr.js';
import grab from './grab.js';
import groupBy from './groupBy.js';
import gt from './gt.js';
import gte from './gte.js';
import has from './has.js';
import identity from './identity.js';
import ifElse from './ifElse.js';
import isEven from './isEven.js';
import isOdd from './isOdd.js';
import last from './last.js';
import lt from './lt.js';
import lte from './lte.js';
import map from './map.js';
import mapKeys from './mapKeys.js';
import mapValues from './mapValues.js';
import minus from './minus.js';
import multiply from './multiply.js';
import noop from './noop.js';
import or from './or.js';
import pipe from './pipe.js';
import placeholder from './placeholder.js';
import pluck from './pluck.js';
import plus from './plus.js';
import self from './self.js';
import slice from './slice.js';
import sortBy from './sortBy.js';
import split from './split.js';
import startsWith from './startsWith.js';
import endsWith from './endsWith.js';
import tail from './tail.js';
import take from './take.js';
import test from './test.js';
import toLower from './toLower.js';
import toUpper from './toUpper.js';
import trim from './trim.js';
import type from './type.js';
import uniq from './uniq.js';
import uniqBy from './uniqBy.js';

const tikka = {
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
    first: head,
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
    includes: contains,
    isEven,
    isOdd,
    last,
    lt,
    lte,
    map,
    mapKeys,
    mapValues,
    minus,
    multiply,
    noop,
    or,
    pipe,
    placeholder,
    pluck,
    plus,
    select: grab,
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
    headValue: head,
    firstItem: head,
    firstValue: head,
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
    cond: ifElse,
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
};

export { tikka as default };
//# sourceMappingURL=tikka.js.map
