import React from 'react'

import scroll from 'utils/scroller'

import styles from './styles/header-link.module.scss'

type Props = {
  children: React.ReactNode
  isCurrent: boolean
  scrollTo: string
}

const HeaderLink: React.FC<Props> = ({ children, isCurrent, scrollTo }) => {
  return (
    <span
      className={styles.container}
      onClick={(_) => {
        if (!isCurrent) scroll(scrollTo)
      }}
      data-is-top={isCurrent ? '1' : '0'}
    >
      {children}
    </span>
  )
}

export default HeaderLink
