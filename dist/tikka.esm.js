const curry = (fn, arity = fn.length) => {
  const createCachedFunc = (fn, arity, existingArgs = []) => (...args) => {
    return (function(fn, arity, existingArgs = []) {
      const newArgs = Array.from(args);
      const currentArgs = existingArgs.concat(newArgs);
      if (currentArgs.length === arity) return fn(...currentArgs)
      if (currentArgs.length > arity)
        console.warn('Too many arguments passed to curried func.');
      return createCachedFunc(fn, arity, currentArgs)
    })(fn, arity, existingArgs)
  };
  return createCachedFunc(fn, arity)
};

const and = (a, b) => a && b;

var and$1 = curry(and);

const curryRight = (fn, arity = fn.length) => {
  const createCachedFunc = (fn, arity, existingArgs = []) => (...args) => {
    return (function(fn, arity, existingArgs = []) {
      const newArgs = Array.from(args);
      const currentArgs = existingArgs.concat(newArgs);
      if (currentArgs.length === arity) return fn(...currentArgs.reverse())
      if (currentArgs.length > arity)
        console.warn('Too many arguments passed to curried func.');
      return createCachedFunc(fn, arity, currentArgs)
    })(fn, arity, existingArgs)
  };
  return createCachedFunc(fn, arity)
};

const any = (arr, test) => {
  let i = 0;
  let length = arr.length;
  while (i < length) {
    const val = arr[i];
    const passes = test(val);
    if (passes) return true
    i++;
  }

  return false
};

var any$1 = curryRight(any);

const concat = (original, addition) => original.concat(addition);

var concat$1 = curryRight(concat);

const contains = (searchTarget, value) => {
  if (Array.isArray(searchTarget)) {
    let i = 0;
    let length = arr.length;
    while (i < length) {
      if (arr[i] === value) return true
      i++;
    }
    return false
  } else {
    return searchTarget.indexOf(value) > -1
  }
};

var contains$1 = curryRight(contains);

const filter = (arr, filterFunc) => arr.filter(val => filterFunc(val));

var filter$1 = curryRight(filter);

const countWhere = (arr, test) => {
  return filter$1(test, arr).length
};

var countWhere$1 = curryRight(countWhere);

const debug = (value, msg) => console.log(msg) || console.log(value) || value;

var debug$1 = curryRight(debug);

const map = (arr, fn) => arr.map(el => fn(el));

var map$1 = curryRight(map);

const mapValues = (obj, fn) => {
  const keys = Object.keys(obj);
  const newObj = {};
  keys.forEach(k => {
    newObj[k] = fn(obj[k]);
  });
  return newObj
};

var mapValues$1 = curryRight(mapValues);

const type = val => {
  if (val === null) return 'Null'
  if (val === undefined) return 'Undefined'
  return Object.prototype.toString.call(val).slice(8, -1)
};

// experimental

const deepMap = (data, func) => {
  const recurseFunc = data => {
    if (type(data) === 'Array') return map$1(func, data)
    if (type(data) === 'Object') return mapValues$1(func, data)
    return func(data)
  };
  return recurseFunc(data)
};

var deepMap$1 = curryRight(deepMap);

const cloneRegex = regex => {
  return new RegExp(
    regex.source,
    (regex.global ? 'g' : '') +
      (regex.ignoreCase ? 'i' : '') +
      (regex.multiline ? 'm' : '') +
      (regex.sticky ? 'y' : '') +
      (regex.unicode ? 'u' : '')
  )
};

const cloneValue = val => {
  if (type(val) === 'Date') return new Date(val.valueOf())
  if (type(val) === 'RegExp') return cloneRegex(val)
  else return val
};

const deepClone = data => deepMap$1(data, cloneValue);

const forEach = (arr, func) => {
  arr.forEach(val => func(val));
  return arr
};

var forEach$1 = curryRight(forEach);

// experimental

const deepForEach = (data, func) => {
  const recurseFunc = data => {
    if (type(data) === 'Array') return forEach$1(func, data)
    if (type(data) === 'Object') return mapValues$1(func, data)
    return func(data)
  };
  return recurseFunc(data)
};

var deepForEach$1 = curryRight(deepForEach);

const every = (arr, test) => {
  let allPass = true;
  let i = 0;
  let length = arr.length;
  while (i < length) {
    const passes = test(val);
    allPass = passes;
    if (!passes) break
    i++;
  }

  return allPass
};

var every$1 = curryRight(every);

const findIndex = (arr, findFunc) => {
  let i = 0;
  let length = arr.length;
  while (i < length) {
    if (findFunc(arr[i])) return i
    i++;
  }
  return -1
};

var findIndex$1 = curryRight(findIndex);

const find = (arr, findFunc) => {
  const i = findIndex$1(findFunc, arr);
  if (i > -1) return arr[i]
  return undefined
};

var find$1 = curryRight(find);

const head = arr => arr[0];

