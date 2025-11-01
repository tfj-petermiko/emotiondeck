export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Emotional Transformation and Inner Balance",
  description:
    "Explore how emotional awareness turns struggle into growth. Learn how Jungian reflection transforms pain into wisdom and restores balance within the self.",
  keywords:
    "Jungian psychology, emotional transformation, emotional intelligence, self awareness, mindfulness, shadow integration, empathy, resilience, consciousness, personal growth, reflection, inner peace, individuation",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/alchemy-of-emotion/emotional-transformation"
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
    title: "EmotionDeck - Emotional Transformation and Inner Balance",
    description:
      "Discover how emotional awareness transforms struggle into understanding. Explore how Jungian psychology connects reflection, growth and emotional balance.",
    url: "https://emotiondeck.com/learn/articles/alchemy-of-emotion/emotional-transformation",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Emotional Transformation and Inner Balance Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Emotional Transformation and Inner Balance",
    description:
      "Learn how emotion becomes wisdom through Jungian reflection and awareness. Explore emotional growth, integration and inner peace.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
