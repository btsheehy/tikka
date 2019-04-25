import curryRight from './curryRight'
import map from './map'
import get from './get'

const pluck = (collection, prop) => {
  map(get(prop), collection)
}

export default curryRight(pluck)
