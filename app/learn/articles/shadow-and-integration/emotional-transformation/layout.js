export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Emotional Transformation",
  description:
    "Explore how Jungian psychology transforms emotion into awareness. Learn how reflection, compassion and honesty turn pain into growth and self knowledge.",
  keywords:
    "Jung, emotional transformation, integration, awareness, healing, reflection, compassion, shadow, psychology, mindfulness, empathy, emotional intelligence, creativity, growth, balance",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/shadow-and-integration/emotional-transformation"
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
    title: "EmotionDeck - Emotional Transformation",
    description:
      "Discover how awareness and compassion transform emotion into self knowledge and balance through Jung’s psychology of integration.",
    url: "https://emotiondeck.com/learn/articles/shadow-and-integration/emotional-transformation",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Emotional Transformation Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Emotional Transformation",
    description:
      "Explore Jungian insight into how emotion becomes awareness and inner harmony through reflection, empathy and integration.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
