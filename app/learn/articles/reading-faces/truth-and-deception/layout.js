export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Truth and Deception in Expression",
  description:
    "Explore how facial expressions reveal sincerity and hidden emotion through Paul Ekman’s science and Jungian insight into authenticity.",
  keywords:
    "Ekman, microexpressions, psychology, authenticity, emotion, Jung, shadow, empathy, truth, emotional intelligence, perception, communication, sincerity, self awareness",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/reading-faces/truth-and-deception"
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
    title: "EmotionDeck - Truth and Deception in Expression",
    description:
      "Discover how microexpressions reveal authenticity and emotional truth across cultures through Ekman’s research and Jungian understanding.",
    url: "https://emotiondeck.com/learn/articles/reading-faces/truth-and-deception",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Truth and Deception in Expression Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Truth and Deception in Expression",
    description:
      "Learn how subtle facial movements reveal authenticity, empathy and emotional truth through the science of microexpressions.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
