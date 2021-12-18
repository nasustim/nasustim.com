import styles from './styles/footer.module.scss'

const Footer = () => {
  const startYear = 2010
  const currentYear = new Date().getFullYear()
  const copyrightText = `© ${startYear} - ${currentYear}, Mitsuhiro Hibino`

  return (
    <footer className={styles.container}>
      <small className={styles.text}>{copyrightText}</small>
    </footer>
  )
}

export default Footer
