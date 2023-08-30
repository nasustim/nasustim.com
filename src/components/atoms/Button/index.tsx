import { type FC, type ReactNode } from 'react'

import style from './index.module.scss'

interface Props {
  children: ReactNode
  action: () => void
  buttonName: string
}

const Button: FC<Props> = ({ children, action, buttonName }) => {
  const onClickHalnder = () => {
    action()
  }

  return (
    <button onClick={onClickHalnder} className={style.button} aria-label={`Button-${buttonName}`}>
      {children}
    </button>
  )
}

export default Button