const flatten = arr => {
  let result = [];
  const flat = val => {
    if (!Array.isArray(val)) result.push(val);
    else {
      let i = 0;
      const length = val.length;
      while (i < length) {
        if (Array.isArray(val[i])) val[i].forEach(flat);
        else result.push(val[i]);
        i++;
      }
    }
  };
  flat(arr);
  return result
};

const forEachValues = (obj, fn) => {
  const keys = Object.keys(obj);
  keys.forEach(k => {
    fn(obj[k]);
  });
  return obj
};

var forEachValues$1 = curryRight(forEachValues);

const get = (object, property) => object[property];

var get$1 = curryRight(get);

const getOr = (obj, prop, defaultValue) => {
  if (obj.hasOwnProperty(prop)) return obj[prop]
  return defaultValue
};

var getOr$1 = curryRight(getOr);

const grabFromOne = (obj, props) => {
  const result = {};
  props.forEach(p => (result[p] = get$1(p, obj)));
  return result
};

const grab = (data, props) => {
  if (Array.isArray(data)) return map$1(grabFromOne(props), collection)
  grabFromOne(data, props);
};

var grab$1 = curryRight(grab);

const groupBy = (arr, groupingFunction) => {
  return arr.reduce((acc, val) => {
    const group = groupingFunction(val);
    if (acc[group]) acc[group].concat(val);
    else acc[group] = [val];
    return acc
  }, {})
};

var groupBy$1 = curryRight(groupBy);

const gt = (a, b) => a > b;

var gt$1 = curry(gt);

const gt$2 = (a, b) => a >= b;

var gte = curry(gt$2);

const has = (obj, prop) => obj.hasOwnProperty(prop);

var has$1 = curryRight(has);

const self = a => a;

const identity = self;

// TODO: Needs work

const ifElse = (test, onTrue, onFalse) => {
  const trueOrFalse = test();
  if (trueOrFalse) return onTrue()
  return onFalse()
};

var ifElse$1 = curryRight(ifElse);

const isEven = number => {
  return number % 2 === 0
};

const isOdd = number => !isEven(number);

const lt = (a, b) => a < b;

var lt$1 = curry(lt);

const lt$2 = (a, b) => a <= b;

var lte = curry(lt$2);

const mapKeys = (obj, fn) => {
  const keys = Object.keys(obj);
  const newObj = {};
  keys.forEach(k => {
    newObj[fn(k)] = obj[k];
  });
  return newObj
};

var mapKeys$1 = curryRight(mapKeys);

const noop = () => {};

const or = (a, b) => a || b;

var or$1 = curry(or);

const pipe = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val);

// TODO
var placeholder = null;

const pluck = (collection, prop) => {
  map$1(get$1(prop), collection);
};

var pluck$1 = curryRight(pluck);

const take = (arr, number) => {
  return arr.slice(0, number)
};

var take$1 = curryRight(take);

const test = (str, regex) => regex.test(str);

var test$1 = curryRight(test);

const toLower = str => str.toLocaleLowerCase();

const toUpper = str => str.toLocaleUpperCase();

const trim = str => str.trim();

const uniq = arr =>
  arr.reduce((acc, val) => (acc.includes(val) ? acc : acc.concat(val)), []);

// TODO: implement an equals function to handle
// nested equality checks

const uniqBy = (arr, uniqCond) => {
  const uniqResult = arr.reduce(
    (acc, val) => {
      const uniqByVal = uniqCond(val);
      const isUnique = !acc.uniqBy.contains(uniqByVal);
      return {
        newArr: isUnique ? acc.newArr.concat(val) : acc.newArr,
        uniqBy: isUnique ? acc.uniqBy.concat(uniqByVal) : acc.uniqBy,
      }
    },
    { uniqBy: [], newArr: [] }
  );
  return uniqResult.newArr
};

var uniqBy$1 = curryRight(uniqBy);

var index = {
  and: and$1,
  any: any$1,
  concat: concat$1,
  contains: contains$1,
  countWhere: countWhere$1,
  curry,
  curryRight,
  debug: debug$1,
  deepClone,
  deepForEach: deepForEach$1,
  deepMap: deepMap$1,
  every: every$1,
  filter: filter$1,
  find: find$1,
  findIndex: findIndex$1,
  first: head,
  flatten,
  forEach: forEach$1,
  forEachValues: forEachValues$1,
  get: get$1,
  getOr: getOr$1,
  grab: grab$1,
  groupBy: groupBy$1,
  gt: gt$1,
  gte,
  has: has$1,
  head,
  identity,
  ifElse: ifElse$1,
  includes: contains$1,
  isEven,
  isOdd,
  lt: lt$1,
  lte,
  map: map$1,
  mapKeys: mapKeys$1,
  mapValues: mapValues$1,
  noop,
  or: or$1,
  pipe,
  placeholder,
  pluck: pluck$1,
  select: grab$1,
  self,
  take: take$1,
  test: test$1,
  toLower,
  toUpper,
  trim,
  type,
  uniq,
  uniqBy: uniqBy$1,
};

export default index;
