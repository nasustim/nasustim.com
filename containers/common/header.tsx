import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles/header.module.scss'

const Header = () => {
  const isTopPage: boolean = useRouter().pathname === '/'

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        {isTopPage ? null : (
          <div className={styles.logo}>
            <Link href={'/'}>nasustim.com</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
