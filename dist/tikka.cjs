'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var and = require('./and.cjs');
var any = require('./any.cjs');
var compact = require('./compact.cjs');
var coalesce = require('./coalesce.cjs');
var concat = require('./concat.cjs');
var contains = require('./contains.cjs');
var countBy = require('./countBy.cjs');
var countWhere = require('./countWhere.cjs');
var curry = require('./curry.cjs');
var curryRight = require('./curryRight.cjs');
var debug = require('./debug.cjs');
var deepClone = require('./deepClone.cjs');
var sort = require('./sort.cjs');
var deepForEach = require('./deepForEach.cjs');
var deepMap = require('./deepMap.cjs');
var every = require('./every.cjs');
var filter = require('./filter.cjs');
var find = require('./find.cjs');
var findIndex = require('./findIndex.cjs');
var head = require('./head.cjs');
var flatten = require('./flatten.cjs');
var forEach = require('./forEach.cjs');
var forEachValues = require('./forEachValues.cjs');
var get = require('./get.cjs');
var getOr = require('./getOr.cjs');
var grab = require('./grab.cjs');
var groupBy = require('./groupBy.cjs');
var gt = require('./gt.cjs');
var gte = require('./gte.cjs');
var has = require('./has.cjs');
var identity = require('./identity.cjs');
var ifElse = require('./ifElse.cjs');
var isEven = require('./isEven.cjs');
var isOdd = require('./isOdd.cjs');
var last = require('./last.cjs');
var lt = require('./lt.cjs');
var lte = require('./lte.cjs');
var map = require('./map.cjs');
var mapKeys = require('./mapKeys.cjs');
var mapValues = require('./mapValues.cjs');
var minus = require('./minus.cjs');
var multiply = require('./multiply.cjs');
var noop = require('./noop.cjs');
var or = require('./or.cjs');
var pipe = require('./pipe.cjs');
var placeholder = require('./placeholder.cjs');
var pluck = require('./pluck.cjs');
var plus = require('./plus.cjs');
var self = require('./self.cjs');
var slice = require('./slice.cjs');
var sortBy = require('./sortBy.cjs');
var split = require('./split.cjs');
var startsWith = require('./startsWith.cjs');
var endsWith = require('./endsWith.cjs');
var tail = require('./tail.cjs');
var take = require('./take.cjs');
var test = require('./test.cjs');
var toLower = require('./toLower.cjs');
var toUpper = require('./toUpper.cjs');
var trim = require('./trim.cjs');
var type = require('./type.cjs');
var uniq = require('./uniq.cjs');
var uniqBy = require('./uniqBy.cjs');

