export const siteMetadata = {
  title: "Daniel Shatzov — Full-Stack Developer",
  description:
    "Portfolio of Daniel Shatzov, a computer science graduate and full-stack developer building thoughtful AI-powered products and practical web applications.",
  language: "en",
  locale: "en_US",
  socialImage: {
    path: "/images/social/daniel-shatzov-og.png",
    width: 1200,
    height: 631,
    type: "image/png",
    alt: "Daniel Shatzov — Full-Stack Developer portfolio",
  },
} as const;

export function getSiteOrigin(): URL | undefined {
  const configuredOrigin = process.env.SITE_URL?.trim();

  if (!configuredOrigin) {
    return undefined;
  }

  try {
    const origin = new URL(configuredOrigin);

    return origin.protocol === "https:" ? origin : undefined;
  } catch {
    return undefined;
  }
}
