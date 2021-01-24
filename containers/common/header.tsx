import { useState, useEffect, useContext } from 'react'
import styles from './styles/header.module.scss'

import Link from 'next/link'

import { LocationContext } from 'layout'
import HeaderLink from 'components/common/header-link'

import scroll from 'utils/scroller'

const options = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
}

const pageNames = ['works', 'bio', 'top']

const Header = () => {
  const [currentContent, updateCurrentContent] = useState('')
  const location = useContext(LocationContext)

  const isTopPage = '/' === location
  const isTopContent = currentContent === 'top'

  useEffect(() => {
    const pages = pageNames.map((v) => document.getElementById(v)).filter((v) => v != null) as HTMLElement[]

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((v) => {
        if (v.isIntersecting && v.target.id && v.target.id !== currentContent) {
          updateCurrentContent(v.target.id)
        }
      })
    }, options)

    if (pages.length === 0) updateCurrentContent('')
    else pages.forEach((page) => observer.observe(page))

    return function () {
      updateCurrentContent('top')
      pages.forEach((page) => observer.unobserve(page))
    }
  }, [isTopPage])

  return (
    <div className={styles.container}>
      <div className={styles.logo} data-is-hide={!isTopPage || !isTopContent ? '0' : '1'}>
        {isTopPage ? (
          <span
            onClick={(_) => {
              scroll('top')
            }}>
            nasustim.com
          </span>
        ) : (
          <Link href={'/'}>nasustim.com</Link>
        )}
      </div>
      <nav className={styles.nav} data-is-hide={!isTopPage ? '1' : '0'}>
        <HeaderLink scrollTo={`bio`} isCurrent={isTopPage && currentContent === 'bio'}>
          Bio
        </HeaderLink>
        <HeaderLink scrollTo={`works`} isCurrent={isTopPage && currentContent === 'works'}>
          Works
        </HeaderLink>
      </nav>
    </div>
  )
}

export default Header
