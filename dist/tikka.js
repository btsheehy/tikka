import always from './always.js';
import andCurried from './and.js';
import anyCurried from './any.js';
import coalesceCurried from './coalesce.js';
import compact from './compact.js';
import concat from './concat.js';
import condCurried from './cond.js';
import containsCurried from './contains.js';
import countByCurried from './countBy.js';
import countWhereCurried from './countWhere.js';
import curry from './curry.js';
import curryRight from './curryRight.js';
import debugCurried from './debug.js';
import deepClone from './deepClone.js';
import deepForEachCurried from './deepForEach.js';
import deepMapCurried from './deepMap.js';
import endsWithCurried from './endsWith.js';
import everyCurried from './every.js';
import filterCurried from './filter.js';
import findCurried from './find.js';
import findIndexCurried from './findIndex.js';
import head from './head.js';
import flatten from './flatten.js';
import forEachCurried from './forEach.js';
import forEachValuesCurried from './forEachValues.js';
import get from './get.js';
import getOrCurried from './getOr.js';
import grab from './grab.js';
import groupBy from './groupBy.js';
import gtCurried from './gt.js';
import gteCurried from './gte.js';
import hasCurried from './has.js';
import highest from './highest.js';
import highestBy from './highestBy.js';
import identity from './identity.js';
import ifElseCurried from './ifElse.js';
import isEven from './isEven.js';
import isOdd from './isOdd.js';
import last from './last.js';
import lowest from './lowest.js';
import lowestBy from './lowestBy.js';
import ltCurried from './lt.js';
import lteCurried from './lte.js';
import mapCurried from './map.js';
import mapKeys from './mapKeys.js';
import mapValuesCurried from './mapValues.js';
import max from './max.js';
import min from './min.js';
import minusCurried from './minus.js';
import multiplyCurried from './multiply.js';
import noop from './noop.js';
import orCurried from './or.js';
import pipe from './pipe.js';
import placeholder from './placeholder.js';
import pluck from './pluck.js';
import plusCurried from './plus.js';
import replaceCurried from './replace.js';
import reverse from './reverse.js';
import self from './self.js';
import slice from './slice.js';
import sortCurried from './sort.js';
import sortByCurried from './sortBy.js';
import splitCurried from './split.js';
import startsWithCurried from './startsWith.js';
import tail from './tail.js';
import takeCurried from './take.js';
import testCurried from './test.js';
import toLower from './toLower.js';
import toUpper from './toUpper.js';
import trim from './trim.js';
import type from './type.js';
import uniq from './uniq.js';
import uniqByCurried from './uniqBy.js';

