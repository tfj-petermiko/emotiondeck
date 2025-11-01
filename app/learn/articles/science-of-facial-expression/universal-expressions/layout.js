export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Universal Expressions of Emotion",
  description:
    "Discover how emotion transcends language and culture, revealing a shared human language of the face through Ekman’s research on universal expression.",
  keywords:
    "Ekman, universal emotion, facial expression, anthropology, psychology, empathy, neuroscience, emotion recognition, communication, culture, human connection, emotional intelligence",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/science-of-facial-expression/universal-expressions"
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
    title: "EmotionDeck - Universal Expressions of Emotion",
    description:
      "Explore how human emotion speaks a universal visual language across every culture, based on Paul Ekman’s cross-cultural research.",
    url: "https://emotiondeck.com/learn/articles/science-of-facial-expression/universal-expressions",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Universal Expressions of Emotion Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Universal Expressions of Emotion",
    description:
      "Discover the universal language of the human face and how emotion connects us beyond words.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
