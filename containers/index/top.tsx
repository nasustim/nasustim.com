import PortraitImg from 'components/index/portrait-img'
import ProfileContents from 'components/index/profile-contents'

import styles from './styles/top.module.scss'

export type ProfileProps = {
  imgUri: string
  id?: string
}

const Page: React.FC<ProfileProps> = ({ id = undefined, imgUri }) => {
  return (
    <section id={id} className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <PortraitImg src={imgUri} />
      </div>
      <div className={styles.descriptionContainer}>
        <ProfileContents />
      </div>
    </section>
  )
}

export default Page
