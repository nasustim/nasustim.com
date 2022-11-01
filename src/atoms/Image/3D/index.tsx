import React, { useEffect } from 'react'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  AmbientLight,
  TextureLoader,
  PlaneGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three'

import { BaseProps } from '../const'

const Image3D: React.FC<BaseProps> = ({ width, height, src }) => {
  const contaierId = 'image-3d'

  useEffect(() => {
    document.querySelectorAll(`#${contaierId} > *`).forEach((c) => {
      document.getElementById(contaierId)?.removeChild(c)
    })

    // reference: https://qiita.com/karadaharu/items/436134d336ad94b50b57
    const scene = new Scene()
    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(1)

    document.getElementById(contaierId)?.appendChild(renderer.domElement)

    const camera = new PerspectiveCamera(50, 1, 1, 1000)
    camera.position.set(0, 0, 100)

    const light = new AmbientLight(0xffffff)
    scene.add(light)

    const texture = new TextureLoader().load(src, (tex) => {
      const w = 95 // [%]
      const h = 95 // [%]

      const geometry = new PlaneGeometry(1, 1, 64, 64)
      const material = new MeshBasicMaterial({ map: texture })

      const plane = new Mesh(geometry, material)
      plane.scale.set(w, h, 1)
      scene.add(plane)
    })

    function render() {
      requestAnimationFrame(render)
      renderer.render(scene, camera)
    }
    render()
  }, [])

  const style = {
    width: `${width}px`,
    height: `${height}px`,
  }
  return <div style={style} id={contaierId}></div>
}

export default Image3D
