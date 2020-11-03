import React from 'react'

const Footer = ({ author, establishYear }) => (
  <section>
    <footer>
      <small>
        © {author}, {establishYear} - {new Date().getFullYear()}
      </small>
    </footer>
    <Style />
  </section>
)

export default Footer

const Style = () => (
  <style jsx>{`
    section {
      width: 100%;
      margin: 48px 0 12px;
      footer {
        width: 100%;
        text-align: center;
        font-style: oblique;
      }
    }
  `}</style>
)
