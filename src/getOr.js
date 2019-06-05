import curryRight from './curryRight'

const getOr = (obj, prop, defaultValue) => {
  if (obj.hasOwnProperty(prop)) return obj[prop]
  return defaultValue
}

export default curryRight(getOr)
