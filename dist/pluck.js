import curryRight from './curryRight.js';

const pluckImpl = (collection, prop) => collection.map((item) => item[prop]);
/**
 * Extracts one property from every object in a collection.
 * @param collection - Array of source objects.
 * @param prop - Property name to read from each item.
 * @returns Array of values for `prop`, preserving item order.
 *
 * @example
 * pluck('id', [{ id: 1 }, { id: 2 }]) // [1, 2]
 */
const pluck = /*#__PURE__*/ curryRight(pluckImpl);

export { pluck as default };
//# sourceMappingURL=pluck.js.map
