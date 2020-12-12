import Image from 'next/image'
import styles from './styles/portraitImg.module.scss'

export type ProfileProps = {
  src: string
}

const PortraitImg: React.FC<ProfileProps> = ({ src }) => <div className={ styles.container }>
  <Image width={100} height={100} layout={`responsive`} src={src} />
</div>

export default PortraitImg