export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Archetypes Within Us",
  description:
    "Discover Jungian archetypes and their emotional significance. Learn how timeless symbols shape feeling behaviour and self understanding across humanity.",
  keywords:
    "Jungian psychology, archetypes, collective unconscious, shadow, individuation, emotional meaning, human psyche, symbolism, emotional growth, personality integration, depth psychology, universal patterns, emotion and identity",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/archetypes-within-us"
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
    title: "EmotionDeck - The Archetypes Within Us",
    description:
      "Explore Jung’s theory of archetypes through emotion and culture. Understand how ancient symbols mirror universal aspects of the human psyche.",
    url: "https://emotiondeck.com/learn/articles/archetypes-within-us",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Archetypes Within Us Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Archetypes Within Us",
    description:
      "Discover Jungian archetypes and emotional depth in EmotionDeck Articles. Explore how symbols express collective patterns of human feeling and identity.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
