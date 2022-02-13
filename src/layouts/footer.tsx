import styles from '../styles/layouts/footer.module.scss'

const Component: React.VFC = () => {
  return (
    <footer>
      <div className={styles.credit}>
        <small>© 2022 nasustim.</small>
      </div>
    </footer>
  )
}

export default Component
