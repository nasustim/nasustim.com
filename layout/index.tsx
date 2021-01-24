import React from 'react'
import styles from './index.module.scss'

import { useRouter } from 'next/router'

import Background from 'containers/common/background'
import Header from 'containers/common/header'

type Props = {
  children: React.ReactNode
}

export const LocationContext = React.createContext('/')

const Layout: React.FC<Props> = ({ children }) => {
  const location = useRouter().asPath

  return (
    <div className={styles.layout}>
      <LocationContext.Provider value={location}>
        <div className={styles.background}>
          <Background />
        </div>
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.content}>{children}</main>
        </div>
      </LocationContext.Provider>
    </div>
  )
}

export default Layout
