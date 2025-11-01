export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Language of the Face",
  description:
    "Explore how facial expressions reveal emotion and truth through subtle movement, psychology and empathy.",
  keywords:
    "Ekman, facial expression, emotion, psychology, perception, empathy, communication, nonverbal, body language, self awareness, authenticity, Jungian psychology, emotional intelligence",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/reading-faces/language-of-the-face"
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
    title: "EmotionDeck - The Language of the Face",
    description:
      "Discover how the face expresses emotion and authenticity through psychology, empathy and human connection.",
    url: "https://emotiondeck.com/learn/articles/reading-faces/language-of-the-face",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Language of the Face Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Language of the Face",
    description:
      "Learn how subtle facial movements reveal emotion, empathy and truth through the universal language of expression.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
