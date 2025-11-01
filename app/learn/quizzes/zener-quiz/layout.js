export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Zener Quiz - Test Your Intuition and Perception",
  description:
    "Try the classic Zener Card test on EmotionDeck. Strengthen your intuition, measure your perception, and explore the science of extrasensory insight through 25 guided rounds.",
  keywords:
    "EmotionDeck Zener Quiz, Zener cards, intuition test, perception training, ESP test, psychology quiz, emotion learning, extrasensory perception, intuition science, mind focus exercise",
  alternates: {
    canonical: "https://emotiondeck.com/learn/quizzes/zener-quiz",
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
    title: "EmotionDeck Zener Quiz - Test Your Intuition and Perception",
    description:
      "Discover how intuitive you are with the EmotionDeck Zener Quiz. Play 25 rounds inspired by classic ESP research and explore the science of human perception.",
    url: "https://emotiondeck.com/learn/quizzes/zener-quiz", 
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview/zener-quiz.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Zener Quiz Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Zener Quiz - Test Your Intuition and Perception",
    description:
      "Challenge your intuition with the EmotionDeck Zener Quiz – 25 interactive rounds exploring extrasensory perception and intuitive focus.",
    images: ["https://emotiondeck.com/preview/zener-quiz.jpg"],
  },
};

export default function ZenerLayout({ children }) {
  return <>{children}</>;
}
