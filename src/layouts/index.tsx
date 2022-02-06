import React from 'react'

import Footer from '../organisms/footer'

import styles from '../styles/layouts/index.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
