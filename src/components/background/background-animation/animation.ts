import {
  Color,
  DirectionalLight,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from 'three'

const BASIS_X = 0.6
const BASIS_Y = 0.19

export class Animation {
  camera: PerspectiveCamera
  scene: Scene
  renderer: WebGLRenderer
  mesh: Mesh

  isExpanding: boolean = true

  constructor(width: number, height: number, htmlId: string) {
    this.camera = this.createCamera(width, height)

    this.scene = new Scene()
    this.scene.background = new Color(0xfafafd)

    // light
    const light = new DirectionalLight(0xffffff, 0.3)
    light.position.set(0, 0, 30)
    this.scene.add(light)

    const geometry = new TorusGeometry(1, undefined, 40, 48 * 3, undefined)
    const material = new MeshLambertMaterial({ color: new Color(63, 0, 255) })
    const mesh = new Mesh(geometry, material)
    mesh.position.set(0, 0, 1)
    mesh.rotation.x = BASIS_X
    mesh.rotation.y = BASIS_Y
    this.scene.add(mesh)
    this.mesh = mesh

    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setSize(width, height)
    this.renderer.setAnimationLoop(this.animate.bind(this))
    document.getElementById(htmlId)?.appendChild(this.renderer.domElement)

    setInterval(() => {
      this.isExpanding = !this.isExpanding
    }, 15000)
  }

  updateScene(width: number, height: number) {
    this.camera = this.createCamera(width, height)
    this.renderer.setSize(width, height)
  }

  private createCamera(width: number, height: number): PerspectiveCamera {
    const camera = new PerspectiveCamera(50, width / height, 0.3, 5)
    camera.position.z = 2.15
    return camera
  }

  private animate(_time: DOMHighResTimeStamp, _frame: XRFrame) {
    const basis = 0.5 + (this.isExpanding ? 0.1 : -0.1)

    this.mesh.rotation.x +=
      ((Math.random() -
        basis +
        (Math.random() - basis) +
        (Math.random() - basis) +
        (Math.random() - basis) +
        (Math.random() - basis) +
        (Math.random() - basis)) /
        6) *
      0.002
    if (this.mesh.rotation.x > BASIS_X + 4) {
      this.mesh.rotation.x = BASIS_X + 4
    }
    if (this.mesh.rotation.x < BASIS_X - 4) {
      this.mesh.rotation.x = BASIS_X - 4
    }

    this.mesh.rotation.z += 0.2

    this.renderer.render(this.scene, this.camera)
  }
}
