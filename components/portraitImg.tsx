import Image from 'next/image'
import styles from './styles/portraitImg.module.scss'

import {useState} from 'react'

export type ProfileProps = {
  src: string
}

const PortraitImg: React.FC<ProfileProps> = ({ src }) => {

  const [style, setStyle] = useState([
    [30, 30],
    [30, 30],
    [30, 30],
    [30, 30],
  ])
  setInterval(() => {
    const newStyle = style.map(set)
    setStyle(newStyle)
  }, 2500)

  const _style = {
    borderRadius: `${style[0][0]}% ${style[1][0]}% ${style[2][0]}% ${style[3][0]}%/${style[0][1]}% ${style[1][1]}% ${style[2][1]}% ${style[3][1]}%`
  }
  return <div style={_style} className={ styles.container }>
    <Image width={100} height={100} layout={`responsive`} src={src} />
  </div>
}

function set (v: Array<number>, index: number) {
  let _v_0 =  25 + (Math.random() - 0.5) * 50
  let _v_1 =  50 - _v_0

  return [_v_0, _v_1]
}

export default PortraitImg