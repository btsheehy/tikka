/**
 * @name keyedToArray
 * @param obj - The object of objects that is keyed by the id
 * @description - Takes an object and converts it to an array of objects, wherein
 * the keys of the object become the `id` property of the objects in the new collection
 * @example - keyedToArray({a: {foo: 'bar'}, b: {bar: 'baz'}}) // [{id: 'a', foo: 'bar'}, {id: 'b', bar: 'baz'}]
 */
export default obj => {
  const keys = Object.keys(obj)
  return keys.map(k => ({ ...obj[k], id: k }))
}
