import { type FC, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => (
  <div className='bg-white'>
    <section className='flex flex-col items-center justify-center w-screen h-svh'>
      <div className='w-[calc(100%_-_48px)] tablet:w-tablet tablet:p-0 desktop:w-[calc(w-desktop_*_0.9)] desktop:p-0'>
        {children}
      </div>
    </section>
  </div>
)
