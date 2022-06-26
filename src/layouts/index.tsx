import { type ReactNode } from 'react'

import Footer from './footer'

import styles from '../styles/layouts/index.module.scss'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
