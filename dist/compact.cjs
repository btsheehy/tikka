'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var filter = require('./filter.cjs');

/**
 * Removes `null` and `undefined` values from an array.
 */
const compact = (arr) => {
    return filter.default((value) => value != null, arr);
};

exports.default = compact;
//# sourceMappingURL=compact.cjs.map
