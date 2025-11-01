export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Universal Emotions and Culture",
  description:
    "Explore how emotion connects humanity across all cultures. Learn about Ekman’s research on universal facial expressions and global empathy.",
  keywords:
    "Paul Ekman, universal emotions, culture, empathy, facial expression, anthropology, psychology, human behaviour, global emotion, emotion recognition, communication, cultural diversity, emotional science, human connection",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/universal-emotions"
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
    title: "EmotionDeck - Universal Emotions and Culture",
    description:
      "Discover the shared language of emotion through Ekman’s studies. Learn how feeling connects people beyond borders and traditions.",
    url: "https://emotiondeck.com/learn/articles/universal-emotions",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Universal Emotions Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Universal Emotions and Culture",
    description:
      "Explore how emotion unites humanity through science and empathy. Discover the universality of facial expression across cultures.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
