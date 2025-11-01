export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Shared Language of Feeling",
  description:
    "Explore how universal facial expressions reveal emotion across cultures. Discover Ekman’s research and the shared emotional language of humanity.",
  keywords:
    "Ekman, universal emotion, empathy, psychology, facial expression, emotional intelligence, global empathy, anthropology, communication, shared humanity, awareness, connection",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/universal-emotions/shared-language-of-feeling"
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
    title: "EmotionDeck - The Shared Language of Feeling",
    description:
      "Discover how emotion connects humanity through universal facial expressions and shared empathy. Learn from Ekman’s studies on emotional universality.",
    url: "https://emotiondeck.com/learn/articles/universal-emotions/shared-language-of-feeling",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Shared Language of Feeling Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Shared Language of Feeling",
    description:
      "Explore Ekman’s research on universal emotion and how facial expression reveals empathy across all cultures.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
