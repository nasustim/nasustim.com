import React from 'react'
import {container, sp, pc, content, pcContent, spContent} from './style.module.scss'

import SEO from '../utils/seo'
import Nav from '../organisms/nav'
import Footer from '../organisms/footer'

const Layout = (props) => {
  const currentPath = typeof window !== 'undefined' ? window.location.href : '/top'
  const author = props.author
  const establishYear = props.establishYear
  const title = props.title
  const device = props.device

  const deviceStyle = device === 'desktop' ? pc : sp
  const contentStyle = device === 'desktop' ? `${content} ${pcContent}` : `${content} ${spContent}`

  return <div data-device={device} className={`${container} ${deviceStyle}`}>
    <SEO title={title} />
    <Nav currentPath={currentPath} device={device}/>
    <section className={`${contentStyle}`}>
      {props.children}
      <Footer author={author} establishYear={establishYear} />
    </section>
  </div>
}

export default Layout 