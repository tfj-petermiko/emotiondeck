export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Truth and Emotion",
  description:
    "Explore the psychology of truth and hidden emotion through facial cues and empathy. Learn how authenticity reveals the inner state of the human psyche.",
  keywords:
    "Paul Ekman, truth, emotion, authenticity, microexpressions, psychology, empathy, communication, facial cues, self awareness, honesty, emotional intelligence, human behaviour, sincerity",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/truth-and-emotion"
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
    title: "EmotionDeck - Truth and Emotion",
    description:
      "Discover how hidden emotions reveal authenticity and deception. Learn to recognise truth through empathy and nonverbal cues.",
    url: "https://emotiondeck.com/learn/articles/truth-and-emotion",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDec - Truth and Emotion Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Truth and Emotion",
    description:
      "Explore emotional honesty and microexpressions through science and psychology. Understand how authenticity connects people.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
