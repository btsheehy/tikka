'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Removes duplicate values from an array using `Set` equality.
 * @param arr - Source array.
 * @returns A new array containing first occurrences only.
 *
 * @example
 * uniq(['a', 'b', 'a']) // ['a', 'b']
 */
const uniq = (arr) => Array.from(new Set(arr));

exports.default = uniq;
//# sourceMappingURL=uniq.cjs.map
