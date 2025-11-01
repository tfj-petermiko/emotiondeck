export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Emotional Self in Dreams",
  description:
    "Discover how dreams express emotion and meaning through the unconscious. Learn how symbols reveal hidden aspects of feeling and personal growth.",
  keywords:
    "Jungian psychology, dreams, symbols, unconscious, emotion, self awareness, shadow, archetypes, dream interpretation, emotional insight, personal growth, psyche, symbolism, subconscious mind, emotional healing",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/emotional-self-in-dreams"
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
    title: "EmotionDeck - The Emotional Self in Dreams",
    description:
      "Explore how dreams reveal emotion through symbols and the unconscious. Understand how the psyche communicates through imagery and feeling.",
    url: "https://emotiondeck.com/learn/articles/emotional-self-in-dreams",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Emotional Self in Dreams Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Emotional Self in Dreams",
    description:
      "Discover how dreams express the emotional language of the unconscious. Learn how symbols mirror hidden feelings and inner transformation.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
