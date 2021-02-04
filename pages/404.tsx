import Link from 'next/link'

import Meta, { Props as MetaProps } from 'components/common/meta'

import styles from './styles/404.module.scss'

export default function IndexPage() {
  const metaProps: MetaProps = {
    title: 'Page Not Found',
    description: 'This Page is Not Exist.',
    updatedDate: '2021-02-04',
  }

  return (
    <div className={styles.container}>
      <Meta {...metaProps} />
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.text}>
        <Link href={'/'}>Back to Top Page</Link>
      </p>
    </div>
  )
}

//export const config = { amp: true }
