import SocialList from './social-list'
import styles from './styles/profile-contents.module.scss'

const ProfileContents = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h1>nasustim</h1>
      <SocialList />
    </div>
  </div>
)

export default ProfileContents
