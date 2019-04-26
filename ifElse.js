// TODO: Needs work

const ifElse = (test, onTrue, onFalse) => {
  const trueOrFalse = test()
  if (trueOrFalse) return onTrue()
  return onFalse()
}

export default ifElse
