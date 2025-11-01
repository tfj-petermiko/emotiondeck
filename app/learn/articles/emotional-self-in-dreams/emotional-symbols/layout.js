export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Emotional Symbols in the Unconscious",
  description:
    "Explore how symbols in dreams reflect hidden emotional truths within the unconscious. Discover Jung’s insights into emotion, imagery and integration.",
  keywords:
    "Jungian psychology, dreams, symbols, unconscious, emotion, psyche, interpretation, emotional intelligence, collective unconscious, transformation, archetypes, imagination, meaning, self awareness",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/emotional-self-in-dreams/emotional-symbols"
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
    title: "EmotionDeck - Emotional Symbols in the Unconscious",
    description:
      "Discover how recurring dream symbols express emotional truth and guide self understanding through Jungian insight and awareness.",
    url: "https://emotiondeck.com/learn/articles/emotional-self-in-dreams/emotional-symbols",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Emotional Symbols in the Unconscious Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Emotional Symbols in the Unconscious",
    description:
      "Explore how symbols in dreams reveal emotional truth and psychological balance. A Jungian view of emotion and imagery.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
