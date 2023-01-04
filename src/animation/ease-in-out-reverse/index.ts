import { Euler, Mesh, Vector3 } from 'three'

type EaseInOut = Generator<number, number, boolean>

function* easeInOut(max: number, duration: number): EaseInOut {
  // ref: https://easings.net/#easeInOutQuart
  const calc = (x: number) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2) * max

  for (let i = 0; i <= duration; i++) {
    yield calc(i / duration)
  }
  return calc(1)
}

class EaseInOutReverse {
  _mesh: Mesh

  _whileAction: boolean
  _actionStep: EaseInOut

  _velocity: number
  constructor(mesh: Mesh) {
    this._mesh = mesh
    this._whileAction = false
    this._velocity = 0
    this._actionStep = easeInOut(Math.PI * 3, 60 * 3)
  }

  onMouseEnter() {
    if (!this._whileAction) {
      this._actionStep = easeInOut(Math.PI * 3, 60 * 3)
      this._whileAction = true
    }
  }
  onMouseLeave() {}

  run() {
    let diff = 0
    if (this._whileAction) {
      const current = this._actionStep.next()
      if (current.done) {
        this._whileAction = false
      } else {
        diff = current.value
      }
    }

    this._mesh.rotation.set(0, diff, 0)
  }
}

export default EaseInOutReverse
