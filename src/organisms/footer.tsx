import { SocialIcon } from 'react-social-icons'

import styles from '../styles/organisms/footer.module.scss'

const socialServiceUrls = [
  'https://github.com/nasustim',
  'https://facebook.com/mitsuhibino',
  'https://instagram.com/nasustim',
  'https://keybase.io/nasustim',
]

const Component: React.VFC = () => {
  return (
    <footer>
      <div className={styles.sns_link_list}>
        {socialServiceUrls.map((v, i) => (
          <SocialIcon url={v} fgColor='transparent' key={`social-icon--${i}`} />
        ))}
      </div>
      <div className={styles.credit}>
        <small>© 2022 nasustim.</small>
      </div>
    </footer>
  )
}

export default Component
