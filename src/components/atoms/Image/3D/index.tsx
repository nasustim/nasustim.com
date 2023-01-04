import React, { useEffect, useRef, useState } from 'react'

import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  AmbientLight,
  TextureLoader,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  BoxGeometry,
} from 'three'
import AnimationManager from '../../../../animation/ease-in-out-reverse'

import { Props } from '../Normal'

const Image3D: React.FC<Props> = ({ width, height, src }) => {
  const contaierId = 'image-3d'
  const contaierRef = useRef<HTMLDivElement>(null)

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

    let anim: AnimationManager
    const texture = new TextureLoader().load(src, (tex) => {
      const w = 70 // [%]
      const h = 70 // [%]

      const geometry = new BoxGeometry(1, 1, 0.001, 1, 1)
      const material = new MeshStandardMaterial({ map: texture, roughness: 0.5 })

      const plane = new Mesh(geometry, material)
      plane.scale.set(w, h, 1)
      scene.add(plane)

      anim = new AnimationManager(plane)
      contaierRef.current?.addEventListener('mouseenter', () => {
        anim.onMouseEnter()
      })
      contaierRef.current?.addEventListener('mouseleave', () => {
        anim.onMouseLeave()
      })
    })

    function render() {
      if (anim) {
        anim.run()
      }
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }
    render()
  }, [])

  const style = {
    width: `${width}px`,
    height: `${height}px`,
  }

  return <div style={style} id={contaierId} ref={contaierRef}></div>
}

export default Image3D
