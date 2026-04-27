'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function slice(start, endOrStr, maybeStr) {
    if (typeof endOrStr === 'string') {
        return endOrStr.slice(start);
    }
    return maybeStr.slice(start, endOrStr);
}

exports.default = slice;
//# sourceMappingURL=slice.cjs.map
