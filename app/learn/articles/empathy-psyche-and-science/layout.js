export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Empathy Psyche and Science",
  description:
    "Explore empathy as the bridge between intuition and research. Learn how Jung’s depth psychology and Ekman’s science reveal the emotional core of understanding.",
  keywords:
    "empathy, Jungian psychology, Paul Ekman, emotional science, depth psychology, emotion recognition, self awareness, compassion, human connection, psyche, emotional understanding, psychology of empathy, emotional communication, emotion and reason",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/empathy-psyche-and-science"
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
    title: "EmotionDeck - Empathy Psyche and Science",
    description:
      "Discover how empathy unites Jung’s symbolic understanding of the psyche with Ekman’s scientific study of emotion. Explore feeling as the foundation of connection.",
    url: "https://emotiondeck.com/learn/articles/empathy-psyche-and-science",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Empathy Psyche and Science Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Empathy Psyche and Science",
    description:
      "Explore empathy through the meeting of Jung’s psychology and Ekman’s science. Learn how feeling bridges intuition and understanding.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
