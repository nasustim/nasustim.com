// import Image from 'next/image' <- netlify deployにまだ対応していないらしい
import {
  Scene,
} from 'three'
import styles from './styles/portraitImg.module.scss'

import React from 'react'

export type ProfileProps = {
  src: string
}

type State = ProfileProps & {
  curveStyle: number[][]
}

export default class PortraitImg extends React.Component<ProfileProps, State> {
  constructor (props) {
    super(props)
    this.state = {
      curveStyle: [
        [50, 50],
        [50, 50],
        [50, 50],
        [50, 50],
      ],
      src: props.src
    }
  }
  componentDidMount () {
    const IntId = setInterval(() => {
      clearInterval(IntId)
      const newStyle = this.state.curveStyle.map(set)
      this.setState({
        curveStyle: newStyle
      })
    }, 5000)
  }
  render () {
    const src = this.state.src
    const style = this.state.curveStyle
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
}

function set() {
  let _v_0 = 50 + (Math.random() - 0.5) * 35
  let _v_1 = 50 + (Math.random() - 0.5) * 35

  return [_v_0, _v_1]
}
