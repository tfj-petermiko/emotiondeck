export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow — Discover the Science of Emotion",
  description:
    "Develop your emotional intelligence with EmotionDeck Learn & Grow — explore interactive quizzes, FACS facial analysis, and the AI-powered Emotion Mirror to understand emotion in depth.",
  keywords:
    "EmotionDeck Learn & Grow, emotional intelligence, emotion quizzes, FACS analysis, emotion recognition, emotion learning, psychology education, facial expression analysis, AI emotion tools, emotional awareness",
  alternates: {
    canonical: "https://emotiondeck.com/learn",
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
    title: "EmotionDeck Learn & Grow — Discover the Science of Emotion",
    description:
      "Learn with EmotionDeck — explore quizzes, FACS analysis, and the Emotion Mirror to improve emotional recognition and self-awareness through science and AI.",
    url: "https://emotiondeck.com/learn",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Learn & Grow Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow — Discover the Science of Emotion",
    description:
      "Explore EmotionDeck’s Learn & Grow — interactive quizzes, facial emotion analysis, and AI Emotion Mirror to deepen emotional understanding.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LearnLayout({ children }) {
  return <>{children}</>;
}
