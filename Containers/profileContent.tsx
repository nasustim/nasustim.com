import React from 'react'
import PortraitImg from '../components/portraitImg'
import ProfileText from './profileText'

import styles from './styles/profileContent.module.scss'

export type ProfileProps = {
  text: Array<string>
}

const ProfileContent: React.FC<ProfileProps> = ({ text,  }) => {
  return <article className={styles.container}>
    <div className={ styles.profileImg }>
      <PortraitImg src={`/static/contents/2018-11.jpg`} />
    </div>
    <div className={ styles.profileText }>
      <ProfileText text={text}/>
    </div>
  </article>
}

export default ProfileContent