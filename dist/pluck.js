import curryRight from './curryRight.js';

/**
 * pluck utility function.
 */
const pluckImpl = (collection, prop) => collection.map((item) => item[prop]);
const pluck = /*#__PURE__*/ curryRight(pluckImpl);

export { pluck as default };
//# sourceMappingURL=pluck.js.map
