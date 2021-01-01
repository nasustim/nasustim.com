import Link from 'next/link'

import SocialList from './social-list'

import styles from './styles/profile-contents.module.scss'

const ProfileContents = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBg}></div>
      <div className={styles.text}>
        <h1>nasustim</h1>
        <p>
          <Link href={`/about-me`}>
            <span>{`About Me`}</span>
          </Link>
        </p>
        <SocialList />
      </div>
    </div>
  )
}

export default ProfileContents
