import curryRight from './curryRight.js';

/**
 * Reads a property from an object by key.
 * @param object - Object to read from.
 * @param property - Property key to retrieve.
 * @returns The value stored at `object[property]`.
 *
 * @example
 * get('name', { id: 1, name: 'Ada' }) // 'Ada'
 */
const getImpl = (object, property) => object[property];
const get = /*#__PURE__*/ curryRight(getImpl);

export { get as default };
//# sourceMappingURL=get.js.map
