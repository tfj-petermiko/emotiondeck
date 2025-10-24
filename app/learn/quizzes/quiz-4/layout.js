export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 4 - Global Emotional Spectrum",
  description:
    "Explore 120 emotions across 10 global categories with EmotionDeck Quiz 4 - recognise feelings through realistic portraits that reveal humanity’s shared emotional depth.",
  keywords:
    "EmotionDeck quiz, global emotional spectrum, 120 emotions, emotional intelligence, cross-cultural emotion, facial expression training, psychology learning, empathy development, AI portraits, emotion recognition",
  alternates: {
    canonical: "https://emotiondeck.com/learn/quizzes/quiz-4",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "EmotionDeck Quiz 4 - Global Emotional Spectrum",
    description:
      "Discover 120 emotions across 10 categories in the ultimate EmotionDeck quiz - explore how culture, age, and gender shape emotional expression worldwide.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-4",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Quiz 4 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 4 - Global Emotional Spectrum",
    description:
      "Train your perception with EmotionDeck Quiz 4 - recognise 120 emotions across 10 categories and discover emotional diversity around the world.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Quiz4Layout({ children }) {
  return <>{children}</>;
}
