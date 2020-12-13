import styles from './styles/social.module.scss'

//import layoutStyles from './styles/profileContent.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebook, faKeybase } from '@fortawesome/free-brands-svg-icons'

const Social: React.FC<{}> = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <a href={`https://github.com/nasustim`}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <div className={styles.item}>
      <a href={`https://twitter.com/nasustim`}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
    <div className={styles.item}>
      <a href={`https://facebook.com/mitsuhibino`}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
    <div className={styles.item}>
      <a href={`https://keybase.io/nasustim`}>
        <FontAwesomeIcon icon={faKeybase} />
      </a>
    </div>
  </div>
)
export default Social
