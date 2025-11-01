export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Global Empathy",
  description:
    "Explore how empathy unites humanity through the shared language of emotion. Learn how awareness transforms connection across cultures and borders.",
  keywords:
    "empathy, emotion, humanity, psychology, culture, compassion, Ekman, connection, global awareness, emotional intelligence, communication, anthropology, universality, understanding",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/universal-emotions/global-empathy"
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
    title: "EmotionDeck - Global Empathy",
    description:
      "Discover how empathy connects people across cultures and transforms awareness into understanding. Explore the universal bridge of human emotion.",
    url: "https://emotiondeck.com/learn/articles/universal-emotions/global-empathy",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Global Empathy Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Global Empathy",
    description:
      "Learn how empathy and emotional awareness unite people beyond borders and cultures through shared human experience.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
