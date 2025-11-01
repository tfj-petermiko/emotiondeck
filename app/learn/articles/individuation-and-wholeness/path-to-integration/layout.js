export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Path to Integration",
  description:
    "Explore Jung’s concept of individuation and learn how emotional awareness unites thought and feeling into balance and harmony.",
  keywords:
    "Jung, individuation, integration, emotional awareness, self development, balance, shadow, wholeness, psychology, reflection, emotional growth, harmony, empathy, self understanding",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/individuation-and-wholeness/path-to-integration"
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
    title: "EmotionDeck - The Path to Integration",
    description:
      "Discover Jung’s idea of individuation as the process of integrating all parts of the self into balance and emotional wholeness.",
    url: "https://emotiondeck.com/learn/articles/individuation-and-wholeness/path-to-integration",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Path to Integration Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Path to Integration",
    description:
      "Learn how self awareness transforms conflict into balance through Jung’s concept of individuation and emotional unity.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
