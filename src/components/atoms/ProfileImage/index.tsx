import { type FC } from 'react'
import Image from 'next/image'
import ProfileImageSrc from '@public/static/profile_400x400.jpg'

type Props = { width: number; height: number }

const ProfileImage: FC<Props> = (props) => (
  <Image src={ProfileImageSrc} {...props} alt='my portrait' className={'rounded'} />
)

export default ProfileImage
