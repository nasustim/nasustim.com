import React from 'react'

import { container, footer } from './style.module.scss'

const Footer = ({author, establishYear}) =>
  <section className={container}>
    <footer className={footer}>
      <small>© {author}, {establishYear} -</small>
    </footer>
  </section>

export default Footer