export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Wholeness of Being",
  description:
    "Explore Jung’s view of emotional wholeness and discover how awareness, acceptance, and balance lead to inner harmony and authenticity.",
  keywords:
    "Jung, emotional wholeness, individuation, self development, awareness, shadow, balance, harmony, emotional intelligence, integration, empathy, psychology, self acceptance, authenticity",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/individuation-and-wholeness/wholeness-of-being"
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
    title: "EmotionDeck - The Wholeness of Being",
    description:
      "Discover how Jungian psychology connects emotional awareness and acceptance to create inner balance and self understanding.",
    url: "https://emotiondeck.com/learn/articles/individuation-and-wholeness/wholeness-of-being",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Wholeness of Being Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Wholeness of Being",
    description:
      "Learn how emotional unity and awareness transform the psyche, leading to balance, compassion, and authentic living.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
