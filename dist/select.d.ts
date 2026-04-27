import grab from './grab';
/**
 * Alias of `grab`; picks selected keys from an object or object array.
 * @param props - Keys to pick.
 * @param data - Source object or array of objects.
 * @returns A partial object (or array of partial objects) with only the requested keys.
 *
 * @example
 * select(['id'], [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]) // [{ id: 1 }, { id: 2 }]
 */
export default grab;
//# sourceMappingURL=select.d.ts.map