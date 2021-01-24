import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles/header.module.scss'

import { LocationContext } from 'layout'

const options = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
}

const pageNames = ['works', 'about-me', 'top']

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
      <div className={styles.logo} data-is-hide={!isTopPage || !isTopContent ? '1' : '0'}>
        <Link href={'/'}>nasustim.com</Link>
      </div>
      <div className={styles.nav} data-is-hide={!isTopPage ? '1' : '0'}>
        <p>
          <Link href={`/#about-me`}>
            <span data-is-top={isTopPage && currentContent == 'about-me' ? 'true' : 'false'}>About Me</span>
          </Link>
          <Link href={`/#works`}>
            <span data-is-top={isTopPage && currentContent == 'works' ? 'true' : 'false'}>Works</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Header
