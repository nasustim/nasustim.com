import React, { ReactNode } from 'react'

import Button from '../../atoms/Button'
import style from './index.module.scss'

interface Props {
  contentList: Array<{
    action: () => void
    child: ReactNode
  }>
}

const ButtonList: React.FC<Props> = (props) => {
  return (
    <div className={style.buttonlist}>
      {props.contentList.map((v, i) => (
        <Button key={`buttonlist--button--${i}`} action={v.action}>
          {v.child}
        </Button>
      ))}
    </div>
  )
}

export default ButtonList
