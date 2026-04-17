import curryRight from './curryRight.js';

const pluck = (collection, prop) => collection.map((item) => item[prop]);
var pluck$1 = /*#__PURE__*/ curryRight(pluck);

export { pluck$1 as default };
//# sourceMappingURL=pluck.js.map
