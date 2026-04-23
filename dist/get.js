import curryRight from './curryRight.js';

/**
 * Gets property by key.
 *
 * @example
 * get('a', { a: 1 }) // 1
 */
const get = (object, property) => object[property];
var get$1 = /*#__PURE__*/ curryRight(get);

export { get$1 as default };
//# sourceMappingURL=get.js.map
