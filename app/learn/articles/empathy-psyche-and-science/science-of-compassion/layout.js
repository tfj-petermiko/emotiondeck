export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Science of Compassion",
  description:
    "Explore how empathy and neuroscience reveal the biological roots of compassion and emotional connection within the human psyche.",
  keywords:
    "Jungian psychology, Paul Ekman, compassion, empathy, neuroscience, psychology, emotional intelligence, emotion regulation, awareness, connection, self understanding, human behaviour, psyche, empathy research",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/empathy-psyche-and-science/science-of-compassion"
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
    title: "EmotionDeck - The Science of Compassion",
    description:
      "Discover how empathy and neuroscience connect feeling and reason through the biology of compassion and emotional awareness.",
    url: "https://emotiondeck.com/learn/articles/empathy-psyche-and-science/science-of-compassion",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Science of Compassion Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Science of Compassion",
    description:
      "Learn how empathy and neuroscience reveal the biological roots of compassion, uniting emotion and awareness.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
