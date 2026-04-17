'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const uniq = (arr) => arr.reduce((acc, val) => (acc.includes(val) ? acc : acc.concat(val)), []);

exports.default = uniq;
//# sourceMappingURL=uniq.cjs.map
