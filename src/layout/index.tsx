import { joinStr } from '@/util/string'
import { type FC, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => (
  <div className='bg-white relative w-screen h-svh'>
    <section className='absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-svh z-50'>
      <div
        className={joinStr(
          'w-4/5 p-3', // mobile
          'tablet:w-tablet tablet:p-0', // tablet
          'desktop:w-tablet desktop:p-0', // desktop
        )}
      >
        {children}
      </div>
    </section>
    <section className='fixed top-0 left-0 w-screen h-screen z-10 overflow-hidden'>
      {/* append here if want to set background component */}
    </section>
  </div>
)
