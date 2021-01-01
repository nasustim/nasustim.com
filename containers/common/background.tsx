import React from 'react'

import styles from './styles/background.module.scss'

// canvasをappendすることを考えるとstateの操作が明示的なclass componentにしておきたい
export default class BackGround extends React.Component {
  render() {
    return <div className={styles.background} />
  }
}
