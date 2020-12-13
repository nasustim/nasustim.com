import React from 'react'
import PortraitImg from '../components/portraitImg'
import OutlineProfile from './outlineProfile'

import styles from './styles/mainItem.module.scss'

export type ProfileProps = {
  text: Array<string>
  imgUri: string
}

const MainItem: React.FC<ProfileProps> = ({ text, imgUri }) => {
  return (
    <section className={styles.container}>
      <div className={styles.profileImg}>
        <PortraitImg src={imgUri} />
      </div>
      <div className={styles.profileText}>
        <OutlineProfile text={text} />
      </div>
    </section>
  )
}

export default MainItem
