import { Color, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene, WebGLRenderer } from 'three'

function exec(width: number, height: number, htmlId: string) {
  const camera = new PerspectiveCamera(70, width / height, 0.1, 10)
  camera.position.z = 1

  const scene = new Scene()
  // make background white
  scene.background = new Color(0xffffff)

  const material = new MeshBasicMaterial({ color: 0xeeeeee })
  const geometry = new PlaneGeometry(150, 150, 500, 500)

  const mesh = new Mesh(geometry, material)
  scene.add(mesh)

  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setAnimationLoop((_: number) => {
    renderer.render(scene, camera)
  })
  document.getElementById(htmlId)?.appendChild(renderer.domElement)
}

export function useAnimation() {
  const startAnimation = (...args: Parameters<typeof exec>) => {
    exec(...args)
  }

  return {
    startAnimation,
  }
}
