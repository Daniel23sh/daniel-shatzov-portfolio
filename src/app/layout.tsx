import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";

import { PortfolioBackground } from "@/components/portfolio-background/PortfolioBackground";
import { getSiteOrigin, siteMetadata } from "@/content/site-metadata";
import { siteConfig } from "@/content/portfolio";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

const siteOrigin = getSiteOrigin();
const socialImageUrl = siteOrigin
  ? new URL(siteMetadata.socialImage.path, siteOrigin)
  : undefined;

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: siteOrigin } : {}),
  title: siteMetadata.title,
  description: siteMetadata.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
    locale: siteMetadata.locale,
    ...(siteOrigin ? { url: siteOrigin } : {}),
    ...(socialImageUrl
      ? {
          images: [
            {
              url: socialImageUrl,
              width: siteMetadata.socialImage.width,
              height: siteMetadata.socialImage.height,
              type: siteMetadata.socialImage.type,
              alt: siteMetadata.socialImage.alt,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    ...(socialImageUrl
      ? {
          images: [
            {
              url: socialImageUrl,
              alt: siteMetadata.socialImage.alt,
            },
          ],
        }
      : {}),
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description:
    "Full-Stack Developer and Computer Science student at Holon Institute of Technology, with expected graduation in August 2026.",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Holon Institute of Technology",
  },
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${inter.variable} ${ebGaramond.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <PortfolioBackground />
        <div className="site-content">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
