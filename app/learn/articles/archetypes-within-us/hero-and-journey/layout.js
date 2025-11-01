export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Hero and The Journey of Emotion",
  description:
    "Explore the Jungian Hero archetype and discover how courage and awareness shape emotional transformation and self discovery.",
  keywords:
    "Jungian psychology, hero archetype, individuation, emotional transformation, courage, self discovery, resilience, emotional intelligence, shadow integration, personal growth",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/archetypes-within-us/hero-and-journey"
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
    title: "EmotionDeck - The Hero and The Journey of Emotion",
    description:
      "Discover how the Jungian Hero archetype reflects the emotional path of transformation, courage and individuation.",
    url: "https://emotiondeck.com/learn/articles/archetypes-within-us/hero-and-journey",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Hero and The Journey of Emotion Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Hero and The Journey of Emotion",
    description:
      "Learn how courage, awareness and emotional reflection shape the Hero’s journey of transformation.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
