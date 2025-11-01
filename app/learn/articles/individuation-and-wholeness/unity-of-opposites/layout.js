export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Unity of Opposites",
  description:
    "Explore Jung’s concept of opposites and discover how emotional conflict transforms into balance, awareness, and psychological wholeness.",
  keywords:
    "Jung, unity of opposites, individuation, shadow, integration, emotional balance, psychology, self awareness, mindfulness, empathy, inner harmony, emotional resilience, consciousness, wholeness, personal growth",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/individuation-and-wholeness/unity-of-opposites"
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
    title: "EmotionDeck - The Unity of Opposites",
    description:
      "Discover how Jungian psychology teaches balance between shadow and light, emotion and reason, leading to integration and self understanding.",
    url: "https://emotiondeck.com/learn/articles/individuation-and-wholeness/unity-of-opposites",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Unity of Opposites Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Unity of Opposites",
    description:
      "Learn how emotional awareness transforms inner conflict into harmony through Jung’s concept of integration and wholeness.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
