export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Bridge of Empathy",
  description:
    "Explore how empathy connects Jung’s symbolic psychology with Ekman’s scientific research, uniting feeling and reason through awareness.",
  keywords:
    "Jungian psychology, Paul Ekman, empathy, emotional intelligence, psychology, science of emotion, individuation, emotional awareness, compassion, human connection, understanding, reflection, self awareness, psyche",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/empathy-psyche-and-science/bridge-of-empathy"
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
    title: "EmotionDeck - The Bridge of Empathy",
    description:
      "Discover how empathy bridges Jung’s symbolism and Ekman’s science, transforming emotional understanding into awareness and unity.",
    url: "https://emotiondeck.com/learn/articles/empathy-psyche-and-science/bridge-of-empathy",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Bridge of Empathy Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Bridge of Empathy",
    description:
      "Learn how empathy connects Jung’s intuitive psychology with Ekman’s emotional science, uniting feeling and reason.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
