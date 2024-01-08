import { type FC } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import ProfileImageSrc from '@/statics/profile_400x400.jpg'

type Props = { width: number; height: number }

const ProfileImage: FC<Props> = (props) => (
  <Image src={ProfileImageSrc} {...props} alt='my portrait' className={styles.container} />
)

export default ProfileImage
