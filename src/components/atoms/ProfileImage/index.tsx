import { type FC } from 'react'
import styles from './index.module.scss'

type Props = JSX.IntrinsicElements['img']

// eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
const ProfileImage: FC<Props> = (props) => <img {...props} className={styles.container} />

export default ProfileImage
