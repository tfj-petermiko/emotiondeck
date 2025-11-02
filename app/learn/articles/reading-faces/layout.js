export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Reading Faces and Hidden Emotions",
  description:
    "Learn how to read human emotion through facial microexpressions. Discover empathy through the science of expression and the psychology of perception.",
  keywords:
    "Paul Ekman, reading faces, microexpressions, empathy, psychology of emotion, body language, nonverbal communication, emotion recognition, facial coding, emotional intelligence, authenticity, perception, human behaviour, awareness",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/reading-faces"
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
    title: "EmotionDeck - Reading Faces and Hidden Emotions",
    description:
      "Discover how to interpret microexpressions and emotional cues. Learn to read truth, fear and empathy on the human face.",
    url: "https://emotiondeck.com/learn/articles/reading-faces",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Reading Faces and Hidden Emotions Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Reading Faces and Hidden Emotions",
    description:
      "Explore the art and science of recognising emotion through facial expressions and subtle cues of authenticity.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
