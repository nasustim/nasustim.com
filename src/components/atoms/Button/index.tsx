import { type FC, type ReactNode } from 'react'

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
    <button
      onClick={onClickHalnder}
      className='p-0 outline-none bg-transparent cursor-pointer appearance-none'
      aria-label={`Button-${buttonName}`}>
      {children}
    </button>
  )
}

export default Button
