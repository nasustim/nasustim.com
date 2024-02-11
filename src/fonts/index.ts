import { Signika_Negative, Work_Sans } from 'next/font/google'

export const signikaNegative = Signika_Negative({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signika-negative',
})

export const workSans = Work_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})
