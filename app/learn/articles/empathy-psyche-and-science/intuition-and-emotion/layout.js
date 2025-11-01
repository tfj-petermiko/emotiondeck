export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Intuition and Emotion",
  description:
    "Explore how intuition and emotion work together to create empathy and understanding through Jungian insight and Ekman’s science.",
  keywords:
    "intuition, empathy, Jungian psychology, Paul Ekman, emotion, perception, microexpressions, awareness, emotional intelligence, psychology, understanding, connection, individuation, emotional awareness",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/empathy-psyche-and-science/intuition-and-emotion"
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
    title: "EmotionDeck - Intuition and Emotion",
    description:
      "Discover how Jung’s intuition and Ekman’s science reveal the emotional foundation of empathy and awareness.",
    url: "https://emotiondeck.com/learn/articles/empathy-psyche-and-science/intuition-and-emotion",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Intuition and Emotion Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Intuition and Emotion",
    description:
      "Explore how intuition meets emotion to create empathy and understanding across the human psyche.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
