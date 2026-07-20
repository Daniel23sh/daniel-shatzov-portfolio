import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";

import { PortfolioBackground } from "@/components/portfolio-background/PortfolioBackground";
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

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.supportingText,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body>
        <PortfolioBackground />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
