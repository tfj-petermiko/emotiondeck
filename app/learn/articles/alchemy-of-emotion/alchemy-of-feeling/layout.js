export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Alchemy of Emotion and Inner Transformation",
  description:
    "Explore how Jungian psychology turns emotion into wisdom. Learn how awareness transforms shadow into light and feeling into self understanding.",
  keywords:
    "Jungian psychology, emotion transformation, self awareness, shadow integration, individuation, emotional intelligence, empathy, consciousness, personal growth, mindfulness, psychology of emotion, inner transformation, emotional balance, emotional healing",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/alchemy-of-emotion/alchemy-of-feeling"
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
    title: "EmotionDeck - Alchemy of Emotion and Inner Transformation",
    description:
      "Discover how emotion transforms into wisdom through Jungian reflection. Understand the alchemy of feeling that turns pain into growth and awareness.",
    url: "https://emotiondeck.com/learn/articles/alchemy-of-emotion/alchemy-of-feeling",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Alchemy of Emotion and Inner Transformation Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Alchemy of Emotion and Inner Transformation",
    description:
      "Learn how emotion becomes wisdom through Jungian reflection and emotional awareness. Explore the journey of transformation and individuation.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
