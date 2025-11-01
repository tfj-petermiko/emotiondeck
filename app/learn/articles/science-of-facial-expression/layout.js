export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Science of Facial Expression",
  description:
    "Discover the science behind human facial expression through Ekman’s research. Learn how emotions are expressed and recognised across cultures.",
  keywords:
    "Paul Ekman, Facial Action Coding System, FACS, emotional expression, psychology, emotion recognition, facial analysis, nonverbal behaviour, universal emotions, human expression, empathy, emotional science, facial muscles, Ekman research",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/science-of-facial-expression"
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
    title: "EmotionDeck - The Science of Facial Expression",
    description:
      "Explore how facial muscles reveal emotion through Ekman’s Facial Action Coding System. Learn the universal language of human feeling.",
    url: "https://emotiondeck.com/learn/articles/science-of-facial-expression",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Science of Facial Expression Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Science of Facial Expression",
    description:
      "Learn how emotions are expressed through facial movements and microexpressions. Explore the scientific basis of human emotion with Ekman’s FACS.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
