import { useState, useEffect, useContext } from 'react'
import styles from './styles/header.module.scss'

import Link from 'next/link'

import { LocationContext } from 'layout'

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
      <div className={styles.logo} data-is-hide={!isTopPage || !isTopContent ? '1' : '0'}>
        <Link href={'/'}>nasustim.com</Link>
      </div>
      <div className={styles.nav} data-is-hide={!isTopPage ? '1' : '0'}>
        <p>
          <span
            onClick={(_) => scroll('about-me', currentContent)}
            data-is-top={isTopPage && currentContent == 'bio' ? 'true' : 'false'}>
            Bio
          </span>
          <span
            onClick={(_) => scroll('works', currentContent)}
            data-is-top={isTopPage && currentContent == 'works' ? 'true' : 'false'}>
            Works
          </span>
        </p>
      </div>
    </div>
  )
}

const scroll = (_id: string, _currentContent: string) => {
  if (_currentContent === _id) return

  const element = document.getElementById(_id)
  if (element) {
    console.log(element.getBoundingClientRect().top)
    window.scrollTo({
      top: window.pageYOffset + element.getBoundingClientRect().top - 80,
      behavior: 'smooth',
    })
  }
}

export default Header
