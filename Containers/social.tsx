import styles from './styles/social.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebook, faKeybase } from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'

const Social: React.FC<{}> = () => {
  return <div className={styles.container}>
    <div className={styles.item}>
      <Link href={`https://github.com/nasustim`}><FontAwesomeIcon icon={faGithub} /></Link>
    </div>
    <div className={styles.item}>
      <Link href={`https://twitter.com/nasustim`}><FontAwesomeIcon icon={faTwitter} /></Link>
    </div>
    <div className={styles.item}>
      <Link href={`https://facebook.com/mitsuhibino`}><FontAwesomeIcon icon={faFacebook} /></Link>
    </div>
    <div className={styles.item}>
      <Link href={`https://keybase.io/nasustim`}><FontAwesomeIcon icon={faKeybase} /></Link>
    </div>
  </div>
}

export default Social