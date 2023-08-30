import { type FC } from 'react'
import styles from './index.module.scss'

type Props = JSX.IntrinsicElements['img']

const ProfileImage: FC<Props> = (props) => <img {...props} className={styles.container} />

export default ProfileImage
