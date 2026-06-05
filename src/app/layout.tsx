import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SEO, SITE_DOMAIN, SITE_TITLE } from "@/config";
import { GoogleAnalyticsContainer } from "@/feature/google-analytics";
import { DefaultLayout } from "@/layout";
import { fontReferenses } from "@/style/fonts";

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={fontReferenses.default}>
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
      <GoogleAnalyticsContainer />
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
