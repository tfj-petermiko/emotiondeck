export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Understanding the Shadow",
  description:
    "Discover Jung’s concept of the shadow and learn how emotional awareness transforms rejection into acceptance and balance.",
  keywords:
    "Jung, shadow, integration, unconscious, self awareness, psychology, emotion, empathy, individuation, authenticity, compassion, mindfulness, projection, healing, self acceptance",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/shadow-and-integration/understanding-the-shadow"
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
    title: "EmotionDeck - Understanding the Shadow",
    description:
      "Explore Jung’s idea of the shadow as the unconscious self awaiting awareness, empathy, and transformation through emotional understanding.",
    url: "https://emotiondeck.com/learn/articles/shadow-and-integration/understanding-the-shadow",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Understanding the Shadow Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Understanding the Shadow",
    description:
      "Learn how facing the hidden self leads to compassion, awareness, and inner wholeness through Jung’s theory of the shadow.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
