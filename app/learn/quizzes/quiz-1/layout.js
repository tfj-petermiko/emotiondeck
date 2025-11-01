export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 1 - Recognise the Emotion (Phase 1)",
  description:
    "Test your skill in recognising human emotions with the EmotionDeck Free Basic Collection - identify expressions from diverse cultures and sharpen your emotional intelligence.",
  keywords:
    "EmotionDeck quiz, emotion recognition, emotional intelligence, facial expressions, AI portraits, cultural emotions, psychology learning, emotion training, empathy practice, Free Basic Collection",
  alternates: {
    canonical: "https://emotiondeck.com/learn/quizzes/quiz-1",
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
    title: "EmotionDeck Quiz 1 - Recognise the Emotion (Phase 1)",
    description:
      "Identify emotions in AI-generated portraits and test your perception with the first EmotionDeck Quiz - explore how emotion is expressed across cultures and faces.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-1",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Quiz 1 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 1 - Recognise the Emotion (Phase 1)",
    description:
      "Challenge your perception with EmotionDeck Quiz 1 - recognise emotions in portraits and discover how people express feelings across cultures.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },

  // 🚫 Prevent indexing
  robots: {
    index: false,
    follow: false,
  },
};

export default function Quiz1Layout({ children }) {
  return <>{children}</>;
}