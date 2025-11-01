export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Integration and Healing",
  description:
    "Discover how Jungian psychology transforms emotional pain into awareness and balance through the process of integration and compassion.",
  keywords:
    "Jung, integration, awareness, healing, transformation, emotional growth, compassion, shadow, mindfulness, empathy, psychology, wholeness, balance, acceptance",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/shadow-and-integration/integration-and-healing"
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
    title: "EmotionDeck - Integration and Healing",
    description:
      "Explore Jung’s vision of transformation through emotional awareness and shadow integration, uniting darkness and light into wholeness.",
    url: "https://emotiondeck.com/learn/articles/shadow-and-integration/integration-and-healing",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Integration and Healing Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Integration and Healing",
    description:
      "Learn how awareness and acceptance transform emotional darkness into healing, balance, and inner peace.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
