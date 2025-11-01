export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 2 - Recognise the Emotion (Phase 2)",
  description:
    "Refine your emotional intuition with EmotionDeck Quiz 2 - recognise advanced emotions like Anxiety, Nostalgia, and Confidence across diverse faces, ages, and cultures.",
  keywords:
    "EmotionDeck quiz, advanced emotions, emotion recognition, facial expressions, emotional intelligence, psychology learning, cross-cultural emotion, empathy training, emotion awareness, AI portraits",
  alternates: {
    canonical: "https://emotiondeck.com/learn/quizzes/quiz-2",
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
    title: "EmotionDeck Quiz 2 - Recognise the Emotion (Phase 2)",
    description:
      "Challenge your perception with EmotionDeck Quiz 2 - explore subtle emotional expressions and recognise complex feelings across cultures.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-2",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Quiz 2 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 2 - Recognise the Emotion (Phase 2)",
    description:
      "Explore advanced human emotions in EmotionDeck Quiz 2 - identify subtle expressions like Tranquillity, Nostalgia, and Confidence across cultures.",
    images: ["https://emotiondeck.com/preview.jpg"],
 },

  // 🚫 Prevent indexing
  robots: {
    index: false,
    follow: false,
  },
};

export default function Quiz22Layout({ children }) {
  return <>{children}</>;
}