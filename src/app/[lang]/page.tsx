import { LANGS } from '@/constants/values'
import { ProfileUnit } from '@/organisms/ProfileUnit'

type StaticParams = {
  lang: (typeof LANGS)[number]
}

export const generateStaticParams = async (): Promise<Array<StaticParams>> =>
  LANGS.flatMap((lang) => {
    if (lang === 'en') return [] // `en` is dealt as default path

    return { lang }
  })

const Page = ({ params }: { params: StaticParams }) => <ProfileUnit lang={params.lang} />

export default Page
