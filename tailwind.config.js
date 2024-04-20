const tabletWidth = '500px'
const desktopWidth = '1024px'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)'],
        heading: ['var(--font-inter)'],
      },
      width: {
        tablet: tabletWidth,
        desktop: desktopWidth,
      },
    },
    colors: {
      white: '#ffffff',
      primary: {
        DEFAULT: 'rgb(5 5 33)',
        sub: 'rgb(28 28 48)',
      },
      indigo: 'rgb(63 0 255)',
      sky: 'rgb(95 158 160)',
    },
    screens: {
      tablet: tabletWidth,
      desktop: desktopWidth,
    },
  },
  plugins: [],
}
