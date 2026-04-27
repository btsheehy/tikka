/**
 * Removes duplicate values from an array using `Set` equality.
 * @param arr - Source array.
 * @returns A new array containing first occurrences only.
 *
 * @example
 * uniq(['a', 'b', 'a']) // ['a', 'b']
 */
const uniq = (arr) => Array.from(new Set(arr));

export { uniq as default };
//# sourceMappingURL=uniq.js.map
