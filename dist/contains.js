import curryRight from './curryRight.js';

const contains = (searchTarget, value) => searchTarget.includes(value);
const containsCurried = /*#__PURE__*/ curryRight(contains);

export { containsCurried as default };
//# sourceMappingURL=contains.js.map