const tikka = {
    always,
    and: andCurried,
    any: anyCurried,
    coalesce: coalesceCurried,
    compact,
    concat,
    cond: condCurried,
    contains: containsCurried,
    countBy: countByCurried,
    countWhere: countWhereCurried,
    curry,
    curryRight,
    debug: debugCurried,
    deepClone,
    deepForEach: deepForEachCurried,
    deepMap: deepMapCurried,
    endsWith: endsWithCurried,
    every: everyCurried,
    filter: filterCurried,
    find: findCurried,
    findIndex: findIndexCurried,
    first: head,
    flatten,
    forEach: forEachCurried,
    forEachValues: forEachValuesCurried,
    get,
    getOr: getOrCurried,
    grab,
    groupBy,
    gt: gtCurried,
    gte: gteCurried,
    has: hasCurried,
    head,
    highest,
    highestBy,
    identity,
    ifElse: ifElseCurried,
    includes: containsCurried,
    isEven,
    isOdd,
    last,
    lowest,
    lowestBy,
    lt: ltCurried,
    lte: lteCurried,
    map: mapCurried,
    mapKeys,
    mapValues: mapValuesCurried,
    max,
    min,
    minus: minusCurried,
    multiply: multiplyCurried,
    noop,
    or: orCurried,
    pipe,
    placeholder,
    pluck,
    plus: plusCurried,
    replace: replaceCurried,
    reverse,
    select: grab,
    self,
    slice,
    sort: sortCurried,
    sortBy: sortByCurried,
    split: splitCurried,
    startsWith: startsWithCurried,
    tail,
    take: takeCurried,
    test: testCurried,
    toLower,
    toUpper,
    trim,
    type,
    uniq,
    uniqBy: uniqByCurried,
    // Alias properties
    both: andCurried,
    conjunction: andCurried,
    some: anyCurried,
    anyPass: anyCurried,
    compactNil: compact,
    removeNil: compact,
    filterNil: compact,
    nonNil: compact,
    append: concat,
    conj: concat,
    condition: condCurried,
    includesValue: containsCurried,
    containsValue: containsCurried,
    member: containsCurried,
    memberOf: containsCurried,
    inList: containsCurried,
    countIf: countWhereCurried,
    tallyWhere: countWhereCurried,
    autoCurry: curry,
    curryR: curryRight,
    rightCurry: curryRight,
    reverseCurry: curryRight,
    trace: debugCurried,
    inspect: debugCurried,
    peek: debugCurried,
    cloneDeep: deepClone,
    copyDeep: deepClone,
    deepCopy: deepClone,
    sortWith: sortCurried,
    sortOn: sortCurried,
    orderWith: sortCurried,
    order: sortCurried,
    orderOn: sortCurried,
    forEachDeep: deepForEachCurried,
    eachDeep: deepForEachCurried,
    walkDeep: deepForEachCurried,
    mapDeep: deepMapCurried,
    deepTransform: deepMapCurried,
    all: everyCurried,
    allPass: everyCurried,
    eachPasses: everyCurried,
    where: filterCurried,
    selectWhere: filterCurried,
    keep: filterCurried,
    keepIf: filterCurried,
    keepWhere: filterCurried,
    selectIf: filterCurried,
    findFirst: findCurried,
    firstWhere: findCurried,
    indexWhere: findIndexCurried,
    findPosition: findIndexCurried,
    positionWhere: findIndexCurried,
    headValue: head,
    firstItem: head,
    firstValue: head,
    flattenDeep: flatten,
    deepFlatten: flatten,
    concatAll: flatten,
    smoosh: flatten,
    flat: flatten,
    each: forEachCurried,
    forEachItem: forEachCurried,
    walk: forEachCurried,
    eachValue: forEachValuesCurried,
    forEachValue: forEachValuesCurried,
    walkValues: forEachValuesCurried,
    prop: get,
    property: get,
    lookup: get,
    propOr: getOrCurried,
    getDefault: getOrCurried,
    getWithDefault: getOrCurried,
    pick: grab,
    pickKeys: grab,
    selectKeys: grab,
    classify: groupBy,
    bucketBy: groupBy,
    partitionByKey: groupBy,
    greaterThan: gtCurried,
    isGreaterThan: gtCurried,
    greaterThanOrEqual: gteCurried,
    isAtLeast: gteCurried,
    hasKey: hasCurried,
    hasProp: hasCurried,
    hasOwnKey: hasCurried,
    id: identity,
    selfRef: identity,
    noopValue: identity,
    identityValue: identity,
    same: identity,
    idValue: identity,
    whenElse: ifElseCurried,
    branch: ifElseCurried,
    even: isEven,
    isDivisibleBy2: isEven,
    odd: isOdd,
    isNotDivisibleBy2: isOdd,
    lastItem: last,
    end: last,
    lastValue: last,
    endValue: last,
    lessThan: ltCurried,
    isLessThan: ltCurried,
    lessThanOrEqual: lteCurried,
    isAtMost: lteCurried,
    transformKeys: mapKeys,
    renameKeys: mapKeys,
    mapObjectKeys: mapKeys,
    transformValues: mapValuesCurried,
    mapObjectValues: mapValuesCurried,
    subtract: minusCurried,
    sub: minusCurried,
    difference: minusCurried,
    doNothing: noop,
    noopFn: noop,
    pass: noop,
    either: orCurried,
    disjunction: orCurried,
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
    add: plusCurried,
    sum2: plusCurried,
    add2: plusCurried,
    sum: plusCurried,
    orderBy: sortByCurried,
    sortByKey: sortByCurried,
    rest: tail,
    dropFirst: tail,
    takeLeft: takeCurried,
    firstN: takeCurried,
    headN: takeCurried,
    takeN: takeCurried,
    matches: testCurried,
    regexTest: testCurried,
    isMatch: testCurried,
    testRegex: testCurried,
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
    distinctBy: uniqByCurried,
    uniqueBy: uniqByCurried,
    dedupeBy: uniqByCurried,
    nubBy: uniqByCurried,
    replaceAll: replaceCurried,
};

export { tikka as default };
//# sourceMappingURL=tikka.js.map
