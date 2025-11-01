export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Shadow in Dreams",
  description:
    "Explore Jung’s insight into how dreams reveal hidden emotions and guide shadow integration through awareness and reflection.",
  keywords:
    "Jungian psychology, dreams, shadow, unconscious, emotional healing, self awareness, integration, individuation, dream symbols, emotional intelligence, transformation, psyche, empathy, analysis",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/emotional-self-in-dreams/shadow-in-dreams"
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
    title: "EmotionDeck - The Shadow in Dreams",
    description:
      "Discover how dreams reveal the hidden emotions of the shadow and how awareness transforms fear into understanding and wholeness.",
    url: "https://emotiondeck.com/learn/articles/emotional-self-in-dreams/shadow-in-dreams",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Shadow in Dreams Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Shadow in Dreams",
    description:
      "Explore Jung’s vision of the shadow in dreams and learn how awareness turns darkness into understanding and emotional integration.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
