import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Section: FC<Props> = ({ children }) => (
  <section className='flex flex-col items-center justify-center w-screen h-svh'>
    <div className='w-[calc(100%_-_48px)] tablet:w-tablet tablet:p-0 desktop:w-[calc(w-desktop_*_0.9)] desktop:p-0'>
      {children}
    </div>
  </section>
)

export default Section
