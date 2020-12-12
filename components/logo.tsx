import Image from 'next/image'

import styles from './styles/logo.module.scss'

const Logo = () => <div className={styles.container}><Image width={50} height={50} src={`/static/assets/logo.svg`} /></div>

export default Logo