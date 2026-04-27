'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curryRight = require('./curryRight.cjs');

/**
 * Falls back when a value is `null` or `undefined`.
 * @param value - Preferred value.
 * @param fallback - Value used only when `value` is nullish.
 * @returns `value` when present, otherwise `fallback`.
 *
 * @example
 * coalesce('Anonymous', profile.nickname)
 */
const coalesce = (value, fallback) => value ?? fallback;
const coalesceCurried = /*#__PURE__*/ curryRight.default(coalesce);

exports.default = coalesceCurried;
//# sourceMappingURL=coalesce.cjs.map
