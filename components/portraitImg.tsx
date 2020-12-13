import Image from 'next/image'
import styles from './styles/portraitImg.module.scss'

import { useState } from 'react'

export type ProfileProps = {
  src: string
}

const PortraitImg: React.FC<ProfileProps> = ({ src }) => {
  const [style, setStyle] = useState([
    [50, 50],
    [50, 50],
    [50, 50],
    [50, 50],
  ])

  const IntId = setInterval(() => {
    clearInterval(IntId)
    const newStyle = style.map(set)
    setStyle(newStyle)
  }, 5000)

  const _style = {
    borderRadius: `${style[0][0]}% ${style[1][0]}% ${style[2][0]}% ${style[3][0]}%/${style[0][1]}% ${style[1][1]}% ${style[2][1]}% ${style[3][1]}%`,
  }
  return (
    <div style={_style} className={styles.container}>
      {/*<Image width={100} height={100} layout={`responsive`} src={src} />*/}
      <img src={src} className={styles.img} />
    </div>
  )
}

function set() {
  let _v_0 = 50 + (Math.random() - 0.5) * 35
  let _v_1 = 50 + (Math.random() - 0.5) * 35

  return [_v_0, _v_1]
}

export default PortraitImg
