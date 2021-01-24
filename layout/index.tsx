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
  const location = useRouter().pathname

  return (
    <div className={styles.layout}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.container}>
        <LocationContext.Provider value={location}>
          <header className={styles.header}>
            <Header />
          </header>
        </LocationContext.Provider>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
