import styles from '../styles/organisms/sns-list.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagramSquare, faKeybase, IconDefinition } from '@fortawesome/free-brands-svg-icons'

type SNSs = Array<[string, IconDefinition]>
const snss: SNSs = [
  ['https://github.com/nasustim', faGithub],
  ['https://facebook.com/mitsuhibino', faFacebook],
  ['https://instagram.com/mitsu.mn5t', faInstagramSquare],
  ['https://keybase.io/nasustim', faKeybase],
]

const Component: React.VFC = () => (
  <div className={styles.sns_link_list}>
    {snss.map(([url, icon], i) => (
      <a href={url} key={`sns-icon-${i}`} className={styles.sns_link_list__link} target='_blank'>
        <FontAwesomeIcon icon={icon} className={styles.sns_link_list__icon} />
      </a>
    ))}
  </div>
)

export default Component