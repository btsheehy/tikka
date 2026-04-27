import curryRight from './curryRight.js';

/**
 * Gets property by key.
 *
 * @example
 * get('a', { a: 1 }) // 1
 * @param object - Input value for object.
 * @param property - Input value for property.
 * @returns The computed result.
 */
const getImpl = (object, property) => object[property];
const get = /*#__PURE__*/ curryRight(getImpl);

export { get as default };
//# sourceMappingURL=get.js.map
