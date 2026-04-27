import curryRight from './curryRight.js';

/**
 * pluck utility function.
 * @param collection - Input value for collection.
 * @param prop - Input value for prop.
 * @returns The computed result.
 *
 * @example
 * pluckImpl(collection, prop)
 */
const pluckImpl = (collection, prop) => collection.map((item) => item[prop]);
const pluck = /*#__PURE__*/ curryRight(pluckImpl);

export { pluck as default };
//# sourceMappingURL=pluck.js.map
