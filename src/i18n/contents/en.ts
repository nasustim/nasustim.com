import { type I18ncontent } from '@/i18n/type'

export const en: I18ncontent = {
  name: {
    type: 'p',
    value: ['Mitsuhiro Hibino'],
  },
  shortDescription: {
    type: 'p',
    value: [
      'I am a software engineer based in Tokyo, Japan.\nCurrently, I work in the betting division at ',
      {
        type: 'a',
        value: ['MIXI inc'],
        href: new URL('https://mixi.co.jp'),
        areaLabel: 'MIXI inc is a tech company based in Japan, especially famous as a pioneer of social media in Japan',
      },
      ', as a client developer.',
    ],
  },
}
