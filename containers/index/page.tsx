import PortraitImg from 'components/index/portrait-img'
import ProfileContents from 'components/index/profile-contents'

import styles from './styles/page.module.scss'

export type ProfileProps = {
  imgUri: string
}

const Page: React.FC<ProfileProps> = ({ imgUri }) => {
  return (
    <section className={styles.wrapper}>
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
