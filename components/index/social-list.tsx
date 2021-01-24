import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles/social-list.module.scss'

const SocialList = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <a href={`https://github.com/nasustim`}>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
    </div>
    <div className={styles.item}>
      <a href={`https://twitter.com/nasustim`}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    </div>
    <div className={styles.item}>
      <a href={`https://facebook.com/mitsuhibino`}>
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
    </div>
    <div className={styles.item}>
      <a href={`https://keybase.io/nasustim`}>
        <FontAwesomeIcon icon={['fab', 'keybase']} />
      </a>
    </div>
  </div>
)
export default SocialList
