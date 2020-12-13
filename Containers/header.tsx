import Logo from '../components/logo'
import styles from './styles/header.module.scss'

const Header = () => (
  <div className={styles.container}>
    <Logo />
  </div>
)

export default Header
