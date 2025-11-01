export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Emotion and Culture",
  description:
    "Explore how culture shapes emotional expression and empathy across humanity. Learn how emotion remains universal while expression reflects diversity.",
  keywords:
    "Ekman, culture, emotion, anthropology, psychology, universality, empathy, expression, sociology, emotional intelligence, diversity, communication, global empathy",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/universal-emotions/emotion-and-culture"
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
    title: "EmotionDeck - Emotion and Culture",
    description:
      "Discover how emotional expression reflects cultural diversity and human unity. Explore Ekman’s research on universal emotion and cross-cultural empathy.",
    url: "https://emotiondeck.com/learn/articles/universal-emotions/emotion-and-culture",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Emotion and Culture Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Emotion and Culture",
    description:
      "Explore how emotion unites cultures through empathy and shared human experience. Learn about universality and diversity in emotional expression.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
