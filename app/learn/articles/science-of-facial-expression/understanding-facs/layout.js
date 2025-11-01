export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Understanding the Facial Action Coding System",
  description:
    "Explore Paul Ekman’s Facial Action Coding System and discover how microexpressions reveal universal emotion across cultures.",
  keywords:
    "Paul Ekman, FACS, facial expression, psychology, emotion recognition, microexpressions, empathy, nonverbal communication, neuroscience, authenticity, human behaviour",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/science-of-facial-expression/understanding-facs"
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
    title: "EmotionDeck - Understanding the Facial Action Coding System",
    description:
      "Learn how Paul Ekman’s FACS decodes facial movement to reveal emotion and empathy across humanity.",
    url: "https://emotiondeck.com/learn/articles/science-of-facial-expression/understanding-facs",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Understanding the Facial Action Coding System Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Understanding the Facial Action Coding System",
    description:
      "Explore the science of facial expression and the emotional truth behind every human face.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
