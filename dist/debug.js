import curryRight from './curryRight.js';

const debug = (value, msg) => {
    console.log(msg);
    console.log(value);
    return value;
};
var debug$1 = /*#__PURE__*/ curryRight(debug);

export { debug$1 as default };
//# sourceMappingURL=debug.js.map
