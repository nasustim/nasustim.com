import { SITE_DOMAIN, SITE_TITLE } from "@/config";
import type { Metadata } from "next";
import type { FC } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

const Page: FC<Props> = () => <div>🚧 Under Construction 🚧</div>;
export default Page;

/**
 * Following contents were exists on past portfolio page
 * ToDo: remake following contents
 */
export function generateStaticParams() {
  return [
    "slash-module-slash-whom",
    "shokei-no-kagami",
    "aster-as-code",
    "dj",
    "from-gifu-to-word",
    "morning-square",
    "nxpc-32",
    "nxps-43",
    "oton-glass",
    "iamasonic-2019",
  ].map((slug) => ({ slug }));
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;

  return {
    title: `${slug} - ${SITE_TITLE}`,
    alternates: {
      canonical: `${SITE_DOMAIN}/works/${slug}`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
};
