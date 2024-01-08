import { Metadata } from 'next'
import { SITE_DOMAIN, SITE_TITLE } from '@/constants/values'
import Layout from '@/components/templates/works'

type Props = {
  slug: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Page({ params }: { params: Props }) {
  return (
    <Layout>
      <div>🚧 Under Construction 🚧</div>
    </Layout>
  )
}

/**
 * Following contents were exists on past portfolio page
 * ToDo: remake following contents
 */
export function generateStaticParams() {
  return [
    'slash-module-slash-whom',
    'shokei-no-kagami',
    'aster-as-code',
    'dj',
    'from-gifu-to-word',
    'morning-square',
    'nxpc-32',
    'nxps-43',
    'oton-glass',
    'iamasonic-2019',
  ].map((slug) => ({ slug }))
}

export default Page

export async function generateMetadata({ params }: { params: Props }): Promise<Metadata> {
  const slug = params.slug

  return {
    title: `${slug} - ${SITE_TITLE}`,
    alternates: {
      canonical: `${SITE_DOMAIN}/works/${slug}`,
    },
    robots: {
      index: false,
      follow: false,
    },
  }
}
