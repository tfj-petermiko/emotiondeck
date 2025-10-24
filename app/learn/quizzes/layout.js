export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow - Emotion Recognition Quizzes",
  description:
    "Test and improve your emotional intelligence with EmotionDeck’s interactive quizzes - identify emotions from portraits and explore cultural differences in emotional expression.",
  keywords:
    "EmotionDeck quizzes, emotion recognition, emotional intelligence, AI portraits, psychology education, emotion training, facial expression learning, cultural emotion study, empathy development, interactive learning",
  alternates: {
    canonical: "https://emotiondeck.com/learn/quizzes",
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
    title: "EmotionDeck Learn & Grow - Emotion Recognition Quizzes",
    description:
      "Sharpen your emotional perception with EmotionDeck quizzes - recognise emotions through expressive portraits and discover how feelings connect across cultures.",
    url: "https://emotiondeck.com/learn/quizzes",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Emotion Recognition Quizzes Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow - Emotion Recognition Quizzes",
    description:
      "Challenge yourself with EmotionDeck’s interactive quizzes - test your ability to recognise and interpret emotions through AI-generated portraits.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LearnQuizzesLayout({ children }) {
  return <>{children}</>;
}