const tikka = {
    and: and.default,
    any: any.default,
    compact: compact.default,
    coalesce: coalesce.default,
    concat: concat.default,
    contains: contains.default,
    countBy: countBy.default,
    countWhere: countWhere.default,
    curry: curry.default,
    curryRight: curryRight.default,
    debug: debug.default,
    deepClone: deepClone.default,
    sort: sort.default,
    deepForEach: deepForEach.default,
    deepMap: deepMap.default,
    every: every.default,
    filter: filter.default,
    find: find.default,
    findIndex: findIndex.default,
    first: head.default,
    flatten: flatten.default,
    forEach: forEach.default,
    forEachValues: forEachValues.default,
    get: get.default,
    getOr: getOr.default,
    grab: grab.default,
    groupBy: groupBy.default,
    gt: gt.default,
    gte: gte.default,
    has: has.default,
    head: head.default,
    identity: identity.default,
    ifElse: ifElse.default,
    includes: contains.default,
    isEven: isEven.default,
    isOdd: isOdd.default,
    last: last.default,
    lt: lt.default,
    lte: lte.default,
    map: map.default,
    mapKeys: mapKeys.default,
    mapValues: mapValues.default,
    minus: minus.default,
    multiply: multiply.default,
    noop: noop.default,
    or: or.default,
    pipe: pipe.default,
    placeholder: placeholder.default,
    pluck: pluck.default,
    plus: plus.default,
    select: grab.default,
    self: self.default,
    slice: slice.default,
    sortBy: sortBy.default,
    split: split.default,
    startsWith: startsWith.default,
    endsWith: endsWith.default,
    tail: tail.default,
    take: take.default,
    test: test.default,
    toLower: toLower.default,
    toUpper: toUpper.default,
    trim: trim.default,
    type: type.default,
    uniq: uniq.default,
    uniqBy: uniqBy.default,
    // Alias properties
    both: and.default,
    conjunction: and.default,
    some: any.default,
    anyPass: any.default,
    compactNil: compact.default,
    removeNil: compact.default,
    filterNil: compact.default,
    nonNil: compact.default,
    append: concat.default,
    conj: concat.default,
    includesValue: contains.default,
    containsValue: contains.default,
    member: contains.default,
    memberOf: contains.default,
    inList: contains.default,
    countIf: countWhere.default,
    tallyWhere: countWhere.default,
    autoCurry: curry.default,
    curryR: curryRight.default,
    rightCurry: curryRight.default,
    reverseCurry: curryRight.default,
    trace: debug.default,
    inspect: debug.default,
    peek: debug.default,
    cloneDeep: deepClone.default,
    copyDeep: deepClone.default,
    deepCopy: deepClone.default,
    sortWith: sort.default,
    sortOn: sort.default,
    orderWith: sort.default,
    order: sort.default,
    orderOn: sort.default,
    forEachDeep: deepForEach.default,
    eachDeep: deepForEach.default,
    walkDeep: deepForEach.default,
    mapDeep: deepMap.default,
    deepTransform: deepMap.default,
    all: every.default,
    allPass: every.default,
    eachPasses: every.default,
    where: filter.default,
    selectWhere: filter.default,
    keep: filter.default,
    keepIf: filter.default,
    keepWhere: filter.default,
    selectIf: filter.default,
    findFirst: find.default,
    firstWhere: find.default,
    indexWhere: findIndex.default,
    findPosition: findIndex.default,
    positionWhere: findIndex.default,
    headValue: head.default,
    firstItem: head.default,
    firstValue: head.default,
    flattenDeep: flatten.default,
    deepFlatten: flatten.default,
    concatAll: flatten.default,
    smoosh: flatten.default,
    flat: flatten.default,
    each: forEach.default,
    forEachItem: forEach.default,
    walk: forEach.default,
    eachValue: forEachValues.default,
    forEachValue: forEachValues.default,
    walkValues: forEachValues.default,
    prop: get.default,
    property: get.default,
    lookup: get.default,
    propOr: getOr.default,
    getDefault: getOr.default,
    getWithDefault: getOr.default,
    pick: grab.default,
    pickKeys: grab.default,
    selectKeys: grab.default,
    classify: groupBy.default,
    bucketBy: groupBy.default,
    partitionByKey: groupBy.default,
    greaterThan: gt.default,
    isGreaterThan: gt.default,
    greaterThanOrEqual: gte.default,
    isAtLeast: gte.default,
    hasKey: has.default,
    hasProp: has.default,
    hasOwnKey: has.default,
    id: identity.default,
    selfRef: identity.default,
    noopValue: identity.default,
    identityValue: identity.default,
    same: identity.default,
    idValue: identity.default,
    cond: ifElse.default,
    whenElse: ifElse.default,
    branch: ifElse.default,
    even: isEven.default,
    isDivisibleBy2: isEven.default,
    odd: isOdd.default,
    isNotDivisibleBy2: isOdd.default,
    lastItem: last.default,
    end: last.default,
    lastValue: last.default,
    endValue: last.default,
    lessThan: lt.default,
    isLessThan: lt.default,
    lessThanOrEqual: lte.default,
    isAtMost: lte.default,
    transformKeys: mapKeys.default,
    renameKeys: mapKeys.default,
    mapObjectKeys: mapKeys.default,
    transformValues: mapValues.default,
    mapObjectValues: mapValues.default,
    subtract: minus.default,
    sub: minus.default,
    difference: minus.default,
    doNothing: noop.default,
    noopFn: noop.default,
    pass: noop.default,
    either: or.default,
    disjunction: or.default,
    flow: pipe.default,
    composeLeft: pipe.default,
    chain: pipe.default,
    __: placeholder.default,
    hole: placeholder.default,
    argPlaceholder: placeholder.default,
    mapProp: pluck.default,
    projectProp: pluck.default,
    extractProp: pluck.default,
    propertyValues: pluck.default,
    add: plus.default,
    sum2: plus.default,
    add2: plus.default,
    sum: plus.default,
    orderBy: sortBy.default,
    sortByKey: sortBy.default,
    rest: tail.default,
    dropFirst: tail.default,
    takeLeft: take.default,
    firstN: take.default,
    headN: take.default,
    takeN: take.default,
    matches: test.default,
    regexTest: test.default,
    isMatch: test.default,
    testRegex: test.default,
    lower: toLower.default,
    lowerCase: toLower.default,
    downcase: toLower.default,
    upper: toUpper.default,
    upperCase: toUpper.default,
    upcase: toUpper.default,
    strip: trim.default,
    trimWhitespace: trim.default,
    typeOf: type.default,
    kindOf: type.default,
    tagOf: type.default,
    distinct: uniq.default,
    unique: uniq.default,
    dedupe: uniq.default,
    nub: uniq.default,
    distinctBy: uniqBy.default,
    uniqueBy: uniqBy.default,
    dedupeBy: uniqBy.default,
    nubBy: uniqBy.default,
};

exports.default = tikka;
//# sourceMappingURL=tikka.cjs.map
