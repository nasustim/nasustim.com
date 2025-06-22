import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { clsx } from "clsx";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GA_MEASUREMENT_ID, SEO, SITE_DOMAIN, SITE_TITLE } from "@/config";
import { fontClassNames } from "@/fonts";
import { DefaultLayout } from "@/layout";

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={clsx(...fontClassNames)}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={`${SITE_DOMAIN}/static/favicon-48x48.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${SITE_DOMAIN}/static/favicon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="152x152"
          href={`${SITE_DOMAIN}/static/favicon-512x512.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${SITE_DOMAIN}/static/apple-touch-icon.png`}
        />
      </head>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}

export default RootLayout;

const url = `${SITE_DOMAIN}/`;

export const metadata: Metadata = {
  title: `${SITE_TITLE}`,
  alternates: {
    canonical: url,
  },
  description: SEO.description,
  openGraph: {
    title: SITE_TITLE,
    description: SEO.description,
    url: url,
    type: "website",
    locale: "en_US",
    siteName: SITE_TITLE,
    countryName: "Japan",
  },
  twitter: {
    creatorId: "@nasustim",
    card: "summary",
  },
};
