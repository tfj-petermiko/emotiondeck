export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Quiz 3 - Recognise the Emotion (Young Adults)",
  description:
    "Recognise emotions in black and white portraits of young adults from diverse regions - identify core feelings like Joy, Fear, and Curiosity with EmotionDeck Learn.",
  keywords:
    "EmotionDeck quiz, young adults, emotion recognition, emotional intelligence, facial expressions, psychology education, empathy training, emotion learning, AI portraits, cultural emotions",
  alternates: {
    canonical: "https://emotiondeck.com/learn/quizzes/quiz-3",
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
    title: "EmotionDeck Quiz 3 - Recognise the Emotion (Young Adults)",
    description:
      "Test your perception with EmotionDeck Quiz 3 - identify emotions in expressive portraits of young adults and refine your emotional awareness.",
    url: "https://emotiondeck.com/learn/quizzes/quiz-3",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Quiz 3 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Quiz 3 - Recognise the Emotion (Young Adults)",
    description:
      "Discover how well you recognise emotions in portraits of young adults - continue your learning journey with EmotionDeck Quiz 3.",
    images: ["https://emotiondeck.com/preview.jpg"],
 },

  // 🚫 Prevent indexing
  robots: {
    index: false,
    follow: false,
  },
};

export default function Quiz3Layout({ children }) {
  return <>{children}</>;
}