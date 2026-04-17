import curry from './curry'

const gt = (a: number, b: number) => a > b

export default /*#__PURE__*/ curry(gt)
