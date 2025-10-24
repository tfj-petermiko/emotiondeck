export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Phase 3 - Young Adults Collection",
  description:
    "Explore 96 expressive portraits of young adults in EmotionDeck Phase 3 - study authentic emotional expressions across diverse faces for education, research, and emotional perception training.",
  keywords:
    "EmotionDeck Phase 3, Young Adults Collection, emotional expressions, emotion recognition, emotional intelligence, psychology learning, facial expressions, empathy development, emotion research, AI portraits",
  alternates: {
    canonical: "https://emotiondeck.com/free/phase-3",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "EmotionDeck Phase 3 - Young Adults Collection",
    description:
      "Discover 96 portraits of young adults expressing nuanced human emotions - expand your understanding of emotional perception with EmotionDeck Phase 3.",
    url: "https://emotiondeck.com/free/phase-3",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Phase 3 Young Adults Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Phase 3 - Young Adults Collection",
    description:
      "Study authentic emotional expressions of young adults with EmotionDeck Phase 3 - a realistic visual resource for education and emotional research.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase3Layout({ children }) {
  return <>{children}</>;
}
