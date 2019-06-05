import curryRight from './curryRight'
import get from './get'
import map from './map'

const grabFromOne = (obj, props) => {
  const result = {}
  props.forEach(p => (result[p] = get(p, obj)))
  return result
}

const grab = (data, props) => {
  if (Array.isArray(data)) return map(grabFromOne(props), collection)
  grabFromOne(data, props)
}

export default curryRight(grab)
