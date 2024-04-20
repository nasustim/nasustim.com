import { joinStr } from '@/util/string'
import { type FC, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => (
  <div className='bg-white'>
    <section className='flex flex-col items-center justify-center w-screen h-svh'>
      <div
        className={joinStr(
          'w-4/5 p-3', // mobile
          'tablet:w-tablet tablet:p-0', // tablet
          'desktop:w-tablet desktop:p-0', // desktop
        )}>
        {children}
      </div>
    </section>
  </div>
)
