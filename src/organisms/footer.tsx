import styles from '../styles/organisms/footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagramSquare, faKeybase, IconDefinition } from '@fortawesome/free-brands-svg-icons'

type SNSs = Array<[string, IconDefinition]>
const snss: SNSs = [
  ['https://github.com/nasustim', faGithub],
  ['https://facebook.com/mitsuhibino', faFacebook],
  ['https://instagram.com/nasustim', faInstagramSquare],
  ['https://keybase.io/nasustim', faKeybase],
]

const Component: React.VFC = () => {
  return (
    <footer>
      <div className={styles.sns_link_list}>
        {snss.map(([url, icon], i) => (
          <a href={url} key={`sns-icon-${i}`}>
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <div className={styles.credit}>
        <small>© 2022 nasustim.</small>
      </div>
    </footer>
  )
}

export default Component
