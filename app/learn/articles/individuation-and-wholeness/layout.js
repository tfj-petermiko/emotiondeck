export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck - Articles Individuation and Wholeness",
  description:
    "Explore the Jungian journey toward emotional balance and integration. Learn how awareness unites thought feeling and instinct into one coherent self.",
  keywords:
    "Jungian psychology, individuation, emotional integration, self awareness, personal growth, wholeness, balance, psyche, emotional intelligence, consciousness, inner harmony, depth psychology, self development, emotional maturity",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/individuation-and-wholeness"
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
    title: "EmotionDeck - Individuation and Wholeness",
    description:
      "Discover Jung’s concept of individuation and emotional unity. Learn how awareness transforms conflict into harmony and integration.",
    url: "https://emotiondeck.com/learn/articles/individuation-and-wholeness",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Individuation and Wholeness Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Individuation and Wholeness",
    description:
      "Explore Jungian individuation as the path to emotional unity and self awareness. Learn how balance leads to wholeness.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
