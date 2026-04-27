import curryRight from './curryRight.js';

/**
 * Checks whether a string ends with a suffix.
 * @param str - Full string to inspect.
 * @param suffix - Trailing substring to match.
 * @returns `true` when `str` ends with `suffix`.
 *
 * @example
 * endsWith('.ts', 'index.ts') // true
 */
const endsWith = (str, suffix) => str.endsWith(suffix);
const endsWithCurried = /*#__PURE__*/ curryRight(endsWith);

export { endsWithCurried as default };
//# sourceMappingURL=endsWith.js.map
