import styles from './styles/profileText.module.scss'

export type ProfileTextProps = {
  text: Array<string>
}

const ProfileText: React.FC<ProfileTextProps> = ({text}) => <div className={styles.container}>
  <div className={ styles.textBg }></div>
  <div className={styles.text}>
    { text.map(t => (<p>{ t }</p>)) }
  </div>
</div>

export default ProfileText