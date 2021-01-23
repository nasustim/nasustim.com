import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles/header.module.scss'

const Header = () => {
  const isTopPage: boolean = useRouter().pathname === '/'

  return (
    <div className={styles.container}>
      {isTopPage ? null : (
        <div className={styles.logo}>
          <Link href={'/'}>nasustim.com</Link>
        </div>
      )}
      <div className={styles.nav}>
        <p>
          <Link href={`/about-me`}>
            <span>About Me</span>
          </Link>
          <Link href={`/works`}>
            <span>Works</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Header
