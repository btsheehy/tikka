import curryRight from './curryRight.js';

/**
 * Returns `value` unless it is `null` or `undefined`, otherwise returns `fallback`.
 */
const coalesce = (value, fallback) => (value ?? fallback);
var coalesce$1 = /*#__PURE__*/ curryRight(coalesce);

export { coalesce$1 as default };
//# sourceMappingURL=coalesce.js.map
