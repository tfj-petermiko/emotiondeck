export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Alchemy of Emotion",
  description:
    "Explore the transformation of emotion through Jungian insight and modern science. Learn how awareness turns pain into growth and shadow into light.",
  keywords:
    "Jungian psychology, Paul Ekman, emotion transformation, self awareness, emotional healing, shadow integration, emotional intelligence, consciousness, empathy, psychology of emotion, personal growth, emotional balance, inner harmony",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/alchemy-of-emotion"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" }
    ]
  },
  openGraph: {
    title: "EmotionDeck - The Alchemy of Emotion",
    description:
      "Discover how emotional struggle transforms into awareness and strength. Explore Jungian and scientific views on emotional alchemy and healing.",
    url: "https://emotiondeck.com/learn/articles/alchemy-of-emotion",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Alchemy of Emotion Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Alchemy of Emotion",
    description:
      "Explore emotional transformation through Jung’s symbolism and Ekman’s science. Learn how awareness turns shadow into light.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
