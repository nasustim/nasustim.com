import { type ComponentProps, type FC } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

type Props = Omit<ComponentProps<typeof Image>, 'alt'>

const ProfileImage: FC<Props> = (props) => <Image {...props} alt='my portrait' className={styles.container} />

export default ProfileImage
