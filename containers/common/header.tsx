import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles/header.module.scss'

const options = {
  root: null,
  rootMargin: '-50% 0px',
  threshold: 0,
}

const Header = () => {
  const [currentPage, updateCurrentPage] = useState('')
  useEffect(() => {
    const pages = ['works', 'about-me', 'top'].map((v) => document.getElementById(v)) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((v) => {
        if (v.isIntersecting && v.target.id && v.target.id !== currentPage) {
          updateCurrentPage(v.target.id)
        }
      })
    }, options)
    pages.forEach((page) => observer.observe(page))
  }, [currentPage])

  const isTopPage = currentPage === 'top' || useRouter().pathname != '/'

  return (
    <div className={styles.container}>
      <div className={styles.logo} data-is-top={isTopPage ? 'true' : 'false'}>
        <Link href={'/'}>nasustim.com</Link>
      </div>
      <div className={styles.nav}>
        <p>
          <Link href={`/#about-me`}>
            <span data-is-top={!isTopPage && currentPage == 'about-me' ? 'true' : 'false'}>About Me</span>
          </Link>
          <Link href={`/#works`}>
            <span data-is-top={!isTopPage && currentPage == 'works' ? 'true' : 'false'}>Works</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Header
