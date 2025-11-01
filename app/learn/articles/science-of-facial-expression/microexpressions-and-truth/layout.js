export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Microexpressions and Emotional Truth",
  description:
    "Discover how fleeting facial movements reveal hidden emotion and authenticity in human communication through the science of microexpressions.",
  keywords:
    "Ekman, microexpressions, facial expression, psychology, communication, empathy, emotion, awareness, authenticity, neuroscience, emotional intelligence, body language, mindfulness",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/science-of-facial-expression/microexpressions-and-truth"
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
    title: "EmotionDeck - Microexpressions and Emotional Truth",
    description:
      "Explore the hidden language of microexpressions and how they reveal emotional truth and authenticity within human interaction.",
    url: "https://emotiondeck.com/learn/articles/science-of-facial-expression/microexpressions-and-truth",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Microexpressions and Emotional Truth Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Microexpressions and Emotional Truth",
    description:
      "Learn how microexpressions reveal hidden emotion and strengthen empathy through the universal science of facial expression.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
