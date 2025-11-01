export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Shadow of The Creator",
  description:
    "Explore how perfectionism and self doubt shape the Creator archetype. Learn how awareness restores authenticity and emotional freedom through creative balance.",
  keywords:
    "Jungian psychology, creator archetype, perfectionism, emotional balance, self awareness, shadow work, creativity, mindfulness, individuation, self expression, healing, emotional intelligence",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/archetypes-within-us/shadow-of-creator"
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
    title: "EmotionDeck - The Shadow of The Creator",
    description:
      "Discover how perfectionism and self doubt transform creativity into awareness. Learn the Jungian path to emotional authenticity and artistic freedom.",
    url: "https://emotiondeck.com/learn/articles/archetypes-within-us/shadow-of-creator",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Shadow of The Creator Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Shadow of The Creator",
    description:
      "Explore how perfectionism and self doubt shape creativity. Learn how awareness restores emotional authenticity and balance.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
