import styles from './styles/outlineProfile.module.scss'

import Link from 'next/link'

import Social from './social'

export type ProfileTextProps = {
  text: Array<string>
}

const outlineProfile: React.FC<ProfileTextProps> = ({ text }) => (
  <div className={styles.container}>
    <div className={styles.textBg}></div>
    <div className={styles.text}>
      {text.map((t, idx) => (
        <h1 key={`${t}-${idx}`}>{t}</h1>
      ))}
      <p>
        <Link href={`/about-me`}>
          <span>{`About Me`}</span>
        </Link>
      </p>
      <Social />
    </div>
  </div>
)

export default outlineProfile
