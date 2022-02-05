import React from 'react'

import { SocialIcon } from 'react-social-icons'

import styles from './style.module.scss'

const socialServiceUrls = [
  'https://github.com/nasustim',
  'https://facebook.com/mitsuhibino',
  'https://instagram.com/nasustim',
  'https://keybase.io/nasustim',
]

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <footer>
        <div className={styles.external_profile_list}>
          {socialServiceUrls.map((v) => (
            <SocialIcon url={v} fgColor='transparent' />
          ))}
        </div>
        <div style={{ width: '100%', margin: '20px auto 10px', textAlign: 'center' }}>
          <small className='text'>© 2022 nasustim.</small>
        </div>
      </footer>
    </div>
  )
}

export default Layout
