import React from 'react'

import style from '../../styles/atoms/top-image/index.module.scss'

type Props = {
  src: string
}

const Component: React.FC<Props> = ({ src }) => {
  return (
    <span>
      <img src={src} className={style.img} />
    </span>
  )
}

export default Component
