export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Truth in Communication",
  description:
    "Explore how emotion reveals truth beyond words. Learn how empathy, awareness and authenticity create meaningful human communication.",
  keywords:
    "truth, communication, emotion, empathy, authenticity, Jungian psychology, Ekman, emotional intelligence, nonverbal cues, awareness, honesty, listening, human connection",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/truth-and-emotion/truth-in-communication"
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
    title: "EmotionDeck - Truth in Communication",
    description:
      "Discover how emotion expresses truth beyond language. Learn how awareness and empathy create authentic human understanding.",
    url: "https://emotiondeck.com/learn/articles/truth-and-emotion/truth-in-communication",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Truth in Communication Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Truth in Communication",
    description:
      "Learn how emotional awareness reveals truth and creates empathy in communication.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
