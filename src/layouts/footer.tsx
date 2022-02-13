import styles from '../styles/layouts/footer.module.scss'

import SnsList from '../organisms/sns-list'

const Component: React.VFC = () => {
  return (
    <footer>
      <SnsList />
      <div className={styles.credit}>
        <small>© 2022 nasustim.</small>
      </div>
    </footer>
  )
}

export default Component
