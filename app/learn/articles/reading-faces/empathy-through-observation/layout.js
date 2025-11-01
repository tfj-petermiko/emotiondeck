export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Empathy Through Observation",
  description:
    "Discover how seeing emotion with awareness transforms perception into empathy. Explore Jungian reflection and Ekman’s science of expression.",
  keywords:
    "empathy, observation, emotion, Jung, Ekman, awareness, compassion, psychology, perception, communication, emotional intelligence, human connection, mindfulness, emotional understanding",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/reading-faces/empathy-through-observation"
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
    title: "EmotionDeck - Empathy Through Observation",
    description:
      "Learn how observation deepens emotional awareness and builds authentic connection through the fusion of psychology, empathy and science.",
    url: "https://emotiondeck.com/learn/articles/reading-faces/empathy-through-observation",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Empathy Through Observation Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Empathy Through Observation",
    description:
      "Explore how seeing emotion with presence transforms perception into empathy and understanding across cultures.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
