import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const fontClassNames = [inter.variable]
