export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Hidden Emotions and the Face",
  description:
    "Discover how microexpressions reveal suppressed truth and emotion. Learn how Ekman’s research connects awareness, empathy and the science of hidden feeling.",
  keywords:
    "Ekman, microexpressions, hidden emotions, psychology, empathy, awareness, facial cues, authenticity, truth, Jungian psychology, emotion recognition, shadow, communication, emotional intelligence",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/truth-and-emotion/hidden-emotions"
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
    title: "EmotionDeck - Hidden Emotions and the Face",
    description:
      "Explore how microexpressions reveal concealed emotions and emotional truth. Learn how empathy and awareness transform perception into understanding.",
    url: "https://emotiondeck.com/learn/articles/truth-and-emotion/hidden-emotions",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Hidden Emotions and the Face Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Hidden Emotions and the Face",
    description:
      "Learn how Ekman’s microexpression research reveals hidden emotions and strengthens empathy and awareness.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
